require 'posix/spawn'

module Jekyll
  module LastModFilter
    def data_file_last_mod(input, format)
      w = Worker.new "_data/#{input}", format, @context.registers[:site].source
      w.render
	  end

    class Worker
      # from https://github.com/gjtorikian/jekyll-last-modified-at/blob/master/lib/jekyll-last-modified-at/

      def initialize(data_path, format, site_source)
        @data_path   = data_path
        @format      = format.empty? ? '%d %B %Y' : format.strip
        @site_source = site_source
      end

      def render
        last_modified_at_time.strftime(@format)
      end
      
      def git
        Git.new(@site_source)
      end

      def last_modified_at_time
        Time.at(last_modified_at_unix.to_i)
      end
      
      def last_modified_at_unix
        if git.git_repo?
          last_commit_date = Executor.sh(
            'git',
            '--git-dir',
            git.top_level_directory,
            'log',
            '-n',
            '1',
            '--format="%ct"',
            '--',
            relative_path_from_git_dir
          )[/\d+/]
          # last_commit_date can be nil iff the file was not committed.
          last_commit_date.nil? || last_commit_date.empty? ? mtime(absolute_data_path) : last_commit_date
        else
          mtime(absolute_data_path)
        end
      end

      private

      def absolute_data_path
        @absolute_data_path ||= Jekyll.sanitized_path(@site_source, @data_path)
      end

      def relative_path_from_git_dir
        return nil unless git.git_repo?

        @relative_path_from_git_dir ||= Pathname.new(absolute_data_path)
                                                .relative_path_from(
                                                  Pathname.new(File.dirname(git.top_level_directory))
                                                ).to_s
      end

      def mtime(file)
        File.mtime(file).to_i.to_s
      end
  
      class Git
        attr_reader :site_source

        def initialize(site_source)
          @site_source = site_source
          @is_git_repo = nil
        end

        def top_level_directory
          return nil unless git_repo?

          @top_level_directory ||= begin
            Dir.chdir(@site_source) do
              @top_level_directory = File.join(Executor.sh('git', 'rev-parse', '--show-toplevel'), '.git')
            end
            rescue StandardError
            ''
          end
        end

        def git_repo?
          return @is_git_repo unless @is_git_repo.nil?

          @is_git_repo = begin
            Dir.chdir(@site_source) do
              Executor.sh('git', 'rev-parse', '--is-inside-work-tree').eql? 'true'
            end
                         rescue StandardError
                           false
          end
        end
      end

      module Executor
        extend POSIX::Spawn

        def self.sh(*args)
          r, w = IO.pipe
          e, eo = IO.pipe
          pid = spawn(*args,
                      :out => w, r => :close,
                      :err => eo, e => :close)

          if pid.positive?
            w.close
            eo.close
            out = r.read
            err = e.read
            ::Process.waitpid(pid)
            "#{out} #{err}".strip if out
          end
        ensure
          [r, w, e, eo].each do |io|
            begin
              io.close
            rescue StandardError
              nil
            end
          end
        end
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::LastModFilter)
<h1 style="text-align: center;">Conversational User Interfaces<br>2021 Conference Website</h1>

This is the 2021 conference website. The website is built uising [Jekyll](https://jekyllrb.com "Jekyll website"), a static website building software written in Ruby. This repository contains the source the website.

Every time a new push/pull request is merged into the main branch of this repository, the website is rebuilt from scratch. The built website is copied them into the [main repository for the website](https://github.com/cui-series/conversationaluserinterfaces.org "Main CUI repository"), that the domain conversationaluserinterfaces.org points to. You can also edit this website online through GitHub and the changes will be made to the live website.

Please do not push to the main repository for the website as changes may be automatically overridden when the website is next rebuilt.

## Building the website manually

If you have Jekyll installed locally, when in the directory, install the various ruby gems with the command `bundle install`. Once you have done this, you'll be able to run a local version of the website with the command `bundle exec jekyll serve` (the website will be accessible at http://localhost:4000/).

If you want to build the website as it will be built for the main repository (i.e. production), use the command `JEKYLL_ENV=production jekyll b --config _config.yml,_config_production.yml`.

The built site is located in the `_site` directory.

## How building automatically happens
When you push to the main branch of this repository, a webhook calls a script running on a Raspberry Pi in Martin Porcheron's home. On a push the following happens:
1. This repository is pulled from GitHub
2. The production version of the website is built using Jekyll (see above)
3. The [main repository for the website](https://github.com/cui-series/conversationaluserinterfaces.org "Main CUI repository") is pulled
4. The source generated from the build in step 2 is copied into the right directory in the local copy of the main repository
5. These changes are committed, and the repository is pushed to GitHub
6. GitHub run a number of automatic checks, and then the changes will appear on conversationaluserinterfaces.org

This process can take a few minutes. If it doesn't seem to work, message Martin Porcheron as there may be a build error (the system fails quietly for now).

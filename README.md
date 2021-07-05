<h1 style="text-align: center;">Conversational User Interfaces<br>2022 Conference Website</h1>

This is the 2022 conference website. The website is built uising [Jekyll](https://jekyllrb.com "Jekyll website"), a static website building software written in Ruby. This repository contains the source the website.

Every time a new push/pull request is merged into the main branch of this repository, the website is rebuilt from scratch. The built website is copied them into the [main repository for the website](https://github.com/cui-series/conversationaluserinterfaces.org "Main CUI repository"), that the domain conversationaluserinterfaces.org points to. You can also edit this website online through GitHub and the changes will be made to the live website.

To keep all the websites in separate repositories, when you push to this repository Jekyll source, a web hook triggers a pull request of the repository, a Jekyll build for production, and a push to the main conversationaluserinterfaces.org repository.

## Previous conferences

You should be able to access the [CUI 2021 source on GitHub](https://github.com/cui-series/websrc-cui2021). Feel free to steal any/all the implementation.

## Building the website manually

If you have Jekyll installed locally, when in the directory, install the various ruby gems with the command `bundle install`. Once you have done this, you'll be able to run a local version of the website with the command `bundle exec jekyll serve` (the website will be accessible at http://localhost:4000/).

If you want to build the website as it will be built for the main repository (i.e. production), use the command `JEKYLL_ENV=production jekyll b --config _config.yml,_config_production.yml`.

The built site is located in the `_site` directory.

## How building automatically happens
When you push to the main branch of this repository, a webhook calls a script running on a Raspberry Pi. On a push the following happens:
1. This repository is pulled from GitHub
2. The production version of the website is built using Jekyll (see above)
3. The [main repository for the website](https://github.com/cui-series/conversationaluserinterfaces.org "Main CUI repository") is pulled
4. The source generated from the build in step 2 is copied into the right directory in the local copy of the main repository
5. These changes are committed, and the repository is pushed to GitHub
6. GitHub run a number of automatic checks, and then the changes will appear on conversationaluserinterfaces.org

This process can take a few minutes. If it doesn't seem to work, message Martin Porcheron as there may be a build error (the system fails quietly for now).

If you're installing any new Ruby Gems, let Martin know as he may need to run `build install` on the Pi.
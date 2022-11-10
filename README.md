# ACM Conversational User Interfaces

This is a template for building a website part of the ACM CUI conference/workshop series. The website will be hosted at www.conversationaluserinterfaces.org in a custom directory (e.g., _www.conversationaluserinterfaces.org/mywebsite_).

This template repository is for websites built with the [Jekyll](http://jekyllrb.com/ "Go to the Jekyll Static Website Generator website") Static Website Generator.

## Requirements/instructions

1. Put your Jekyll website in the root of this repository in the `main` branch

2. Your `_config.yml` can be configured for local host testing, but you should have a `_config_production.yml` file for settings you want to deploy at deployment

    * A sample file has been provided
    * It is important that you insert a correct `baseurl` parameter
    * Every time you commit, everything in this directory will be replaced!
    
3. Change the `name` parameter of the GitHub Action workflow in `.github/workflows/jekyll.yml` to something appropriate

4. Change the `target-directory` parameter in `.github/workflows/jekyll.yml` to match the one you set in step 2 (minus the forward slash)

5. Ask the CUI Technical Chair to grant your repository permissions to push to the `conversationaluserinterfaces.org` repository

6. Ensure Actions are enabled in this repository in the GitHub repository settings
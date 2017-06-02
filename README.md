ionic-site
==========

Repo for the ionicframework.com site.  To preview local Ionic changes, follow the instructions at the [Ionic repo](https://github.com/ionic-team/ionic#documentation).


gulp watch uses LiveReload. You may have to up your max file limit with the following command:

    ulimit -n 7000


## Local Build

1. Install jekyll (may require sudo): `gem install jekyll`
2. Run `npm install`
3. Run `gulp watch`

## CI Explanation

Ionic v1 and v2 now automatically deploy their changes to an Ionic staging server. Ionic team members are given permission to the staging and production servers in Heroku. V1 and V2 docs changes go as follows:

1. Change the content of the docs as necessary.
2. Optionally preview the changes by running `gulp docs` in the Ionic v1/2 repo, and `gulp watch` in ionic site, which should be a sibling directory of the `ionic` and `ionic2` repos.
3. Commit and push changes
4. Sit back. The [Ionic v1 CI tasks](https://circleci.com/gh/ionic-team/ionic) and the [Ionic v2 CI tasks](https://circleci.com/gh/ionic-team/ionic2) will generate the new docs and push them to the `ionic-site` repo. The `ionic-site` CI tasks will then build them and automatically deploy them to the staging server.
5. Preview changes on the [staging server](https://ionic-site-staging.herokuapp.com/) and promote the changes to production if all looks well. Be sure to give the site a quick look over to make sure things look good.

## Third Party Libraries

3rd part libraries should be concatonated in to the site bundle by adding them via package.json and specifying what files to include in the `assets/3rd-party-libs.json` file. 

## Deploy

Install [heroku-toolbelt](https://toolbelt.heroku.com/) or with homebrew

```bash
brew install heroku-toolbelt
```

Install [heroku-pipelines](https://devcenter.heroku.com/articles/pipelines)

```bash
heroku plugins:install heroku-pipelines
```

Then log into heroku

```bash
heroku login
# enter your email and password when promted
```

Then add the heroku remotes

```bash
git remote add production https://git.heroku.com/ionic-site.git
```

```bash
git remote add staging git@heroku.com:ionic-site-staging.git
```


- Make your changes
- Run `gulp`
- `git push origin master`
- View the staging server at [https://ionic-site-staging.herokuapp.com/](https://ionic-site-staging.herokuapp.com/)
- Promote the staging server to production
- `heroku pipelines:promote -r staging`
- Watch the build server at [https://circleci.com/gh/ionic-team/ionic-site](https://circleci.com/gh/ionic-team/ionic-site)


## Community

* Follow [@ionicframework on Twitter](https://twitter.com/ionicframework).
* Subscribe to the [Ionic Newsletter](https://ionicframework.com/subscribe/).
* Have a question that's not a feature request or bug report? [Discuss on the Ionic Forum](https://forum.ionicframework.com/).
* Read our [Blog](https://ionicframework.com/blog/).
* Have a feature request or find a bug? [Submit an issue](https://github.com/ionic-team/ionic/issues).


## Authors

**Max Lynch**

+ <https://twitter.com/maxlynch>
+ <https://github.com/mlynch>

**Ben Sperry**

+ <https://twitter.com/benjsperry>
+ <https://github.com/bensperry>

**Adam Bradley**

+ <https://twitter.com/adamdbradley>
+ <https://github.com/adamdbradley>

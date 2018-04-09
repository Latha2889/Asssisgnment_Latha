#!/bin/sh

heroku login
heroku create
heroku addons:create heroku-postgresql:hobby-dev
git push heroku master
heroku run "npm run initdb"
heroku open

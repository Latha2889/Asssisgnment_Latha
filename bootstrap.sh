#!/bin/sh

#heroku login
#heroku create
#heroku addons:create heroku-postgresql:hobby-dev
#git push heroku master
heroku run "npm run initdb"
echo "Here is your database connection information.  It is in the format postgres://<user>:<password>@<host>:<port>/<database>"
heroku config
heroku open

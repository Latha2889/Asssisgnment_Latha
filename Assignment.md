## Assignment

The purpose of this is to get a small sample of some of your work, and have something
concrete to discuss next time we see you.

We respect and appreciate your time: please do not spend more than a couple hours on
this. Feel free to turn in what you have at the end of that time, and provide a brief explanation of
what you would do next, given more time.

## Prerequisites

* Sign up for a free heroku account https://signup.heroku.com
* Install the heroku cli - https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up

## Installation

This will login to Heroku, create the project, add all the dependencies, create the database, and start the project for you.

* Run [./bootstrap.sh](bootstrap.sh) from the command line (Mac/Linux).  For Windows, open the bootstrap.sh file and run the listed commands on the windows command prompt.

## Tasks 

For each of these parts please add comments describing the steps and any additional ways to enhance automation scripts.  This project uses Angular CLI and has provided integration with Protractor.  Feel free to use a different testing framework if you prefer.  If you do use a different testing framework, provide detail instructions to execute automation scripts.

#### Part 1: Verify the event list

This sample app displays a list of "events".  Users can add, edit, and remove events from the list.  Write an automated test that verifys that the correct number of events are in the feed (according to the database) and each event has the Title, Subtitle, and Description displayed.

#### Part 2: Verify creating an event

Verify that creating an event adds the entry to the database as well we properly refreshes the event list.  Title, Subtitle, and Description should be stored, as well as a generated id.

#### Part 3: Verify deleting an event

Verify that delete removes the event from the database and the event feed.
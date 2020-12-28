# The visual aid helper

Make a-generic-hubot listen to everything said and help with a visual aid when she hears something interesting:

- unexplainable
- interesting
- fine
- cue someone

## How to add another one?

- Fork this repo
- Add a json file to the `data` folder, it needs to have:
  - `regexes`: array of regexes to listen for
  - `example`: an example of when it will be triggered
  - `urls`   : array of urls
- Optional: write a test for it (the `example` will be tested automagically)

## How do I get meechum to pick these up?

- Go to `your-generic-hubot` repo
- `heroku run bash`
- `npm install`

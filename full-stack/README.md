# Full-stack Tech Test

## The Project:

A node radio that is controlled via a web interface.

## Minimum Requirements

- an API server that controls a local process
- a frontend to control and display the state

## What are we looking for?

- A project that's easy to start up and add a feature.
- Could I use a different endpoint, add a page, or change the designs quickly without having to ask you to show me how?
- Could I show your project to a junior developer and have them developing on your project in less than a few minutes?

## Notes

- I should be able to open two tabs and have them both update accordingly.
- I want a single play/stop button that reflects the server state.
- I may want to be able to select a different station (not an immediate requirement).
- I need to know if and what is currently playing - either use 500ms polling or websockets. (The given command is Eagle Rock fm - feel free to find another if you have other preferences <http://www.181.fm/>)
- Use [Water.css](https://github.com/kognise/water.css) - any other CSS needs to be handwritten.
- Any JS library or framework (Next.js, Nuxt.js, React, Vue, express, koa, micro, etc).
- Setup and linters, Readme's, formatters, any tooling etc thats required.
- I should not have to install anything globally to get this running. (besides vlc)
- Structure the project as you see fit - you can do one or two repos, I'm not particular.
- Put it up in Github or Gitlab and **add me as an Admin** [Github/olmesm](https://github.com/olmesm) / [Gitlab/olmesm](https://gitlab.com/olmesm).
- Try commit per feature - not an issue if you don't, but it's great to see a timeline.
- No references to Radically Digital please as this may be used in another test.
- This should take around an hour, so any longer than that - finish off what you're doing and we’ll talk through what’s been done and where you’d go from there.
- Prioritise your time - deliver the most value you can within the time.

**Command:**
You'll need VLC media player installed to run the following command;

```sh
vlc http://listen.181fm.com/181-eagle_128k.mp3
```

**Please test the command first before starting - this will need to be run on a mac or linux machine.**

**Hint:** You'll need to spawn a node child process
https://nodejs.org/api/child_process.html#child_process_child_process_spawn_command_args_options

Enjoy and feel free to send me a message if you get stuck with anything or have any questions (especially process control) - we're not here to trip you up but start a team-orientated technical conversation.

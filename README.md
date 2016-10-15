# Zetkin User Manual
This is the Zetkin User Manual. It is powered by [Jekyll](//jekyllrb.com) and
hosted by GitHub Pages at [manual.zetkin.org](//manual.zetkin.org). This README
describes the status of the manual and explains how you can contribute to making
it better.

# Manual Outline
Below is a top-level outline of the Zetkin Manual. Flag icons at each item in
the list describes the translation status of that piece of the manual. No flags
means the section has yet to be written.

* Intro section
* Activist section
* Officials section

# Contributing
You can contribute to the manual in many ways.

## Suggesting changes
If you want to suggest improvements, highlight language or fact errors, let us
know about a technical bug that you've found, or in any other way suggest
changes to the documents in the Zetkin Manual, please create an issue ticket in
the [issue tracker](//github.com/zetkin/manual.zetkin.org/issues).

## Translating to your language
If you want to translate the manual to your language, please create a fork and
work on your translation there. Contact us for details on how translation works.

## Fixing bugs
If you are tech-savvy and willing to help out with development of the Zetkin
Manual, you are very welcome to fixing bugs and making other improvements.
Please create a fork of this repository, make the changes you want, and create
a pull request to be reviewed by a Zetkin Foundation official.

## Build instructions
If you intend to develop the manual and need to run a local copy of the site,
we recommend that you use Docker. The Zetkin Manual is developed using Jekyll,
which depends on Ruby and several other pieces of software. To avoid having to
install it all, use the official Jekyll Docker container.

If you are unfamiliar with Docker, other solutions will do as well. But we do
recommend that you [learn about Docker](https://docs.docker.com), which is used
extensively throughout the Zetkin project.

Below are the commands necessary to get started. If you have created your own
fork, you likely want to clone that instead of the official manual.zetkin.org
repository from GitHub. Replace `zetkin/` in the repository URL with your GitHub
user name to clone your fork instead.

```
$ git clone git@github.com:zetkin/manual.zetkin.org
$ cd manual.zetkin.org
$ docker run -v $PWD:/srv/jekyll -p 4000:4000 jekyll/jekyll
```

The final command will start running the Jekyll Docker container and serving
the Zetkin Manual on port 4000 of the host on which Docker is running (usually
localhost or whatever is returned by `docker-machine ip default`). Browse to
[http://localhost:4000] to se the manual running locally. Make any changes to
the source files and the site will rebuild and start serving the updated version
automatically.

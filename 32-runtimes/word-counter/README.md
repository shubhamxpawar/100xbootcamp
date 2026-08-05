simple-word-counter
=================

a cli that simply counts number of words in files


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/simple-word-counter.svg)](https://npmjs.org/package/simple-word-counter)
[![Downloads/week](https://img.shields.io/npm/dw/simple-word-counter.svg)](https://npmjs.org/package/simple-word-counter)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g simple-word-counter
$ simple-word-counter COMMAND
running command...
$ simple-word-counter (--version)
simple-word-counter/0.0.0 linux-x64 node-v24.14.0
$ simple-word-counter --help [COMMAND]
USAGE
  $ simple-word-counter COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`simple-word-counter hello PERSON`](#simple-word-counter-hello-person)
* [`simple-word-counter hello world`](#simple-word-counter-hello-world)
* [`simple-word-counter help [COMMAND]`](#simple-word-counter-help-command)
* [`simple-word-counter plugins`](#simple-word-counter-plugins)
* [`simple-word-counter plugins add PLUGIN`](#simple-word-counter-plugins-add-plugin)
* [`simple-word-counter plugins:inspect PLUGIN...`](#simple-word-counter-pluginsinspect-plugin)
* [`simple-word-counter plugins install PLUGIN`](#simple-word-counter-plugins-install-plugin)
* [`simple-word-counter plugins link PATH`](#simple-word-counter-plugins-link-path)
* [`simple-word-counter plugins remove [PLUGIN]`](#simple-word-counter-plugins-remove-plugin)
* [`simple-word-counter plugins reset`](#simple-word-counter-plugins-reset)
* [`simple-word-counter plugins uninstall [PLUGIN]`](#simple-word-counter-plugins-uninstall-plugin)
* [`simple-word-counter plugins unlink [PLUGIN]`](#simple-word-counter-plugins-unlink-plugin)
* [`simple-word-counter plugins update`](#simple-word-counter-plugins-update)

## `simple-word-counter hello PERSON`

Say hello

```
USAGE
  $ simple-word-counter hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ simple-word-counter hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/shubhamxpawar/100xbootcamp/blob/v0.0.0/src/commands/hello/index.ts)_

## `simple-word-counter hello world`

Say hello world

```
USAGE
  $ simple-word-counter hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ simple-word-counter hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/shubhamxpawar/100xbootcamp/blob/v0.0.0/src/commands/hello/world.ts)_

## `simple-word-counter help [COMMAND]`

Display help for simple-word-counter.

```
USAGE
  $ simple-word-counter help [COMMAND...] [-n]

ARGUMENTS
  [COMMAND...]  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for simple-word-counter.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/6.2.56/src/commands/help.ts)_

## `simple-word-counter plugins`

List installed plugins.

```
USAGE
  $ simple-word-counter plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ simple-word-counter plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.86/src/commands/plugins/index.ts)_

## `simple-word-counter plugins add PLUGIN`

Installs a plugin into simple-word-counter.

```
USAGE
  $ simple-word-counter plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into simple-word-counter.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the SIMPLE_WORD_COUNTER_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the SIMPLE_WORD_COUNTER_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ simple-word-counter plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ simple-word-counter plugins add myplugin

  Install a plugin from a github url.

    $ simple-word-counter plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ simple-word-counter plugins add someuser/someplugin
```

## `simple-word-counter plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ simple-word-counter plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ simple-word-counter plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.86/src/commands/plugins/inspect.ts)_

## `simple-word-counter plugins install PLUGIN`

Installs a plugin into simple-word-counter.

```
USAGE
  $ simple-word-counter plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into simple-word-counter.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the SIMPLE_WORD_COUNTER_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the SIMPLE_WORD_COUNTER_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ simple-word-counter plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ simple-word-counter plugins install myplugin

  Install a plugin from a github url.

    $ simple-word-counter plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ simple-word-counter plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.86/src/commands/plugins/install.ts)_

## `simple-word-counter plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ simple-word-counter plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ simple-word-counter plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.86/src/commands/plugins/link.ts)_

## `simple-word-counter plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ simple-word-counter plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  [PLUGIN...]  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ simple-word-counter plugins unlink
  $ simple-word-counter plugins remove

EXAMPLES
  $ simple-word-counter plugins remove myplugin
```

## `simple-word-counter plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ simple-word-counter plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.86/src/commands/plugins/reset.ts)_

## `simple-word-counter plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ simple-word-counter plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  [PLUGIN...]  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ simple-word-counter plugins unlink
  $ simple-word-counter plugins remove

EXAMPLES
  $ simple-word-counter plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.86/src/commands/plugins/uninstall.ts)_

## `simple-word-counter plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ simple-word-counter plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  [PLUGIN...]  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ simple-word-counter plugins unlink
  $ simple-word-counter plugins remove

EXAMPLES
  $ simple-word-counter plugins unlink myplugin
```

## `simple-word-counter plugins update`

Update installed plugins.

```
USAGE
  $ simple-word-counter plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.86/src/commands/plugins/update.ts)_
<!-- commandsstop -->

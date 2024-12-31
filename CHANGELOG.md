# this file will review the most significant changes in a new pistol release.
- PATCH.md was introduced in 1.6, versions below 1.6 will not be documented.

## 1.6
- introduced PATCH.md
- changed hint message icon (ℹ️ -> 💡)
- introduced storage mode
- new `st` command to switch to storage mode
- made safety checks to make sure `solo` cwd locations exist
- - before (if the storage directory didn't exist):
```
➤➤ <posix> storage [solo]> echo hi
Traceback (most recent call last):
  File "<frozen runpy>", line 198, in _run_module_as_main
  File "<frozen runpy>", line 88, in _run_code
  File "/home/astridot/Desktop/Project/pistol/pistol/__main__.py", line 3, in <module>
    main()
  File "/home/astridot/Desktop/Project/pistol/pistol/core.py", line 154, in main
    {
  File "/home/astridot/Desktop/Project/pistol/pistol/core.py", line 139, in run_solo
    os.chdir(loc)
FileNotFoundError: [Errno 2] No such file or directory: '/home/astridot/Desktop/Project/pistol/pistol/storage'
```
- - after:
```
➤➤ <posix> storage [solo]> echo hi
⚠️  warning: tried to execute a solo command in a directory that does not exist. solo will execute it in /home/astridot/Desktop/Project/pistol instead.
💡 hint: rerun the command with the --force-cwd option to run in storage.
hi
➤➤ <posix> storage [solo]> echo hi --force-cwd
➤➤ created storage
hi
```
- made it so the storage directory is automatically created when entering storage mode using `st`
- example:
```
➤➤ <posix> /home/astridot/Desktop/Project/pistol> st
⚠️  warning: storage directory does not exist, creating now.
➤➤ storage directory created successfully
💡 hint: use st again to return to normal mode
```
- added a keybinding to exit pistol (works in `solo` mode too)
- - press ^D chord to ^C (ctrl-d then ctrl-c) to exit
- example:
- - `{^D}` means the point at where ctrl-d was pressed
- - `{^C}` means the point at where ctrl-c was pressed
```
➤➤ <posix> /home/astridot/Desktop/Project/pistol [solo]> {^D}
💡 hint: press ^C to exit pistol
💡 hint: press any other button to return to pistol
➤➤ {^C}
➤➤ exited pistol
```
- added a hint to press the keybinding when exiting using `exit`
- example:
```
➤➤ <posix> /home/astridot/Desktop/Project/pistol> exit
➤➤ exited pistol
💡 hint: pressing ^D chord to ^C will exit pistol as well
```
- - this can be hidden using the --no-hint option
- - example:
```
➤➤ <posix> /home/astridot/Desktop/Project/pistol> exit --no-hint
➤➤ exited pistol
```

# 1.7
- fixed the `<location>` argument
- made it so you can specify `storage` as the `<location>` parameter to load into `storage` mode instantly (more info in the README.md file)
- fixed multiple bugs
- fixed typos
- `ucd` can still exit storage mode in most cases, but will not be shown in hints due to it no longer working if loading into `storage` mode using the `<location>` argument. (in which case the cd history will be empty and ucd will not work)
- finished website (https://pixilll.github.io/pistol)

# 1.8
- made it so you can start pistol in a new instance on windows or linux if the `--new` or `-n` parameter is specified.
- - linux: this will only work if gnome-terminal is installed.
- made more hint messages
- added the `search` command which will open your browser to the given url
- added the `whereami` command which will show your current location (even in storage mode)
- added the `version` command which shows the current version of pistol

# 1.9
- added the `cdh` command which will show the cd history and where the next `ucd` will take you
- fixed a bug where you couldn't use `st` to exit storage mode if you entered through the `<location>` argument
- fixed a bug where running commands that may not work properly using solo would error out
- made it so using the `version` command would show for ex. `pistol 1.9 for linux` or `pistol 1.9 for windows` instead of `pistol 1.9 for posix` or `pistol 1.9 for nt`
- - the main prompt will continue to display `nt` for windows and `posix` due to standards of `py:os.name`
- reworked the main prompt slightly
- - example of before: `➤➤ <posix> /home/astridot/Desktop/Project/pistol>`
- - example of after: `➤➤ posix: /home/astridot/Desktop/Project/pistol>`
- - proposed (and declined) changes: `➤➤ linux: /home/astridot/Desktop/Project/pistol>`
- completely reworked the security policy (SECURITY.md)

# 2.0
- pistol can now be installed on linux without managing a venv environment
- - more info in README.md
- bug fixes
- updated README.md
- 2 new installation types (for linux)
- tables in README.md have more info now
- typo fixes
- major plans for the future
- `help` command now takes you to the github issues page

# 2.1
- HUGE update
- 8 new commands
- - more info in README.md
- new `meta.json` file
- - this means cd history, command history, and aliases are saved even after you exit pistol
- autocompletion of file names
- - files in the current location will be displayed for autocompletion
- - after a whitespace character (e.g. space), press up and down arrows to cycle through the paths
- - this includes `..`
- - note: items starting with `.` are considered hidden and do not show up in autocomplete
- colours in the main prompt are tweaked slightly (more saturated)
- - this is not completely intentional, as pistol uses a new prompt manager which renders colours differently.
- - only the main prompt colours are changes, all other colours are still the same
- bug fixes
- fixed a bug where cding into a path that is a file would error out
- - files are now marked as 'invalid paths'
- much more
- note: this update is meant to go along with 2.0, which did not offer many changes beside the `pipx` release.

# 2.1.1
- fixed some bugs on windows
- fixed bugs with meta.json
- - meta.json will now be created if it is not already when pistol is started

# 2.1.2
- updated bucket dependencies

# 2.2
- improvements to the `analyse` command
- you no longer need to restart pistol to refresh the meta file with the `re` command
- MANY bug fixes
- pistol will no longer error out, and will rather show the python error in th usual format
- - ex. before:
```
Traceback (most recent call last):
  File "<frozen runpy>", line 198, in _run_module_as_main
  File "<frozen runpy>", line 88, in _run_code
  File "/home/astridot/Desktop/Project/pistol/pistol/__main__.py", line 3, in <module>
    main()
  File "/home/astridot/Desktop/Project/pistol/pistol/core.py", line 61, in main
    if (os.path.getsize(meta.path) / 1024) > 500: # larger than 100kb
        ^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "<frozen genericpath>", line 62, in getsize
FileNotFoundError: [Errno 2] No such file or directory: '/home/astridot/Desktop/Project/pistol/pistol/meta.json'
```
- - ex. after:
```
🚨 error: internal: [errno 2] no such file or directory: '/home/astridot/desktop/project/pistol/pistol/meta.json'
```
- `core.py` is now split into 10 files
- fixed a bug where ansi colouring is not rendered correctly in the main prompt
- - `storage` is no longer coloured anywhere
- more meta.json space managing options
- - you can now disable the timestamps prop using `prop timestamps false`
- - this cuts a command history item size from about 0.5kb to 0.1kb (80% size decrease)
- - timestamps are enabled by default

# 2.3
- `analyse` command renamed to `meta`
- `re` is automatically ran after every command
- - can be disabled using `prop auto-re false`
- `help` command now takes you to the documentation
- argument 2 on `prop` can now be `check`, to check the state of the prop
- location is now persistent, which means that if the `<location>` argument is not filled, pistol will automatically load to where you last left off
- - if there is no previous location, pistol will default to the cwd
- - this can be disabled using `prop persistent-location false`
- - this is enabled by default
- - you can also specify `last` as the `<location>` argument, which will do the same as without specifying it
- - the `persistent-location` prop still has to be enabled for `pistol last` to work.
- fixed a bug where if a solo command raises an error, it is marked as `solo`, no matter the actual solo command.
- - basically, if you were running `pwsolo`, the error would still be marked as `solo`
- many small changes
- various bug fixes

# 2.3.1
- tiny update
- updated README.md
- cleared meta.json to avoid artifacts when building

# 2.3.2
- tiny update
- removing an alias has a confirmation message now
- minor changes
- typo fixes

# 2.4: `scs` update
- HUGE update
- added `scs`
- - scs stands for smart command suggestions
- - will gather used commands and suggest them using tab completion
- - collection of commands can be disabled with `prop scs-collection false`
- - using scs in tab completion can be disabled with `prop scs false`
- - you can run `prop scs scs-ignore-paths false` to only receive suggestions of commands you ran in the **same directory** as where you ran them for the first time.
- new commands
- - `rms` to remove a `scs` suggestion
- - `cs` to remove all `scs` suggestions
- removed commands
- - `root`
- added props
- - `scs` (mentioned above)
- - `scs-collection` (mentioned above)
- - `scs-ignore-paths` (mentioned above)
- - `scs-refresh` - choose whether scs is saved to the meta file each time `re` is run. this does not affect run speed of `re`
- - `suggest-files` - choose whether files are suggested for tab completion
- - `meta-size-warning` - choose whether to warn the user if pistol's meta file reaches over 500kb in size. recommended to keep enabled.
- you can run pistol in verbose using either the `pistol.verbose` command (instead of `pistol`) or the `verbose` file using `python3 -m pistol.verbose` or similar.
- added explanations for all the meta entries using the `meta` command
- MANY other changes

# 2.4.1
- -n|--new argument now works on `pipx` releases as well.

# 2.4.2
- fixed persistent locations

# 2.4.3
- added `fallback solo`
- - if a command does not exist, pistol will automatically insert `solo ` before it
- - this can be disabled with `prop fallback-solo false`
- - a message will be displayed when `fallback solo` is activated.
- - this message can also be disabled with `prop message-on-fallback false`
- - disabling `message-on-fallback` will keep all other functionality, it will only disable that one message.

# 2.5: plugin update
- HUGE update
- added support for user-made plugins
- - there are currently two plugin managers that come with pistol:
- - `prop` and `shotgun`
- - here is a table to help you choose a plugin manager:
- - (plugin_name can be replaced with any other plugin)

| feature                                  | `shotgun` command             | `prop` command                |
|------------------------------------------|-------------------------------|-------------------------------|
| install a plugin                         | `shotgun install my_plugin`   | not supported                 |
| uninstall a plugin                       | `shotgun uninstall my_plugin` | not supported                 |
| enable a plugin                          | `shotgun enable my_plugin`    | `prop plugin:my_plugin true`  |
| disable a plugin                         | `shotgun disable my_plugin`   | `prop plugin:my_plugin false` |
| check if a plugin is enabled or disabled | not supported                 | `prop plugin:my_plugin check` |
| list all installed plugins               | `shotgun list`                | `prop plugin:* check`         |
| enable all plugins                       | `shotgun enable *`            | `prop plugin:* true`          |
| disable all plugins                      | `shotgun disable *`           | `prop plugin:* false`         |
| check the absolute location of a plugin  | `shotgun where my_plugin`     | not supported                 |

- - overall, it is recommended to use `shotgun` for regular tasks, as `prop` lacks some vital features in terms of plugin management
- - how to create a pistol plugin:

## step 1: create a project structure:
```
my_plugin/
  my_plugin/
    ... (enter files as needed)
  .pistol
```
## step 2: set up your `.pistol` file
- the `.pistol` file is the heart of your plugin as it decides the entrypoint.
- example `.pistol` file:
```
["python3", "$pistol.this$/my_plugin/main.py", "$pistol.args$", "--at", "$pistol.loc$"]
```
- the file should follow the shape of a python list object.
- the contents of the `.pistol` file will be run in the default terminal
- variables:
- - `$pistol.this$` links to the absolute path of the directory where the `.pistol` file lies when it has been installed. bad, unexpected things may happen if you don't use this in your paths.
- - `$pistol.args$` links to arguments provided after the keyword. this should be used in quotes.
- - `$pistol.loc$` links to the current working directory in pistol.
- other changes:
- `message-on-fallback` renamed to `disable-fallback-message` and is enabled by default
- more small changes
- more quality of life changes

# indev
- added `where` command to `shotgun` help message
- `whereami` and `search` commands are now plugins that are installed by default.
- - `whereami` can now be disabled using `shotgun disable whereami` or `prop plugin:whereami false`
- - `search` can now be disabled using `shotgun disable search` or `prop plugin:search false`
- added new argument for `.pistol` files: `$pistol.storage$` will now link to the absolute path of pistol's `storage` directory
- - this was added mainly for `whereami` functionality
- `prop` now has comparable functionality to `shotgun` in terms of plugin managing
- - here is the updated comparison table:

| feature                                    | `shotgun` command                          | `prop` command                                 |
|--------------------------------------------|--------------------------------------------|------------------------------------------------|
| install a plugin                           | `shotgun install my_plugin path/to/source` | `prop plugin:my_plugin@path/to/source install` |
| uninstall a plugin                         | `shotgun uninstall my_plugin`              | `prop plugin:my_plugin uninstall`              |
| upgrade a plugin                           | `shotgun upgrade my_plugin`                | `prop plugin:my_plugin upgrade`                |
| enable a plugin                            | `shotgun enable my_plugin`                 | `prop plugin:my_plugin true`                   |
| disable a plugin                           | `shotgun disable my_plugin`                | `prop plugin:my_plugin false`                  |
| check if a plugin is enabled or disabled   | not supported                              | `prop plugin:my_plugin check`                  |
| list all installed plugins                 | `shotgun list`                             | `prop plugin:* check`                          |
| enable all plugins                         | `shotgun enable *`                         | `prop plugin:* true`                           |
| disable all plugins                        | `shotgun disable *`                        | `prop plugin:* false`                          |
| check the absolute location of a plugin    | `shotgun where my_plugin`                  | `prop plugin:my_plugin check`                  |
| check the absolute location of all plugins | not supported                              | `prop plugin:* check`                          |

- plugins can now be upgraded using `shotgun upgrade my_plugin` or `prop plugin:my_plugin upgrade`
- prop can now install and uninstall plugins
- `default-plugins` moved to `misc/plugins`
- fixed a bug where entering an invalid state for a prop would error out
- added a warning when dependencies aren't satisfied
- pistol now tracks how many times you've entered pistol.
- - this cannot be disabled for now
- added new argument for `.pistol` files: `$pistol.python$` will now link to the absolute path of python on your system.
- - this can be used as a python executable
- - python plugins now os independent :)
- `PATCH.md` renamed to `CHANGELOG.md`
- updated `README.md`
- added a way to forcefully reset the `meta.json` file
- - run `python3 -m pistol.reset_meta`
- - this can only be used in the `pip` (excluding `pipx`) versions of pistol
- - can also be used in version built from source if you include `/pistol/reset_meta.py`
- many other changes
- many bug fixes
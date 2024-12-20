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
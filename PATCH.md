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
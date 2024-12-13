# pistol terminal guide

## installation
all of these installation methods apply to the newest version of pistol unless stated otherwise.

### 1. windows install using `pip` (most recommended for windows machines):
#### step 1: make sure `pip` is updated
```
python -m pip install --upgrade pip
```
#### step 2: install pistol
```
pip install pistol
```
### 2. linux/ubuntu install using `pip` and `venv` (most recommended for linux machines):
#### step 1: create a virtual environment using `venv`
```
python3 -m venv .venv
```
#### step 2: activate the environment
```
source .venv/bin/activate
```
#### step 3: make sure `pip` is updated
```
python3 -m pip install --upgrade pip
```
#### step 4: install pistol
```
python3 -m pip install pistol
```
#### /!\ disclaimer: installing pistol using the second method will make pistol only accessable while in the venv environment where it has been installed. you may need to redo step 2 every time you restart your terminal.
### 3. build from source:
#### pistol is open-source on github, and any source code files can be downloaded individually if needed. pistol can be built on your system relatively easily whether you're on windows or linux.

## os compability and availability

| os | availability | versions compatible |
|----|--------------|---------------------|
| windows 11 | tested, available | all versions |
| windows >=10 | not tested, should be available | all versions |
| ubuntu | tested, available | all versions |
| linux* | not tested, should be available | all versions |
| macos | not tested, probably not available | no versions (most likely) |

*linux means linux distributions in general, except for ubuntu which was mentioned beforehand

## python compatibility and availability
| python version | availability | versions compatible       |
|----------------|--------------|---------------------------|
| python 3.13 | tested, available | all versions |
| python 3.12 | tested, available | all versions |
| python >=3.11 | tested, not available | no versions |

## commands:
- cd - change current working directory
- ucd - undo last cd
- - example:
```
<posix> /home/astridot/Desktop> cd ..
<posix> /home/astridot> cd Documents/MyProject
<posix> /home/astridot/Documents/MyProject>cd /home/astridot
<posix> /home/astridot> cd /
<posix> /> ucd
<posix> /home/astridot> ucd
<posix> /home/astridot/Documents> ucd
<posix> /home/astridot> ucd
<posix> /home/astridot/Desktop> exit
➤➤ Exited pistol
```
- exit - exit pistol
- help - go to the pistol github page
- ### solo
- - solo uses the system's default shell to run further commands
- - example:
```
<posix> /home/astridot/Desktop/Project> solo dir
pistol	README.md  setup.py
<posix> /home/astridot/Desktop/Project> solo ls
pistol	README.md  setup.py
<posix> /home/astridot/Desktop/Project> solo echo Hello, world!
Hello, world!
<posix> /home/astridot/Desktop/Project> solo cd ..
⚠️  warning: cd may not work properly when executing using solo
🚨 error: solo: [Errno 2] No such file or directory: 'cd'
<posix> /home/astridot/Desktop/Project> solo exit
⚠️  warning: exit may not work properly when executing using solo
🚨 error: solo: [Errno 2] No such file or directory: 'exit'
<posix> /home/astridot/Desktop/Project> solo help
⚠️  warning: help may not work properly when executing using solo
🚨 error: solo: [Errno 2] No such file or directory: 'help'
<posix> /home/astridot/Desktop/Project> solo
<posix> /home/astridot/Desktop/Project [solo]> echo hi
hi
<posix> /home/astridot/Desktop/Project [solo]> dir
pistol	README.md  setup.py
<posix> /home/astridot/Desktop/Project [solo]> ls
pistol	README.md  setup.py
<posix> /home/astridot/Desktop/Project [solo]> cd ..
⚠️  warning: cd may not work properly when executing using solo
🚨 error: solo: [Errno 2] No such file or directory: 'cd'
<posix> /home/astridot/Desktop/Project [solo]> exit
➤➤ Exited solo
<posix> /home/astridot/Desktop/Project> exit
➤➤ Exited pistol
```

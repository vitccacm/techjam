
## Table of contents
1. The Linux terminal
2. Linux file organization
3. File permissions
4. Privilege escalation

## 1. The Linux terminal

`<introductory-video>`

## 1.1 The terminal

In linux, the primary way of interacting with the operating system is through the terminal. The terminal is a text-based system that allows you to enter inputs and get back the results.

If you are using a linux-based OS, launch a terminal emulator. This can be done by finding and launching the appropriate terminal emulator program, or using the shortcut `Ctrl+Alt+T`

A window should open, similar to the image below.

`insert image here`

The program currently running in the terminal is the **shell**. The shell is an interactive program that lets you write and interpret commands. The most common shell is the BASH shell (Bourne Again SHell). The bash command language, associated with the bash shell is Turing complete and you can write a variety of programs using this.

Bash is one of the programs that make up the *GNU Core Utilities*, a set of programs that help the user accomplish basic operations with regards to the computer like copying and moving files, listing the files in a directory and so on. For a full list of these refer [here](https://en.wikipedia.org/wiki/List_of_GNU_Core_Utilities_commands).


## 1.2 Basic bash commands

In this section, we will go over some basic commands and syntax that are fundamental to interacting with the operating system.

- `ls` lists the files present in the current working directory. You can also run `ls <path-to-directory>` to see the contents of a specific directory.

- `cd` allows you to change the current working directory, this would be analogous to changing which folder you have open in your file explorer. To use it, type `cd <directory-name>`.
Also note that in the context of bash `.` refers to the current directory, `~` refers to your home directory and `..` refers to your parent directory.

- `pwd` shows your current working directory.

- `mkdir` lets you make a new directory. Use `mkdir <directory-name>` to create a new directory with the specified name.

- `rm` lets you delete a file or directory. Use `rm <file-name>` to delete a specific file. By default it will only delete empty directories, but using it as `rm -r <directory-name>` will recursively delete everything in the directory and the directory itself.

- `cat` prints out the contents of a file to your terminal output.

- `touch` creates a new empty file.

- `nano` is command line text editor. Use `nano <filename>` to open a file. To save use `Ctrl+O` and `Ctrl+X` to close.

### Exercise:
- Create a folder called `test_folder`, create a file inside and enter some text and save it using `nano`.
- Ascertain if the text is saved using `cat` and then delete the file and folder.

## 1.3 Basic bash scripting

As mentioned before bash is also a scripting language and familiar syntactic structures such as if-else blocks, for and while loops and so on.

In order to write a bash script, open a new file ending (preferably ending in `.sh`) and on the first line add `#!/bin/bash`. This is the path to the bash interpreter and is called the shebang.

A simple bash script to print hello world looks like this.

```bash
#!/bin/bash

echo "Hello, world!"
```

To run it first run, `chmod +x your_filename_here.sh` in the terminal. You only need to do this once.
This marks the file as executable, a concept that will be discussed later on.
Then run `./your_filename_here.sh` in order to execute the script.

```bash
zahran@LAPTOP-TC8IITRG:~$ chmod +x hello_world.sh
zahran@LAPTOP-TC8IITRG:~$ ./hello_world.sh
Hello, World!
```

Any and all programs that you can normally access in your terminal can also be accessed when writing bash scripts.

## 1.4 Basic bash syntax

Variables can be declared simply by equating them to a value.
In order to use them, put a `$` symbol in front of them to reference the variable.
This works inside quotes too, so if you do actually want to use a `$` or a similar special character,
you'll have to escape them with a backslash like so `\$`.

Comments are declared using a `#` in front.
Try running the code below and checking the output.
```bash
#!/bin/bash
# This is a comment
x=5
echo $x
x="username"
echo "Hello, $x"
echo "Hello, \$x"
```
You can read in user input using the `read` command

`read name` will take whatever is input by the user and save it into a variable called `name`.
```bash
echo "What is your name?"
read user_name
# You can also just use read -p "What is your name? " user_name
echo "Hello, $user_name"
```

Program flow can be controlled using if-elif-else. In order to evaluate boolean expressions we use a `[[ expression ]]`. Enclosing the expression in double square brackets will evaluate it to either 0 or 1.

Comparison operators are as such (assume $a and $b are string variables or program outputs):
```bash
# Is empty
[[ -z $a ]]

# Is not empty
[[ -n $a ]]

# Equals
[[ $a -eq $b ]]
[[ $a == $b ]]

# Not equals
[[ $a != $b ]]
[[ $a -ne $b ]]

# Less than
[[ $a -lt $b ]]

# Less than or equals
[[ $a -le $b ]]

# Greater than
[[ $a -gt $b ]]

# Greater than or equals
[[ $a -ge $b ]]

# General numeric conditions ($a and $b are numeric)
(( $a > $b ))
(( $a == $b ))
(( $a < $b ))
```

Let's look at an example to check if a directory is empty.

```bash
#!/bin/bash
# Take the input of ls and put it into a variable
file_list = $(ls)
# Check if the variable is empty
if [[ -z $file_list ]]
then
    echo "The directory is empty"
else
    echo "The directory has files in it"
fi
```

## 1.5 Data streams, pipes and filters


## 2. Linux file organization

`<introductory-video>`

## 2.1 The root directory

At the top of the hierarchy of the linux filesystem is the root directory. Please note that in linux, directory is what folders are termed as. The root directory is represented by a single slash `/`.

In the root directory, set of standard directories exist each with their own purpose.

```
The linux file system structure
    / (root)
    ├── boot/
    ├── bin/
    ├── dev/
    ├── etc/
    ├── lib/
    ├── home/
    │   └── user/
    ├── mnt/
    ├── media/
    ├── opt/
    ├── root/
    ├── tmp/
    ├── sbin/
    ├── usr/
    └── var/
```
Each of these serve a particular purpose, for example, `/boot` contains kernel and bootloader files which are loaded in when the system starts up.

We will not cover what each of these directories are used for, interested learners can follow up and find out their uses.

The directories of particular note are:

- `/bin` which contains binaries of the applications installed and that the user can execute.
- `/media` where external storage devices get mounted so that users can access them
- `/root` the root users home directory
- `/home` where normal users have their home directories

Since Linux is a multi user OS, each user has a home directory present under `/home`. So if the username is *acmvitcc*, then that users home directory will be `/home/acmvitcc/`.

## 3. File permissions

`<introductory-video>`

## 3.1 Basics of file permissions
Open a directory with some files and run the command `ls -l`

```bash
zahran@LAPTOP-TC8IITRG:~/linux_intro$ ls -l
total 12
drwxr-xr-x 2 zahran zahran 4096 Sep 16 17:36 another_folder
-rwxr-xr-x 1 zahran zahran   34 Sep 13 13:10 hello_world.sh
-rw-r--r-- 1 root   root     16 Sep 16 17:30 root_file.sh
```

Examining the output, we can see a few attributes like the owner of the file as well asd read/write/execute permissions.

Lets break it down one by one. The first file is actually a directory since in linux directories are also implemented as files, they can be identified by the `d` at the beginning if their permissions.

To understand how permission settings work lets look at the `hello_world.sh`. The permission settings are `-rwxr-xr-x`.
The first dash is in case its a special file (like a directory) so we can ignore it, the remainder can be split into 3 sections.

- `rwx` These are the permissions for the owner (i.e., zahran) who can read, write and execute the file.
- `r-x` These are permissions for the user group associated with the owner of the file. In this case they can read and execute but not write to the file.
- `r-x` These are the permissions for everybody else who has access to this file.

## 3.2 The chmod utility

The chmod command which we used to set a file as executable earlier is in fact a general purpose tool for manipulating file permissions.

The general syntax is `chmod [mode] [filename]`

You can use the three operators `+,-,=` to set permissions for `u,g,o` (user, group, other). The examples below explain the idea. These examples are taken from [here](https://cheat.sh/chmod).

```bash
# Give the [u]ser who owns a file the right to e[x]ecute it:
chmod u+x path/to/file

# Give the [u]ser rights to [r]ead and [w]rite to a file/directory:
chmod u+rw path/to/file_or_directory

# Remove e[x]ecutable rights from the [g]roup:
chmod g-x path/to/file

# Give [a]ll users rights to [r]ead and e[x]ecute:
chmod a+rx path/to/file

# Give [o]thers (not in the file owner's group) the same rights as the [g]roup:
chmod o=g path/to/file

# Remove all rights from [o]thers:
chmod o= path/to/file

# Change permissions recursively giving [g]roup and [o]thers the ability to [w]rite:
chmod -R g+w,o+w path/to/directory

# Recursively give [a]ll users [r]ead permissions to files and e[X]ecute permissions to sub-directories within a directory:
chmod -R a+rX path/to/directory
```

## 4. Privilege Escalation

## 4.1 What is privilege escalation

In general, it refers to gaining access to the privileges of a root user. You are _escalating_ your privilege from that of a non-root user. Getting access to a root shell is generally considered as the main objective.

There are are a few straightforward ways to achieve this:
- Exploiting services that are running as root
- Exploiting SUID executables
- Exploiting sudo rights
- Exploiting any password hashes accessible

[Reference](https://www.scaler.com/topics/cyber-security/linux-privilege-escalation/)

## 4.2 Exploits

To find programs running that have root privileges, you can run the following command:

`ps -elf | grep "root"`

This will list all programs currently running with root privileges.

You can cross-reference this with [this database](https://cve.mitre.org/cve/search_cve_list.html) to see if any vulnerable services or vulnerable versions are running. In general, outdated versions of software are more likely to have known vulnerabilities.

You can also check for files which have the SUID bit set. This allows any user to run the file as if it was the original owner.

Lets say A is user with root privileges who has creates a program with arbitrary code execution allowed, if it has the SUID bit set you can execute it and run your own code with root privileges and get a root shell.

To find executables marked with the SUID bit you can use this command:

`find / -perm -u=s -type f 2>/dev/null`

There are often programs like nmap and vim which can allow you to run arbitrary commands and if these have the SUID bit for root set, then you can use these to escalate to root.

Lastly, sometimes users are given permissions to run certain executables as root, which opens up room for exploits. Use the command:

`sudo -l`

This will list these executables if any. You can compare against this [list](https://gtfobins.github.io/) to look for vulnerable binaries.

## 4.3 Cracking password hashes

On occasion, you might find password hashes lying around the system, usually these are obscured and need access to see, but it is possible that due to user error or misconfiguration that these are visible.

In order to get back the original password from the hash, we need to crack it using an appropriate program, in this case `hashcat`. hashcat can use a pre-defined wordlist that we provide and compare the hashes of those against the password hash to try find it. We can also go with a purely bruteforce approach by trying all possible passwords but using a dictionary attack is generally faster if the the passwords are weak.

Hashes look like this:
```
# MD5 hash
$1$O3JMY.Tw$AdLnLjQ/5jXF9.MTp3gHv/ 

# SHA-256 hash
$5$MnfsQ4iN$ZMTppKN16y/tIsUYs/obHlhdP.Os80yXhTurpBMUbA5 

# SHA-512 hash
$6$zWwwXKNj$gLAOoZCjcr8p/.VgV/FkGC3NX7BsXys3KHYePfuIGMNjY83dVxugPYlxVg/evpcVEJLT/rSwZcDMlVVf/bhf.1
```
The names above the hashes are the hashing functions used, you can look up more about them [here](https://openwall.info/wiki/john/sample-hashes).

The general format for using hashcat is:
```bash
hashcat -m <hash-type> -a <attack-mode> <path-to-hashfile> <path-to-wordlist>
```

For most common hash methods hashcat can automatically detect it so the -m parameter is optional. To use dictionary mode, specify the -a parameter to be equal to `0`.

As for a wordlist with common passwords, you can use [rockyou.txt](https://github.com/teamstealthsec/wordlists/blob/master/rockyou.txt.gz)

Do extract it before you use it.

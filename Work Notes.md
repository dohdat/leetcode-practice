**Common agile development terms**

1 story point = 1 day/work

1 PI (Program Increment) is 3 months

1 sprint is 2 weeks

**What is a user story?**

A user story is the smallest unit of work in an agile framework.

**What is an epic?**

Epics are large bodies of work that can be broken down into a number of smaller tasks (called stories).

## Splunk Terms

<details>
  
**KPI:**  Key Performance Indicator
  
**Types of KPI Source:**
- Ad hoc Search: define your own search to retrieve portion of data.
- Data Model: Use Splunk Data Models to define a search.
- Shared Base Search: Use a shared base search configuration to define a search.
  
</details>

## Front End 

<details>
  
How to run yarn to **display latest changes**
```console
yarn run webpacklocal
```

**How to run unit tests**
```console
yarn run test:unit:src <test-file-with-path> -u
```
**Mock data**

https://splunk.enterprise.slack.com/files/W9WH87QKS/F041CB83EQ4/itsidefaultscheduledbackup-1661949816.zip
___
**How to install splunk or ITSI:**
```console
wget <link>
```

**Unzip Splunk**
```console
tar -xvzf splunk-8.2.6-a6fe1ee8894b-Linux-x86_64.tgz
```
___
Whenever setting up new VM, remember to setup **correct SPLUNK_HOME path**

```console
echo export SPLUNK_HOME=/Applications/Splunk >> ~/.profile
```

___
**How to ssh into VM:**
```console
ssh ddo@10.214.35.231
```
___
**How to restart/stop/start splunk**
```console
~/splunk/bin/splunk restart
~/splunk/bin/splunk stop
~/splunk/bin/splunk start
```
___
**To bypass git tests**
```console
git commit -n -m "your message"
```
___
**Vscode SSH without using passwords:**

https://www.youtube.com/watch?v=PDVnUErS_us&t=381s

___
**SSH for Gitlab:**

https://www.youtube.com/watch?v=mNtQ55quG9M

```console
cat id_rsa.pub to read file
```

___

**How to install nvm on Ubuntu:**

https://www.youtube.com/watch?v=5jdSyLtoFKE

___

**When things fail:** [How to uninstall Splunk](https://docs.splunk.com/Documentation/Splunk/9.0.2/Installation/UninstallSplunk#:~:text=Uninstall%20Splunk%20Enterprise%20manually&text=Stop%20Splunk%20Enterprise.,-%24SPLUNK_HOME%2Fbin%2F&text=Find%20and%20kill%20any%20lingering,%22splunk%22%20in%20their%20name.&text=Remove%20the%20Splunk%20Enterprise%20installation%20directory%2C%20%24SPLUNK_HOME%20.&text=You%20can%20also%20remove%20the,the%20folder%20into%20the%20Trash.)
___
**How to symlink:**

Go to ~splunk/etc/apps
Remove all symlink
```console
find -type l -delete
```
Remove previous static build
```console
rm -rf $SPLUNK_HOME/etc/apps/itsi/appserver/static/build
```

**Front-end symlink**
```console
ln -s  $GIT_DIRECTORY/apps/itsi/appserver/static/build $SPLUNK_HOME/etc/apps/itsi/appserver/static/build
```
**Back-end symlink**
```console
ln -s $GIT_DIRECTORY/apps/SA-ITOA/package $SPLUNK_HOME/etc/apps/SA-ITOA/package
```
___

**Listening to port**
```console
sudo ss -lptn 'sport = :8089'
```

**Kill port with id**
```console
sudo kill -9 4344
```
**Check which process is running:**
```console
ps -ef|grep splunkd
```
___
**Environment setup**
```bash
# directory where you clone repositories, for example:
export SOLN_ROOT=$HOME/git

#######################
# Repository checkouts
#######################
# => https://git.splunk.com/projects/splcore/repos/main
export SPLUNK_SOURCE=$SOLN_ROOT/main

# => https://git.splunk.com/projects/soln/repos/app-itsi
export SPLUNK_ITSI_SOURCE=$SOLN_ROOT/app-itsi

# => https://git.splunk.com/projects/FSE/repos/demo-itsi
export SPLUNK_ITSI_DEMO_SOURCE=$SOLN_ROOT/demo-itsi
export SPLUNK_HOME=/home/ddo/splunk
export SPLUNK_DB=$SPLUNK_HOME/var/lib/splunk
export SPLUNK_WEB=http://localhost:8000
export SPLUNK_SERVER=https://localhost:8089
export SPLUNKD_URI=$SPLUNK_SERVER
export SPLUNK_USER=admin
# use same password for your local Splunk Enterprise installation
export SPLUNK_PASSWORD=changeme
export SPLUNK_ETC=$SPLUNK_HOME/etc
export DYLD_LIBRARY_PATH=$SPLUNK_HOME/lib
export LD_LIBRARY_PATH=$SPLUNK_HOME/lib
export GIT_DIRECTORY=$SOLN_ROOT/app-itsi
# setting global PYTHONPATH may affect other utilities
# and in situation you run python2 and python3
# this is for a reference that ITSI python files use:
export ITSI_PYTHONPATH=$SPLUNK_ITSI_SOURCE/contrib/common/test:\
$SPLUNK_ITSI_SOURCE/contrib/common:\
$SPLUNK_HOME/lib:\
$SPLUNK_ITSI_SOURCE:\
$SPLUNK_HOME/lib/python3/site-packages:\
$SPLUNK_HOME/etc/apps/SA-ITOA/lib:\
$HOME/Library/Python/2.7/lib/python/site-packages:\
/Library/Python/2.7/site-packages
```
  
</details>
  
## Back End
  
<details>
  </details>

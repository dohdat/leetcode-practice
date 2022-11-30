**How to ssh into VM:**
```
ssh ddo@10.214.35.231
```
___
**How to restart/stop/start splunk**
```
~/splunk/bin/splunk restart
~/splunk/bin/splunk stop
~/splunk/bin/splunk start
```
___
**To bypass git tests**
```
git commit -n -m "your message"
```
___
**Vscode SSH without using passwords:**

https://www.youtube.com/watch?v=PDVnUErS_us&t=381s

___
**SSH for Gitlab:**

https://www.youtube.com/watch?v=mNtQ55quG9M

```
cat id_rsa.pub to read file
```

___

**How to install nvm on Ubuntu:**

https://www.youtube.com/watch?v=5jdSyLtoFKE

___

**When things fail:** [How to uninstall Splunk](https://docs.splunk.com/Documentation/Splunk/9.0.2/Installation/UninstallSplunk#:~:text=Uninstall%20Splunk%20Enterprise%20manually&text=Stop%20Splunk%20Enterprise.,-%24SPLUNK_HOME%2Fbin%2F&text=Find%20and%20kill%20any%20lingering,%22splunk%22%20in%20their%20name.&text=Remove%20the%20Splunk%20Enterprise%20installation%20directory%2C%20%24SPLUNK_HOME%20.&text=You%20can%20also%20remove%20the,the%20folder%20into%20the%20Trash.)

___

**Listening to port **
```
sudo ss -lptn 'sport = :8089'
```

**Kill port with id**
```
sudo kill -9 4344
```

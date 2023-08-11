___

## Front End 

Node incompatible issue?
```
nvm use <Version>
```
  
For caching issues, try <host>/en-US/_bump endpoint and clicking the bump button
  
http://10.214.35.206:8000/en-US/_bump
  
If there are issues, not seeing updated changes, hard refresh everything.

```console
yarn clean
yarn install
```

Restart VM

```
sudo reboot
```
  
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

Go to splunk/etc/apps

```console
rm -rf itsi
```

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

Go to ~cd && cd splunk/etc/apps
Remove all symlink
```console
find . -type l -delete
```
  
Find symlinks
```console
find . -type l -ls
```
Remove previous static build
```console
source ~/.profile && rm -rf $SPLUNK_HOME/etc/apps/itsi/appserver/static/build
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
```  
vim ~/.profile -- to edit profile
source ~/.profile -- restart profile to take effects
```
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
  
How to enable feature flags
```
vim $(find . -name "app_common_flags.conf")
```
  
Ignore local changes with git
  
```
git update-index --skip-worktree test/wdio/wdio.conf.js
```
  
For WDIO issues
  
Update both wdio.conf.js and wdio-local-chrome.conf.js with the latest chrome version

## Deploy to orca:
https://splunk.atlassian.net/wiki/spaces/PROD/pages/1078131255065/App-ITSI+Gitlab+onboarding#Create-preserve-instance-and-debug---Deploy-to-orca
## How to create CO2 stack for testing:
  
1) Go to the pipeline -> Build
2) Get the published build
  ![image](https://user-images.githubusercontent.com/30649150/236342588-d5b58882-17a7-4b9f-b904-4da491a1084d.png)

3) Change the build in the JSON
https://console.splunkcloud.systems/stg/create/stack/overview
4) Get the credentials
https://console.splunkcloud.systems/stg/stack/datdo-test/credentials

<details>
  <summary>JSON Code</summary>
  

  ```js
  {
  "changeReason": "ITSI-1234 updating",
  "name": "datdo-test",
  "spec": {
    "accessRules": {
      "apiWhitelist": [
        "50.216.96.0/24",
        "203.208.197.97/32",
        "103.143.30.2/32",
        "101.102.191.106/32",
        "180.87.154.82/32",
        "4.34.185.2/32",
        "207.225.46.146/32",
        "80.227.140.250/32",
        "113.29.19.0/24",
        "172.78.224.154/32",
        "4.34.96.234/32",
        "65.116.22.250/32",
        "212.187.221.2/32",
        "4.16.171.17/32",
        "65.125.247.113/32",
        "162.249.119.2/32",
        "162.249.116.2/32",
        "44.227.215.0/24",
        "202.64.70.83/32",
        "202.64.70.85/32",
        "54.203.114.197/32",
        "52.32.57.234/32",
        "54.203.207.205/32",
        "54.189.212.37/32",
        "52.37.242.173/32",
        "54.190.202.29/32",
        "54.70.94.22/32",
        "35.155.130.221/32",
        "34.215.138.12/32",
        "50.220.40.2/32",
        "50.220.40.4/32",
        "27.115.41.179/32",
        "50.112.76.13/32",
        "52.32.228.151/32",
        "35.165.93.232/32",
        "12.26.0.2/32",
        "12.26.0.18/32",
        "34.216.54.173/32",
        "34.215.43.232/32",
        "52.36.123.183/32",
        "204.107.141.0/24",
        "4.14.104.185/32",
        "12.196.122.120/32",
        "174.78.224.152/29",
        "209.116.250.128/27",
        "66.193.45.220/30",
        "70.36.63.96/29",
        "210.48.139.166/32",
        "210.48.139.162/32",
        "210.48.139.163/32",
        "80.169.198.64/27",
        "101.102.183.32/30",
        "82.99.40.210/32",
        "210.176.46.154/32",
        "210.176.153.27/32",
        "213.86.153.121/32",
        "34.201.136.89/32",
        "34.227.14.85/32",
        "54.92.212.21/32",
        "204.107.141.244/32",
        "54.172.142.36/32",
        "54.174.10.49/32",
        "4.28.138.185/32",
        "12.26.0.32/28"
      ],
      "hybridSearchWhitelist": [
        "50.216.96.0/24",
        "203.208.197.97/32",
        "103.143.30.2/32",
        "101.102.191.106/32",
        "180.87.154.82/32",
        "4.34.185.2/32",
        "207.225.46.146/32",
        "80.227.140.250/32",
        "113.29.19.0/24",
        "172.78.224.154/32",
        "4.34.96.234/32",
        "65.116.22.250/32",
        "212.187.221.2/32",
        "4.16.171.17/32",
        "65.125.247.113/32",
        "162.249.119.2/32",
        "162.249.116.2/32",
        "44.227.215.0/24",
        "202.64.70.83/32",
        "202.64.70.85/32",
        "54.203.114.197/32",
        "52.32.57.234/32",
        "54.203.207.205/32",
        "54.189.212.37/32",
        "52.37.242.173/32",
        "54.190.202.29/32",
        "54.70.94.22/32",
        "35.155.130.221/32",
        "34.215.138.12/32",
        "50.220.40.2/32",
        "50.220.40.4/32",
        "27.115.41.179/32",
        "50.112.76.13/32",
        "52.32.228.151/32",
        "35.165.93.232/32",
        "12.26.0.2/32",
        "12.26.0.18/32",
        "34.216.54.173/32",
        "34.215.43.232/32",
        "52.36.123.183/32",
        "204.107.141.0/24",
        "4.14.104.185/32",
        "12.196.122.120/32",
        "174.78.224.152/29",
        "209.116.250.128/27",
        "66.193.45.220/30",
        "70.36.63.96/29",
        "210.48.139.166/32",
        "210.48.139.162/32",
        "210.48.139.163/32",
        "80.169.198.64/27",
        "101.102.183.32/30",
        "82.99.40.210/32",
        "210.176.46.154/32",
        "210.176.153.27/32",
        "213.86.153.121/32",
        "34.201.136.89/32",
        "34.227.14.85/32",
        "54.92.212.21/32",
        "204.107.141.244/32",
        "54.172.142.36/32",
        "54.174.10.49/32",
        "4.28.138.185/32",
        "12.26.0.32/28"
      ],
      "idmApiWhitelist": [
        "50.216.96.0/24",
        "203.208.197.97/32",
        "103.143.30.2/32",
        "101.102.191.106/32",
        "180.87.154.82/32",
        "4.34.185.2/32",
        "207.225.46.146/32",
        "80.227.140.250/32",
        "113.29.19.0/24",
        "172.78.224.154/32",
        "4.34.96.234/32",
        "65.116.22.250/32",
        "212.187.221.2/32",
        "4.16.171.17/32",
        "65.125.247.113/32",
        "162.249.119.2/32",
        "162.249.116.2/32",
        "44.227.215.0/24",
        "202.64.70.83/32",
        "202.64.70.85/32",
        "54.203.114.197/32",
        "52.32.57.234/32",
        "54.203.207.205/32",
        "54.189.212.37/32",
        "52.37.242.173/32",
        "54.190.202.29/32",
        "54.70.94.22/32",
        "35.155.130.221/32",
        "34.215.138.12/32",
        "50.220.40.2/32",
        "50.220.40.4/32",
        "27.115.41.179/32",
        "50.112.76.13/32",
        "52.32.228.151/32",
        "35.165.93.232/32",
        "12.26.0.2/32",
        "12.26.0.18/32",
        "34.216.54.173/32",
        "34.215.43.232/32",
        "52.36.123.183/32",
        "204.107.141.0/24",
        "4.14.104.185/32",
        "12.196.122.120/32",
        "174.78.224.152/29",
        "209.116.250.128/27",
        "66.193.45.220/30",
        "70.36.63.96/29",
        "210.48.139.166/32",
        "210.48.139.162/32",
        "210.48.139.163/32",
        "80.169.198.64/27",
        "101.102.183.32/30",
        "82.99.40.210/32",
        "210.176.46.154/32",
        "210.176.153.27/32",
        "213.86.153.121/32",
        "34.201.136.89/32",
        "34.227.14.85/32",
        "54.92.212.21/32",
        "204.107.141.244/32",
        "54.172.142.36/32",
        "54.174.10.49/32",
        "4.28.138.185/32",
        "12.26.0.32/28"
      ],
      "searchWhitelist": [
        "50.216.96.0/24",
        "203.208.197.97/32",
        "103.143.30.2/32",
        "101.102.191.106/32",
        "180.87.154.82/32",
        "4.34.185.2/32",
        "207.225.46.146/32",
        "80.227.140.250/32",
        "113.29.19.0/24",
        "172.78.224.154/32",
        "4.34.96.234/32",
        "65.116.22.250/32",
        "212.187.221.2/32",
        "4.16.171.17/32",
        "65.125.247.113/32",
        "162.249.119.2/32",
        "162.249.116.2/32",
        "44.227.215.0/24",
        "202.64.70.83/32",
        "202.64.70.85/32",
        "54.203.114.197/32",
        "52.32.57.234/32",
        "54.203.207.205/32",
        "54.189.212.37/32",
        "52.37.242.173/32",
        "54.190.202.29/32",
        "54.70.94.22/32",
        "35.155.130.221/32",
        "34.215.138.12/32",
        "50.220.40.2/32",
        "50.220.40.4/32",
        "27.115.41.179/32",
        "50.112.76.13/32",
        "52.32.228.151/32",
        "35.165.93.232/32",
        "12.26.0.2/32",
        "12.26.0.18/32",
        "34.216.54.173/32",
        "34.215.43.232/32",
        "52.36.123.183/32",
        "204.107.141.0/24",
        "4.14.104.185/32",
        "12.196.122.120/32",
        "174.78.224.152/29",
        "209.116.250.128/27",
        "66.193.45.220/30",
        "70.36.63.96/29",
        "210.48.139.166/32",
        "210.48.139.162/32",
        "210.48.139.163/32",
        "80.169.198.64/27",
        "101.102.183.32/30",
        "82.99.40.210/32",
        "210.176.46.154/32",
        "210.176.153.27/32",
        "213.86.153.121/32",
        "34.201.136.89/32",
        "34.227.14.85/32",
        "54.92.212.21/32",
        "204.107.141.244/32",
        "54.172.142.36/32",
        "54.174.10.49/32",
        "4.28.138.185/32",
        "12.26.0.32/28"
      ]
    },
    "account": "std-stg-1",
    "certs": {
      "forwarders": {
        "provider": "VaultPKI"
      },
      "inputs": {
        "provider": "VaultPKI"
      },
      "saml": {
        "provider": "VaultPKI"
      },
      "samlIDP": {
        "provider": "VaultPKI"
      },
      "server": {
        "provider": "VaultPKI"
      }
    },
    "cloud": "AWS",
    "clusterMaster": {
      "instanceType": "c5.xlarge"
    },
    "customerType": "Dev",
    "features": {
      "dataArchive": true,
      "s3BundleReplication": true
    },
    "indexerCluster": {
      "count": 3,
      "instanceType": "i3.large"
    },
    "maintenanceWindow": {},
    "network": "default",
    "premiumApps": {
      "enterpriseSecurity": {},
      "enterpriseSecurityPCICP": {},
      "itsi": {
        "ensure": "present",
        "releaseType": "Unreleased",
        "targets": [
          "sh1"
        ],
        "version": "4.17.0-27514"
      },
      "pci": {},
      "premiumAppSettings": {},
      "stream": {},
      "vmware": {}
    },
    "region": "us-east-1",
    "releaseInfo": {
      "puppetVersion": "staging",
      "splunkVersion": "9.0.2209.4",
      "terraformVersion": "main"
    },
    "searchHeads": [
      {
        "app": "itsi",
        "config": [
          {
            "app": "SA-ITOA",
            "conf": "app_common_flags",
            "key": "disabled",
            "stanza": "itsi-service-sandbox",
            "value": "false"
          }
        ],
        "instanceType": "c6i.4xlarge",
        "name": "sh1",
        "primary": true
      }
    ],
    "secrets": {}
  },
  "reviewReason": "",
  "createdAt": "2023-03-17T19:39:37.494626237Z",
  "createdBy": "ddo@splunk.com",
  "labels": {
    "enterprise.cloud.splunk8s.io/account": "std-stg-1",
    "enterprise.cloud.splunk8s.io/cloud": "aws",
    "enterprise.cloud.splunk8s.io/ephemeral": "true",
    "enterprise.cloud.splunk8s.io/network": "default",
    "enterprise.cloud.splunk8s.io/owner": "ddo",
    "enterprise.cloud.splunk8s.io/region": "us-east-1"
  },
  "reviewStatus": "",
  "reviewedBy": "",
  "state": "",
  "status": {
    "certs": {
      "forwarders": {
        "body": "vault://cloud-sec/data/std/stg/stacks/datdo-test/certs/forwarders/certificate_body",
        "chain": "vault://cloud-sec/data/std/stg/stacks/datdo-test/certs/forwarders/certificate_chain",
        "password": "vault://cloud-sec/data/std/stg/stacks/datdo-test/certs/forwarders/password",
        "privateKey": "vault://cloud-sec/data/std/stg/stacks/datdo-test/certs/forwarders/private_key",
        "provider": "VaultPKI",
        "rootCA": "vault://cloud-sec/data/std/stg/stacks/datdo-test/certs/forwarders/root_ca",
        "serial": "45:bd:f0:47:88:74:62:33:69:7c:8e:6a:33:7f:3a:3f:91:98:2b:68"
      },
      "inputs": {
        "body": "vault://cloud-sec/data/std/stg/stacks/datdo-test/certs/inputs/certificate_body",
        "chain": "vault://cloud-sec/data/std/stg/stacks/datdo-test/certs/inputs/certificate_chain",
        "password": "vault://cloud-sec/data/std/stg/stacks/datdo-test/certs/inputs/password",
        "privateKey": "vault://cloud-sec/data/std/stg/stacks/datdo-test/certs/inputs/private_key",
        "provider": "VaultPKI",
        "rootCA": "vault://cloud-sec/data/std/stg/stacks/datdo-test/certs/inputs/root_ca",
        "serial": "12:66:36:1c:3d:67:2f:83:5d:e3:d8:21:18:e6:46:49:d4:55:67:f2"
      },
      "saml": {
        "body": "vault://cloud-sec/data/std/stg/stacks/datdo-test/certs/saml/certificate_body",
        "chain": "vault://cloud-sec/data/std/stg/stacks/datdo-test/certs/saml/certificate_chain",
        "password": "vault://cloud-sec/data/std/stg/stacks/datdo-test/certs/saml/password",
        "privateKey": "vault://cloud-sec/data/std/stg/stacks/datdo-test/certs/saml/private_key",
        "provider": "VaultPKI",
        "rootCA": "vault://cloud-sec/data/std/stg/stacks/datdo-test/certs/saml/root_ca",
        "serial": "7c:6e:5e:aa:03:a9:05:1d:25:9d:a6:b1:44:dc:d0:77:a8:61:f7:90"
      },
      "samlIDP": {
        "body": "vault://cloud-sec/data/std/stg/stacks/datdo-test/certs/samlIDP/certificate_body",
        "chain": "vault://cloud-sec/data/std/stg/stacks/datdo-test/certs/samlIDP/certificate_chain",
        "password": "vault://cloud-sec/data/std/stg/stacks/datdo-test/certs/samlIDP/password",
        "privateKey": "vault://cloud-sec/data/std/stg/stacks/datdo-test/certs/samlIDP/private_key",
        "provider": "VaultPKI",
        "rootCA": "vault://cloud-sec/data/std/stg/stacks/datdo-test/certs/samlIDP/root_ca",
        "serial": "7c:8c:55:4f:f3:c2:40:a1:60:2d:ce:6b:85:6f:b2:de:b0:6b:bc:13"
      },
      "server": {
        "body": "vault://cloud-sec/data/std/stg/stacks/datdo-test/certs/server/certificate_body",
        "chain": "vault://cloud-sec/data/std/stg/stacks/datdo-test/certs/server/certificate_chain",
        "password": "vault://cloud-sec/data/std/stg/stacks/datdo-test/certs/server/password",
        "privateKey": "vault://cloud-sec/data/std/stg/stacks/datdo-test/certs/server/private_key",
        "provider": "VaultPKI",
        "rootCA": "vault://cloud-sec/data/std/stg/stacks/datdo-test/certs/server/root_ca",
        "serial": "29:59:44:48:6d:76:a0:06:fb:b5:0b:d4:89:59:3e:bd:4c:40:af:2d"
      }
    },
    "conditions": [
      {
        "lastTransitionTime": "2023-03-13T19:38:10Z",
        "reason": "Finished",
        "status": "True",
        "type": "SoftwareConvergence"
      },
      {
        "lastTransitionTime": "2023-03-17T19:41:39Z",
        "message": "Apply complete! Resources: 3 added, 5 changed, 3 destroyed.",
        "reason": "Complete",
        "status": "True",
        "type": "InfrastructureConvergence"
      }
    ],
    "createdTime": {
      "adminPassword": "2023-03-13T19:09:02Z",
      "internalAutomationPassword": "2023-03-13T19:09:02Z",
      "internalObservabilityPassword": "2023-03-13T19:09:03Z"
    },
    "historicalMaxIndexerClusterCount": 3,
    "initialConditions": [
      {
        "creationTimestamp": "2023-03-13T19:07:01Z",
        "lastTransitionTime": "2023-03-13T19:12:21Z",
        "reason": "Complete",
        "status": "True",
        "type": "InfrastructureConvergence"
      },
      {
        "creationTimestamp": "2023-03-13T19:07:01Z",
        "lastTransitionTime": "2023-03-13T19:38:10Z",
        "reason": "Finished",
        "status": "True",
        "type": "SoftwareConvergence"
      }
    ],
    "lastGeneration": 6,
    "lastProvisionedJobType": "apply",
    "lastProvisionedPlanSummary": "Apply complete! Resources: 3 added, 5 changed, 3 destroyed.",
    "lastProvisionedStatus": "Complete",
    "lastProvisionedTimestamp": "2023-03-17T19:41:39Z",
    "lastProvisionedURL": "https://jenkins.stg.splunkcloud.systems/job/build-stack/233649/",
    "lastPuppetJobRef": "splunk-cloud-operator-staging/datdo-test-h67jg",
    "objectChecksums": {
      "hieradata": {
        "datdo-test/cluster_master": {
          "generated": "8a80554c91d9fca8acb82f023de02f11",
          "persisted": "8a80554c91d9fca8acb82f023de02f11"
        },
        "datdo-test/idx": {
          "generated": "934497a882df035483f49f794e47c5ff",
          "persisted": "28d78e1f39d5d74da64303f421561429"
        },
        "datdo-test/sh1": {
          "generated": "0aba6261e913ce8818477d05ecb14545",
          "persisted": "8caba9c3bc100850fdfc43af0ac175ac"
        },
        "datdo-test/stack": {
          "generated": "6b04aceab8a4a7887eba6360f499bd12",
          "persisted": "55fb4b74da52204f3112d860b08fd4fe"
        }
      },
      "infrastructureDefinition": {
        "generated": "e482c19e1460678bde5d102598834485",
        "persisted": "4c3476a61dca481c6b43c1f44325cdad"
      },
      "releaseInfo": {
        "persisted": "c92e09e4f4e4183ece549eb8f4958492"
      }
    },
    "provisioned": true,
    "provisionerOutput": {
      "account_id": "594195655983",
      "account_name": "std-stg-1",
      "bastion_for_access": "bastion.vpc-802bd3fb.stg.splunkcloud.systems",
      "cloud_provider": "aws",
      "cluster_master_eip": "52.72.150.69",
      "docker_tag": "v0.0.107",
      "indexers_eips": "[\"54.209.203.67\",\"52.70.148.192\",\"52.72.246.217\"]",
      "kms_key_id": "e4c9ff3d-1889-4ae6-b936-a4c8c61fc61d",
      "last_executed": "2023-03-17T19:41:11Z",
      "last_executed_fmt": "2023-03-17 19:41:11",
      "modules_branch": "v0.0.120",
      "region": "us-east-1",
      "s2_bucket_name": "s2-objects-default-vpc-802bd3fb-us-east-1-stg",
      "s3_splunk_apps_bucket_name": "splunkapps-default-vpc-802bd3fb-us-east-1-stg",
      "s3_splunk_stack_state_bucket_name": "state-default-vpc-802bd3fb-us-east-1-stg",
      "s3_utility_bucket_name": "utility-default-vpc-802bd3fb-us-east-1-stg",
      "search_head_ip_sh1": "34.193.161.187",
      "shc_dns_endpoints": "{}",
      "single_instance": "false",
      "stack": "datdo-test",
      "tf_branch": "main",
      "userdata_branch": "latest"
    },
    "releaseInfo": {
      "puppetVersion": "staging",
      "splunkVersion": "9.0.2209.4",
      "terraformVersion": "main"
    },
    "secrets": {
      "adminPassword": "vault://cloud-sec/data/std/stg/stacks/datdo-test/admin/plaintext",
      "indexManagerPassword": "vault://cloud-sec/data/std/stg/stacks/datdo-test/index_manager/plaintext",
      "internalAutomationPassword": "vault://cloud-sec/data/std/stg/stacks/datdo-test/internal_automation/plaintext",
      "internalITSIPassword": "vault://cloud-sec/data/std/stg/stacks/datdo-test/internal_itsi/plaintext",
      "internalObservabilityPassword": "vault://cloud-sec/data/std/stg/stacks/datdo-test/internal_observability/plaintext",
      "opsAdminPassword": "vault://cloud-sec/data/std/stg/stacks/datdo-test/ops_admin/plaintext",
      "pass4SymmKey": "vault://cloud-sec/data/std/stg/stacks/datdo-test/p4sk/plaintext",
      "replicationSSLPassword": "vault://cloud-sec/data/std/stg/stacks/datdo-test/ssl_repl/plaintext",
      "shcPass4SymmKey": "vault://cloud-sec/data/std/stg/stacks/datdo-test/shc_p4sk/plaintext",
      "splunkSecret": "vault://cloud-sec/data/std/stg/stacks/datdo-test/secret/plaintext",
      "ssaiPass4SymmKey": "vault://cloud-sec/data/std/stg/stacks/datdo-test/ssaip4sk/plaintext"
    },
    "terminationDate": "2023-03-28T19:07:00Z"
  },
  "version": 6
}
  ```
</details>
  

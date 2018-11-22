# Gitlab CI for Production

**Make sure to use yarn instead of npm for some weird reason**

1. create a deploy user "/home/deploy"
2. give deploy user admin 
3. install nvm
4. create ssh-key pair in /home/deploy/.ssh/
5. copy & paste SSH_KEY as variable in CI secret env
6. run `cat .ssh/id_rsa.pub >> .ssh/authorized_keys` as deploy user while inside /home/deploy to allow deploy to ssh into it self
7. run `ssh-keyscan HOSTNAMEHERE` as deploy user
8. copy & paste output to SSH_KNOWN_HOSTS in CI secret env
9. fill in BUILD_ENV in CI secret env
10. create /home/deploy/postDeployScript, make sure the deploy user has sudo: 
```
#!/bin/bash

cd /home/deploy/app
npm i
npm run build
```
## RealUp App: React App to solve the issue of Impostor Syndrome using therapeutic exercises, quotes and action plans.
MomsCanCodepgh Hackathon Application

### Github repo: https://github.com/alteredco/RealUp.git

### Install latest version of node:

```
nvm install 10.11.0
nvm use 10.11.0
nvm alias default 10.11.0
node -v
```

should return: V10.11.0

### Clone the Repo to start:

``` 
Git clone https://github.com/alteredco/RealUp.git
```
### Install the dependencies and Start the App!

``` 
npm install 
npm start
```

### When adding react / npm components

```
npm install --save react-router
```
this --save, saves the dependcies of react-router (or the package of your choice) to package.json (and so does not break the app after you push to your-branch, merge to master and re-pull latest master with git pull origin master).

###File System Overview

components folder (for our app componenets for example as ):

```
/components/button
/components/modal
/components/nav
/components/form
```

pages folder (for our app pages such as):
```
pages/Home
pages/explanations
pages/exercises
pages/about
```

### Git strategy to reduce conflicts! 
Always create a branch first
```
git branch your-branch
git checkout your-branch
```
This will create and switch to your branch
Never push to master and merge a non working app to master.
```
git add .
git commit -m "my changes are..."
git push origin your-branch
```
-In github create a pull request - this will check the branch against master and allow you to resolve conflicts either online in github browser, or on your local instance of the app.

-When satisified, (perhaps after changing locally and doing a new commit and push to your branch) merge the branch to master.


##Git cheat sheet:

1.
```
Git Status
```

will show you are on branch <your branch….>
always pull down the most recent version of master before you start any changes

2.
```
Git checkout master 
```

3. 
```
git pull
```
Now you are on latest version but you can’t code in master so create or if already there switch to your branch

To switch from master to your branch (and create it, if it does not exist)

4. 
```
git checkout -b your-branch
```

or if does exist and you just need to switch to your branch….
```
git checkout your-branch
```

Now you can start making your changes….

5.
```
 Git add .
```
6.
```
 Git commit -m “desc of changes to be specific as possible”
```

7.
```
 Git push origin <your branch> 
```

Never push to Master!

Go to the GitHub repo in the browser now to create a pull request, check for conflicts, if no conflict merge to master and your done.

After merging to master on the browser…

8.
```
 Git Status
```

9. 
```
Git checkout master 
```

****(this is really important - you must pull down latest master, to see your new changes that are newly merged in master and make sure you have a working app or you could have introduced bugs. also if you don’t do this you will be working on a older version that everyone else!!!).
This will switch to masterbranch***

BUT YOUR CODE in visual code HAS NOT SWITCHED YET!!!! This can be confusing and causes people to loose changes as they think they have latest master but they don’t.

10.
```
 git pull 
```

***—>>>>> to get what is in the master to show in visual code so you don’t end up commit older version of code***

When you checkout master, you also have to pull (also a pull is same as a git Fetch followed by git Merge).

This sounds complicated but believe me this works!! There are many more commands we may beed to use, but this is the every day, team coding startegy!

Installing Materialize:
https://materializecss.com/getting-started.html

### Directory structure

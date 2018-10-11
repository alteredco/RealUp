## RealUp App: React App to solve the issue of Imposter Syndrome using therapeutic exercises, quotes and action plans.
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
### Start the App

``` 
npm install to install all depencies
npm start
```

### When adding react / npm components

```
npm install react-bootstrap --save
```
this saves the dependcies to package.json (and so does not break the app after you push to your-branch, merge to master and re-pull latest master with git pull origin master).

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

### When making changes
Always create a branch first
```
git branch -b your-branch
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


### Directory structure

## RealUp App: React App to solve the issue of Impostor Syndrome using therapeutic exercises, quotes and action plans.
MomsCanCodepgh Hackathon Application

### Github repo: https://github.com/alteredco/RealUp.git
### Heroku: https://git.heroku.com/realupapp.git


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
### Run e2e tests with the Cypress.io

Open the Cypress application

```
./node_modules/.bin/cypress open
```
- Click 'Run all specs' from the Cypress application
- Test set starts to rolling on Test Runner

Cypress opens the tests in a browser installed on your system. It's called Test Runner: on the left side you can see your test set and on the right side your application to be tested. 

- Check the test results form the Test Runner

Test cases can be found from the integration folder.
```
cd RealUp/cypress/integration
```

Problems solving:
If Cypress application will not start, check that you have run: 'npm install' and 'npm start'.
If Cypress application doesn't open after npm commands, you can try to install it to your local computer
and try to open again with the following commands:

```
npm install cypress --save-dev
./node_modules/.bin/cypress open
``` 
If test case is red, the next step is to study test from the Test Runner and check why it didn't passed.
Choose the not passed test from the Test Runner and click the steps through and try to find the reason.
Test Runner shows each step of the test and you can see the result what has happened in each steps.
Maybe some of the code has changed and caused a problem or the application has a bug.  

### To quickly create android APK file from the repo:
```
npm install
npm run build:cordova
cordova run android
```
Built the following apk(s):
        /realup/platforms/android/app/build/outputs/apk/debug/app-debug.apk
Email this apk to android phone user.

For issues go to Android Cordova setup and debug instructions below in readme

### When adding react / npm components

```
npm install --save react-router
```
this --save, saves the dependcies of react-router (or the package of your choice) to package.json (and so does not break the app after you push to your-branch, merge to master and re-pull latest master with git pull origin master).

### File System Overview

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

## Installing Materialize:
Directions: https://materializecss.com/getting-started.html
Add the CDN css and js files to Index.html.

## Android Cordova Build with create react app structure

npm install -g cordova

Change the scripts in package.json

Assumption:

Regular build will be for react app.
Cordova build will be for cordova app.
There wont be 2 builds at same time.

### For Windows
```
+ "start": "npm run remove:www && react-scripts start",
- "start": "react-scripts start"
+ "build": "npm run remove:www && react-scripts build",
- "build": "react-scripts build"
+ "build:cordova": "npm run remove:www && react-scripts build && node __script.js && move build www",
"test": "react-scripts test --env=jsdom",
+ "eject": "npm run remove:www && react-scripts eject",
- "eject": "react-scripts eject"
+ "remove:www": "if exist www rd /s /q www"
```

### For Mac
```
+ "start": "npm run remove:www && react-scripts start",
- "start": "react-scripts start"
+ "build": "npm run remove:www && react-scripts build",
- "build": "react-scripts build"
+ "build:cordova": "npm run remove:www && react-scripts build && node __script.js && mv build www",
"test": "react-scripts test --env=jsdom",
+ "eject": "npm run remove:www && react-scripts eject",
- "eject": "react-scripts eject"
+ "remove:www": "rm -rf www"

```


 Package.json final version MAC looks like:
 
```

"start": "npm run remove:www && react-scripts start",
"build": "npm run remove:www && react-scripts build",
"build:cordova": "npm run remove:www && react-scripts build && node __script.js && mv build www",
"test": "react-scripts test --env=jsdom",
"eject": "npm run remove:www && react-scripts eject",
"remove:www": "rm -rf www"
```
Package.json final version WINDOWS looks like:
Nitu to add code here....



create-react-app builds into build folder. But cordova needs application content to be in www folder. So above build:cordova will move the build folder to www.

www is cordova build folder thats needs to built for cordova app only. so this folder should be removed when building for react app. so remove:www validation is added to the scripts.

### add __script.js file in the root directory and copy the below code into the file.
```
let FS= require('fs');

// read the index.html from build folder
let data = FS.readFileSync('./build/index.html', 'utf8');

function insertContent(fullContent, beforeWhat, newContent) {
    // get the position before which newContent has to be added
    const position = fullContent.indexOf(beforeWhat);

    // since splice can be used on arrays only
    let fullContentCopy = fullContent.split('');
    fullContentCopy.splice(position, 0, newContent);

    return fullContentCopy.join('');
}

```

 will add the <meta> tags needed for cordova app
 ```
const afterAddingMeta = insertContent(data, "<link", 
`<meta http-equiv="Content-Security-Policy" content="default-src 'self' data: gap: https://ssl.gstatic.com 'unsafe-eval'; style-src 'self' 'unsafe-inline'; media-src *; img-src 'self' data: content:;">`+
`<meta name="format-detection" content="telephone=no">`+
`<meta name="msapplication-tap-highlight" content="no">`);

will add <script> pointing to cordova.js
const afterAddingScript = insertContent(afterAddingMeta, "<script", `<script type="text/javascript" src="cordova.js"></script>`);

updates the index.html file

FS.writeFile('./build/index.html', afterAddingScript, 'utf8', (err)=> {
    if(err) {
        throw err
    };
})
```

This script will add the necessary tags to index.html for cordova build.

cd out of create react app folder
cordova create <alternateAppName>
(Use different name to your react app name)
-->Creating a new cordova project.

copy the config.xml from cordova project to react-with-cordova project.
Note: May need to copy other folders based on the project requirements. For this project I dont need rest.

Note: May need to change id value in <widget id="com.example.sample"> of config.xml based on project name.
```
cd <appfolder>
```
## React App
### Start React app

```
npm start
```

Starts the regular create-react-app on localhost:3000/

### Build for React app
```
npm run build
```

Builds production build for react app. Also creates the build folder in your app.

## Cordova App
### Build for Cordova app
npm run build:cordova

builds the app by appending tags to index.html which will be needed for cordova builds

cordova platform add android

cordova build android 

--->BUILD SUCCESSFUL in 29s
46 actionable tasks: 46 executed
Built the following apk(s):
        /Users/louise/momscancode/realup/platforms/android/app/build/outputs/apk/debug/app-debug.apk
Email this to android phone user to test


Or connect android phone to your PC and enter
 cordova run android

## Option Browser Platform
### Add Browser platform
 cordova platform add browser

### Browser Build
cordova build browser

Note: This build needs www directory which is created from npm run build:cordova
### Run in Browser
cordova run browser

Runs the browser build in browser at localhost:8000 so you can debug

Debug:
After each issue:
```
npm run build:cordova
cordova run android
```

to create a new apk file 
```
cordova build android
```

To Debug:https://geeklearning.io/apache-cordova-and-remote-debugging-on-android/
Enable debug on device, hook it up to your machine, 
then when you run the android app you can go to  chrome://inspect/#devices and inspect the console!

## To add a splashscreen to cordova

cordova plugin add cordova-plugin-splashscreen
https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-splashscreen/

To remove android to re build from fresh

cordova platform remove android

## Heroku
```
git remote add heroku https://git.heroku.com/realupapp.git

git remote -v 
(check heroku added as repo)

heroku login
git push heroku master
```

link to heroku app https://realupapp.herokuapp.com/

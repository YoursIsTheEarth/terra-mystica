This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn start-api`

Runs the back-end of the app on [http://localhost:5000](http://localhost:5000).<br />
Any errors will be displayed in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

### Requirements

This application utilize python flask as its back-end and ReactJS as its front-end. You should have a git-hub account for working on this application.

- Python: https://www.python.org/downloads/
  - Pip: https://pip.pypa.io/en/stable/installing/
- Flask: https://flask.palletsprojects.com/en/1.1.x/
- Node: https://nodejs.org/en/download/
- Git: https://git-scm.com/downloads (simply for source control)

### Basic Git

1. 'git clone ' clones the repository to your local machine in the directory in which the command ran.
2. 'git pull' pulls updates from git-hub into your local repository.
3. 'git checkout branch-name' swaps you onto the branch branch-name. Adding '-b' in between checkout and branch-name will create a new branch if branch-name does not exist.
4. "git add ." stages all changes in the repo for a commit.
5. 'git commit -m "message descibing commit"' creates a commit with the staged changes with the provided message.
6. 'git push origin branch-name' pushes the new commits to the git-hub repo. Adding the flag '-u' in between push and origin creates the branch on the remote if it does not yet exist.
7. Do not write on master.
8. Do not push to master.
9. Regularly pull master by swapping to the master and running git pull. (Should be done when others have merged changes into master on git-hub)
10. Regularly update your branch with master by running 'git merge master' while on your branch. (Should be done when others have merged changes into master on git-hub)

### Set-up

1. Install all the necessary software listed in the requirements above.
2. In a terminal, navigate into the map-maker directory.
3. In the terminal, run "npm install" to install the necessary modules.
4. Material UI may not have installed with the basic npm install command; check the node_modules folder for the "@material-ui" folder. If it is missing, run "npm install @material-ui/core" and "npm install @material-ui/icons".
5. After installing all packages, running "yarn start" in the terminal will start the front-end of the application.
6. Open a new terminal and navigate to the map-maker directory again.
7. Once there, enter the api folder (cd api), and run "python -m venv venv".
8. Next, run "venv\Scripts\activate".
9. The python virtual environment has been started. Now run "pip install -r requirements.txt" to install all the necessary packages for the back-end.
10. Open a new terminal and again navigate to the map-maker directory; running "yarn start-api" will run the back-end.
11. At this point, your application should be up and running on localhost:3000 with a working back-end.

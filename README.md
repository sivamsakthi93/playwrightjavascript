playwright javascript

first step to learn javascript 
1. Need to insatll the node.js
2. Verify the node insatllation in terminal node-v it will display the version
3. Install vs code for the IDE
4. Read first varibles,function,datatype,jsobject,array,conditionalstatement, control statement  
//To run the java script 
node filename.js
ex:node array.js

// playwright installation in current project folder
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
npm init playwright@latest
//commands to run the testcases
npx playwright test 
npx playwright show-report
npx playwright test example.js
npx playwright test example.spec.js --project=chromium
npx playwright test example.spec.js --project=chromium --headed

//we can change the playwright.config.js file for all the action instead of doing in the command example open alway in headed mode
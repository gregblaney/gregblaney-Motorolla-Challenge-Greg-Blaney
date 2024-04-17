# Automation Coding Test

This project contains a completed version of the web app from [Angular's Tour of Heroes tutorial](https://angular.io/tutorial/tour-of-heroes)

The goal of this tech test is:
- Install and configure the Cypress Framework
- Create a basic e2e test of one the key application paths
- Create a component test for one of the application components
- Update the readme.md file on how to run the cypress test suite
- Ensure the test results are documented

Bonus Points:
- Add an additional hard coded hero

You should clone the repo to your local machine and not commit any chnages back to source control

To Run The Code:

Firstly ensure you have the correct dependencies installed on your local machine, assuming you are running Windows this [Guide](https://phoenixnap.com/kb/install-node-js-npm-on-windows) provides the steps.

Once you have cloned the repo and are in the correct directory run the following commands:

`npm install`

`npm run dev`

The application can then be accessed on your local machine at the following url:

`http://localhost:4200`


RUNNING THE CYPRESS TEST SUITE FOR THIS CHALLENGE

Here is a step-by-step guide for running tests on Cypress:

1.  Ensure `http://localhost:4200` is running by opening a terminal in IDE and run

        npm run dev
    
    This command will start a development server that hosts the site locally

2.  Next we need to open cypress using the following command

        npx cypress open

    The Cypress Test Runner will open. Here you can choose from either e2e or component tests.

    No the user can decide whether to select and execute individual test files or test suites.

    When testing is running screenshots will be taken and stored in the following location /cypress/downloads/screenshots

3.  To run the cypress tests in headless mode use the following command

        npx cypress run

    Cypress will automatically search for test files and run these.

    In the Terminal it will show you the results of the tests similar to the following


           Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  createNewHero.cy.js                      00:13        1        1        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  existingSuperHero.cy.js                  00:07        1        1        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  nonExistantHeroes.cy.js                  00:09        1        1        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        00:30        3        3        -        -        -  

Executing tests in this manner will also record a video of the test to be used for evidence and can be found /cypress/downloads/videos 

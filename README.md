<p align="center">
    <a href="https://webdriver.io/">
        <img alt="WebdriverIO" src="http://www.christian-bromann.com/wdio.png" width="546">
    </a>
</p>

<p align="center">
Next-gen browser automation test framework for Node.js with Cucumber
</p>



### Table of contents

- [Description](#description)
    - [File organization](#fileOrganization)
    - [Prerequisites](#prerequisites)
- [How to use](#how-to-use)
    - [Instalation](#instalation)
    - [Run test cases](#runTest)
    - [Create a new test case](#createNewTest)
- [References](#references)
---
## Description

End to end testing for NATO project with Cucumber and WebdriverIO. The base of framework is built with Javascript programming language and Gherkin.

### File organization

 | Path | Description |
| :--- | :---: |
|./components | We create all the necessary folders to organize our test cases |
|components/* | Inside we find other folders with the same name as the feature files found in the features folder |
| components/*/steps.js | in this file we put the descriptions of the steps developed in the Gherkin file (Given, When, Then) |
| components/*/*Function.js| in this file we put the necessary functions to execute the code inside the steps file| 
| components/support | we put the functions that are in common use |
| ./features | we create our test cases written in Gherkin |
| ./pages | we create all file that has a elements of pages |
|package.json | we have all the information of the project dependencies |
| wdio.conf.js| we have all the configuration of project |


### Prerequisites

You’ll need Node.js installed. Install at least v12.16.1 or higher as this is the oldest active LTS version.

--- 

## How to use 

### Instalation
To install the framework, you must follow the following steps:   

1. ``` 
    git clone https://steps.everis.com/git/NEDBNG/nedb_api_test.git
2. ```
    npm install
### Run test cases 

Now, time to run your tests!
To do so, just run:
```
    npx wdio wdio.conf.js
```

### Create a new test case

To create a new test case, you must follow the following steps:

1. ``` 
    Create a new user story with the acceptad criteria in the feature folder
2. ```
    Implement the steps definitions in the steps file
3. ```
    Create new function file to implemente the function you need to complete the steps file
4. ````
    Create a new file in the ./page folfer to put the page elements
5. ```
    Run the test cases
    ```

---
## References

[WebdriverIO API page](https://webdriver.io/docs/api.html)

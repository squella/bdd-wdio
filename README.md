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
- [How to use](#how-to-use)
    - [Prerequisites](#prerequisites)
    - [Instalation](#instalation)
    - [Run test cases](createTest)
- [References](#references)
---
## Description

End to end testing with Cucumber and WebdriverIO. The base of framework is built with Javascript programming language and Gherkin.

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

---
## How to use 

### Prerequisites

You’ll need Node.js installed. Install at least v12.16.1 or higher as this is the oldest active LTS version.

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
---
## References

[WebdriverIO docs page](https://webdriver.io/docs/api.html)

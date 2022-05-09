# robot-npm-varmaster

*1.0.0*

npm package developed for the robot project. It helps you to work with different types of vars and config file.

## Install
```shell
npm install robot-npm-varmaster --save
```

## Usage
* including to the project
```js
const vars = require('robot-npm-varmaster');
```

* Set your variables. 

vars.setVars([unsavableVars]: {}, [savableVars]: {})

```js
// Example
vars.setVars(
    {                        // Here are unsavable variables
        username: "Johnny",
        status: "online"
    },
    {                        // Here are savable variables
        host: "localhost",
        post: 8080
    }
)
```

* Save savable variables.

vars.save([pathToYourJSON]:string);

```js
vars.save('./config.json');
```
**note:** The method save is overwriting data to your file and everything that had been written there before will be removed.
To fix it put variables from the vars.saved to the object with savable variables in method setVars.

* vars.setVar([key]:string, [value]:any, [is_savable]:boolean);
The parameter is_savable means that variable is savable if it's true and not if it's false.
```js
// Savable
vars.setVar('port', 8080, true);

// Unsavable
vars.setVar('username', 'Johnny', false);
```

* All variables are located:
    - un savable: vars.vars.[key];
    - savable: vars.savable.[key];
    - saved: vars.saved.[key];

## references
* Support: glabstrizhkovgit@gmail.com
* Git: https://github.com/glabStrizhkov/robot-npm-varMaster

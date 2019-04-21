# get-all-npm-package-dependencies
A simple JavaScript library for getting all dependencies of a npm package.

It takes in a npm packageName parameter as a string and returns an array of strings of both direct and all indirect (recursive) dependencies of the given package, fetches from the API (http://registry.npmjs.org/packagename/latest). For example, if A depends on B, and B depends on C and D, It return ['B', 'C', 'D']. The result does not contain duplicates.

for start project first install dependencies
```bash
$ npm install
```

Run tests
```bash
npm test
```

##How to use
Simply include index.js in your code page and use the function.

```js
const index = require('../index');

(async () => {
    const response = await index.getAllDependencies('my-awesome-package-name');
    console.log(response);
})();
```

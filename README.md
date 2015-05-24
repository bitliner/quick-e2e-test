quick-e2e-test
=========================

It allows you to build end-to-end test from scenarios expressed in natural language (text). 

Built for [Protractor](http://angular.github.io/protractor/#/) and [AngularJS](https://angularjs.org/).

**Quick Example**: test declared in `input.json`  generates `output.js` file.

![preview-image](https://raw.githubusercontent.com/bitliner/quick-e2e-test/master/docs/quick-e2e-test-preview.png "preview-image")


# Index

* [Why use it](#user-content-why-use-it)
* [Requirements](#user-content-requirements)
* [Installation](#user-content-installation)
* [Tutorial](#user-content-tutorial)
* [Current Natural Language Support](#user-content-current-natural-language-support)
* [Contributors](#user-content-contributors)
* [License](#user-content-license)

# Why use it

If you start to build a lot of end-to-end test, you will realize that:

* building end-to-end test is a **boring and ripetivive task**
* when the codebase becomes bigger, it can be very **hard to manage end-to-end test** - e.g. to understand which scenario is covered by test, or to quantify test coverage
* only developers can mainly build end-to-end test, but developers are a rare and expensive resource, and **end-to-end test could be managed by other figures**, e.g. other employees 

quick-end-to-end test is born to solve all these problems.


# Requirements

* [protractor](http://angular.github.io/protractor/#/) - this module generates test to run with protrator - but it can be easily extended to work with other frameworks for end-to-end testing
* nodejs
* npm



# Installation

`npm install -g quick-e2e-test`

# Tutorial

## 1. Create a JSON file representing the end-to-end test

Example `config.json`:

```json
{
	"Login": {
		"test": [
			"before each go to '/login'",
			"when users send 'username' to '.username' and send 'password' to '.password' and click on '.submit', then url is '/welcome'"
		]
	}
}
```
## 2. Generate end-to-end test

Run 

```js
	quick-e2e-test ./config.json
``` 
## 3. Use the output to run the e2e test

The file `test.js` containing the end-to-end test has been generated in the current folder, as follow:

```js
/* jshint ignore: start */
'use strict';

describe('Login', function() {

	beforeEach(function() {
		browser.get('/login');
	});

	it("when users send 'username' to '.username' and send 'password' to '.password' and click on '.submit', then url is '/welcome'", function() {

		element(by.css('.username')).sendKeys('username');
		element(by.css('.password')).sendKeys('password');
		element(by.css('.submit')).click();

		expect(browser.getUrl())['toBe']('/welcome');


	});

});
```

Now add this file to the spec file list inside the configuration - e.g. *config.js* - file for protractor.
And then run:

* `webdriver-manager start` - e.g. to start the chrome driver
* `protractor config.js` - to run test

That's it!

# Current Natural Language Support

Each scenario can be divided into the 2 elements:

* actions: all the actions that cause the scenario - e.g. "when users go to '/login' and click on '.login'"
* post-condition: all the conditions that must be verified after all the actions has been executed

## Actions 

Currently, you can specify following actions:

* send <string> to '<css selector>' - to fill the <input> identified by <css selector> with <string>
* click on '<css selector>' - to click on <css selector>
* mouseover '<css selector>' (TODO) 
* mouseout '<css selector>' (TODO)

## Conditions

TODO

## Macros

A macro is a sequence of instructions that are assigned to a label. The macro is identified by the label. 

### Example

```json
{
	"Login": {
		"macros": {
			"signin": [
				"users send 'username' to '.username'",
				"users send 'password' to '.password'",
				"users click on '.submit'"
			]
		},
		"test": [
			"before each users go to '/login'",
			"when users signin, then url is '/product-list'"
		]
	}
}
```

generates

```js
/* jshint ignore: start */
'use strict';

describe('Login', function() {
	var signin;

	beforeEach(function() {
		browser.get('/login');
	});

	beforeEach(function() {
		signin = function() {
			element(by.css('.username')).sendKeys('username');
			element(by.css('.password')).sendKeys('password');
			element(by.css('.submit')).click();
		};
	});

	it("when users signin, then url is '/product-list'", function() {

		signin();

		expect(browser.getUrl())['toBe']('/product-list');


	});

});
```


# Contributors

I am looking for contributors that share tha same problems! Fork it, or [contact me](mailto:giovanni.gaglione@gmail.com).

# License

The MIT License (MIT)

Copyright (c) 2011-2015 Twitter, Inc

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
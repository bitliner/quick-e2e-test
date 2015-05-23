quick-e2e-test
=========================

It allows you to build end-to-end test from scenarios expressed in natural language (text).

* [Why you should use quick-end-2-end-test](#why-you-should-use-quick-end-2-end-test)
* [Requirements](#requirements)
* [Simple Example](#simple-example)
* [Installation](#installation)
* [Usage](#usage)
* [Current language support](#current-language-support)
* [Contributors](#contributors)
* [License](#license)

# Why you should use quick-end-2-end-test

If you start to build a lot of end-to-end test, you will realize that:

* building end-to-end test is a boring and ripetivive task
* when the codebase becomes bigger, it can be very hard to manage end-to-end test - e.g. to understand which scenario is covered by test, or to quantify test coverage
* only developers can mainly build end-to-end test, but developers are a rare and expensive resource, and end-to-end test could be managed by other figures, e.g. other employees 

quick-end-to-end test is born to solve these problems.


# Requirements

* [protractor](http://angular.github.io/protractor/#/) - this module generates test to run with protrator - but it can be easily extended to work with other frameworks for end-to-end testing
* nodejs
* npm

# Simple Example

This example shows how to specify an end-to-end test in natural language to test a login form.

```json
{
	"Login": {
		"test": [
			"before each users go to /login",
			"when users send 'username' to '.username' and send 'password' to '.password' and click on '.submit', then url is '/product-list'"
		]
	}
}
```

generates


```js
/* jshint ignore: start */
'use strict';

describe('Login', function() {

	beforeEach(function() {
		browser.get('/login');
	});

	it("when users send 'username' to '.username' and send 'password' to '.password' and click on '.submit', then url is '/product-list'", function() {


		element(by.css('.username')).sendKeys('username');
		element(by.css('.password')).sendKeys('password');
		element(by.css('.submit')).click();

		expect(browser.getUrl())['toBe']('/product-list');


	});

});
```



# Installation

`npm install -g quick-e2e-test`

# Usage

**1. Create a JSON file representing the end-to-end test**

Example `config.json`:

```json
{
	"Login": {
		"beforeEach": [
			"users go to /login"
		],
		"test": [
			"when users send 'username' to '.username' and send 'password' to '.password' and click on '.submit', then url is '/product-list'"
		]
	}
}
```
**2. Generate end-to-end test**

Run 

```js
	quick-e2e-test ./config.json
``` 

It will generate the file `test.js` containing the end-to-end test in the current folder.

# Current language support

## Actions

* send <string> to '<css selector>' - to fill the <input> identified by <css selector> with <string>
* click on '<css selector>' - to click on <css selector>
* mouseover '<css selector>' 
* mouseout '<css selector>'

## Conditions



## Macros

A macro is a sequence of instructions that are assigned to a label. The macro is identified by the label. 


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
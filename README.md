quick-e2e-test
=========================

It allows you to build end-to-end test specifying just the scnearios to test in natural language (text).

# Requirements

* [protractor](http://angular.github.io/protractor/#/) - this module is build to work with protrator - but it can be easily extended to work with other frameworks for end-to-end testing
* nodejs
* npm

# Example

This example shows how to specify an end-to-end test in natural language to test a login form.

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

## 1. Specify the end-to-end test in a JSON file

Example `config.json`:

```json
{
	"Login": {
		"beforeEach": [
			"go to /login"
		],
		"test": [
			"when users send 'username' to '.username' and send 'password' to '.password' and click on '.submit', then url is '/product-list'"
		]
	}
}
```
## 2. Generate end-to-end test 

Run `quick-e2e-test ./config.json` and it will generate in the current folder the file for e2e-test.

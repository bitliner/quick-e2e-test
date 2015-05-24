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
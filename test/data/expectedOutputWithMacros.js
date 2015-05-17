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
/* jshint node: true */
/* global it, describe,  beforeEach */
'use strict';

var QuickE2eTest = require('../'),
	expect = require('chai').expect;


describe('Quick e2e Test', function() {
	var config,
		expectedOutput,
		rawString;

	beforeEach(function defineHelpers() {
		rawString = function(str) {
			return str.replace(/\t/g, '\\t')
				.replace(/\r\n/g, '\\r\\n')
				.replace(/\r/g, '\\r')
				.replace(/\n/g, '\\n');
		};
	});

	beforeEach(function initializeData() {
		config = require('./data/config');
		expectedOutput = require('fs').readFileSync('./data/expectedOutput.js', {
			encoding: 'utf8'
		});
	});


	it('should generate the proper test file', function() {

		var result;

		result = QuickE2eTest.generate(config);

		result = result[0];
		result = result.replace(/\n+/gi, '').replace(/\n\t\n/gi, '\n').replace(/\t+/gi, '');
		expectedOutput = expectedOutput.replace(/\n+/gi, '').replace(/\t+/gi, '');

		// console.log('result       .', rawString(result));
		// console.log('expectedOutput', rawString(expectedOutput));

		expect(result).to.be.eql(expectedOutput);


	});

});
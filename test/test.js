/* jshint node: true */
/* global it, describe,  beforeEach */
'use strict';

var QuickE2eTest = require('../'),
	expect = require('chai').expect;

describe('Quick e2e Test', function() {
	var config,
		expectedOutput;

	beforeEach(function() {
		config = require('./data/config');
		expectedOutput = require('fs').readFileSync('./data/expectedOutput.js', {
			encoding: 'utf8'
		});
	});


	it('should generate the proper test file', function() {

		var result;

		result = QuickE2eTest.generate(config);

		result = result[0];
		result = result.replace(/\n+/gi, '\n').replace(/^\t/gi, '');
		expectedOutput = expectedOutput.replace(/\n+/gi, '\n');

		console.log('result', '\\' + result);
		console.log('expectedOutput', expectedOutput);

		expect(result).to.be.eql(expectedOutput);


	});

});
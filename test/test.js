/* jshint node: true */
/* global it, describe,  beforeEach */
'use strict';

var QuickE2eTest = require('../'),
	expect = require('chai').expect;


describe('Quick e2e Test', function() {
	var config,
		configWithMacros,
		configWithoutBeforeEach,
		expectedOutput,
		expectedOutputWithMacros,
		expectedOutputWithoutBeforeEach,
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
		configWithMacros = require('./data/configWithMacros');
		configWithoutBeforeEach = require('./data/configWithoutBeforeEach');
		expectedOutput = require('fs').readFileSync('./data/expectedOutput.js', {
			encoding: 'utf8'
		});
		expectedOutputWithMacros = require('fs').readFileSync('./data/expectedOutputWithMacros.js', {
			encoding: 'utf8'
		});
		expectedOutputWithoutBeforeEach = require('fs').readFileSync('./data/expectedOutputWithoutBeforeEach.js', {
			encoding: 'utf8'
		});
	});


	it('should generate the proper test file', function() {

		var result;

		result = QuickE2eTest.generate(config);

		result = result[0];
		result = result.replace(/\n+/gi, '').replace(/\n/gi, '\n').replace(/\t+/gi, '').replace(/function \(\)/gi, 'function()');
		expectedOutput = expectedOutput.replace(/\n+/gi, '').replace(/\t+/gi, '');

		// console.log('result       .', rawString(result));
		// console.log('expectedOutput', rawString(expectedOutput));

		expect(result).to.be.eql(expectedOutput);


	});
	it('should generate the proper test file when config includes macros', function() {

		var result;

		result = QuickE2eTest.generate(configWithMacros);

		result = result[0];
		result = result.replace(/\n+/gi, '').replace(/\n/gi, '\n').replace(/\t+/gi, '').replace(/function \(\)/gi, 'function()');
		expectedOutputWithMacros = expectedOutputWithMacros.replace(/\n+/gi, '').replace(/\t+/gi, '');

		// console.log('result       .', rawString(result));
		// console.log('expectedOutput', rawString(expectedOutput));

		expect(result).to.be.eql(expectedOutputWithMacros);


	});
	it('should generate the proper test file when config does not include beforeEach property', function() {

		var result;

		result = QuickE2eTest.generate(configWithoutBeforeEach);

		result = result[0];
		result = result.replace(/\n+/gi, '').replace(/\n/gi, '\n').replace(/\t+/gi, '').replace(/function \(\)/gi, 'function()');
		expectedOutputWithoutBeforeEach = expectedOutputWithoutBeforeEach.replace(/\n+/gi, '').replace(/\t+/gi, '');

		// console.log('result       .', rawString(result));
		// console.log('expectedOutput', rawString(expectedOutput));

		expect(result).to.be.eql(expectedOutputWithoutBeforeEach);


	});

});
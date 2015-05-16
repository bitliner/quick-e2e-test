/* jshint node: true */
'use strict';

// TODO: add support for dash into text

var Parser = require('./lib/parser/parser'),
	Generator = require('./lib/generator/generator'),
	Logger = require('logb').getLogger(module.filename);


module.exports.generate = function(config) {
	var testMetadata, rawTestString;



	testMetadata = Object.keys(config).map(function(testName) {
		var result = {};

		result.name = testName;
		result.its = config[testName].test.map(function(scenario) {

			Logger.info('Generating test from', scenario);

			return {
				scenario: scenario,
				test: Parser.parse(scenario)
			};
		});

		return result;
	});

	// Logger.info('test,metadata', testMetadata);

	rawTestString = Generator.generate(testMetadata);


	return rawTestString;



};
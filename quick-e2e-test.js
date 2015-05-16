/* jshint node: true */
'use strict';


var Parser = require('./lib/parser/parser'),
	Generator = require('./lib/generator/generator'),
	Logger = require('logb').getLogger(module.filename),
	fs = require('fs'),
	path = require('path'),
	jformatter = require('jformatter');


var QuickE2eTest = {
	generate: function(config) {
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

		rawTestString = jformatter.format(rawTestString);

		return rawTestString;



	},
	generateFile: function(config) {
		var fileContent,
			outputFilepath;

		fileContent = QuickE2eTest.generate(config);
		outputFilepath = path.resolve('./test.js');

		fs.writeFileSync(outputFilepath, fileContent);

	}
};

module.exports = QuickE2eTest;
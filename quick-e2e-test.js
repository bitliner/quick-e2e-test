/* jshint node: true */
'use strict';


var Parser = require('./lib/parser/parser'),
	Generator = require('./lib/generator/generator'),
	Logger = require('logb').getLogger(module.filename),
	fs = require('fs'),
	path = require('path');


var QuickE2eTest = {
	generate: function(config) {
		var testMetadata, rawTestString;



		testMetadata = Object.keys(config).map(function(testName) {
			var result = {};

			result.name = testName;
			if (config[testName].beforeEach) {
				result.beforeEaches = config[testName].beforeEach.map(function(singleBeforeEach) {
					return Parser.parse(singleBeforeEach);
				});
			}
			if (config[testName].macros) {
				result.macros = Object.keys(config[testName].macros).map(function(macroName) {
					return {
						name: macroName,
						steps: config[testName].macros[macroName].map(function(step) {
							return Parser.parse(step);
						})
					};
				});
			}



			result.its = config[testName].test.map(function(statement) {
				var parsedStatement;

				parsedStatement = Parser.parse(statement);

				// console.log(JSON.stringify);
				if (parsedStatement.type && parsedStatement.type === 'scenario') {
					Logger.debug('Generating test from', statement);
					return {
						type: parsedStatement.type,
						scenario: statement,
						test: parsedStatement
					};
				}
				if (parsedStatement.type && parsedStatement.type === 'beforeEach') {
					Logger.debug('Generating beforeEach from', statement);
					return {
						type: parsedStatement.type,
						statement: statement,
						beforeEach: parsedStatement
					};
				}
				return null;

			}).filter(function(el) {
				return el !== null;
			});

			// console.log(JSON.stringify(result, null, 4));

			// console.log(Object.keys(result));

			return result;
		});

		// Logger.info('test,metadata', testMetadata);

		rawTestString = Generator.generate(testMetadata);

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
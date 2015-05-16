/* jshint node: true */
'use strict';

var ejs = require('ejs'),
	path = require('path'),
	fs = require('fs'),
	JsFormatter = require('./JsFormatter');

var filepath = path.resolve(__dirname, 'template/test.ejs'),
	testTemplate = fs.readFileSync(filepath, {
		encoding: 'utf8'
	});



module.exports.generate = function(inputs) {
	// console.log(JSON.stringify(inputs, null, 4));
	return inputs.map(function(input) {
		var result;

		result = ejs.render(testTemplate, input);
		result = new JsFormatter().format(result);

		return result;
	});
};
/* jshint node: true */
'use strict';

var ejs = require('ejs'),
	path = require('path'),
	fs = require('fs');

var filepath = path.resolve(__dirname, 'template/test.ejs'),
	testTemplate = fs.readFileSync(filepath, {
		encoding: 'utf8'
	});


module.exports.generate = function(inputs) {
	console.log(JSON.stringify(inputs, null, 4));
	return inputs.map(function(input) {
		return ejs.render(testTemplate, input);
	});
};
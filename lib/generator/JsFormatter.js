/* jshint node:true */
'use strict';

var jformatter = require('jformatter');

var JsFormatter = module.exports = function JsFormatter() {
	this.options = {
		lineSeparator: '\n', // done
		maxLength: 120, // TODO
		wrapIfLong: false, // TODO
		indent: 4, // done
		useTabIndent: true, // done
		spaces: {
			around: {
				unaryOperators: false, // TODO
				binaryOperators: true, // done
				ternaryOperators: true // done
			},
			before: {
				functionDeclarationParentheses: false, // done function foo() {
				functionExpressionParentheses: true, // done var foo = function () {
				parentheses: true, // done if (), for (), while (), ...
				leftBrace: true, // done function () {, if () {, do {, try { ...
				keywords: true // done if {} else {}, do {} while (), try {} catch () {} finally
			},
			within: {
				// function call, function declaration, if, for, while, switch, catch
				parentheses: false // done
			},
			other: {
				beforePropertyNameValueSeparator: false, // done {key: value} {key : value} {key:value}
				afterPropertyNameValueSeparator: true // done
			}
		},
		bracesPlacement: { // 1. same line 2. next line
			functionDeclaration: 1, // TODO
			other: 1 // TODO
		},
		blankLines: {
			keepMaxBlankLines: 1, // done
			atEndOfFile: true // done
		},
		other: {
			keepArraySingleLine: false // TODO default formatted array multi line
		},
		fix: {
			prefixSpaceToLineComment: false, // done
			alterCommonBlockCommentToLineComment: false, // done
			singleVariableDeclarator: false, // done
			fixInvalidTypeof: false, // done
			removeEmptyStatement: false, // done
			autoSemicolon: false, // done
			singleQuotes: false, // done
			eqeqeq: false, // done
			invalidConstructor: false // done
		}
	};
};

JsFormatter.prototype.format = function(input) {
	return jformatter.format(input, this.options);
};
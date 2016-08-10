"use strict";

define(["require", "./test_module"], function (require, test) {
/*
	var REACT = require("reactLib/react");

	var reactComponent = REACT.createClass({
		render: function render() {
			return React.createElement(
				"p",
				null,
				"HELLO"
			);
		}
	});
*/
	var testModule = require("./test_module");
	testModule.alert("test_module loaded.");

	return {
	}
});
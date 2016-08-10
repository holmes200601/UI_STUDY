"use strict";

var InputTextComponent = React.createClass({
	displayName: "InputTextComponent",

	getDefaultProps: function getDefaultProps() {
		return {
			label: "Input Text Label"
		};
	},

	getInitialState: function getInitialState() {
		return {
			text: "Please input text here"
		};
	},

	render: function render() {
		return React.createElement(
			"div",
			{ className: this.props.className },
			React.createElement(
				"label",
				{ className: "textLabel" },
				this.props.label
			),
			React.createElement("input", { type: "text", value: this.state.text })
		);
	}
});
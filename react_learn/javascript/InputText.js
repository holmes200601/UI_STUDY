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

	changeHandler: function changeHandler(event) {
		event.stopPropagation();
		this.setState({ text: event.target.value });
	},

	blurHandler: function blurHandler(event) {
		console.log("Value of text is: " + event.target.value);
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
			React.createElement("input", { type: "text", onChange: this.changeHandler, onBlur: this.blurHandler, value: this.state.text })
		);
	}
});

ReactDOM.render(React.createElement(InputTextComponent, { label: "Label Text" }), document.getElementById("container"));
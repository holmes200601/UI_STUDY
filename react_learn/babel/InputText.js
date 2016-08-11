 var InputTextComponent = React.createClass({
	getDefaultProps: function() {
		return {
			label: "Input Text Label"
		}
	},

	getInitialState: function() {
		return {
			text: "Please input text here"
		}
	},

	changeHandler: function(event) {
		event.stopPropagation();
		this.setState({text: event.target.value});
	},

	blurHandler: function(event) {
		console.log("Value of text is: " + event.target.value);
	},

	render: function() {
		return (
			<div className={this.props.className}>
				<label className="textLabel">{this.props.label}</label>
				<input type="text" onChange={this.changeHandler} onBlur={this.blurHandler} value={this.state.text}></input>
			</div>
		);
	}
});

ReactDOM.render(<InputTextComponent label="Label Text" />, document.getElementById("container"));
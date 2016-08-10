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

	render: function() {
		return (
			<div className={this.props.className}>
				<label className="textLabel">{this.props.label}</label>
				<input type="text" value={this.state.text}></input>
			</div>
		);
	}
});
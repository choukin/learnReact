var MyComponent = React.createClass({
	handleClick:function(){
		console.log("focus");
		this.refs.myTextInput.focus();
	},
	render:function(){
		return (
			<div>
			<input type="text" ref="myTextInput"/>
			<input type="button" value="Focus text input" onClick={this.handleClick} />
			</div>
		)
	}
})
console.log("focus");
ReactDOM.render(
	<MyComponent/>,
	document.getElementById("example")
)

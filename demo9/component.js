var Input = React.createClass({
	getInitialState:function(){
		return {value:"Hello!"}
	},
	handleChange:function(event){
		this.setState({value:event.target.value});
	},
	render:function(){
		var value = this.state.value;
		return (
			<div>
				<input type="text" value={value} onChange={this.handleChange}  />
				<p>{value}</p>
			</div>	
		);
	}
})
var SearchBar = React.createClass({
	render: function(){
		return (
			<form>
				<input type="text" placeholder="Search..."/>
				<p>
					<input type="checkbox"/>
					{' '}
					Only show products in stock
				</p>
			</form>	
		);
	}
});

ReactDOM.render(
	<Input/>,
	document.getElementById("example")
)


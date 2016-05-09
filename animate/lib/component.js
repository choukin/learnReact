var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup

var TodoList = React.createClass({
	getInitialState:function(){
		return {items:['hello','world','click','me']};
	},
	handleAdd:function(){
		var newItems = 
		this.state.items.concat([prompt("Enter some text")]);
		this.setState({items:newItems})
	},
	handleRemove:function(){
		var newItems = this.state.items;
		newItems.splice(i,1);
		this.setState({items:newItems});
	},
	handleRemove:function(i){
		var newItems = this.state.items;
		newItems.splice(i,1);
		this.setState({items:newItems})
	},
	render:function(){
		var items = this.state.items.map(function(item,i){
			return (
				<div key={item} onClick={this.handleRemove.bind(this,i)}>
				{item}
				</div>
			);
		}.bind(this));
		React.addons.Perf.printInclusive("tems")
		return (
			<div>
			<button onClick={this.handleAdd}>ADDItem</button>
			<ReactCSSTransitionGroup transitionName="example">
			{items}
			</ReactCSSTransitionGroup>
			</div>
		)
	}
})
React.addons.Perf.start()
ReactDOM.render(<TodoList/>,document.getElementById("example"))
React.addons.Perf.stop()

var Search = React.createClass({
	render:function(){
		return (
			<div>
			{this.props.searchType}:<input type="text"/>
			<button>Search</button>
			</div>
		);
	}
});

var Page = React.createClass({
	render:function(){
		return(
			<div>
			 <h1>Welcome!</h1>
			 <Search searchType="Title"/>
			 <Search searchType="Content"/>
			 </div>
		);
	}
});

ReactDOM.render(
	<Page/>,document.getElementById("example")
)

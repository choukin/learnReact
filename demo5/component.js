var NoteList = React.createClass({
	render:function(){
		return <ol>
		{
			React.Children.map(this.props.children,function(child){
				return <li>{child}</li>
			})
		}
	}</ol>;
	}
});

ReactDOM.render(
	<NoteList>
	<span>hello</span>
	<span>world</span>
	</NoteList>,
	document.getElementById("example")
)

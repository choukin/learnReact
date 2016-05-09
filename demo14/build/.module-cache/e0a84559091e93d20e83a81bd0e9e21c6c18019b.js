var CheckLink = React.createClass({displayName: "CheckLink",
	render:function(){
		return React.createElement("a", null, '√ ', this.props.children)
	}
});

React.render(
	React.createElement(CheckLink, {href: "/checked.html"}, "Click here!")
	,document.getElementById("example")
);

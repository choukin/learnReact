var CheckLink = React.createClass({displayName: "CheckLink",
	render:function(){
		return React.createElement("a", React.__spread({},  this.props), '√ ', this.props.children)
	}
});
var MyComponent = React.createClass({displayName: "MyComponent",
  propTypes: {
    children: React.PropTypes.element.isRequired
  },

  render: function() {
    return (
      React.createElement("div", null, 
        this.props.children, " // 有且仅有一个元素，否则会抛异常。"
      )
    );
  }

});
ReactDOM.render(
	React.createElement(MyComponent, {href: "/checked.html"}, "Click here!")
	,document.getElementById("example")
);

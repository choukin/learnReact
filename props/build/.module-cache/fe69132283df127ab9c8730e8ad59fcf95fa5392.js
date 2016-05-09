/*var CheckLink = React.createClass({
	render:function(){
		return <a {...this.props}>{'√ '}{this.props.children}</a>
	}
});*/
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
	React.createElement(MyComponent, null, "Click here!")
	,document.getElementById("example")
);

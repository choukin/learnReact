/*var CheckLink = React.createClass({
	render:function(){
		return <a {...this.props}>{'√ '}{this.props.children}</a>
	}
});*/
var MyComponent = React.createClass({
  propTypes: {
    children: React.PropTypes.element.isRequired
  },

  render: function() {
    return (
      <div>
        {this.props.children} 
      </div>
    );
  }

});
ReactDOM.render(
	<MyComponent  ><a>adsfdsf</a></MyComponent>
	,document.getElementById("example")
);

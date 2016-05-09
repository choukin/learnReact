var FancyCheckbox = React.createClass({displayName: "FancyCheckbox",
	render:function(){
		//var { checked, ...other } = this.props;
		var fancyClass = this.propschecked?"FancyChecked":"FancyUnChecked";
		//other 包含『onClick:console.log』但是checked属性除外
		return (
				React.createElement("div", React.__spread({},  this.props, {className: fancyClass}))
		)
	},
	
})

ReactDOM.render(
React.createElement(FancyCheckbox, {checked: true, onClick: console.log.bind(console)}, 
"Helloworld!"
),
document.body
)
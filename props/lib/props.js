var FancyCheckbox = React.createClass({
	render:function(){
		//var { checked, ...other } = this.props;
		var fancyClass = this.props.checked?"FancyChecked":"FancyUnChecked";
		//other 包含『onClick:console.log』但是checked属性除外
		return (
				<div {...this.props} className={fancyClass}/>
		)
	}
	
})

ReactDOM.render(
<FancyCheckbox checked={true} onClick={console.log.bind(console)}>
<select value="B" multiple={true} value={['B', 'C']}>
<option value="A">Apple</option>
<option value="B">Banana</option>
<option value="C">Cranberry</option>
</select>
</FancyCheckbox>,
document.body
)
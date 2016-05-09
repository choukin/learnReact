var SetIntervalMixin = {
		componentWillMount:function(){
			this.intervals = [];
		},
		setInterval:function(){
			this.intervals.push(setInterval.apply(null,arguments));
		},
		componnetWillUnmount:function(){
			this.intervals.map(clearInterval);
		}
};

var TickTock = React.createClass({
	mixins:[SetIntervalMixin],//引用mixin
	getInitialState:function(){
		return {seconds:0};
	},
	componentDidMount:function(){
		this.setInterval(this.tick,1000);
	},
	tick:function(){
		this.setState({seconds:this.state.seconds+1})
	},
	render:function(){
		return (
				<p>
				React has been running for {this.state.seconds}  seconds.
				</p>
		)
	}
})

ReactDOM.render(<TickTock/>,document.getElementById("example"))
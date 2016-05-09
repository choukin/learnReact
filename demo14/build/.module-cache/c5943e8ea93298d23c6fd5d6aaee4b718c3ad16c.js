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

var TickTock = React.createClass({displayName: "TickTock",
	mixins:[SetIntervalMixin],//引用mixin
	getInitState:function(){
		return {seconds:0};
	},
	compontendDidMount:function(){
		this.setInterval(this.tick,1000);
	},
	tick:function(){
		this.setState({seconds:this.state.seconds+1})
	},
	render:function(){
		return (
				React.createElement("p", null, 
				"React has been running for  seconds."
				)
		)
	}
})

ReactDOM.render(React.createElement(TickTock, null),document.getElementById("example"))
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
	getInitialState:function(){
		return {seconds:0};
	},
	componentdDidMount:function(){
		this.setInterval(this.tick,1000);
	},
	tick:function(){
		this.setState({seconds:this.state.seconds+1})
	},
	render:function(){
		return (
				React.createElement("p", null, 
				"React has been running for ", this.state.seconds, "  seconds."
				)
		)
	}
})

ReactDOM.render(React.createElement(TickTock, null),document.getElementById("example"))
import React from 'react';
import imageLogo from './logo.gif';//图片也能被模块化
import './NewsHeader.css';
export default class NewsHeader extends React.Component{
	getLogo(){
		return (
			<div className="newsHeader-logo">
			  <a href="https://news.ycombinator.com/">
			  <img src={imageLogo}/>
			  </a>
			</div>
		)
	}
	getTitle(){
		return(
			<div className="newsHeader-title">
			  <a className="newsHeader-textLink" href="https://news.ycombinator.com/">
			  	Hacker News
			  </a>
			</div>
		)
	}
	getNav(){
		var navLinks=[
		{name:"new",url:"newest"},
		{name:"comments",url:'newcomments'},
		{name:'ask',url:'ask'},
		{name:'jobs',url:'jobs'},
		{name:'submit',url:'submit'}
		];
		
		return (
			<div className="newsHeader-nav">
			{
				navLinks.map(function(navLink){
					return (
						<a key={navLink.url} className="newsHeader-navLink newsHeader-textLink" href={"https://news.ycombinator.com/"+navLink.url}>
						{navLink.name}
						</a>
					);
				})
			}
			</div>
		);
	}
	getLogin(){
		return (
			<div className="newsHeader-login">
				<a className="newsHeader-textLink" href="https://news.ycombinator.com/login?goto=news">
				 登录
				 </a>
			</div>
		)
	}
	render(){
		return (
			<div className="newsHeader">
				{this.getLogo()}
				{this.getTitle()}
				{this.getNav()}
				{this.getLogin()}
			 </div>
		)
	}
}

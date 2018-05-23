import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery';
import moment from 'moment';

import TopBar from './components/TopBar.jsx'
import UserComment from './components/UserComment.jsx'
import Comments from './components/Comments.jsx'
import SortList from './components/SortList.jsx'



class App extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			comments: [],
			showDiv: false,
			UserComment:""
		}
	this.changeToShowOrHide = this.changeToShowOrHide.bind(this);
	this.showOrHide = this.showOrHide.bind(this);
	this.getComment = this.getComment.bind(this);
	this.UserCommentClick = this.UserCommentClick.bind(this);
	}

changeToShowOrHide() {
	this.setState({
		showDiv: !this.state.showDiv
	})
}


showOrHide() {
	if(this.state.showDiv === false) {
		return null;
	} else {
		return <SortList />;
	}
}

getComment(e){
	this.setState({
		UserComment: e.target.value
	})
}

UserCommentClick(){
	var app = this;
	$.ajax({
		url : "http://localhost:3002/api/comments",
		type: "POST",
		data:{
			"_id": app.state.comments.length + 1 ,
			"videoId": 1,
			"message": app.state.UserComment,
			"createdAt": new Date,
			"upVotes": 0,
			"downVotes":0,
			"parentComment": null,
			"displayName": "Xiaowen Ling",
			"profileImage": "https://yt3.ggpht.com/-9XgVrCusljo/AAAAAAAAAAI/AAAAAAAAAAA/7caPJOvNfL0/s76-c-k-no-mo-rj-c0xffffff/photo.jpg"
		},
		success: function(data){
			console.log("post new comment",data)
		},
		error: function(err){
			console.log("failed post new comment")
		}
	})
}


componentDidMount() {
	var app = this;
	$.ajax({
		url : "http://localhost:3002/api/comments",
		type: "GET",
		success: function(data){
			console.log("get data back",data)
			app.setState({
				comments: data
			})
		},
		error: function(err){
			console.log("failed get the data back")
		}
	})
} 

	render () {
		return (
			<div>
				<TopBar comments={this.state.comments} showOrHide={this.showOrHide} showDiv={this.state.showDiv} changeToShowOrHide={this.changeToShowOrHide} />
				<UserComment getComment={this.getComment} UserCommentClick={this.UserCommentClick}/>
				<Comments comments={this.state.comments}/>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'))

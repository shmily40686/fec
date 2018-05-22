import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery';
import moment from 'moment';

import TopBar from './components/TopBar.jsx'
import UserComment from './components/UserComment.jsx'
import Comments from './components/Comments.jsx'



class App extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			comments: ""
		}
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
				<TopBar comments={this.state.comments}/>
				<UserComment/>
				<Comments/>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'))

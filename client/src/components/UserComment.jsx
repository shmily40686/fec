import React from 'react';

const UserComment = (props) => {
	return(
		<div>
			<img src="https://yt3.ggpht.com/-9XgVrCusljo/AAAAAAAAAAI/AAAAAAAAAAA/7caPJOvNfL0/s76-c-k-no-mo-rj-c0xffffff/photo.jpg" width="50" heigth="37" />
			<input type="text" placeholder="Add a public comment..." onChange={props.getComment}/>
			<button>CANCEL</button>
			<button onClick={props.UserCommentClick}>COMMENT</button>
		</div>
	)
}

export default UserComment;
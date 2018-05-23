import React from 'react';
import EntryComment from './EntryComment.jsx'

const Comments = (props) => {
	return(
		<div>
			{props.comments.map((item,i) =>{
				return(
					<EntryComment item={item} key={i}/>
				)
			})}
		</div>
	)
}

export default Comments;
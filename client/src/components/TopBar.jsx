import React from 'react';

const TopBar = (props) => {
	return(
		<div>
			<div>{props.comments.length} Comments</div>
			<select>
  				<option value="Top comments">Top comments</option>
  				<option value="Newest first">Newest first</option>
			</select>
		</div>
	)
}

export default TopBar;
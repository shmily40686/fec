import React from 'react';
import SortList from './SortList.jsx';

const TopBar = (props) => {
	return(
		<div>
			<div>
				<h2 className="topBarComment">{props.comments.length} Comments</h2>
				<div>
					<div className="sortBar" onClick={props.changeToShowOrHide}>SORT BY</div>
					<div className="selectBox">
					{props.showOrHide()}
					</div>
				</div>
			</div>
		</div>
	)
}

export default TopBar;
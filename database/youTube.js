const mongoose = require('mongoose');
const db = require('./index.js');

mongoose.Promise = require('bluebird');

const commentsSchema = new mongoose.Schema({
	  	_id: Number,
		videoId: Number,
		message: String,
		createdAt: String,
		upVotes: Number,
		downVotes: Number,
		parentComment: String,
		displayName: String,
		profileImage: String
	}
);

const Comments = mongoose.model('Comments', commentsSchema);

module.exports.findAll = function(cb){
	Comments.find().exec(function(err,data){
		if(err) {
			cb(err,null)
		} else {
			cb(null,data)
		}
	})
}

// module.exports = Comments;
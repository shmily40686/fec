const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');
const youTube = require('../database/youTube.js')

const app = express()

const port = process.env.PORT || 3002

app.use(express.static(path.join(__dirname, '../client/dist/')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/api/comments",function(req,res) {
	youTube.findAll(function(err,data) {
		if(err) {
			res.status(400).send(err)
		} else {
			res.status(200).send(data)
		}
	})
})

app.post("/api/comments",function(req,res) {
	youTube.saveOne(req.body,function(err,data) {
		if(err) {
			res.status(400).send(err)
		} else {
			res.status(200).send(data)
			console.log("data",data)
		}
	})
})

app.listen(port, () => {
	console.log(`listening on port ${port}`)
})
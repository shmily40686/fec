const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/youTube';

const db = mongoose.connect(mongoUri);

module.exports = db;
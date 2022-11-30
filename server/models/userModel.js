const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const MONGO_URI = "mongodb+srv://katalystkat:<password>@fitdevs.s392t6z.mongodb.net/?retryWrites=true&w=majority";

//change this
mongoose.connect(MONGO_URI, {
	dbName: 'cat-snake',
})
	.then(() => console.log('Connected to Mongo DB.'))
	.catch(err => console.log(err));


//EXPAND ON SCHEMA IF NECESSARY, IE, TO STORE GAME STATE
const userSchema = new Schema({
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true }
});

const gameSaveSchema = new Schema({
	username: { type: String, required: true, unique: true },
	totalScore: { type: Number, require: true },
	milk: { type: Number, require: true },
	totalCows: { type: Number, require: true },
	totalRelaxedCows: { type: Number, require: true },
	totalEnlightenedCows: { type: Number, require: true },
	totalCows2: { type: Number, require: true },
	totalFields: { type: Number, require: true },
	totalResorts: { type: Number, require: true },
	totalSchools: { type: Number, require: true },
	totalSpaceships: { type: Number, require: true },
	currentMultiplier: { type: Number, require: true },
	cowCost: { type: Number, require: true },
	fieldCost: { type: Number, require: true },
	gameStage: { type: Number, require: true },
});

const gameSave = mongoose.model('gameSave', gameSaveSchema);

//If more models are made, swap to this, export object with models
// const User = mongoose.model('user', userSchema); 

const User = mongoose.model('User', userSchema);

module.exports = {
	User,
	gameSave
}
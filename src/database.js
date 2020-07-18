const mongoose = require('mongoose');
const enVars = process.env;
const dbName = 'test';

///connection function
const connectDB = async () => {
	///get the URI from .env file or set a default
	const URI = enVars.ENV === 'DOCKER' ? `mongodb://mongo/${dbName}` : enVars.MONGODB_URI;

	///try to connect the to the DB
	try {
		await mongoose.connect(URI, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true,
		});
		console.log(`>>>DB is connected!<<<`);
	} catch (e) {
		///catch if something wrong happens
		console.error(`¡Something goes wrong!`);
		console.error(e);
	}
};

module.exports = connectDB;

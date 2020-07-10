const mongoose = require('mongoose');

///connection function
const connectDB = async () => {
	///get the URI from .env file or set a default
	const URI = process.env.MONGODB_URI || 'mongodb://mongo/test';

	///try to connect the to the Atlas DB
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

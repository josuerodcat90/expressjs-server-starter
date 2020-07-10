const app = require('./app');
const connectDB = require('./database');
require('dotenv/config');

///declare the port
const PORT = process.env.PORT || 3000;

const main = async () => {
	///launch the server
	await app.listen(PORT);
	console.log(`Server running on port >>>${PORT}<<<`);
	///Init the DB connect function
	connectDB();
};

///execute main function
main();

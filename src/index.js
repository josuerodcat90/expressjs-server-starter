const app = require('./app');
const connectDB = require('./database');
const enVars = process.env;

require('dotenv/config');

///declare the port
const PORT = (enVars.ENV = 'DOCKER' ? enVars.DOCKER_PORT : enVars.PORT);

const main = async () => {
	///launch the server
	await app.listen(PORT);
	console.log(`Server running on port >>>${PORT}<<<`);
	///Init the DB connect function
	connectDB();
};

///execute main function
main();

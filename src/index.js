const app = require('./app');
require('dotenv/config');

///declare the port
const PORT = process.env.PORT || 5000;

const main = async () => {
	///launch the server
	await app.listen(PORT);
	console.log(`Server running on port >>>${PORT}<<<`);
};

///execute main function
main();

const app = require('./app');
require('dotenv/config');

///declare the port
const PORT = process.env.PORT || 5000;

const main = () => {
	///launch the server
	app.listen(PORT, () => console.log(`Server running on port >>>${PORT}<<<`));
	// app.listen(4000, () => 'Server on port 4000');
};

///execute main function
main();

const app = require('./app');
const cors = require('cors');
const connectDB = require('./database');
const enVars = process.env;

require('dotenv/config');

///declare the port
const PORT = enVars.ENV === 'DOCKER' ? enVars.DOCKER_PORT : enVars.PORT;

const server = app.listen(PORT, () => {
	///launch the server
	console.log(`Server running on port >>>${PORT}<<<`);

	///Init the DB connect function
	connectDB();

	/// Middlewares
	app.use(cors());

	/// Routes
	app.get('/', (req, res) => {
		res.json({ message: 'Initial API Routes' });
	});
});

module.exports = server;

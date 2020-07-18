const chai = require('chai');
const server = require('../index');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
chai.should();

describe('Test Initial API Route', () => {
	it('It should GET a JSON Message', (done) => {
		chai
			.request(server)
			.get('/')
			.end((err, res) => {
				res.should.have.status(200);
				res.should.be.json;
				res.body.message.should.be.eq('Initial API Routes');
				done();
			});
	});

	it('It should NOT GET a JSON Message', (done) => {
		chai
			.request(server)
			.get('/')
			.end((err, res) => {
				res.should.not.have.status(404);
				done();
			});
	});
});

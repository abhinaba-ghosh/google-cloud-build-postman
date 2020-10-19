// Import the dependencies for testing
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
// Configure chai
chai.use(chaiHttp);
chai.should();
describe('Test My API', () => {
    it('should get all portfolios', (done) => {
        chai.request(app)
            .get('/api/portfolio')
            .end((err, res) => {
                res.should.have.status(200);
                res.body[0].should.be.contain({
                    img: '/something/random/img.jpg',
                    caption: 'Explore',
                    title: 'Graphic Design',
                });
                done();
            });
    });
});

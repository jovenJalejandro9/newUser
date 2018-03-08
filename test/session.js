//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

let User = require('../model/user');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');
let should = chai.should();

chai.use(chaiHttp);

/*
* Test the POST ACTION 
*/

describe('/POST session', () => {
  it('it should return the Web Jason Token',(done) =>{
    chai.request(app)
    .post('/session')
   	.send({"nickName":"jovenJalejandro"})
    .end((err,res)=>{
      res.should.have.status(200);
      res.body.should.be.a('object');
			done();      
    });
  });
});
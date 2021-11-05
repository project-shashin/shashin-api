const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect
const baseUrl = "http://localhost:3000"
chai.use(chaiHttp);

let userId = null;

describe("User Endpoing API Unit Test", function(){
    let testUserId;
    // it('request a token', function(done) {
        
    // });
    it('create a new user', function(done) {
      let data = {
        data: {
          type: 'User',
          attributes: {
            remoteUserId: '123456'
          }
        }
      };

      chai.request(baseUrl)
      .post('/user', data)
      .send(data)
      .end(function (err, res) {
          expect(res).to.have.status(201);
          expect(res.body).to.have.property('data');
          expect(res.body.data).to.have.property("id");
          testUserId = res.body.data.id;          
          done();
      });
        
    });
    // it('get all users', function(done) {
        
    // });
    // it('get a user', function(done) {
        
    // });
    // it('update a user', function(done) {
        
    // });
    // it('delete a user', function(done) {
        
    // });
    // it('filter orders', function(done) {
        
    // })
})
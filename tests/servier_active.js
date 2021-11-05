const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect
const baseUrl = "http://localhost:3000"
chai.use(chaiHttp);
describe("First Test", function(){
  it('server is live', function(done) {
    chai.request(baseUrl)
      .get('/')
      .end(function (err, res) {
          expect(res).to.have.status(200);
          expect(res.text).to.equal('{"status":200,"message":"The server is running"}');
          done();
      });
  })
})
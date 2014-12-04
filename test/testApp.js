var restify = require('restify')
var should = require('should')
var favr = require("../app")

// Client
var client = restify.createJsonClient({
  url: 'http://localhost:6969',
  version: '~1.0'
});

describe('favr-server', function() {
  
  it('test double require', function() {
    require('../app').should.equal(favr);
  });

  it('get root page', function() {
    client.del('/', function (err, req, res, obj) {
      err.should.be.not.ok;
    });
  });
});

describe('user', function() {
  
  it('post new user', function() {
    client.post('/user', { name: "John Doe" }, function (err, req, res, obj) {
      err.should.be.not.ok;
    });
  });

  it('get created user', function() {
    client.get('/user/0', function (err, req, res, obj) {
      err.should.be.not.ok;
    });
  });

  it('put value to user', function() {
    client.put('/user/0', { country: "USA" }, function (err, req, res, obj) {
      err.should.be.not.ok;
    });
  });

  it('delete user', function() {
    client.del('/user/0', function (err, req, res, obj) {
      err.should.be.not.ok;
    });
  });
});

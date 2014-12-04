var restify = require('restify')
var should = require('should')
var favr = require("../app")

// Client
var client = restify.createJsonClient({
  // url: 'http://localhost:6969/api/v0/', // Api endpoint
  url: 'http://localhost:6969',
  version: '~1.0'
});

describe('favr-api', function() {
  
  it('require', function() {
    require('../app').should.equal(favr);
  });

  it('get root page', function() {
    client.del('/', function (err, req, res, obj) {
      err.should.be.not.ok;
    });
  });
});

describe('user', function() {
  
  it('create new', function() {
    client.post('/user', { name: "John Doe" }, function (err, req, res, obj) {
      err.should.be.not.ok;
    });
  });

  it('get newly created', function() {
    client.get('/user/0', function (err, req, res, obj) {
      err.should.be.not.ok;
    });
  });

  it('put value', function() {
    client.put('/user/0', { country: "USA" }, function (err, req, res, obj) {
      err.should.be.not.ok;
    });
  });

  it('delete', function() {
    client.del('/user/0', function (err, req, res, obj) {
      err.should.be.not.ok;
    });
  });
});

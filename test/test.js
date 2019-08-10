const request = require('supertest');
const app = require('../index.js');

describe('GET / home page', function(){
  it('respond with string \'hello world\'',function(done){
    request(app).get('/').expect('hello world', done);
  });
});

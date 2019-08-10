const request = require('supertest');
const app = require('../index.js');

describe('GET / home page', ()=>{
  it('respond with string \'hello world\'',(done)=>{
    request(app).get('/').expect('hello world', done);
  });
});

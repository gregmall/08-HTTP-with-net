const request = require('supertest');
const app = require('../lib/app');

describe('createResponse', () => {
  it('returns a body with plain text hi when we go to the / route', async() => {
    const response = await request(app)
      .get('/');

    expect(response.text).toEqual('hi');


  });
  it('returns a status code 200 and plain text with the request body when we go to the /echo route', async() => {
    const response = await request(app)
      .post('/echo');

    expect(response.body).toEqual('200 ok');
  });

});

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
      .post('/echo')
      .send('status code 200');
    
    expect(response.text).toEqual('status code 200');
  });

  it('returns html with an h1 and the word red when we go to the /red route', async() => {
    const response = await request(app)
      .get('/red');
    console.log(response.text);
    expect(response.text).toEqual('<html><body><h1>red</h1></body></html>');


  });
  it('returns html with an h1 and the word red when we go to the /red route', async() => {
    const response = await request(app)
      .get('/green');
    console.log(response.text);
    expect(response.text).toEqual('<html><body><h1>green</h1></body></html>');


  });

  it('returns html with an h1 and the word red when we go to the /red route', async() => {
    const response = await request(app)
      .get('/blue');
    console.log(response.text);
    expect(response.text).toEqual('<html><body><h1>blue</h1></body></html>');


  });




});

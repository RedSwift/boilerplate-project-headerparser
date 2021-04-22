const supertest = require('supertest')
const app = require('./server')

test('runs as per required', (done) => {
  supertest(app)
    .get('/api/hello')
    .expect(200, {
      greeting: 'hello API'
    }, done)
})


//A request to /api/whoami should return a JSON object with your preferred language in the language key.
test('A request to /api/whoami should return a JSON object with your IP address in the ipaddress key.', (done) => {
  supertest(app)
    .get('/api/whoami')
    .set({'accept-language': '', 'user-agent': ''})
    .expect(200, {
      ipaddress: '::ffff:127.0.0.1',
      language: '',
      software: ''
    }, done)
})



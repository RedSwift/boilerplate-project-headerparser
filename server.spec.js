const supertest = require('supertest')
const app = require('./server')

test('runs as per required', (done) => {
  supertest(app)
    .get('/api/hello')
    .expect(200, {
      greeting: 'hello API'
    }, done)
})

test('A request to /api/whoami should return a JSON object with your IP address in the ipaddress key.', (done) => {
  supertest(app)
    .get('/api/whoami')
    .expect(200, {
      ipaddress: '::ffff:127.0.0.1'
    }, done)
})

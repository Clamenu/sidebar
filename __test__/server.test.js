const request = require('supertest');
const app = require('../server');

describe('Server tests', () => {
  test('should respond status 200 to a get method', done => {
    request(app).get('/1/').then(res => {
      expect(res.statusCode).toBe(200);
      done();
    });
  });
  test('should return an object with db data', done => {
    request(app).get('/restaurants/1').then(res => {
      expect(res.statusCode).toBe(200);
      expect(typeof res.body[0]).toBe('object');
      done();
    });
  });
  test('should return undefined when give an invalid id', done => {
    request(app).get('/restaurants/101').then(res => {
      expect(res.statusCode).toBe(200);
      expect(res.body[0]).toBe(undefined);
      done();
    });
  });
});
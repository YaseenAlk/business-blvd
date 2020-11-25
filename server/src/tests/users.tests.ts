import { default as request } from 'supertest';

import server from '../index';

let testSession: request.SuperTest<request.Test>;

beforeEach(() => {
  testSession = request(server);
});

const testUser = {
  email: 'benbit@mit.edu',
  username: 'benbit',
  password: 'SixSmootsApart',
};

describe('The user should be able to', () => {
  test('make an account', async (done) => {
    const resp = await testSession.post('/api/users').send(testUser);
    expect(resp.status).toBe(200);
    expect(resp.body.message).toBeDefined();
    // Clean up so the next session doesn't have any session.
    await testSession.delete('/api/users');
    done();
  });
});

afterAll(() => {
  server.close();
});

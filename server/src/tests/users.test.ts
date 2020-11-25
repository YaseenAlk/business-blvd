import { default as request } from 'supertest-session';
import { SuperTest, Test } from 'supertest';

import server from '../index';

let testSession: SuperTest<Test>;

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
    const loginState = await testSession.get('/api/users/loginStatus');
    expect(loginState.body.message).toContain(testUser.username);
    // Clean up so the next session doesn't have any session.
    const cleanup = await testSession.delete('/api/users');
    expect(cleanup.status).toBe(200);
    done();
  });

  test('delete an account', async (done) => {
    const resp = await testSession.post('/api/users').send(testUser);
    expect(resp.status).toBe(200);
    expect(resp.body.message).toBeDefined();
    // Clean up so the next session doesn't have any session.
    const cleanup = await testSession.delete('/api/users');
    expect(cleanup.status).toBe(200);
    const loginState = await testSession.get('/api/users/loginStatus');
    expect(loginState.body.message).toContain('not signed in');
    expect(loginState.status).toBe(200);
    done();
  });
});

afterAll(() => {
  server.close();
});

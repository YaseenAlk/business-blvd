import { SuperTest, Test } from 'supertest';
import { default as request } from 'supertest-session';
import { v4 as uuidv4 } from 'uuid';
import buildServer, { Server } from '../server';
let server: Server;

let testSession: SuperTest<Test>;
jest.setTimeout(20000); // Give the DB 20 seconds to connect.
beforeAll(async (done) => {
  await buildServer().then(async (s) => {
    server = s;
    testSession = request(server.app);
    done();
  });
});
const id = uuidv4();
const testUser = {
  email: `${id}@mit.edu`,
  username: id,
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

  test('edit their username', async (done) => {
    const resp = await testSession.post('/api/users').send(testUser);
    expect(resp.status).toBe(200);
    expect(resp.body.message).toBeDefined();
    const newUsername = 'pog' + uuidv4();
    const body = { username: newUsername };
    const afterPut = await testSession.put('/api/users').send(body);
    expect(afterPut.status).toBe(200);
    expect(afterPut.body.message).toBeDefined();
    const loginState = await testSession.get('/api/users/loginStatus');
    expect(loginState.body.message).toContain(newUsername);
    // Clean up so the next session doesn't have any session.
    const cleanup = await testSession.delete('/api/users');
    expect(cleanup.status).toBe(200);
    done();
  });

  test('delete an account', async (done) => {
    const resp = await testSession.post('/api/users').send(testUser);
    expect(resp.status).toBe(200);
    expect(resp.body.message).toBeDefined();
    const cleanup = await testSession.delete('/api/users');
    expect(cleanup.status).toBe(200);
    const loginState = await testSession.get('/api/users/loginStatus');
    expect(loginState.body.message).toContain('not signed in');
    expect(loginState.status).toBe(200);
    done();
  });

  test('sign out', async (done) => {
    const makeAccount = await testSession.post('/api/users').send(testUser);
    expect(makeAccount.status).toBe(200);
    const signOut = await testSession.post('/api/users/signout');
    expect(signOut.status).toBe(200);
    const loginState = await testSession.get('/api/users/loginStatus');
    expect(loginState.status).toBe(200);
    expect(loginState.body.message).toContain('not signed in');
    // Clean up so the next session doesn't have any session.
    await testSession.post('/api/users/signin').send(testUser);
    const cleanup = await testSession.delete('/api/users');
    expect(cleanup.status).toBe(200);
    done();
  });

  test('log in', async (done) => {
    const makeAccount = await testSession.post('/api/users').send(testUser);
    expect(makeAccount.status).toBe(200);
    const signOut = await testSession.post('/api/users/signout');
    expect(signOut.status).toBe(200);
    const login = await testSession.post('/api/users/signin').send(testUser);
    expect(login.status).toBe(200);
    const loginState = await testSession.get('/api/users/loginStatus');
    expect(loginState.status).toBe(200);
    expect(loginState.body.message).toContain(testUser.username);
    // Clean up so the next session doesn't have any session.
    const cleanup = await testSession.delete('/api/users');
    expect(cleanup.status).toBe(200);
    done();
  });
});

afterAll(async (done) => {
  await server.onClose();
  done();
});

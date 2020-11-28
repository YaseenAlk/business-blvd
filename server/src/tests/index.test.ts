import { SuperTest, Test } from 'supertest';
import { default as request } from 'supertest-session';

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

describe('The index page', () => {
  test('should be alive', async (done) => {
    const resp = await testSession.get('/heartbeat');
    expect(resp.status).toBe(200);
    done();
  });
});

afterAll(async (done) => {
  await server.onClose();
  done();
});

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

const testBusinessId = '8ec7b41c-1049-44b0-80a0-73ecf0d974c3';

describe('Get business properties including...', () => {
  test('all', async (done) => {
    const resp = await testSession.get(`/api/business/${testBusinessId}`);
    expect(resp.status).toBe(200);
    expect(resp.body).toBeDefined();
    expect(resp.body.name).toBeDefined();
    expect(resp.body.description).toBeDefined();
    expect(resp.body.followers).toBeDefined();
    expect(resp.body.ownerId).toBeDefined();
    expect(resp.body.internalURL).toBeDefined();
    expect(resp.body.externalURL).toBeDefined();
    expect(resp.body.phone).toBeDefined();
    expect(resp.body.claimCode).toBeDefined();
    done();
  });
  test('name', async (done) => {
    const resp = await testSession.get(`/api/business/${testBusinessId}/name`);
    expect(resp.status).toBe(200);
    expect(resp.body).toBeDefined();
    done();
  });

  test('description', async (done) => {
    const resp = await testSession.get(`/api/business/${testBusinessId}/description`);
    expect(resp.status).toBe(200);
    expect(resp.body).toBeDefined();
    done();
  });

  test('url', async (done) => {
    const resp = await testSession.get(`/api/business/${testBusinessId}/url`);
    expect(resp.status).toBe(200);
    expect(resp.body).toBeDefined();
    done();
  });

  test('phone', async (done) => {
    const resp = await testSession.get(`/api/business/${testBusinessId}/phone`);
    expect(resp.status).toBe(200);
    expect(resp.body).toBeDefined();
    done();
  });
});

describe('Get business position subrouter including...', () => {
  test('all', async (done) => {
    const resp = await testSession.get(`/api/business/${testBusinessId}/position`);
    expect(resp.status).toBe(200);
    expect(resp.body.address).toBeDefined();
    expect(resp.body.lat).toBeDefined();
    expect(resp.body.lng).toBeDefined();
    done();
  });
});

describe('Get business ratings subrouter including...', () => {
  test('all', async (done) => {
    const resp = await testSession.get(`/api/business/${testBusinessId}/ratings`);
    expect(resp.status).toBe(200);
    expect(resp.body.safety.average).toBeDefined();
    expect(resp.body.safety.ratings).toBeDefined();
    expect(resp.body.service.average).toBeDefined();
    expect(resp.body.service.ratings).toBeDefined();
    done();
  });
});

describe('Get business hours subrouter including...', () => {
  test('all', async (done) => {
    const resp = await testSession.get(`/api/business/${testBusinessId}/hours`);
    expect(resp.status).toBe(200);
    expect(resp.body).toBeDefined();
    expect(resp.body.businessId).toBe(testBusinessId);
    expect(resp.body.entries).toBeDefined();
    done();
  });
});

describe('Get business social media subrouter including...', () => {
  test('all', async (done) => {
    const resp = await testSession.get(`/api/business/${testBusinessId}/social-media`);
    expect(resp.status).toBe(200);
    expect(resp.body).toBeDefined();
    expect(resp.body.twitter).toBeDefined();
    expect(resp.body.facebook).toBeDefined();
    expect(resp.body.instagram).toBeDefined();
    done();
  });
});

describe('Get business followers subrouter including...', () => {
  test('all', async (done) => {
    const resp = await testSession.get(`/api/business/${testBusinessId}/followers`);
    expect(resp.status).toBe(200);
    expect(resp.body).toBeDefined();
    done();
  });
});

describe('Get business tags subrouter including...', () => {
  test('all', async (done) => {
    const resp = await testSession.get(`/api/business/${testBusinessId}/tags`);
    expect(resp.status).toBe(200);
    expect(resp.body).toBeDefined();
    done();
  });
});

afterAll(async (done) => {
  await server.onClose();
  done();
});

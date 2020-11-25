import { default as request } from 'supertest';

import server from '../server';

const testSession = request(server);

describe('The index page', () => {
  test('should be alive', async (done) => {
    const resp = await testSession.get('/heartbeat');
    expect(resp.status).toBe(200);
    done();
  });
});

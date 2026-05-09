export const config = {
  runtime: 'edge',
};

import server from '../dist/server/server.js';

export default async function (req) {
  return server.fetch(req, {}, {});
}

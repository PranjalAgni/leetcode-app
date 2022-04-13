const Fastify = require('fastify');
const connectDB = require('./db/');
const registerAPI = require('./routes/');
const fastifyCors = require('fastify-cors');
const initalizeApp = (opts = {}) => {
  connectDB();
  const fastify = Fastify(opts);

  fastify.register(registerAPI);

  fastify.register(fastifyCors, {
    origin: ['http://localhost:3000'],
  });

  return fastify;
};

module.exports = initalizeApp;

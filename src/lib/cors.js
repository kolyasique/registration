/* eslint-disable import/no-extraneous-dependencies */
const cors = require('cors');

module.exports = cors({
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
});

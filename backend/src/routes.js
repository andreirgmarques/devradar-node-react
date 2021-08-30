const { Router } = require('express');

const routes = Router();

routes.get('/devs', (request, response) => {
  return response.json(request.body);
});

module.exports = routes;

const express = require('express');

const routes = express.Router();
const adminController = require('../controller/admin');
routes.get('/add-name', adminController.getName);
// routes.get('/name/:id', adminController.getDetail);

module.exports = routes;

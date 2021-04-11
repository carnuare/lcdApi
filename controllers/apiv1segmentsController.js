'use strict'

var varapiv1segmentsController = require('./apiv1segmentsControllerService');

module.exports.getSegments = function getSegments(req, res, next) {
  varapiv1segmentsController.getSegments(req.swagger.params, res, next);
};
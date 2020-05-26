const express = require('express'); 

function eRoutes() {
    const router = express.Router();
    var employee = require('./TestNodeJSApi/repository/employee/employee.routes')(router);
    var department = require('./TestNodeJSApi/repository/department/department.routes')(router);
    return router;
}

module.exports = eRoutes;

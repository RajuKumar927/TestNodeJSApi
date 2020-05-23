var Connection = require('tedious').Connection;

var config = {
    server: 'sg1-wsq1.a2hosting.com',
    authentication: {
        type: 'default',
        options: {
            userName: 'integert_laganaya',
            password: 'sunny@#2020'
        }
    },
    options: {
        database: 'integert_laganaya',
        
        rowCollectionOnDone: false,
        useColumnNames: false
    }
}

var connection = new Connection(config);

connection.on('connect', function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected');
    }
});

module.exports = connection;

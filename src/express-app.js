// const express = require('express');
// const cors  = require('cors');
// const { customer, appEvents } = require('./api');
// const { CreateChannel, SubscribeMessage } = require('./utils')

// module.exports = async (app) => {

//     app.use(express.json());
//     console.log(app)
//     // app.use(cors());
//     // app.use(cors({
//     //     origin: '*', 
//     //     allowedHeaders: [ 'Accept-Version', 'Authorization', 'Credentials', 'Content-Type' ]
//     // }));
//     app.use(express.static(__dirname + '/public'))

//     //api
//     // appEvents(app);

//     const channel = await CreateChannel()

    
//     customer(app, channel);
//     // error handling
    
// }
const express = require('express');
const cors = require('cors');
const { customer, appEvents } = require('./api');
const { CreateChannel, SubscribeMessage } = require('./utils');

module.exports = async (app) => {
    app.use(express.json());
    console.log(app)
    // app.use(cors());
    // Enable CORS for all routes
    // app.use(cors({
    //     origin: '*',
    //     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    //     credentials: true,
    //     optionsSuccessStatus: 204,
    //     allowedHeaders: ['Content-Type', 'Authorization'],
    // }));
    

    app.use(express.static(__dirname + '/public'));

    // API
    // appEvents(app);

    const channel = await CreateChannel();
    customer(app, channel);

    // Error handling
};
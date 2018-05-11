const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const massive = require('massive');

require('dotenv').config();
const axios = require('axios');

const app = express();
app.use( bodyParser.json() );
massive(process.env.CONNECTION_STRING).then(dbInstance => app.set('db', dbInstance));

const BaseUrl = '/api/listings';
app.get( BaseUrl, controller.read );
app.post( BaseUrl, controller.create );
app.delete( 'BaseUrl/:id', controller.delete );

const port = 3005;
app.listen( port, () => { console.log(`Server listening on port ${port}`); } );
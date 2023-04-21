const express = require('express');
const mongoose = require('./Database/database.config');
const router = require('./routes/mood.tracker.route');
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT ?? 8500;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Swagger setup
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Mood Tracker', // Title of the documentation
    version: '1.0.0', // Version of the app
    description: 'MOOD TRACK API', // short description of the app
  },
  security: [{ bearerAuth: [] }],
  servers: [{ url: 'http://localhost:8000' }],
};

const options = {
  swaggerDefinition,
  apis: ['api_docs/*.yaml'],
};

const swaggerSpec = swaggerJSDoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/mood', router);

app.listen(PORT, function () {
  console.log(`Server is up on port ${PORT}`);
});

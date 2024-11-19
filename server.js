const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
const port = 6001;

// Swagger setup
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Simple Express API',
      version: '1.0.0',
      description: 'A simple Express.js API with Swagger documentation',
    },
  },
  apis: ['./server.js'], // Path to the API documentation
};

// Create the Swagger specification
const swaggerSpec = swaggerJsdoc(options);

// Serve Swagger docs
console.log(swaggerSpec)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * 
 * /:
 *   get:
 *     description: Welcome message
 *     responses:
 *       200:
 *         description: A simple welcome message
 */
app.get('/', (req, res) => {
  res.send('Welcome to the simple Express API!');
});

/**
 * @swagger
 * /hello:
 *   get:
 *     description: Returns a hello message
 *     responses:
 *       200:
 *         description: A hello message
 */
app.get('/hello', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log(`Swagger docs are available at http://localhost:${port}/api-docs`);
});

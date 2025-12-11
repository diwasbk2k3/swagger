import swaggerAutogen from 'swagger-autogen';
const doc = {
 info: {
   title: 'API Documentation',
   description: 'Description of the API'
 },
 host: 'localhost:4200',
 schemes: ['http']
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./app.js'];

swaggerAutogen()(outputFile, endpointsFiles, doc);
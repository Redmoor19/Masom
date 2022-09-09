const corsOpts = {
    origin: 'http://localhost:3000',
    credentials: true,
    methods: ['GET','POST','HEAD','PUT','PATCH','DELETE'],
    allowedHeaders: ['Content-Type', 'Access-Control-Allow-Origin'],
    exposedHeaders: ['Content-Type']
};

module.exports = corsOpts;
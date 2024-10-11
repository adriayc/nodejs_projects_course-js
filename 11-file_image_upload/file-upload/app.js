const express = require('express');
require('dotenv').config();
require('express-async-errors');
const fileUpload = require('express-fileupload');
const cloudinary = require('cloudinary').v2; // Use V2
// Middlewares
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
// DB
const connectDB = require('./db/connect');
// Routers
const productRouter = require('./routes/productRoutes');

const app = express();

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// Middleware
app.use(express.static('./public'));
app.use(express.json());
app.use(fileUpload({ useTempFiles: true })); // File upload setup

app.get('/', (req, res) => {
  res.send('<h1>File Upload</h1>');
});

// Call routers
app.use('/api/v1/products', productRouter);

// Call middlewares
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);

    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();

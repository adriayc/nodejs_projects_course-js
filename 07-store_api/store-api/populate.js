require('dotenv').config();
// Connect DB
const connectDB = require('./db/connect');
// Models
const Product = require('./models/product');
// JSON data
const jsonProducts = require('./products.json');

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    // Delete all of the documents that match condition from the collection
    await Product.deleteMany();
    // Shortcut for saving one or more documents to the database
    await Product.create(jsonProducts);

    console.log('Success!!!');
    // Process ends
    process.exit(0);
  } catch (error) {
    console.log(error);
    // Process ends
    process.exit(1);
  }
};

start();

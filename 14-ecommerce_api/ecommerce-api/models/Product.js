const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      maxLength: [100, 'Name can not be more than 100 characters'],
      required: [true, 'Please provide product name'],
    },
    price: {
      type: Number,
      default: 0,
      required: [true, 'Please provide product price'],
    },
    description: {
      type: String,
      maxLength: [1000, 'Description can not be more than 1000 characters'],
      required: [true, 'Please provide product description'],
    },
    image: {
      type: String,
      default: '/uploads/example.jpeg',
    },
    category: {
      type: String,
      enum: ['office', 'kitchen', 'bedroom'],
      required: [true, 'Please provide product category'],
    },
    company: {
      type: String,
      enum: {
        values: ['ikea', 'liddy', 'marcos'],
        message: '{VALUE} is not supported',
      },
      required: [true, 'Please provide company'],
    },
    colors: {
      type: [String],
      default: ['#222'],
      required: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    freeShipping: {
      type: Boolean,
      default: false,
    },
    inventory: {
      type: Number,
      default: 15,
      required: true,
    },
    averageRating: {
      type: Number,
      default: 0,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      require: true,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

// Virtuals
ProductSchema.virtual('reviews', {
  ref: 'Review',
  localField: '_id',
  foreignField: 'product',
  justOne: false,
  // match: { rating: 5 },
});

// ProductSchema.pre('remove', async function (next) { // Error, old version
ProductSchema.pre('deleteOne', { document: true }, async function (next) {
  await this.model('Review').deleteMany({ product: this._id });
});

module.exports = mongoose.model('Product', ProductSchema);

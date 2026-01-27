const mongoose =  require("mongoose")

const productSchema = new mongoose.Schema({
    Image: String,
    title: String,
    categories: [
      {
        name: { type: String, required: true },
        stock: { type: Number, required: true }
      }
    ]
  })
const productModel = mongoose.model('Product', productSchema)

module.exports = productModel
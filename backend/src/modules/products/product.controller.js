const productModel = require('./product.model')

async function createProductController(req, res) {
  try {
    const { title, categories } = req.body
    const file = req.file

    if (!title || !categories || !file) {
      return res.status(400).json({ message: "Wrong Input" })
    }

    const parsedCategories = JSON.parse(categories)

    const bse64img = Buffer.from(file.buffer).toString('base64')

    const product = await productModel.create({
      Image: bse64img,
      title: title,
      categories: parsedCategories
    })

    res.status(201).json({ message: "Product created", product })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Create product failed", error: err.message })
  }
}


async function getAllProductsController(req, res) {
    try {
      const products = await productModel.find()
  
      res.status(200).json(products)
    } catch (error) {
      res.status(500).json({
        message: "Error fetching products",
        error: error.message
      })
    }
  }

  async function getProductByIdController(req, res) {
      try {
          const { id } = req.params
          const product = await productModel.findById(id)
          if (!product) {
              return res.status(404).json({ message: "Product not found" })
          }
          res.status(200).json(product)
      } catch (err) {
          console.error("Error fetching product by ID:", err)
          res.status(500).json({ message: "Error fetching product", error: err.message })
      }
  }
  
module.exports = { getAllProductsController, createProductController, getProductByIdController }
  
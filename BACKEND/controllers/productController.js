const productService = require("../services/productService");

exports.getProducts = async (req, res) => {
  try {
    const products = await productService.getProducts(req.query);
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
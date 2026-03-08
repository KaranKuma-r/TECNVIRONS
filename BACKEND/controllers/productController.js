const productService = require("../services/productService");

exports.getProducts = async (req, res) => {
  try {
    const products = await productService.getProducts(req.query);
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getProductById = async (req, res) => {
  try {

    const id = req.params.id;

    const product = await productService.getProductById(id);

    res.json(product);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const createProduct = (req, res) => {
  res.status(200).send({
    message: 'Home created'
  })
}

module.exports = {
  createProduct
}

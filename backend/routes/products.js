const router = require('express').Router();
let Product = require('../models/product.model');

router.route('/').get((req, res) => {
  Product.find()
    .then(products => res.json(products))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
  const image = req.body.image;
  const content = req.body.content;
  const category = Number(req.body.category);
  const precio = Number(req.body.precio);

  const newProduct = new Product({
    title,
    image,
    content,
    category,
    precio,
  });

  newProduct.save()
  .then(() => res.json('Product added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route(':id').get((req, res) => {
  Product.findById(req.params.id)
    .then(product => res.json(product))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route(':id').delete((req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then(() => res.json('Product deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Product.findById(req.params.id)
    .then(product => {
      product.title = req.body.title;
      product.image = req.body.image;
      product.content = req.body.content;
      product.category = Number(req.body.category);
      product.precio = Number(req.body.precio);

      product.save()
        .then(() => res.json('Product updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
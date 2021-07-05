const Db = require("../modals");

const Products = Db.products;

//controller for add product
exports.addProduct = (req, res) => {
   const product = {
       title: req.body.title,
       price: req.body.price,
       description: req.body.description,
   };
   Products.create(product)
    .then((result) => {
      if (result) {
        res.status(201).json({
          message: "Product Created Successfully",
          createProduct: result,
        });
      } else {
        res.status(400).json({
          message: "Something went wrong",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
}


//controller for get products
exports.getProducts = (req, res) => {
  Products.findAll()
   .then((result) => {
     if (result) {
       res.status(201).json({
         message: "Product Created Successfully",
         createProduct: result,
       });
     } else {
       res.status(400).json({
         message: "Something went wrong",
       });
     }
   })
   .catch((err) => {
     res.status(500).json({
       error: err,
     });
   });
}

//controller for get product by id
exports.getProductById = (req, res) => {
  const id = req.params.productId;
  Products.findByPk(id)
    .then((result) => {
      if (result) {
        res.status(200).json({
          message: "product featched",
          isSuccess: true,
          result: result,
        });
      } else {
        res.status(404).json({
          message: `${id} is not found`,
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        error: error,
      });
    });
};


//controller for update product
exports.updateProduct = (req, res) => {
  const id = req.params.productId;
  Products.findOne({ where: { id: id } }).then((result) => {
    if (result) {
      const product = {
        title: req.body.title || result.title,
        description: req.body.description || result.description,
        price: req.body.price || result.price,
      };
      Products.update(product, { where: { id: id } })
        .then((result) => {
          if (result) {
            res.status(200).json({
              message: "product updated",
              isSuccess: true,
            });
          }
        })
        .catch((error) => {
          res.status(500).json({
            error: error,
            message: "error",
          });
        });
    } else {
      res.status(404).json({
        message: "Product not found",
      });
    }
  });
};

//controller for delete product
exports.deleteProduct = (req, res) => {
  const id = req.params.productId;
  Products.findOne({ where: { id: id } }).then((result) => {
    if (result) {
      Products.destroy({ where: { id: id } })
        .then((result) => {
          if (result) {
            res.status(200).json({
              message: "product deleted",
              isSuccess: true,
            });
          }
        })
        .catch((error) => {
          res.status(500).json({
            error: error,
          });
        });
    } else {
      res.status(404).json({
        message: "product not found",
      });
    }
  });
};

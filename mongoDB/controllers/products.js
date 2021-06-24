const Product = require('../modals/products');

//controller for add product
exports.addProduct = (req, res) => {
   const product = new Product({
       name: req.body.name,
       price: req.body.price,
       description: req.body.description,
       isnew: req.body.isnew,
       productImage: req.file.path,
   });
   product
    .save()
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
    Product
     .find()
     .then((result) => {
       if (result) {
         res.status(201).json({
           message: "Products Fetched Successfully",
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

 //controller for delete product by id
 exports.deleteProduct = (req, res) => {
    const id = req.params.productId;
    Product
     .findOneAndDelete({_id: id})
     .then((result) => {
       if (result) {
         res.status(201).json({
           message: "Product Deleted Successfully",
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
        message: "Something went wrong",
        error: err,
       });
     });
 }

 //controller for get product by id
 exports.getProductById = (req, res, next) => {
    const id = req.params.productId;
    Product.findById(id)
      .then((result) => {
        if (result) {
          res.status(200).json(result);
        } else {
          res
            .status(400)
            .json({ message: id + " not existed,Please try another one" });
        }
      })
      .catch((error) => {
        res.status(500).json({ error: error });
      });
  };
  
  //controller for update product by id
  exports.updateProduct = (req, res, next) => {
    const id = req.params.productId;
    const updatedOps = {};
      for (const [opsKey, opsValue] of Object.entries(req.body)) {
        updatedOps[opsKey] = opsValue;
      }
    Product.updateOne(
      { _id: id },
      {
        $set: updatedOps,
      }
    )
      .then((result) => {
        if (result) {
          res.status(200).json({
            message: "Product Updated successfully",
            result: result,
          });
        } else {
          res
            .status(400)
            .json({ message: id + " not existed,Please try another one" });
        }
      })
      .catch((error) => {
        res.status(500).json({ error: error });
      });
  };
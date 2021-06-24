const express = require('express');
const router = express.Router();
const multer = require("multer");
const ProductController = require("../controllers/products");
const checkAuth = require('../../middleware/check-auth');


//here we are defining the storage(dest and filename) of file
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./uploads/");
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });
  //filter for file format
  const fileFilter = (req, file, cb) => {
    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg"
    ) {
      cb(null, true);
    } else {
      //reject file
      cb(null, false);
    }
  };
  
  const upload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 5,
    },
    fileFilter: fileFilter,
  });
  


router.get('/', checkAuth, ProductController.getProducts);

router.get('/:productId', checkAuth,  ProductController.getProductById);

router.post('/add',checkAuth,  upload.single("productImage"),  ProductController.addProduct);

router.patch('/:productId', checkAuth,  upload.single("productImage"), ProductController.updateProduct);

router.delete('/:productId', checkAuth, ProductController.deleteProduct);

module.exports = router;
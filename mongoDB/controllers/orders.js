const Order = require('../modals/orders');
const Product = require('../modals/products');

//controller for add order
exports.addOrder = (req, res) => {
  Product.findById(req.body.productId)
  .exec()
  .then(product => {
    if (!product) {
      return res.status(404).json({
        message: "Product not found"
      })
    }
    const order = new Order({
      product: product._id,
      quantity: req.body.quantity,
  });
  order
   .save()
   .then((result) => {
     if (result) {
       res.status(201).json({
         message: "Order Created Successfully",
         data: result,
       });
     } else {
       res.status(400).json({
         message: "Something went wrong",
       });
     }
   });
  })
  .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
}

//controller for get orders
exports.getOrders = (req, res) => {
    Order
     .find()
     .select("product quantity _id")
     .populate("product", "name price description")
     .then((result) => {
       if (result) {
         res.status(201).json({
           message: "Orders Fetched Successfully",
           data: result,
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

 //controller for delete order by id
 exports.deleteOrder = (req, res) => {
    const id = req.params.orderId;
    Order
     .findOneAndDelete({_id: id})
     .then((result) => {
       if (result) {
         res.status(201).json({
           message: "Order Deleted Successfully",
           data: result,
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

 //controller for get order by id
 exports.getOrderById = (req, res, next) => {
    const id = req.params.orderId;
    Order.findById(id)
      .select("product quantity _id")
      .populate("product", "name price description")
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
        res.status(500).json({ 
          message: "Something went wrong",
          error: erroe, });
      });
  };
  
  //controller for update order by id
  exports.updateOrder = (req, res, next) => {
    const id = req.params.orderId;
    const updatedOps = {};
      for (const [opsKey, opsValue] of Object.entries(req.body)) {
        updatedOps[opsKey] = opsValue;
      }
    Orderduc.updateOne(
      { _id: id },
      {
        $set: updatedOps,
      }
    )
      .then((result) => {
        if (result) {
          res.status(200).json({
            message: "Order Updated successfully",
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
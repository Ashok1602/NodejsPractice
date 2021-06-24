const Tutorial = require('../modals/tutorial');

//controller for add tutorial
exports.addTutorial = (req, res) => {
   const tutorial = new Tutorial({
       title: req.body.title,
       description: req.body.description,
       published: req.body.published
   });
   tutorial
    .save()
    .then((result) => {
      if (result) {
        res.status(201).json({
          message: "Tutorial Added Successfully",
          data: result,
          isSuccess: true
        });
      } else {
        res.status(400).json({
          message: "Something went wrong",
          isSuccess: false
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
        isSuccess: false
      });
    });
}

//controller for get all tutoriales
exports.getTutoriales = (req, res) => {
  Tutorial
     .find()
     .then((result) => {
       if (result) {
         res.status(201).json({
           message: "Tutoriales Fetched Successfully",
           data: result,
           isSuccess: true
         });
       } else {
         res.status(400).json({
           message: "Something went wrong",
           isSuccess: false
         });
       }
     })
     .catch((err) => {
       res.status(500).json({
         error: err,
         isSuccess: false
       });
     });
 }

 //controller for delete tutorial by id
 exports.deleteTutorial = (req, res) => {
    const id = req.params.tutorialId;
    Tutorial
     .findOneAndDelete({_id: id})
     .then((result) => {
       if (result) {
         res.status(201).json({
           message: "Tutorial Deleted Successfully",
           data: result,
           isSuccess: true
         });
       } else {
         res.status(400).json({
           message: "Something went wrong",
           isSuccess: false
         });
       }
     })
     .catch((err) => {
       res.status(500).json({
        message: "Something went wrong",
        error: err,
        isSuccess: false
       });
     });
 }

 //controller for get tutorial by id
 exports.getTutorialById = (req, res, next) => {
    const id = req.params.tutorialId;
    Tutorial.findById(id)
      .then((result) => {
        if (result) {
          res.status(200).json({data: result, isSuccess: true});
        } else {
          res
            .status(400)
            .json({ message: id + " not existed,Please try another one", isSuccess: false });
        }
      })
      .catch((error) => {
        res.status(500).json({ error: error, isSuccess: false });
      });
  };


  //controller for get tutorial by Title
 exports.getTutorialByTitle = (req, res, next) => {
  let query = { title: `/${req.params.title}/i`  };
  Tutorial.find(query)
    .then((result) => {
      if (result) {
        res.status(200).json({data: result, isSuccess: true});
      } else {
        res
          .status(400)
          .json({ message: id + " not existed,Please try another one", isSuccess: false });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: error, isSuccess: "getByTitle" });
    });
};

  
  //controller for update tutorial by id
  exports.updateTutorial = (req, res, next) => {
    const id = req.params.tutorialId;
    const updatedOps = {};
      for (const [opsKey, opsValue] of Object.entries(req.body)) {
        updatedOps[opsKey] = opsValue;
      }
    Tutorial.updateOne(
      { _id: id },
      {
        $set: updatedOps,
      }
    )
      .then((result) => {
        if (result) {
          res.status(200).json({
            message: "Tutorial Updated successfully",
            result: result,
            isSuccess: true
          });
        } else {
          res
            .status(400)
            .json({ message: id + " not existed,Please try another one", isSuccess: false });
        }
      })
      .catch((error) => {
        res.status(500).json({ error: error, isSuccess: false });
      });
  };


//controller for delete all tutoriales
exports.deleteAll = (req, res) => {
  Tutorial
   .deleteMany()
   .then((result) => {
     if (result) {
       res.status(201).json({
         message: "All Tutoriales Deleted Successfully",
         isSuccess: true,
       });
     } else {
       res.status(400).json({
         message: "Something went wrong",
         isSuccess: false
       });
     }
   })
   .catch((err) => {
     res.status(500).json({
      message: "Something went wrong",
      error: err,
      isSuccess: false
     });
   });
}
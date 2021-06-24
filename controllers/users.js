const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Users = require("../modals/users");

exports.getUsers = (req, res, next) => {
    Users.find()
      .select("_id email fullName createdAt updatedAt")
      .exec()
      .then((result) => {
        res.status(200).json({
          result: result,
        });
      })
      .catch((error) => {
        res.status(500).json({
          error: error,
        });
      });
  };

  exports.register = (req, res, next) => {
    Users.find({ email: req.body.email })
      .exec()
      .then((user) => {
        if (user.length >= 1) {
          return res.status(409).json({
            message: "Email already existed,Please try another one",
          });
        } else {
          bcrypt.hash(req.body.password, 10, (error, hash) => {
            if (error) {
              return res.status(500).json({
                error: error,
              });
            } else {
              const user = new Users({
                email: req.body.email,
                password: hash,
                fullName: req.body.fullName
              });
              user
                .save()
                .then((result) => {
                  res.status(201).json({
                    message: "User Created",
                    isSuccess: true,
                  });
                })
                .catch((error) => {
                  res.status(500).json({
                    error: error,
                  });
                });
            }
          });
        }
      });
  };


//ashok@gmail.com
//123456
exports.login = (req, res, next) => {
    Users.find({ email: req.body.email })
      .exec()
      .then((user) => {
        if (user.length < 1) {
          return res.status(401).json({
            message: "Email not found",
          });
        }
        bcrypt.compare(req.body.password, user[0].password, (err, result) => {
          if (result) {
            const token = jwt.sign(
              { email: user[0].email, _id: user[0]._id },
              process.env.JWT_KEY || "ashok",
              { expiresIn: "1h" }
            );
            return res.status(200).json({
              message: "Authentication Success",
              user: user[0],
              Token: token,
            });
          } else {
            return res.status(401).json({
              message: "Inavlid password",
            });
          }
        });
      })
      .catch((err) => {
        return res.status(500).json({
          error: err,
        });
      });
  };


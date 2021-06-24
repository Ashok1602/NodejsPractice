const Sequelize = require("sequelize");
const express = require("express");
const app = express();
const database_stuff = require("./db_config");
// const morgan = require("morgan");

const productsRoute = require("./sequalize/routes/products");

//defining morgan
// app.use(morgan("dev"));
// if express 4.16+ we can replace these instead of body parser
//parsing data
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//this will make update folder publicly,this is static methos
app.use("/uploads", express.static("uploads"));

//CORS(CORS ORIGIN RESOURCE SHARING) handling
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); //instead of * you can give specific url also
  res.header("Access-Control-Allow-Headers", "*"); //you can also mention (Origin,X-Requested-With,Content-Type,Accept,Authorization)
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT,PATCH,DELETE,POST,GET");
    return res.status(200).json({});
  }
  //here we are blocking after this middleware,so options is not occured,then our routes should take care
  //so excecution should move to below routes
  next();
});


//connection
const connection = new Sequelize(
    database_stuff.db_name,
    database_stuff.userName,
    database_stuff.password,
    {
      dialect: database_stuff.dialect,
    }
  );
  
  const Db = {};
  
  Db.connection = connection;
  Db.Sequalize = Sequelize;
  
  Db.products = require("../models/products")(connection, Sequelize);

  Db.connection.sync();

app.use("/products", productsRoute);

// //you need to remove this
// app.use("/getPersons", personsRoute);

//error handling
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;

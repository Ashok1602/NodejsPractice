const express = require('express');
const mongoose = require('mongoose');
const app = express();

const userRouters = require('./routes/users');
const productRouters = require('./routes/products');
const tutorialRouters = require('./routes/tutorial');

const path = require('path');
const sendMail = require('./sendMail');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

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

// if express 4.16+ we can replace these instead of body parser
//parsing data
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//for swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//mongo DB connection
mongoose.connect('mongodb://localhost:27017/company', {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
  if (err) {
        console.log(err);
  } else {
        console.log("mongo DB connection successful");
  }
});

//root 
app.get('/', (req, res) => {
      res.send("Welcome to node js learning");
});

//this will make update folder publicly,this is static methos
app.use("/uploads", express.static("uploads"));

//users routes
app.use('/api/users', userRouters);

//products routes 
app.use('/api/products', productRouters);

//tutorila routes
app.use('/api/tutorial', tutorialRouters);

//html example
app.get('/html', (req, res) => {
      res.sendFile(path.join(__dirname, "/index.html"));
});

//semd mail(dynamic mail)
app.post('/email', (req, res) => {
    const {email, subject, text} = req.body;
    sendMail(email, subject, text, (err, data) => {
      if (err) {
            res.status(500).json({
                  message: "Internal server"
            });
      } else {
            res.json({
                  message: `please check your mail ${email}`
            }); 
      }
    });
});

//redirect example
app.get('/redirect', (req, res) => {
     res.redirect('https://relaxed-booth-44b68a.netlify.app/')
  });

//download example
app.get('/download', (req,res) => {
      res.download(path.join(__dirname, "/index.html"))
})

app.listen(8888, () => {
      console.log("connection successful");
})
const express = require("express")
const app = express();
const mongoose = require("mongoose")
const dotenv = require('dotenv')
const urlRouter = require('./router')
const bodyParser = require('body-parser')
const cors = require('cors')
datb = "mongodb+srv://rohit:Rohit@cluster0.iz0xyeb.mongodb.net/test?retryWrites=true&w=majority"
dotenv.config()
mongoose.connect(datb, {
  useNewURLParser: true,
}, 6000000)
  .then(console.log("connected to server"))
  .catch((err) => console.log(err));
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(express.json())
app.use(cors(
  { origin:'https://studentdetails-22389.web.app',
   credentials:true,            
    optionSuccessStatus:200
  }))
app.use('/', urlRouter)
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log("listening tp 5000")
})







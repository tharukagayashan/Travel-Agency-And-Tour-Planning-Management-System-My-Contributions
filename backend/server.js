const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());

const URL = "mongodb+srv://gayashan:gayashan@cluster0.t9e57.mongodb.net/TestDB?retryWrites=true&w=majority";

mongoose.connect(URL,{
    useCreateIndex:true,
    useFindAndModify:false,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Mongodb Connection successful");
}).catch((err)=>{
    console.log(err);
});

let ground = require("./routes/grounds.js");
let car = require("./routes/cars.js");
let guide = require("./routes/guides.js");
let carres = require("./routes/car_reservations.js");
let guideres = require("./routes/guide_reservations.js");

app.use("/ground",ground);
app.use("/car",car);
app.use("/guide",guide);
app.use("/carreservation",carres);
app.use("/guidereservation",guideres);

app.listen(PORT,()=>{
    console.log(`App running on port number ${PORT}`);
});
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Car_Reservation = new Schema({
    
    Date:{
        type:String,
        required:true
    },
    Time:{
        type:String,
        required:true
    },
    From:{
        type:String,
        required:true
    },
    To:{
        type:String,
        required:true
    },
    Type:{
        type:String,
        required:true
    }
});

let car_reservation = mongoose.model("Car_Reservation",Car_Reservation);
module.exports = car_reservation;
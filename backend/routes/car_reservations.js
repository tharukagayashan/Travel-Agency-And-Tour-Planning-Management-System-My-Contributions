const router = require("express").Router();
const carReservation = require("../models/Car_Reservation");

router.route("/add").post((req,res)=>{

    const Date = req.body.Date;
    const Time = req.body.Time;
    const From = req.body.From;
    const To = req.body.To;
    const Type = req.body.Type;

    const carreservationobj = new carReservation({
        Date,
        Time,
        From,
        To,
        Type
    });

    carreservationobj.save().then(()=>{
        res.json("Insert Data Successfully");
    }).catch((err)=>{
        console.log(err);
    });

});

router.route("/").get((req,res)=>{

    carReservation.find().then((carReservationData)=>{
        res.json(carReservationData);
    }).catch((err)=>{
        console.log(err);
    });

});

router.route("/update/:id").put((req,res)=>{
    
    let id = req.params.id;

    const Date = req.body.Date;
    const Time = req.body.Time;
    const From = req.body.From;
    const To = req.body.To;
    const Type = req.body.Type;

    const updateCarReservation = {

        Date,
        Time,
        From,
        To,
        Type
    
    }

    carReservation.findByIdAndUpdate(id,updateCarReservation).then((updateCarRes)=>{
        res.json(updateCarRes);
    }).catch((err)=>{
        console.log(err);
    });

});

router.route("/delete/:id").delete((req,res)=>{

    let id = req.params.id;

    carReservation.findByIdAndDelete(id).then(()=>{
        res.json("Delete Successfully");
    }).catch((err)=>{
        console.log(err);
    });

});

module.exports = router;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function CarReservationBody() {


    const [From, setFrom] = useState("");
    const [Type, setType] = useState("");

/*
    function addNewCarReservation(e) {
        e.preventDefault();

        const addCarReservation = {
            Date, Time, From, To, Type
        }

        axios.post("http://localhost:8080/carreservation/add", addCarReservation).then(() => {
            alert("Car Reservation successfully");
        }).catch((err) => {
            alert(err);
        });

    }
*/

    const [cars, setCars] = useState([]);

    useEffect(() => {

        axios.get('http://localhost:8080/car/')
            .then((res) => {
                console.log(res);
                setCars(res.data);
            }).catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (

        <div className="container">
            <div className="row mt-5">
                <div className="col-lg-12 p-3 bg-light opacity-80 mb-5">
                    <form className="form-group" align="left">
                        <div className="row">
                            <div className="col-lg-3">

                                <label>Brand</label>
                                <select name="from" id="from" className="form-control"
                                    onChange={(e) => {
                                        setFrom(e.target.value);
                                    }
                                    }>
                                    <option value="Select one">Select one</option>
                                    <option value="TOYOTA">TOYOTA</option>
                                    <option value="BMW">BMW</option>
                                    <option value="AUDI">AUDI</option>
                                    <option value="BENZ">BENZ</option>
                                    <option value="SUZUKI">SUZUKI</option>
                                    <option value="NISSAN">NISSAN</option>
                                    <option value="VOLVO">VOLVO</option>
                                </select>

                            </div>

                            <div className="col-lg-3">

                                <label>Location</label>

                                <select name="Location" id="type" className="form-control"
                                    onChange={(e) => {
                                        setType(e.target.value);
                                    }
                                    }>
                                    <option value="Select one">Select one</option>
                                    <option value="Colombo">Colombo</option>
                                    <option value="Hambantota">Hambantota</option>
                                    <option value="Matara">Matara</option>
                                    <option value="Galle">Galle</option>
                                    <option value="Kandy">Kandy</option>
                                    <option value="Kataragama">Kataragama</option>
                                </select>

                            </div>
                            <div className="col-lg-3">
                                <label>SEARCH</label>
                                <input type="search" name="search" id="search" className="form-control" />
                            </div>
                            <div className="col-lg-3">
                                <input type="submit" name="submit" value="Search" className="btn btn-primary form-control mt-4" />
                            </div>
                        </div>
                    </form>

                </div>

                <div>
                    {
                        cars.map((val, key) => {
                            if (val.Car_Type == "Airport Taxi") {
                                if(val.Car_Type == "Airport Taxi"){
                                    var img="https://images.unsplash.com/photo-1518614768202-663a3a0ecf59?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwdGF4aXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                                }
                                else{
                                    var img="https://cdn.luxe.digital/media/2020/12/16175821/most-expensive-cars-2021-Maserati-MC20-luxe-digital%402x.jpg"
                                }

                                return (
                                    <div className="row m-1 mb-2" style={{ float: "left", listStyle: "none" }}>
                                        <div className="col mt-2 mb-2">
                                            <ul style={{ flistStyle: "none" }} className="card p-1">
                                                <li><img src={img} width="200px" height="150px" className="m-3" /></li>
                                                <li><h2>{val.Car_Type}</h2></li>
                                                <li>Brand : {val.Brand}</li>
                                                <li>Model : {val.Model}</li>
                                                <li><a href={`/ground/car/carprofile/${val._id}`} className="btn btn-primary">Book Now</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                )

                            }

                        })
                    }
                </div>

            </div>


        </div>

    );
}
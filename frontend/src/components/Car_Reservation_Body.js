import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function CarReservationBody() {

    const [Date, setDate] = useState("");
    const [Time, setTime] = useState("");
    const [From, setFrom] = useState("");
    const [To, setTo] = useState("");
    const [Type, setType] = useState("");


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
                <div className="col-lg-6 p-3 bg-light opacity-80">
                    <form className="form-group" align="left">
                        <div className="row">
                            <div className="col-lg-6">

                                <label>FROM</label>
                                <select name="from" id="from" className="form-control"
                                    onChange={(e) => {
                                        setFrom(e.target.value);
                                    }
                                    }>
                                    <option value="Select one">Select one</option>
                                    <option value="Hambantota">Hambantota</option>
                                    <option value="Matara">Matara</option>
                                    <option value="Colombo">Colombo</option>
                                    <option value="Nuwara">Nuwara</option>
                                    <option value="Polonnaruwa">Polonnaruwa</option>
                                    <option value="Nuwara Eliya">Nuwara Eliya</option>
                                </select>

                            </div>

                            <div className="col-lg-6">

                                <label>DATE</label>
                                <input type="date" id="date" name="date" className="form-control"
                                    onChange={(e) => {
                                        setDate(e.target.value);
                                    }
                                    } />

                            </div>

                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <label>To</label>

                                <select name="to" id="to" className="form-control"
                                    onChange={(e) => {
                                        setTo(e.target.value);
                                    }
                                    }>
                                    <option value="Select one">Select one</option>
                                    <option value="Hambantota">Hambantota</option>
                                    <option value="Matara">Matara</option>
                                    <option value="Colombo">Colombo</option>
                                    <option value="Nuwara">Nuwara</option>
                                    <option value="Polonnaruwa">Polonnaruwa</option>
                                    <option value="Nuwara Eliya">Nuwara Eliya</option>
                                </select>

                            </div>
                            <div className="col-lg-6">

                                <label>Time</label>
                                <input type="time" name="time" id="time" className="form-control"
                                    onChange={(e) => {
                                        setTime(e.target.value);
                                    }
                                    } />

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">

                                <label>TYPE</label>

                                <select name="type" id="type" className="form-control"
                                    onChange={(e) => {
                                        setType(e.target.value);
                                    }
                                    }>
                                    <option value="Select one">Select one</option>
                                    <option value="Car">Car</option>
                                    <option value="Airport Taxi">Airport Taxi</option>
                                </select>

                            </div>
                        </div>
                    </form>

                </div>
                <div className="col-lg-2 p-3 bg-light">
                    <input type="submit" name="submit" value="Book now" className="btn btn-success form-control" style={{ marginTop: "25px" }} onClick={addNewCarReservation} /><br />
                    <input type="button" name="clear" value="Cancel" className="btn btn-danger form-control" style={{ marginTop: "25px" }} />
                </div>
                <div className="col-lg-1"></div>
                <div className="col-lg-3 bg-light" style={{ height: "35vh" }}>

                </div>
            </div>

            <br /><br />

            <div className="row">
                <div className="col-lg-12" style={{ height: "200px", overflowY: "scroll", overflow: "auto" }}>

                    <table className="table table-hover table-stripped table-bordered opacity-80">
                        <thead className="bg-dark text-light">
                            <tr>
                                <th scope="col">Date</th>
                                <th scope="col">Time</th>
                                <th scope="col">From</th>
                                <th scope="col">To</th>
                                <th scope="col">Type</th>
                                <th scope="col">Cost per KM</th>
                                <th scope="col">View Profile</th>
                                <th scope="col">Book Now</th>
                            </tr>
                        </thead>
                        <thead className="thead bg-light">
                    {cars.map((val, key) => {
                        return (
                    
                            <tr className="bg-light table-hover">
                                <td>{val.Car_ID}</td>
                                <td>{val.Car_Type}</td>
                                <td>{val.Brand}</td>
                                <td>{val.Model}</td>
                                <td>{val.Location}</td>
                                <td>{val.Cost_per_KM}</td>
                                <td><a className="btn btn-success text-dark">View Profile</a></td>
                                <td><button className="btn btn-danger text-dark">Book Now</button></td>
                            </tr>
        
                        )
                    })}
                     </thead>
                        
                    </table>

                </div>
            </div>

        </div>

    );

}
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ViewCarProfile(props) {

    let id = props.match.params.id;

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/car/${id}`).then((res) => {
            setData(res.data);
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    //Insert Part
    const Car_ID = data.Car_ID;
    const [Date, setDate] = useState("");
    const [Time, setTime] = useState("");
    const [From, setFrom] = useState("");
    const [To, setTo] = useState("");
    const Car_Type = data.Car_Type;

    function CarReservation(e) {
        e.preventDefault();

        const addCarRes = {
            Date, Time, From, To, Car_Type, Car_ID
        }

        console.log(addCarRes);
        axios.post("http://localhost:8080/carreservation/add", addCarRes).then(() => {
            alert("Car Reservation successfully");
        }).catch((err) => {
            alert(err);
        });
    }


    return (

        <div className="container">
            <h1 className="text-light">Car Profile</h1>

            <div className="row mt-5 mb-5">
                <div className="col-lg-6 bg-light card-body" style={{ opacity: "0.75" }}>

                    <img src={data.Img} width="70%" className="mt-3" />
                    <h1 className="card-title mt-3">{data.Brand}</h1>
                    <h5 className="card-text">Model : {data.Model}</h5>
                    <h5 className="card-text">Car ID : {data.Car_ID}</h5>
                    <h5 className="card-text">Location : {data.Location}</h5>
                    <h5 className="card-text">Cost Per KM : {data.Cost_per_KM}</h5>
                </div>
                <div className="col-lg-6 text-light">

                    <div className="col" style={{ fontSize: '20px' }}>

                        <form onSubmit={CarReservation}>
                            <div className="form-group">
                                <label>Car ID</label>
                                <input type="text" name="Car_ID" value={data.Car_ID} id="Car_ID" className="form-control" readOnly />
                            </div>
                            <div className="form-group">
                                <label>Type</label>&nbsp;&nbsp;
                                <input type="text" name="Type" id="Starting_point" value={data.Car_Type} className="form-control" readOnly />
                            </div>
                            <div className="form-group">
                                <label>Date</label>&nbsp;&nbsp;
                                <input type="date" name="Date" id="Date" className="form-control"
                                    onChange={
                                        (e) => {
                                            setDate(e.target.value);
                                        }
                                    }
                                />
                            </div>
                            <div className="form-group">
                                <label>Time</label>&nbsp;&nbsp;
                                <input type="time" name="Time" id="Time" className="form-control"
                                    onChange={
                                        (e) => {
                                            setTime(e.target.value);
                                        }
                                    } />
                            </div>
                            <div className="form-group">
                                <label>From</label>&nbsp;&nbsp;
                                <input type="text" name="From" id="From" className="form-control"
                                    onChange={
                                        (e) => {
                                            setFrom(e.target.value);
                                        }
                                    } />
                            </div>
                            <div className="form-group">
                                <label>To</label>&nbsp;&nbsp;
                                <input type="text" name="To" id="To" className="form-control"
                                    onChange={
                                        (e) => {
                                            setTo(e.target.value);
                                        }
                                    } />
                            </div>
                            <div className="form-group mt-3">
                                <input type="submit" name="submit" id="submit" value="Book Now" className="form-control btn btn-primary" />
                            </div>
                            <div className="form-group mt-3">
                                <input type="button" name="canncel" id="cancel" value="Cancel" className="form-control btn btn-danger" />
                            </div>


                        </form>
                    </div>
                </div>
                <div className="col-lg-3"></div>
            </div>

        </div>
    )
}
import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function GuideReservationBody() {

    const [Guides, setGuides] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/guide/").then((res) => {
            setGuides(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, []);

    return (
        <div className="container">
            <div className="row p-5"></div>
            <div>
                <h1 className="bg-light p-3">SELECT AND BOOK YOUR TRAVEL GUIDE</h1>
            </div>
            <div>
            {
                Guides.map((val, key) => {
                    return (

                        <div className="row m-1" style={{ float: "left", listStyle: "none" }}>
                            &nbsp;
                            <div className="col mt-3 mb-2">
                                <ul style={{ listStyle: "none" }} className="card p-1">
                                    <li><img src={val.Img} width="200px" height="150px" className="m-3" /></li>
                                    <li>{val.Full_Name}</li>
                                    <li>{val.Experience}</li>
                                    <li>{val.Email}</li>
                                    <li><a href={`/ground/guide/guideprofile/${val._id}`} className="btn btn-primary">Book Now</a></li>
                                </ul>
                            </div>
                        </div>

                    );
                })
            }
        </div>
        </div >
    );

}
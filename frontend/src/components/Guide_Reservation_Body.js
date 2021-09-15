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
            {
                Guides.map((val, key) => {
                    return (

                        <div className="row m-1" style={{ float: "left", listStyle: "none" }}>
                            &nbsp;
                            <div className="col mt-3 mb-2">
                                <ul style={{ listStyle: "none" }} className="card p-1">
                                    <li><img src="https://imageresizer.static9.net.au/-x5Z-OfpYVwC3q10I1_ZVamYMU8=/1920x0/filters:format(webp)/vms-tv-images-prod.s3-ap-southeast-2.amazonaws.com%2F2021%2F07%2F371989%2Ftravelguidess4_genericlook_ctv_standardcard.jpg" width="200px" className="m-3" /></li>
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

        </div >
    );

}
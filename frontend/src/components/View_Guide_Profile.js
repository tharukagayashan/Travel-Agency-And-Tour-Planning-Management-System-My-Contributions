import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function View_Guide_Profile(props) {

    let id = props.match.params.id;

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/guide/${id}`).then((res) => {
            setData(res.data);
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    //Insert Part
    const Guide_ID = data.Guide_ID;
    const [No_of_Days, setNoOfDays] = useState("");
    const [Tour_place, setTourPlace] = useState("");
    const [Starting_point, setStartingPoint] = useState("");

    function GuideReservation(e) {
        e.preventDefault();

        const addGuideRes = {
            No_of_Days, Tour_place, Starting_point,Guide_ID
        }

        console.log(addGuideRes);
       axios.post("http://localhost:8080/guidereservation/add", addGuideRes).then(() => {
            alert("Guide Reservation successfully");
        }).catch((err) => {
            alert(err);
        });
    }



    return (
        <div className="container">

            <div className="row mt-5">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                    <h1 className="bg-warning">User Profile</h1>
                    <div className="col text-light" style={{ fontSize: '20px' }}>

                        <form onSubmit={GuideReservation}>
                            <div className="form-group">
                                <label>Guide</label>
                                <input type="text" name="name" value={data.Full_Name} id="name" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Guide ID</label>
                                <input type="text" name="name" value={data.Guide_ID} id="name" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>No of Days</label>&nbsp;&nbsp;
                                <input type="text" name="No_of_Days" id="No_of_Days" className="form-control" 
                                            onChange={(e) => {
                                                setNoOfDays(e.target.value);
                                            }
                                            } />
                            </div>
                            <div className="form-group">
                                <label>Tour place</label>&nbsp;&nbsp;
                                <input type="text" name="Tour_place" id="Tour_place" className="form-control" 
                                            onChange={(e) => {
                                                setTourPlace(e.target.value);
                                            }
                                            } />
                            </div>
                            <div className="form-group">
                                <label>Starting Point</label>&nbsp;&nbsp;
                                <input type="text" name="Starting_point" id="Starting_point" className="form-control" 
                                            onChange={(e) => {
                                                setStartingPoint(e.target.value);
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
    );

}
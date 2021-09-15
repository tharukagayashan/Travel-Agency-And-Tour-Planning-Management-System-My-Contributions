import react, { useState, useEffect } from 'react';
import axios from 'axios';

export default function AddminCarReservationView() {

    const [carRes, setCarRes] = useState([]);

    useEffect(() => {

        axios.get('http://localhost:8080/carreservation/')
            .then((res) => {
                console.log(res);
                setCarRes(res.data);
            }).catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <div className="container">

            <div className="p-3">
                <h1 className="bg-light">Car Reservations</h1>
            </div>

            <table className="table table-bordered mt-5" style={{overflowY:"100x",overflow:"auto",height:"200px"}}>
                <thead className="bg-light">
                    <tr>
                        <td>Date</td>
                        <td>Time</td>
                        <td>From</td>
                        <td>To</td>
                        <td>Type</td>
                        <td>Update</td>
                        <td>Delete</td>
                    </tr>
                </thead>
                <tbody>
                    {carRes.map((val, key) => {
                        return (
                            <tr className="bg-light">
                                <td>{val.Date}</td>
                                <td>{val.Time}</td>
                                <td>{val.From}</td>
                                <td>{val.To}</td>
                                <td>{val.Type}</td>
                                <td><input type="button" name="update" value="Update" className="btn btn-success"/></td>
                                <td><input type="button" name="delete" value="Delete" className="btn btn-danger"/></td>
                            </tr>
                        )
                    })

                    }
                </tbody>
            </table>

        </div>
    )

}
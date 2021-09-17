import react, { useState, useEffect } from 'react';
import axios from 'axios';

export default function AddminGuideReservationView() {

    const [guideRes, setGuideRes] = useState([]);

    useEffect(() => {

        axios.get('http://localhost:8080/guidereservation/')
            .then((res) => {
                console.log(res);
                setGuideRes(res.data);
            }).catch((err) => {
                console.log(err.message);
            });
    }, []);


    function deleteGuideRes(id) {
        axios.delete(`http://localhost:8080/guidereservation/delete/${id}`)
            .then(() => {
                alert("Deleted Successfully");
            }).catch((err) => {
                alert("error : " + err);
            });
            window.location.reload();
    }

    return (
        <div className="container">

            <div className="p-3">
                <h1 className="bg-light">Guide Reservations</h1>
            </div>

            <table className="table table-bordered mt-5" style={{overflowY:"100x",overflow:"auto",height:"200px"}}>
                <thead className="bg-light">
                    <tr>
                        <td>Guide ID</td>
                        <td>No of Days</td>
                        <td>Starting Point</td>
                        <td>Tour Place</td>
                        <td>Update</td>
                        <td>Delete</td>
                    </tr>
                </thead>
                <tbody>
                    {guideRes.map((val, key) => {
                        return (
                            <tr className="bg-light">
                                <td>{val.Guide_ID}</td>
                                <td>{val.No_of_Days}</td>
                                <td>{val.Starting_point}</td>
                                <td>{val.Tour_place}</td>
                                <td><input type="button" name="update" value="Update" className="btn btn-success"/></td>
                                <td><input type="button" name="delete" value="Delete" onClick={() => deleteGuideRes(val._id)} className="btn btn-danger"/></td>
                            </tr>
                        )
                    })

                    }
                </tbody>
            </table>

        </div>
    )

}
import react from 'react';

export default function GroundAdmin() {

    return (

        <div className="container">
            <div className="row">
                <div className="col lg-10">
                    <div className="col-lg-2 mt-3"></div>

                    <div>
                        <a className="btn btn-success m-4 p-3" href={"/admin/ground/guide"}>Guide Management</a>
                        <a className="btn btn-success m-4 p-3" href={"/admin/ground/car"}>Car Management</a>
                    </div>

                    <div>
                    <a className="btn btn-danger  m-4 p-3" href={"/admin/ground/carreservation"}>Car Reservations</a>
                    <a className="btn btn-danger m-4 p-3" href={""}>Guide Reservation</a>
</div>
                </div>
            </div>
        </div>



    )

}
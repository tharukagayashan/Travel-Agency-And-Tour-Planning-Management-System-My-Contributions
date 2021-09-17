import React from 'react'
import "../css/reservation_of_ground.css";

export default function ReservationOfGroundBody() {

    return (

        <div class="container-fluid bg-trasparent my-4 p-3" style={{position: "sticky"}}>
            <div class="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3 a">
                <div class="col" style={{marginRight:"75px",marginLeft:"70px"}}>
                    <h2 className="text-light">Airport Taxi</h2>
                    <div class="card h-80 shadow-sm"> <img src="https://media.istockphoto.com/vectors/happy-family-trip-and-taxi-service-illustration-vector-id1151360678?k=20&m=1151360678&s=612x612&w=0&h=72hkXZXthPl65ofu2rcjh2CXKlFiDWR4viPqXhUxg64=" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <div class="text-center my-4"> <a href="/ground/airporttaxi" class="btn btn-danger">Click to book</a> </div>
                            <div><p>Reservation of your Airport Taxi</p></div>
                        </div>
                    </div>
                </div>
                <div class="col" style={{marginRight:"75px"}}>
                <h2 className="text-light">Car</h2>
                    <div class="card h-80 shadow-sm"> <img src="https://khushitaxiservice.com/wp-content/uploads/2021/01/AA-1.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <div class="text-center my-4"> <a href="/ground/car" class="btn btn-danger">Click to book</a> </div>
                            <div><p>Reservation of your Car</p></div>
                        </div>
                    </div>
                </div>
                <div class="col">
                <h2 className="text-light">Guide</h2>
                    <div class="card h-80 shadow-sm"> <img src="https://static8.depositphotos.com/1030387/806/v/450/depositphotos_8069143-stock-illustration-family-trip.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <div class="text-center my-4"> <a href="/ground/guide" class="btn btn-danger">Click to book</a> </div>
                            <div><p>Reservation of your Travel Guide</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
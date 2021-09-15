import React from 'react';
import "../style/navbar.css";
import Button from '@material-ui/core/Button';

function navbar() {


    return (
        <div className="navbar">

            <Button  ><a href="#" style={{ textDecoration: "none" }}>Home</a></Button>
            <Button  ><a href="#" style={{ textDecoration: "none" }}>Stay</a></Button>
            <Button  ><a href="#" style={{ textDecoration: "none" }}>Tickets</a></Button>
            <Button  ><a href="#" style={{ textDecoration: "none" }}>Ground Reservations</a></Button>
            <Button  ><a href="#" style={{ textDecoration: "none" }}>Packages</a></Button>
            <Button  ><a href="#" style={{ textDecoration: "none" }}>Documents</a></Button>
            <Button  ><a href="#" style={{ textDecoration: "none" }}>Insurence</a></Button>
            <Button  ><a href="#" style={{ textDecoration: "none" }}>Events</a></Button>
        </div>

    );
}
export default navbar


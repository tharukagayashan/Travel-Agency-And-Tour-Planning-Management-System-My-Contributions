import React from 'react';
import "../style/admin.css";
import Imglogo from "../images/logo.png";
import HouseIcon from '@material-ui/icons/House';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
import ExploreIcon from '@material-ui/icons/Explore';
import DescriptionIcon from '@material-ui/icons/Description';
import SecurityIcon from '@material-ui/icons/Security';
import EventIcon from '@material-ui/icons/Event';
import GroupIcon from '@material-ui/icons/Group';
import GroundAdmin from './Ground_Admin';

export default function admin() {
    return (
        <div>
            <div className="containe display-table">
                <div className="row display-table-row">
                    <div className="col-md-2 col-sm-1 hidden-xs display-table-cell v-align box" id="navigation">
                        <div className="logo">
                            <a hef="home.html"><img src={Imglogo} alt="merkery_logo" className="hidden-xs hidden-sm" />
                               
                            </a>
                            
                        </div>
                        <h3 style={{color:"white"}}><b>Admin Panel</b></h3> 
                        <div className="navi">
                            <ul>
                                <li ><a href="/"><HouseIcon style={{ fontSize: 30,color:"#5584FF"}}/><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Accommadation</span></a></li>
                                <li><a href="/admin/tickets"><ConfirmationNumberIcon style={{ fontSize: 30,color:"#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Ticket</span></a></li>
                                <li><a href="/admin/"><LocalTaxiIcon style={{ fontSize: 30,color:"/5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Ground</span></a></li>
                                <li><a href="/"><ExploreIcon style={{ fontSize: 30,color:"/5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Tour Package</span></a></li>
                                <li><a href="/"><DescriptionIcon style={{ fontSize: 30,color:"#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Travel Document</span></a></li>
                                <li><a href="/"><SecurityIcon style={{ fontSize: 30,color:"#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Insurance</span></a></li>
                                <li><a href="/"><EventIcon style={{ fontSize: 30,color:"#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Event</span></a></li>
                                <li><a href="/"><GroupIcon style={{ fontSize: 30,color:"#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;User MAnagement</span></a></li>

                            </ul>
                        </div>
                    </div>
                    <div className="col-md-10 col-sm-11 display-table-cell v-align">
                        
                        <div className="row">
                            <header>
                                <div className="col-md-7">
                                   
                        
                                </div>
                                <center>
                                <div className="col-md-5 ">
                                    <div className="header-rightside ">
                                        <ul className="list-inline header-top pull-right ">
                                            <div>
                                            <h1><marquee>Welcome to Admin Panel</marquee></h1>
                                            </div>
                                            <li>
                                               
                                            </li>
                                            
                                        </ul>
                                      
                                    </div>
                                </div>
                                </center>

                            </header>
                        </div>
                        <GroundAdmin/>
                    </div>
                </div>

            </div>

            <div id="add_project" className="modal fade" role="dialog">
                <div className="modal-dialog">


                    <div className="modal-content">
                       
                        
                        <div className="modal-footer">
                           
                        </div>
                    </div>
                   
                </div>
              
            </div>
        </div>
    )
}
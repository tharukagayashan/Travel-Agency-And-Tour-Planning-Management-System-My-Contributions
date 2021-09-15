import { BrowserRouter,Route} from 'react-router-dom';
import './App.css';
import ResHeader from './components/Reservation_Of_Ground_Header';
import ResBody from './components/Reservation_Of_Ground_Body';
import CarReservationHeader from './components/Car_Reservation_Header';
import CarReservationBody from './components/Car_Reservation_Body';
import UpdateCarDetails from './components/Update_Car_Details';
import AddNewCarAndAirportTaxi from './components/Add_New_Car_And_Airport_Taxi';
import GuideReservationBody from './components/Guide_Reservation_Body';
import AddNewGuideBody from './components/Add_New_Guide_Body';
import GroundAdmin from './components/Ground_Admin';
import AddminCarReservationView from './components/Admin_Car_Reservation_View';
import Header from './components/header';
import Admin from './components/admin';
import Navbar from './components/navbar';
import Footer from './components/footer';
import ViewGuideProfile from './components/View_Guide_Profile';

function App() {
  return (
    <div className="App">
      
          <BrowserRouter>
              <Route exact path="/" component={Header}></Route>
              <Route exact path="/ground" component={Header}></Route>
              <Route exact path="/ground/car" component={Header}></Route>
              <Route exact path="/ground/guide" component={Header}></Route>


              <Route exact path="/" component={Navbar}></Route>
              <Route exact path="/ground" component={Navbar}></Route>
              <Route exact path="/ground/car" component={Navbar}></Route>
              <Route exact path="/ground/guide" component={Navbar}></Route>

              <Route exact path="/admin" component={Admin}></Route>
              
              <Route exact path="/ground" component={ResHeader}></Route>
              <Route exact path="/ground" component={ResBody}></Route>
              <Route exact path="/ground/car" component={CarReservationHeader}></Route>
              <Route exact path="/ground/car" component={CarReservationBody}></Route>
              <Route exact path="/admin/ground/car/update/:id" component={UpdateCarDetails}></Route>
              <Route exact path="/admin/ground/car" component={AddNewCarAndAirportTaxi}></Route>
              <Route exact path="/admin/ground" component={GroundAdmin}></Route>
              <Route exact path="/admin/ground/guide" component={AddNewGuideBody}></Route>
              <Route exact path="/admin/ground/carreservation" component={AddminCarReservationView}></Route>
              <Route exact path="/ground/guide" component={GuideReservationBody}></Route> 
              <Route exact path="/ground/guide/guideprofile/:id" component={ViewGuideProfile}></Route>

              <Route exact path="/" component={Footer}></Route>
              <Route exact path="/ground" component={Footer}></Route>
              <Route exact path="/ground/car" component={Footer}></Route>
              {/*<Route exact path="/ground/guide" component={Footer}></Route>*/}
          
          </BrowserRouter>
    
    </div>
  );
}

export default App;
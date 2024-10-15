import { BrowserRouter as Router, Routes,Route, Link } from 'react-router-dom';
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Service from './pages/Service'
import Hourly from './pages/Hourly/index'
import Aircondition from './pages/Aircondition/Aircondition'
import Totalclean from './pages/Totalclean/Totalclean'
import Sofaclean from './pages/Sofaclean/Sofaclean'
import Cooking from './pages/Cooking/Cooking'
import Laundry from './pages/Laundry/Laundry'
import Market from './pages/Market/Market'
import Header from './pages/Header/Header';
import Footer from './pages/Footer/Footer';
import Employee from './pages/Employee/Employee';
import "./App.css";

function App() {
  return ( 
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element ={<Home/>} />
          <Route path="/register" element ={<Register/>} />
          <Route path="/login" element ={<Login/>} />
          <Route path="/service" element ={<Service/>} />
          <Route path="/Aircondition" element ={<Aircondition/>} />
          <Route path="/hourly" element ={<Hourly/>} />
          <Route path="/totalclean" element ={<Totalclean/>} />
          <Route path="/sofaclean" element ={<Sofaclean/>} />
          <Route path="/cooking" element ={<Cooking/>} />
          <Route path="/laundry" element ={<Laundry/>} />
          <Route path="/market" element ={<Market/>} />
          <Route path="/employee" element ={<Employee/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
   );
}

export default App;
import logo from './logo.svg';
import './App.css';
import { Route, Routes} from "react-router-dom";
import Navbar from './Screens/Navbar';
import Home from './Screens/Home';
import Footer from './Screens/Footer';
import Contact from './Screens/Contact';
import Course from './Screens/Course';
import About from './Screens/About';
import Home2 from './Screens/Home2';
import Buy from './Screens/Buy';
import Register from './Screens/Register_login';
import DashBoard from './dashboard/dashboard';

function App() {
  return (
    <div className="App">
    
      <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home2/>}></Route>
          <Route path='/course' exact element={<Course/>}></Route>
          <Route path='/contact' exact element={<Contact/>}></Route>
          <Route path='/about' exact element={<About/>}></Route>
        {/* //  <Route path='/buy' exact element={<Buy/>}></Route> */}
          <Route path='/register' exact element={<Register/>}></Route>
          <Route path='/dashboard' exact element={<DashBoard/>}></Route>
        </Routes>
        <Footer/>
     
    </div>
  );
}

export default App;

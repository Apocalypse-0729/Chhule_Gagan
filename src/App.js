import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from './Screens/Navbar';
import Footer from './Screens/Footer';
import Contact from './Screens/Contact';
import Course from './Screens/Course';
import About from './Screens/About';
import Home from './Screens/Home';
import Buy from './Screens/Buy';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home/>}></Route>
          <Route path='/course' exact element={<Course/>}></Route>
          <Route path='/contact' exact element={<Contact/>}></Route>
          <Route path='/about' exact element={<About/>}></Route>
          <Route path='/buy' exact element={<Buy/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Navbar} from '../components/Navbar';
import {Footer} from '../components/Footer';
import {About} from '../pages/About';
import {Home} from '../pages/Home';
import {Partners} from '../pages/Partners';



function App() {
  return (
    <>

      {/* Establish the route network for the client */}
      <Router>

          {/* Hold the main for the frontend */}
          <main 
          className="min-h-screen w-screen"
          >
            
            {/* Hold the Navbar component */}
            <Navbar/>

            {/* Hold all the routes of the client */}
            <Routes>
              
              {/* Hold the home route */}
              <Route element={<Home/>} path="/"></Route>

              {/* Hold the about route */}
              <Route element={<About/>} path="/about"></Route>

              {/* Hold the partners route */}
              <Route element={<Partners/>} path="/partners"></Route>
            </Routes>
          
            {/* Hold the Footer component */}
            <Footer/>
          </main>
       
       <ToastContainer />
      </Router>
    </>
  );
}

export default App;

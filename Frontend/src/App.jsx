import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Signup from "./Pages/Signup";
import Home from './Pages/Home'; 
import NotFound from './Pages/NotFound';
import Success from './Pages/Success';
const App = () => {
  return (
  <Router>
        <Routes>
        <Route path="/" element={<Signup />} />  {/* Signup is now the default page */}
        <Route path="/home" element={<Home />} />
          <Route path='/success' element={<Success />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
        <Toaster/>
      </Router>
  );
};

export default App;

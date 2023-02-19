import './css/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage'
import PostListing from './pages/PostListing'
import Login from './pages/Login'
import DevProfile from './pages/DevProfile';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/postListing' element={<PostListing />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/about' element={<DevProfile />}></Route>
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}


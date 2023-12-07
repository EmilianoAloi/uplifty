import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import fondo from "./assets/images/fondo.jpg"

function App() {
  return (
    <>


      <NavBar />

      <BrowserRouter>


        <Routes>

          <Route path='/' element={<Home />} />


        </Routes>

      </BrowserRouter>




    </>
  );
}

export default App;

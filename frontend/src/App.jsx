import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddEventModal from './components/AddEventModal/AddEventModal';
import EventsModal from "./components/EventsModal/EventsModal"
// import fondo from "./assets/images/fondo.jpg"

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#01DD9D', // Cambia este valor al color que desees
      },
    },
  });

  return (
    <>

      <ThemeProvider theme={theme}>

        <BrowserRouter>

        <NavBar />

          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/addevent' element={<AddEventModal />} />
            <Route path='/showevents' element={<EventsModal />} />


          </Routes>

        </BrowserRouter>

      </ThemeProvider>

    </>
  );
}

export default App;
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddEventModal from './components/AddEventModal/AddEventModal';
import EventsModal from "./components/EventsModal/EventsModal"



function App() {

  const theme = createTheme({
    palette: {
      secondary: {
        main: '#01DD9D', 
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
            <Route path='/event/:id' element={<AddEventModal />} />



          </Routes>

        </BrowserRouter>

      </ThemeProvider>

    </>
  );
}

export default App;

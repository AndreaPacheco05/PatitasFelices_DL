import './App.css'
import Navbar from './components/Navbar'
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './views/Home';
import Footer from './components/Footer';
import IniciarSesion from './views/IniciarSesion';
import Registrar from './views/Registrar';
import { Route, Routes } from 'react-router-dom';


function App() {

return (
    <>
    <Navbar />
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<IniciarSesion />}/>
        <Route path='/register' element={<Registrar />}/>
    </Routes>
    <Footer/>
    </>
)
}

export default App

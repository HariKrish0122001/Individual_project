import { Routes, Route } from 'react-router-dom';
import Login from './Components/login/login';
import Signup from './Components/signup/signup';

function Routing() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Login/>} />
                <Route path='/signup' element={<Signup/>} />
            </Routes>
        </>
    );
}

export default Routing;
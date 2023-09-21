import { Routes, Route } from 'react-router-dom';
import Login from './Components/login/login';
import Signup from './Components/signup/signup';

import Dashboard from './Components/Dashboard/dashboard';
import AddBlog from './Components/Addblog/addblog';

function Routing() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Login/>} />
                <Route path='/signup' element={<Signup/>} />
                <Route path='/dashboard' element={<Dashboard/>}/>
                <Route path='/blog' element={<AddBlog/>}/>
            </Routes>
        </>
    );
}

export default Routing;
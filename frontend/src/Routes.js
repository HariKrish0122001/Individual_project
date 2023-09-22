import { Routes, Route } from 'react-router-dom';
import Login from './Components/login/login';
import Signup from './Components/signup/signup';

import Dashboard from './Components/Dashboard/dashboard';
import AddBlog from './Components/Addblog/addblog';
import EditButton from './Components/Button/button';
import EditBlog from './Components/Editblog/editblog';

function Routing() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Login/>} />
                <Route path='/signup' element={<Signup/>} />
                <Route path='/dashboard' element={<Dashboard/>}/>
                <Route path='/addblog' element={<AddBlog/>}/>
                <Route path='/editblog' element={<EditBlog/>}/>
                <Route path='/button' element={<EditButton/>}/>
            </Routes>
        </>
    );
}

export default Routing;
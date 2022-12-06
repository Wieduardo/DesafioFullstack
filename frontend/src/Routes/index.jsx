import { Route, Routes } from 'react-router-dom';
import User from '../Pages/User';
import Home from '../Pages/Home';
import Login from '../Pages/Login';

function Routez(){
    return(
        <>
            <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/user/:email" element={<User/>}/>
            </Routes>
        </>
    )
}

export default Routez;
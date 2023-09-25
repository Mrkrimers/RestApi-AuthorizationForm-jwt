import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import SignUp from "../Pages/SignUpPage/SignUp";
import SignIn from "../Pages/SignInPage/SignIn";


export default function routesProvider(isAuth) {


    if (isAuth) {
        return (
            <Routes>
                <Route path='/home' element={<HomePage />} />
            </Routes>
        )
    } else {
        return (
            <Routes>
                <Route path='/' element={<SignUp />} />
                <Route path='/auth' element={<SignIn />} />
            </Routes>
        )
    }
}
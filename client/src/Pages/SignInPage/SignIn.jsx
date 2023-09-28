import style from '../SignInPage/style.module.scss'
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer';
import { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import MyContext from '../../context/MyContext';
// import useAuth from '../../hooks/useAuth';

function SignIn() {
    const [value, setValue] = useState({
        email: '',
        password: ''
    })
    // const { logIn } = useAuth()

    const { logIn } = useContext(MyContext);

    const navigate = useNavigate();

    const getValue = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value })
    }

    async function authUser() {
        const resp = await axios.post('http://localhost:3001/user/auth', value, {
            withCredentials: true
        })
        console.log(resp);
        logIn();

        navigate('/home')
    }

    return (
        <>
            <Header />

            <div className={style.main}>
                <h1>Sign In</h1>
                <p>Log in to access your account or create one. Verify your email for seamless access.</p>

                <div className={style.email}>
                    <input name='email' type="text" placeholder="Your email" onChange={getValue} />
                </div>

                <div className={style.pwd}>
                    <input name='password' type='password' placeholder="Must be at least 8 characters." onChange={getValue} />
                </div>
            </div>

            <button onClick={authUser}>Continue</button>

            <Footer />
        </>
    )
}

export default SignIn;
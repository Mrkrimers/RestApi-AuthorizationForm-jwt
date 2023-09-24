import style from '../SignUpPage/style.module.scss'
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer';
import { useState } from 'react';
import axios from 'axios';

function SignUp() {

    const [value, setValue] = useState({
        name: '',
        surname: '',
        email: '',
        password: ''
    })

    const getValue = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value })
    }

    async function setData() {
        await axios.post('http://localhost:3001/user', value)
    }

    return (
        <>
            <Header />

            <div className={style.main}>
                <h1>Welcome, let`s create an account</h1>
                <p>Create an account to keep track of your customers, and contributors. Once your account has been created then don`t forget to verify your account through mail.</p>

                <div className={style.reg_wrapper}>
                    <div className={style.inp_wrapper}>
                        <input name='name' type="text" placeholder="Your name" onChange={getValue} />
                        <input name='surname' type="text" placeholder="Your surname" onChange={getValue} />
                    </div>

                    <div className={style.email}>
                        <input name='email' type="text" placeholder="Your email" onChange={getValue} />
                    </div>

                    <div className={style.pwd}>
                        <input name='password' type='password' placeholder="Must be at least 8 characters." onChange={getValue} />
                    </div>
                </div>

                <button onClick={setData}>Continue</button>
            </div>

            <Footer />
        </>
    )
}

export default SignUp;
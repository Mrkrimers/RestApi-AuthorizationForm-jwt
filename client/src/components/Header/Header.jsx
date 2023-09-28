import { useContext } from 'react';
import MyContext from '../../context/MyContext';
import style from '../Header/style.module.scss'
import { Link, useNavigate } from "react-router-dom";

// export default function Header() {

//     return (
//         <>
//             <div className={style.wrapper}>
//                 <div className={style.reg}>
//                     <Link to={'/'}>Sign up</Link>
//                 </div>

//                 <div className={style.auth}>
//                     <Link to={'/auth'}>Sign in</Link>
//                 </div>
//             </div>

//         </>
//     )
// }

const Header = () => {
    const { token, logOut } = useContext(MyContext);
    const navigate = useNavigate();

    function logOutUser() {
        logOut();
        navigate("/");
    }

    return (
        <div>
            <div className={style.headerWrapper}>
                {!token ? (
                    <>
                        <div className={style.signIn}>
                            <Link to={"/"}>Sign in</Link>
                        </div>

                        <div className={style.signUp}>
                            <Link to={"/auth"}>Sign Up</Link>
                        </div>
                    </>
                ) : (
                    <>
                        <div className={style.signIn}>
                            <p onClick={logOutUser}>Sign Out</p>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Header;
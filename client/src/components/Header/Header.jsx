import style from '../Header/style.module.scss'
import { Link } from "react-router-dom";

export default function Header() {

    return (
        <>
            <div className={style.wrapper}>
                <div className={style.reg}>
                    <Link to={'/'}>Sign up</Link>
                </div>

                <div className={style.auth}>
                    <Link to={'/auth'}>Sign in</Link>
                </div>
            </div>

        </>
    )
}


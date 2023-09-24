import { Link } from "react-router-dom";
import style from '../Footer/style.module.scss'

export default function Footer() {
    return (
        <>

            <div className={style.wrapper}>
                <p>Already registered?<Link to={'/auth'}>Sign In</Link></p>
            </div>

        </>
    )
}


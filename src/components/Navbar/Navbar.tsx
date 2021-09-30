import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';
import { RootState } from '../../app/store';
import { loggedOut } from '../../features/auth/authSlice';

function Navigation(){

    const loginValue = useSelector((state: RootState)=> state.islogin.value);
    const dispatch = useDispatch();    

    const clearSession =() => {
        dispatch(loggedOut());
    }

    return (
        <header className={styles.header}>
        <Link to="/"><img src="" alt="Logo" className={styles.navLogo}></img></Link>
        <div className={styles.container}>
            <ul className={styles.navContainer}>
                {   loginValue ?
                    <>
                        <li className={styles.navItem}><Link to="/profile" className={styles.navLink}>Profile</Link></li>
                        <li className={styles.navItem}><Link to="/" className={styles.navLink} onClick={clearSession}>Logout</Link></li>
                    </>
                    :
                    <>
                        <li className={styles.navItem}><Link to="/" className={styles.navLink}>Home</Link></li>
                        <li className={styles.navItem}><Link to="/register" className={styles.navLink}>Register</Link></li>
                        <li className={styles.navItem}><Link to="/login" className={styles.navLink}>Login</Link></li>
                    </>
                }
            </ul>
            <div className={styles.hidden}><i className="fa fa-bars fa-2x humburger"></i></div>
        </div>
        </header>
    )      
}

export default Navigation;
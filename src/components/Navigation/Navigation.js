import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from './Navigation.module.css';

const Navigation = () => {
    return (
        <ul className={styles.navigation}>
            <li className={styles.navigation__item}>
                <NavLink
                    exact
                    to={routes.home}
                    className={styles.NavLink}
                    activeClassName="NavLink--active"
                >
                    Home
                </NavLink>
            </li>
            <li className={styles.Navigation__item}>
                <NavLink
                    to={routes.movies}
                    className={styles.NavLink}
                    activeClassName="NavLink--active"
                >
                    Movies
                </NavLink>
            </li>
        </ul>
    );
};

export default Navigation;

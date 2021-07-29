import Navigation from '../Navigation';
import styles from './AppBar.module.css';

const AppBar = () => {
    return (
        <div className={styles.AppBar}>
            <header>
                <Navigation />
            </header>
        </div>
    );
};

export default AppBar;

import styles from './Layout.module.css';
import bookmarkIcon from '/src/assets/bookmarkIcon.png';
import entryIcon from '/src/assets/entryIcon.png';

export const Layout = () => {
    return (
        <nav className={styles['layout']}>
            <div>
                <img src={bookmarkIcon} alt="Значок книжной закладки" className={styles['bookmarkIcon']}/>
            </div>
           
            <ul className={styles['list']}>
                <li><a href="#">Поиск фильмов</a></li>
                <li><a href="#">Мои фильмы</a></li>
                <li><a href="#">Войти</a></li>
                <img src={entryIcon} alt="Значок Войти" className={styles['entryIcon']}/>
            </ul>
        </nav>
    );
};
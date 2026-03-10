import styles from './Layout.module.css';
import bookmarkIcon from '/src/assets/bookmarkIcon.png';
import entryIcon from '/src/assets/entryIcon.png';
import cn from 'classnames';

export const Layout = ({ currentUser, setCurrentUser }) => {

    const handleLogout = () => {
    // Логика выхода из системы
    setCurrentUser(null);
  };

    return (
        <nav className={cn(styles['layout'])}>
            <div>
                <img
                    src={bookmarkIcon}
                    alt="Значок книжной закладки"
                    className={cn(styles['bookmarkIcon'])}
                />
            </div>

            <ul className={cn(styles['list'])}>
                <li>
                    <a href="#">Поиск фильмов</a>
                </li>
                <li>
                    <a href="#">Мои фильмы</a>
                </li>
                <li>
                    {currentUser && <li>{currentUser}</li>}
                    <li>
                        {currentUser ? (<a href="#">Выйти</a>) : (<a href="#">Войти</a>)}
                    </li>
                </li>
                <img
                    src={entryIcon}
                    alt="Значок Войти"
                    className={cn(styles['entryIcon'])}
                    onClick={handleLogout}
                />
            </ul>
        </nav>
    );
};

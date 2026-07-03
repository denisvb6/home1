import styles from './Layout.module.css';
import bookmarkIcon from '/src/assets/bookmarkIcon.png';
import entryIcon from '/src/assets/entryIcon.png';
import cn from 'classnames';
import { useContext } from 'react';
import { UserContext } from '../../UserContext/UserContext';
import { Outlet, Link, NavLink } from 'react-router-dom';

export const Layout = () => {
    const { userValue, setUserValue } = useContext(UserContext);

    const handleLogout = (event) => {
        event.preventDefault();

        setUserValue({ username: '', isLogined: false });

        // Синхронизация с localStorage
        const profiles = JSON.parse(localStorage.getItem('profiles')) || [];
        const updatedProfiles = profiles.map((profile) =>
            profile.username === userValue.username
                ? { ...profile, isLogined: false }
                : profile
        );

        localStorage.setItem('profiles', JSON.stringify(updatedProfiles));
    };

    return (
        <div className={cn(styles['layout'])}>
            <nav className={cn(styles['nav'])}>
                {/* <div> */}
                <img
                    src={bookmarkIcon}
                    alt="Значок книжной закладки"
                    className={cn(styles['bookmarkIcon'])}
                />
                <ul className={cn(styles['list'])}>
                    <li>
                        <a href="#">Поиск фильмов</a>
                    </li>
                    <li>
                        <a href="#">Мои фильмы</a>
                    </li>
                    {userValue.isLogined && (
                        <li className={cn(styles['username'])}>
                            {userValue.username}
                        </li>
                    )}
                    <li>
                        {userValue.isLogined ? (
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    cn(styles['navlink'], {
                                        [styles.active]: isActive
                                    })
                                }
                                onClick={handleLogout}
                            >
                                Выйти
                            </NavLink>
                        ) : (
                            <NavLink
                                to="/login"
                                className={({ isActive }) =>
                                    cn(styles['navlink'], {
                                        [styles.active]: isActive
                                    })
                                }
                            >
                                Войти
                            </NavLink>
                        )}
                    </li>
                    <li>
                        <img
                            src={entryIcon}
                            alt="Значок Войти"
                            className={cn(styles['entryIcon'])}
                        />
                    </li>
                </ul>
                {/* </div> */}
            </nav>
            <div className={cn(styles['outlet'])}>
                <Outlet />
            </div>
        </div>
    );
};

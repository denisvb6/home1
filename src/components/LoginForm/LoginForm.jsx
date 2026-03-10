import { LoginInput } from '../LoginInput/LoginInput';
import { LoginButton } from '../LoginButton/LoginButton';
import styles from './LoginForm.module.css';
import { useRef, useState } from 'react';


export const FilmForm = ({setCurrentUser}) => {
    const [username, setUsername] = useState('');
    const buttonRef = useRef();
    const usernameRef = useRef();


    const loginForm = (event) => {
        event.preventDefault();

        // Извлекаем существующие профили
        const profiles = JSON.parse(localStorage.getItem('profiles')) || [];

        // Создаем новый профиль
        const newProfile = { username, isLogined: true };

        // Обновляем массив профилей
        profiles.push(newProfile);

        // Сохраняем обратно в localStorage
        localStorage.setItem('profiles', JSON.stringify(profiles));
        
        setUsername(() => '');
        setCurrentUser(() => username); // Обновляем состояние текущего пользователя
    };

    return (
        <div>
            <form className={styles['loginForm']} onSubmit={loginForm}>
                <h1 className={styles['loginHeading']}>Вход</h1>
                <LoginInput
                    type="text"
                    ref={usernameRef}
                    value={username}
                    placeholder="Имя пользователя..."
                    onChange={(e) => setUsername(e.target.value)}
                />
                <LoginButton type="submit" ref={buttonRef}>Войти в профиль</LoginButton>
            </form>
        </div>
    );
};
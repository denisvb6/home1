import { LoginInput } from '../LoginInput/LoginInput';
import { LoginButton } from '../LoginButton/LoginButton';
import styles from './LoginForm.module.css';
import { useRef, useState } from 'react';

export const FilmForm = ({ setCurrentUser }) => {
    const [username, setUsername] = useState('');
    const buttonRef = useRef();
    const usernameRef = useRef();

    const loginForm = (event) => {
        event.preventDefault();

        // Проверка на пустое имя
        if (!username.trim()) {
            alert('Введите имя пользователя');
            return;
        }

        const profiles = JSON.parse(localStorage.getItem('profiles')) || [];

        // Сбрасываем isLogined для всех профилей
        const updatedProfiles = profiles.map((profile) => ({
            ...profile,
            isLogined: false
        }));

        const existingProfileIndex = updatedProfiles.findIndex(
            (profile) => profile.username === username
        );

        if (existingProfileIndex !== -1) {
            updatedProfiles[existingProfileIndex].isLogined = true;
        } else {
            updatedProfiles.push({ username, isLogined: true });
        }

        localStorage.setItem('profiles', JSON.stringify(updatedProfiles));

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
                <LoginButton type="submit" ref={buttonRef}>
                    Войти в профиль
                </LoginButton>
            </form>
        </div>
    );
};

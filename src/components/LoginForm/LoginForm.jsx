import { LoginInput } from '../LoginInput/LoginInput';
import { LoginButton } from '../LoginButton/LoginButton';
import styles from './LoginForm.module.css';
import { useRef, useState } from 'react';
import { UserContext } from '../../UserContext/UserContext';
import { useContext } from 'react';

export const LoginForm = () => {
    const [username, setUsername] = useState('');
    const { setUserValue } = useContext(UserContext);
    const buttonRef = useRef();
    const usernameRef = useRef();

    const handleLogin = (username) => {
        setUserValue({ username: username, isLogined: true });

        const profiles = JSON.parse(localStorage.getItem('profiles')) || [];

        // Сбрасываем isLogined для всех профилей
        const updatedProfiles = profiles.map((profile) => ({
            ...profile,
            isLogined: false
        }));

        const existingProfileIndex = updatedProfiles.findIndex((profile) => 
            profile.username === username
        );

        if (existingProfileIndex !== -1) {
            updatedProfiles[existingProfileIndex].isLogined = true;
        } else {
            updatedProfiles.push({ username, isLogined: true });
        }

        localStorage.setItem('profiles', JSON.stringify(updatedProfiles));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        handleLogin(username);
        setUsername(() => '');
    };

    return (
        <form className={styles['loginForm']} onSubmit={handleSubmit}>
            <h1 className={styles['loginHeading']}>Вход</h1>
            <LoginInput
                type="text"
                ref={usernameRef}
                value={username}
                placeholder="Имя пользователя..."
                onChange={(e) => setUsername(e.target.value)}
                required //делает поле формы обязательным для заполнения,
                //если поле пустое, браузер не отправит форму и покажет предупреждение.
            />
            <LoginButton type="submit" ref={buttonRef}>
                Войти в профиль
            </LoginButton>
        </form>
    );
};

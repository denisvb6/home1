import styles from './App.module.css';
import { Heading } from './components/Heading/Heading';
import { Button } from './components/Button/Button';
import { Paragraph } from './components/Paragraph/Paragraph';
import { Input } from './components/Input/Input';
import { Layout } from './components/Layout/Layout';
import { MoviesList } from './components/MoviesList/MoviesList';
import cn from 'classnames';
import { FilmForm } from './components/LoginForm/LoginForm';
import { useState } from 'react';

function App() {
    const [currentUser, setCurrentUser] = useState(() => {
        const profiles = JSON.parse(localStorage.getItem('profiles')) || [];
        const loggedInProfile = profiles.find((profile) => profile.isLogined === true);

        return loggedInProfile ? loggedInProfile.username : null;
    });

    const text =
        'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.';
    
    return (
        <main className={cn(styles['app'])}>
            <Layout currentUser={currentUser} setCurrentUser={setCurrentUser} />
            <Heading heading={'Поиск'} />
            <Paragraph paragraph={text} />
            <div className={cn(styles['inputButton'])}>
                <Input placeholder={'Введите текст...'} />
                <Button name={'Искать'} />
            </div>
            <MoviesList />

            <FilmForm setCurrentUser={setCurrentUser} />
        </main>
    );
}

export default App;

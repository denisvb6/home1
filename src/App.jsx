import styles from './App.module.css';
import { Heading } from './components/Heading/Heading';
import { Button } from './components/Button/Button';
import { Paragraph } from './components/Paragraph/Paragraph';
import { Input } from './components/Input/Input';
import { Layout } from './components/Layout/Layout';
import { MoviesList } from './components/MoviesList/MoviesList';
import cn from 'classnames';
import { LoginForm } from './components/LoginForm/LoginForm';
import { UserProvider } from './UserProvider/UserProvider';
import { Link } from 'react-router-dom';

function App() {

    // const text =
    //     'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.';

    return (
        <main className={cn(styles['app'])}>
            <Link to={'/'}>
                <UserProvider>
                    {/* <Layout />
                    <Heading heading={'Поиск'} />
                    <Paragraph paragraph={text} /> */}
                    {/* <div className={cn(styles['inputButton'])}>
                        <Input placeholder={'Введите текст...'} />
                        <Button name={'Искать'} />
                    </div> */}
                    {/* <MoviesList /> */}

                    {/* <LoginForm /> */}
                </UserProvider>
            </Link>
        </main>
    );
}

export default App;

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { UserProvider } from './UserProvider/UserProvider.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components/Layout/Layout.jsx';
import { Heading } from './components/Heading/Heading.jsx';
import { Paragraph } from './components/Paragraph/Paragraph.jsx';
import { Input } from './components/Input/Input.jsx';
import { Button } from './components/Button/Button.jsx';
import { MoviesList } from './components/MoviesList/MoviesList.jsx';
import { LoginForm } from './components/LoginForm/LoginForm.jsx';
import cn from 'classnames';
import styles from '/src/components/Layout/Layout.module.css';


const text =
        'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: (
                    <>
                        <Heading heading={'Поиск'} />
                        <Paragraph paragraph={text} />
                        <div className={cn(styles['inputButton'])}>
                            <Input placeholder={'Введите текст...'} />
                            <Button name={'Искать'} />
                        </div>
                        <MoviesList />
                    </>
                )
            } 
        ]
    },
    {
        path: '/login',
        element: <Layout />,
        children: [
            {
                path: '/login',
                element: (
                    <LoginForm />
                )
            }
        ] 
    }
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <UserProvider>
            <RouterProvider router={router} />
        </UserProvider>
    </StrictMode>
);

import styles from './Button.module.css';
import cn from 'classnames';

export const Button = ({name}) => {
    const searchFilm = () => {
        console.log('Поиск фильма');
    };

    return (
        <button className={cn(styles['button'])} onClick={searchFilm}>{name}</button>
    );
};
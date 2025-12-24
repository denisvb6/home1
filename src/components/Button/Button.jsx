import styles from './Button.module.css';

export const Button = ({name}) => {
    const searchFilm = () => {
        console.log('Поиск фильма');
    };

    return (
        <button className={styles['button']} onClick={searchFilm}>{name}</button>
    );
};
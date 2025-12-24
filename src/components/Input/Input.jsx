import styles from './Input.module.css';
import searchIcon from '/src/assets/searchIcon.png';

export const Input = ({placeholder}) => {
    return (
        <div className={styles['inputWrapper']}>
            <img src={searchIcon} alt="Поиск" className={styles['searchIcon']}/>
            <input className={styles['inputSearch']} type="text" placeholder={placeholder}/>
        </div>
    );
};
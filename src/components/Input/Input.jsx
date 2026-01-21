import styles from './Input.module.css';
import searchIcon from '/src/assets/searchIcon.png';
import cn from 'classnames';

export const Input = ({placeholder}) => {
    return (
        <div className={cn(styles['inputWrapper'])}>
            <img src={searchIcon} alt="Поиск" className={cn(styles['searchIcon'])}/>
            <input className={cn(styles['inputSearch'])} type="text" placeholder={placeholder}/>
        </div>
    );
};
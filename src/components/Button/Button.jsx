import styles from './Button.module.css';
import cn from 'classnames';
import { forwardRef } from 'react';

export const Button = forwardRef((props, ref) => {
    const { name, ...restProps } = props;

    const searchFilm = () => {
        console.log('Поиск фильма');
    };

    return (
        <button
            ref={ref}
            {...restProps}
            className={cn(styles['button'])}
            onClick={searchFilm}
        >
            {name}
        </button>
    );
});

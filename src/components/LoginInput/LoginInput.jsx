import { forwardRef } from 'react';
import styles from './LoginInput.module.css';
import cn from 'classnames';

export const LoginInput = forwardRef((props, ref) => (
    <input type="text" ref={ref} {...props} className={cn(styles['loginInput'])} />
));
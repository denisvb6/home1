import styles from './LoginButton.module.css';
import cn from 'classnames';
import { forwardRef } from 'react';

export const LoginButton = forwardRef((props, ref) => (
    <button ref={ref} {...props} className={cn(styles['loginButton'])}>{props.children}</button>
));
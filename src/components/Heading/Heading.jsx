import styles from './Heading.module.css';
import cn from 'classnames';

export const Heading = ({heading}) => {
    return <h1 className={cn(styles['heading'])}>{heading}</h1>;
};
import styles from './Paragraph.module.css';
import cn from 'classnames';

export const Paragraph = ({paragraph}) => {
    return (
        <p className={cn(styles['paragraph'])}>{paragraph}</p>
    );
};
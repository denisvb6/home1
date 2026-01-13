import styles from './Paragraph.module.css';

export const Paragraph = ({paragraph}) => {
    return (
        <p className={styles['paragraph']}>{paragraph}</p>
    );
};
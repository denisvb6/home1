import styles from './Heading.module.css';

export const Heading = ({heading}) => {
    return <h1 className={styles['heading']}>{heading}</h1>;
};
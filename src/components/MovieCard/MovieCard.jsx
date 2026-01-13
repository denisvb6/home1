import styles from './MovieCard.module.css';

export const MovieCard = ({ poster, title, rating }) => (
    <div className={styles['movie-card']}>
        <div className={styles['movie-card__poster-wrapper']}>
            <img className={styles['movie-card__poster']} src={poster} alt={title} />
            <div className={styles['movie-card__rating-badge']}>
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M7.99992 1.33325L10.0599 5.77325L15.0199 6.44992L11.5099 9.79992L12.4199 14.7333L7.99992 12.2999L3.57992 14.7333L4.48992 9.79992L0.979919 6.44992L5.93992 5.77325L7.99992 1.33325Z"
                        fill="#F5C518"
                    />
                </svg>
                <span>{rating}</span>
            </div>
        </div>
        <div className={styles['movie-card__info']}>
            <h5>{title}</h5>
        </div>
    </div>
);

import { MovieCard } from '../MovieCard/MovieCard';
import styles from './MoviesList.module.css';
import cn from 'classnames';

// Пример получения списка фильмов из бекенда (например, через useEffect, fetch или RTK Query)
// Здесь для примера — статично
const movies = [
    {
        id: 1,
        poster: '/src/assets/cards/Black Widow.png',
        title: 'Black Widow',
        rating: 8.6
    },
    {
        id: 2,
        poster: '/src/assets/cards/Shang Chi.png',
        title: 'Shang Chi',
        rating: 8.8
    },
    {
        id: 3,
        poster: '/src/assets/cards/Loki.png',
        title: 'Loki',
        rating: 8.8
    },
    {
        id: 4,
        poster: '/src/assets/cards/How I Met Your Mother.png',
        title: 'How I Met Your Mother',
        rating: 8.8
    },
    {
        id: 5,
        poster: '/src/assets/cards/Money Heist.png',
        title: 'Money Heist',
        rating: 8.8
    },
    {
        id: 6,
        poster: '/src/assets/cards/Friends.png',
        title: 'Friends',
        rating: 8.8
    },
    {
        id: 7,
        poster: '/src/assets/cards/The Big Bang Theory.png',
        title: 'The Big Bang Theory',
        rating: 8.8
    },
    {
        id: 8,
        poster: '/src/assets/cards/Two And a Half Men.png',
        title: 'Two And a Half Men',
        rating: 8.8
    }
];

export function MoviesList() {
    return (
        <div className={cn(styles['movies-list'])}>
            {movies.map((movie) => (
                <MovieCard
                    key={movie.id}
                    poster={movie.poster}
                    title={movie.title}
                    rating={movie.rating}
                />
            ))}
        </div>
    );
}
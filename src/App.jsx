import './App.css';
import { Headling } from './components/Headling/Headling';
import { Button } from './components/Button/Button';
import { Paragraph } from './components/Paragraph/Paragraph';

function App() {
    const headling = 'Поиск';
    const name = 'Искать';
    const paragraph =
        'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.';

    return (
        <div>
            <Headling headling={headling} />
            <Paragraph paragraph={paragraph} />
            <Button name={name} />
        </div>
    );
}

export default App;
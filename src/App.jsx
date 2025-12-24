import './App.css';
import { Heading } from './components/Heading/Heading';
import { Button } from './components/Button/Button';
import { Paragraph } from './components/Paragraph/Paragraph';
import { Input } from './components/Input/Input';
import { Layout } from './components/Layout/Layout';


function App() {
    const heading = 'Поиск';
    const buttonText = 'Искать';
    const text =
        'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.';
    const inputText = 'Введите текст...';

    return (
        <main className="app">
            <Layout/>
            <Heading heading={heading} />
            <Paragraph paragraph={text}/>
            <Input placeholder={inputText}/>
            <Button name={buttonText}/>
        </main>
    );
}

export default App;
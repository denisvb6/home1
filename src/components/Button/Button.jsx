import './Button.modules.css';

export const Button = ({name}) => {
    return (
        <button className="button">{name}</button>
    );
};
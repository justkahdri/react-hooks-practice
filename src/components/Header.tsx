import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const Header = () => {
    const {darkMode, setDarkMode} = useContext(ThemeContext) 

    const handleClick = () => {
        setDarkMode && setDarkMode(!darkMode);
    }

    return (
        <div className='Header'>
            <h1>ReactHooks</h1>
            <button type='button' onClick={handleClick}>
                {darkMode ? 'DarkMode' : 'LightMode'}
            </button>
        </div>
    );
}

export default Header;
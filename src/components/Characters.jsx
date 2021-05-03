import { useEffect, useState } from "react";

const Characters = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://rickandmortyapi.com/api/character/');
                const data = await response.json();
                setCharacters(data.results);
            } catch (err) {
                console.error(err);
            }
        }

        fetchData();
    }, []);

    return (
        <div className='Characters'>
            {characters.map((character, idx) => (
                <h2 key={idx}>{character.name}</h2>
            ))}
        </div>
    );
}

export default Characters;
import { useState, useEffect } from 'react';

import type { Character } from '../Types';

const useCharacters = (url: string) => {
    const initial_characters: Character[] = []
    const [ characters, setCharacters ] = useState(initial_characters);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setCharacters(data.results);
            } catch (err) {
                console.error(err);
            }
        }

        fetchData();
    }, [url]);

    return characters;
}

export default useCharacters;
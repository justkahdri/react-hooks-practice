import { useEffect, useState, useReducer, useMemo, useRef } from "react";

const initialState = {
    favorites: [],
}

const favoriteReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_FAVORITE':
            return {...state, favorites: [...state.favorites, action.payload]};
        default:
            return state;
    }
}

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
    const [search, setSearch] = useState(''); 
    const searchInput = useRef(null);

    // const filteredCharacters = characters.filter(
    //     character => (character.name.toLowerCase().includes(search.toLocaleLowerCase()))
    //     );

    const filteredCharacters = useMemo(() => (
        characters.filter(
        character => (character.name.toLowerCase().includes(search.toLocaleLowerCase()))
        )
    ), [characters, search]);

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

    const handleClick = (favorite) => {
        dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite});
    }

    const handleSearch = () => setSearch(searchInput.current.value);

    return (
        <div className='Characters'>

            {favorites.favorites.map(fav => (
                <li key={fav.id}>
                    {fav.name}
                </li>
            ))}

            <div className='search'>
                <input type='text' value={search} onChange={handleSearch} ref={searchInput}/>
            </div>
            {filteredCharacters.map((character, idx) => (
                <div key={idx} className='item'>
                    <h2 key={idx}>{character.name}</h2>
                    <button type='button' onClick={() => handleClick(character)}>
                        Add to Favorites
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Characters;
const Search = ({search, searchInput, handleSearch}) => (
    <div className='search'>
        <input type='text' value={search} onChange={handleSearch} ref={searchInput}/>
    </div>
);

export default Search
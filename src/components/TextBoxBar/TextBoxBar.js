import React from 'react';

const TextBoxBar = ({setQuery, query, search })=>(

    <input
    type="text"
    placeholder="Search..."
    className="search-bar"
    onChange={(e) => setQuery(e.target.value)}
    value={query}
    onKeyPress={search}
    />)

export default TextBoxBar
import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <span>
            <input className = 'pa3 ma1 ba br2 b--green bg-lightest-blue'
            type = "search"
            placeholder = 'Search robots'
            onChange = {searchChange}
            />
        </span>
    );
}

export default SearchBox;
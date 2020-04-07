import React from 'react';

const Card = ({name, email, id, type}) => {
    if (type === "Family")
        return (
            <div className='bg-light-green dib br3 pa3 ma2 grow shadow-3'>
                <img alt = 'robot' src = {`https://robohash.org/${name}1?size=200x200`}/>
                <div>
                    <h2>{name}</h2>
                    <p>{type}</p>
                </div>
            </div>
        );
    else
        return (
            <div className='bg-light-blue dib br-pill pa3 ma2 grow shadow-3'>
                <img alt = 'robot' src = {`https://robohash.org/${name}1?set=set2&size=200x200`}/>
                <div>
                    <h2>{name}</h2>
                    <p>{type}</p>
                </div>
            </div>
        );
}

export default Card;
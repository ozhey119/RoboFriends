import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    return (
        <React.Fragment>
            {
                robots.map( (user,i) => {
                    return (
                        <Card
                            key={i}
                            id = {robots[i].id} 
                            name = {robots[i].name}
                            email = {robots[i].email}
                            type = {robots[i].type}
                            />
                    );
                })
            }
        </React.Fragment>
    );
}

export default CardList;
import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = (data) => {
    return (
        <div>
            <img src={data.image} alt={data.name}/>
            <div>{data.country}</div>
            <div>Name = {data.name}</div>
            <details>{data.description}</details>
            <Link to={`/recipes/${data.id}`}>See more</Link>
        </div>
    );
};

export default RecipeCard;
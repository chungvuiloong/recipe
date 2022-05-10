import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from './Nav';
import RecipeCard from './RecipeCard';

const BrowseRecipe = () => {
    // example
    // const [count, setCount] = useState(0);

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3333/recipes')
            .then((res) => {setData(res.data);
                // console.log(res.data);
            });
    }, [])

    return (
        <div>
            <Nav/>
            <h3>Search for recipe:</h3>

            <h2>Our recipes</h2>
            {data.map((recipe) => (
                <RecipeCard {...recipe} key={recipe.id} />
                ))}
        </div>
    );
};

export default BrowseRecipe;
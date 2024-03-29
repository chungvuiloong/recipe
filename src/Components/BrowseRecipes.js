import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from './Nav';
import RecipeCard from './RecipeCard';
import styles from './BrowseRecipes.module.css';

const BrowseRecipe = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3333/recipes')
            .then((res) => {setData(res.data);

            });
    }, [])

    return (
        <div>
            <Nav/>
            <h3 className={styles.searchTitle}>Search for recipe:</h3>
            <input type="search" name=""></input>

            <h2 className={styles.allRecipesTitle}>Our recipes</h2>
            <div className={styles.container}>
                {data.map((recipe) => (
                    <RecipeCard {...recipe} key={recipe.id} />
                ))}
            </div>
        </div>
    );
};

export default BrowseRecipe;
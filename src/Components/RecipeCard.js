import React from 'react';
import { Link } from 'react-router-dom';
import style from './RecipeCard.module.css';

const RecipeCard = (data) => {
    return (
        <div className={style.container}>
            <div className={style.imgContainer}>
                <img src={data.image} alt={data.name} className={style.image}/>
            </div>
            <article>
                <h3>{data.name}</h3>       
                <summary>{data.description}</summary>
                <Link to={`/recipes/${data.id}`}>See more</Link>
            </article>
            
        </div>
    );
};

export default RecipeCard;
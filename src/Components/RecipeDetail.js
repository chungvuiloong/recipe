import React, { useState, useEffect, useParams, useRouteMatch, useHistory, useLocation } from 'react';
import axios from 'axios';

const RecipeDetail = () => {

    
    let pathname = window.location.pathname; // Gets the current pathname for example 

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3333${pathname}`)
            .then((res) => {setData(res.data);
                console.log(res.data);
            });
    }, [])
    

    return (
       
        <div>
            {data.id}
            <img src={data.image} alt={data.name}/>
            <div>Name = {data.name}</div>
            <summary>{data.description}</summary>
            {data.testing}
            {data.ingredients?.map((ingredient) =>
                <div key={ingredient.id}>{ingredient.quantity} - {ingredient.ingredient} </div>
                )}
        </div>
    );
};

export default RecipeDetail;
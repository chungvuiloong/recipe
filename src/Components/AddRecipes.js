import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Nav from './Nav';

const AddRecipes = (props) => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/all`)
        .then((res) => {setData(res.data);
            // console.log(res.data);
        });
    }, [])

    console.log(data);

    

    return (
        <>
            <Nav/>
            <form className="form-container">
                <h2>Adding new recipe</h2>
                
                <label for="name">Name</label>
                <input type="text" name="name"></input>

                <label for="author">Author</label>
                <input type="text" name="author"></input>

                <label for="country">Recipe is from: </label>
                <select name="country" id="country">
                {data?.map((country) => 
                     <option value={country.name.common}>{country.name.common}<img src={country.flags.png}/></option>
                )}
                    
                </select>

                <label for="description">Description</label>
                <textarea type="text" name="description"></textarea>

                <label for="image">Image</label>
                <input type="text" name="image"></input>

                <div> 
                    <div>Ingredients</div>
                    <div>
                        <label for="quantity">Quantity</label>
                        <input type="text" name="quantity" placeholder="Quantity"></input>
                    </div>

                    <div>
                        <label for="ingredient">Ingredient</label>
                        <input type="text" name="ingredient" placeholder="Ingredient"></input>
                    </div>
                </div>
                
                <button type="submit" onClick={props.addIngredients}>add more</button>
                <label for="instructions">Instructions</label>
                <textarea type="text" name="instructions"></textarea>

                <button type="submit" onClick={props.submit}>Post Recipe</button>
            </form>
        </>
    );
};

export default AddRecipes;
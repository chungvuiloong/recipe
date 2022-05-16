import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from './Nav';
// import {MDCTextField as TextField} from '@material/textfield';

const AddRecipes = () => {

    const [data, setData] = useState([]);
    const [inputData, setInputData] = useState([{
        name: '',
        author: '',
        ingredients: []
    }]);
    const [countries, setCountries] = useState([]);

    const [ingredients, setIngredients] = useState([
        { id: 1, ingredient: 'testingLemon', quantity: 'several lemons' },
      ]);
    
    
    // //Getting all the countries
    useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/all`)
        .then((res) => {
            setCountries(res.data);
        });
    }, [])

    //This sorts out the countries //Later in form element, it is called via mapping
    const sortedCountries = [].concat(countries).sort((a, b) => a.name.common > b.name.common ? 1 : -1);

    // {...this.state.inputData}
    function submitHandler (e){
        e.preventDefault();
        console.log("Submit data");
        axios.post("http://localhost:3333/recipes", inputData)
            .then((res) => console.log('res', res))
            .catch((err) => console.log('error',err));
        // Works in sending the testing
    };

    function addIngredient (e) {
        e.preventDefault();
        setIngredients([...ingredients, { id: ingredients.length + 1, ingredient: '', quantity: '' }]);
    }


    return (
        <>
            <Nav/>
            <form className="form-container">
                <h2>Adding new recipe</h2>
                
                <label htmlFor="name">Name</label>
                <input type="text" name="name"></input>

                <label htmlFor="author">Author</label>
                <input type="text" name="author"></input>

                <label htmlFor="country">Recipe is from: </label>
                <select name="country" id="country">
                    
                    {/* {countries?.map(
                        (country) => 
                            <option value={country.name.common} 
                                    key={country.name.common}>
                                        {country.flag}
                                        {country.name.common}
                            </option>
                    )} */}

                    {sortedCountries?.map(
                        (country) => 
                            <option value={country.name.common} 
                                    key=  {country.name.common}>
                                          {country.flag}{country.name.common}
                            </option>
                    )}

                 
                </select>

                <label htmlFor="description">Description</label>
                <textarea type="text" name="description"></textarea>

                <label htmlFor="image">Image</label>
                <input type="text" name="image"></input>

                {/* <div> 
                    <div>Ingredients</div>
                    <div>
                        <label htmlFor="quantity">Quantity</label>
                        <input type="text" name="quantity" placeholder="Quantity"></input>
                    </div>

                    <div>
                        <label htmlFor="ingredient">Ingredient</label>
                        <input type="text" name="ingredient" placeholder="Ingredient"></input>
                    </div>
                </div> */}
                
                <div>Ingredients</div>
                
                    {
                    ingredients?.map((ingredient, index) => (
                        
                        <div key={index}>
                            <input type="text" name="quantity" placeholder="quantity" defaultValue={ingredient.quantity}/>
                            <input type="text" name="ingredient" placeholder="ingredient" defaultValue={ingredient.ingredient}/>
                        </div>

                    ))}
           
                
                <button type="submit" onClick={addIngredient}>Add more ingredients</button>
                <label htmlFor="instructions">Instructions</label>
                <textarea type="text" name="instructions"></textarea>

                <button type="submit" onClick={submitHandler}>Post Recipe</button>
            </form>
        </>
    );
};

export default AddRecipes;
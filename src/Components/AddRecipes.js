import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from './Nav';

const AddRecipes = () => {

    const [data, setData] = useState({
        name: '',
        author: '',
        country: '',
        description: '',
        image: '',
        instructions: '',
        ingredients: []
    });

    const [countries, setCountries] = useState([]);
    const [ingredients, setIngredients] = useState([
        { 
            id: 1, 
            ingredient: '',
            quantity: '' 
        },
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
        // e.preventDefault();
        console.log("Submit data");
        axios.post("http://localhost:3333/recipes", data, ...ingredients);
        console.log(data);
    };

    // adds new options to inset new data
    function addIngredient (e) {
        e.preventDefault();
        setIngredients([...ingredients, { id: ingredients.length + 1, ingredient: '', quantity: '' }]);
    }

    function deleteHandler (e) {
        e.preventDefault();
        console.log("Delete handler");
    }

    // function closeHandler () {
    //     window.location.reload();
    //   };

    // Checks for the inputted value
    // function getInputValue (e) {
    //     const name = e.target.name;
    //     const value = e.target.value;
    //     console.log(name, value);
    // };

    const inputHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData({ ...data, [name]: value });
    };

    const changeIncData = (e, i) => {
        const { name, value } = e.target;
        const incList = [...ingredients];
        incList[i][name] = value;
        setIngredients(incList);
        setData({ ...data, ingredients: ingredients });
    };

    return (
        <>
            <Nav/>
            <form className="form-container" 
            // onChange={getInputValue} //shows the input value
            onSubmit={submitHandler}
            >
                <h2>Adding new recipe</h2>
                
                <label htmlFor="name">Name of recipe</label>
                <input type="text" name="name" id="name" onChange={inputHandler}></input>

                <label htmlFor="author">Author</label> 
                <input type="text" name="author" id="author" onChange={inputHandler}></input> 

               
                <label htmlFor="country">Recipe is from: </label>
                <select name="country" id="country" onChange={inputHandler}>
                    
                    {sortedCountries?.map(
                        (country) => 
                            <option value={country.name.common} 
                                    key=  {country.name.common}
                                    defaultValue=""
                                    >
                                          {country.flag} {country.name.common}
                            </option>
                    )}
                </select>

                <label htmlFor="description">Description</label>
                <textarea type="text" name="description" onChange={inputHandler}></textarea>

                <label htmlFor="image">Image</label>
                {/* <input type="text" name="image" onChange={inputHandler}></input> */}
                <input type="file" name="image"accept="image/*" multiple={false} onChange={inputHandler}></input>
                
                <div>Ingredients</div>
                
                    {
                    ingredients?.map((_, i) => (                        
                        <div key={i}>
                            <input type="text" name="quantity" placeholder="quantity" onChange={(e) => changeIncData(e, i)}/>
                            <input type="text" name="ingredient" placeholder="ingredient" onChange={(e) => changeIncData(e, i)}/>
                            <button type="button" name="delete" onClick={deleteHandler}>Delete</button>
                        </div>

                    ))}
                
                <button type="submit" onClick={addIngredient}>Add more ingredients</button>

                <label htmlFor="instructions">Instructions</label>
                <textarea type="text" name="instructions" onChange={inputHandler}></textarea>

                <button type="submit">Post Recipe</button> 
            </form>
        </>
    );
};

export default AddRecipes;
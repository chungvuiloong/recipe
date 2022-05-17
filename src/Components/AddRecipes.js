import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from './Nav';

const AddRecipes = () => {

    const [data, setData] = useState([{
        name: '',
        author: '',
        // country: '',
        // description: '',
        // image: '',
        // instructions: '',
        // ingredients: []
    }]);

    // const [inputData, setInputData] = useState([{
    //     name: '',
    //     author: '',
    //     country: '',
    //     description: '',
    //     image: '',
    //     instructions: '',
    //     ingredients: []
    // }]);

    const [countries, setCountries] = useState([]);
    const [ingredients, setIngredients] = useState([
        { 
            id: 1, 
            ingredient: 'testingLemon',
            quantity: 'several lemons' 
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
        e.preventDefault();
        console.log("Submit data");
        axios.post("http://localhost:3333/recipes", ...data)
        .then((res) => console.log('res', res))
        .catch((err) => console.log('error',err));
        // closeHandler();
        console.log(data);
    };

    // adds new options to inset new data
    function addIngredient (e) {
        e.preventDefault();
        setIngredients([...ingredients, { id: ingredients.length + 1, ingredient: '', quantity: '' }]);
    }

    // function deleteHandler (e) {
    //     e.preventDefault();
    //     console.log("Delete handler");
    // }

    // function closeHandler () {
    //     window.location.reload();
    //   };

    function getInputValue (e) {
        const name = e.target.name;
        const userValue = e.target.value;
        console.log(name, userValue);
   
    };

    // inputData: { ...this.state.inputData, [e.target.name]: e.target.value },

    // const inputHandler = (e) => {
    //     setInputData({
    //       ...inputData,
    //       [e.target.name]: e.target.value,
    //     });
    //   };

      const changeData = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
      };

    return (
        <>
            <Nav/>
            <form className="form-container" 
            onChange={getInputValue} shows the inoput value
            >
                <h2>Adding new recipe</h2>
                
                <label htmlFor="name">Name of recipe</label>
                <input type="text" name="name" onChange={changeData}></input>

               <label htmlFor="author">Author</label>
                <input type="text" name="author" onChange={changeData} ></input>

{/*                 
                <label htmlFor="country">Recipe is from: </label>
                <select name="country" id="country">
                    
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
                
                <div>Ingredients</div>
                
                    {
                    ingredients?.map((ingredient) => (                        
                        <div key={ingredient.ingredient}>
                            <input type="text" name="quantity" placeholder="quantity" defaultValue={ingredient.quantity}/>
                            <input type="text" name="ingredient" placeholder="ingredient" defaultValue={ingredient.ingredient}/>
                            <button type="button" name="delete" onClick={deleteHandler}>Delete</button>
                        </div>

                    ))}
                
                <button type="submit" onClick={addIngredient}>Add more ingredients</button>
                <label htmlFor="instructions">Instructions</label>
                <textarea type="text" name="instructions"></textarea> */}

                <button type="submit" onClick={submitHandler}>Post Recipe</button>
            </form>
        </>
    );
};

export default AddRecipes;
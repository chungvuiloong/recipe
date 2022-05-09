import React from 'react';
import Nav from './Nav';

const AddRecipes = () => {
    return (
        <>
            <Nav/>
            <h2>Adding new recipe</h2>
            <form>
                <label for="name">Name</label>
                <input type="text" name="name"></input>

                <label for="author">Author</label>
                <input type="text" name="author"></input>

                <label for="country">Recipe is from: </label>
                <select name="cars" id="cars">
                    <option value=""></option>
                </select>

                <label for="description">Description</label>
                <textarea type="text" name="description"></textarea>

                <label for="image">Image</label>
                <input type="text" name="image"></input>

                <label for="quantity">Quantity</label>
                <input type="text" name="quantity"></input>

                <label for="ingredient">Ingredient</label>
                <input type="text" name="ingredient"></input>

                <label for="instructions">Instructions</label>
                <textarea type="text" name="instructions"></textarea>

                <button type="submit">Post Recipe</button>
            </form>
        </>
    );
};

export default AddRecipes;
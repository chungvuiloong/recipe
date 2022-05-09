import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/browseRecipes">Recipe</Link></li>
                <li><Link to="/addRecipes">Add new recipe</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;
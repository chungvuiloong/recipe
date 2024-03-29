import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => {
    return (
        <nav>
            <h1>TasteIt</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/recipes">Recipe</Link></li>
                <li><Link to="/addRecipes">Add new recipe</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;
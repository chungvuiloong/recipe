import './App.css';

// Route
import Home from './Components/Home';
import BrowseRecipes from './Components/BrowseRecipes';
import RecipeDetail from './Components/RecipeDetail';
import AddRecipes from './Components/AddRecipes';


import {BrowserRouter as BRouter, Routes as Switch, Route} from "react-router-dom";

function submitHandler (e) {
  e.preventDefault();
  console.log("Pressed!");

}

function addIngredient (e) {
  e.preventDefault();
  console.log("Added more ingredents!");
        
}

function App() {
  
  return (
      <BRouter>
        <Switch>
            <Route path="/">
              <Route index element={<Home/>}/>
              <Route path="/recipes" element={<BrowseRecipes/>}/>
                <Route exact path="/recipes/:id" element={<RecipeDetail/>}/>
              
              <Route path="/addRecipes" element={<AddRecipes submit={submitHandler} addIngredients={addIngredient}/>}/>
            </Route>
        </Switch>
      </BRouter>
  );
}

export default App;

import './App.css';

// Route
// import Layout from './Pages/Layout';
import Header from './Components/Header';
import Home from './Components/Home';
import BrowseRecipes from './Components/BrowseRecipes';
import AddRecipes from './Components/AddRecipes';


import {BrowserRouter as BRouter, Routes as Switch, Route} from "react-router-dom";

function App() {
  return (
      <BRouter>
        <Switch>
            <Route path="/">
              <Route index element={<Home/>}/>
              <Route path="/browseRecipes" element={<BrowseRecipes/>}/>
              <Route path="/addRecipes" element={<AddRecipes/>}/>
            </Route>
        </Switch>
      </BRouter>
  );
}

export default App;

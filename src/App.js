import './App.css';

// Route
import Layout from './Pages/Layout';
import Home from './Components/Home';
import BrowseRecipe from './Components/BrowseRecipe';


import {BrowserRouter as BRouter, Routes as Switch, Route} from "react-router-dom";

function App() {
  return (
      <BRouter>
      This is app
        <Switch>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path="/browseRecipe" element={<BrowseRecipe/>}/>

            </Route>
        </Switch>
      </BRouter>
  );
}

export default App;

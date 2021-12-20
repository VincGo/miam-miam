import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Ingredient from './component/Ingredient/Ingredient'
import NavBar from './NavBar/NavBar';
import Type from "./component/Type/Type";
import Recipe from "./component/Recipe/Recipe";
import AddRecipe from "./component/Recipe/AddRecipe";
import ShowRecipe from "./component/Recipe/ShowRecipe";
import EditRecipe from "./component/Recipe/EditRecipe";

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <main>
        <Routes>
          <Route path={"/ingredient"} element={<Ingredient/>}/>
          <Route path={"/type"} element={<Type/>}/>
          <Route path={"/recette"} element={<Recipe/>}/>
          <Route path={"/recette/ajout"} element={<AddRecipe/>}/>
          <Route path={"/recette/:id"} element={<ShowRecipe />}/>
          <Route path={"/recette/edit/:id"} element={<EditRecipe />}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
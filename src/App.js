import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Ingredient from './component/Ingredient/Ingredient'
import NavBar from './NavBar/NavBar';
import Type from "./component/Type/Type";
import Recipe from "./component/Recipe/Recipe";

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <main>
        <Routes>
          <Route path={"/ingredient"} element={<Ingredient/>}/>
          <Route path={"/type"} element={<Type/>}/>
          <Route path={"/recette"} element={<Recipe/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Ingredient from './component/Ingredient/Ingredient'
import NavBar from './NavBar/NavBar';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <main>
        <Routes>
          <Route path={"/ingredient"} element={<Ingredient/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
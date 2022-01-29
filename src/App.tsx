import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ViewRecipes from './components/ViewRecipes';
import ViewRecipeDetails from './components/ViewRecipeDetails';
import Header from './components/Header';

function App() {
  return (

   <BrowserRouter>
    <Header />
     <Routes>
       <Route path='/' element={<LandingPage />} />
       <Route path='/view' element={<ViewRecipes />} />
       <Route path='/view/:id' element={<ViewRecipeDetails />} />
     </Routes>
   </BrowserRouter>
  );
}

export default App;

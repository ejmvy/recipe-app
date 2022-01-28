import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';

function App() {
  return (
   <BrowserRouter>
     <Routes>
       <Route path='/' element={<LandingPage />} />
     </Routes>
   </BrowserRouter>
  );
}

export default App;

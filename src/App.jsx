
import './App.scss'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage"
import About from './Components/About/About';

function App() {

  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<LandingPage/>}/>
    
   </Routes>
   </BrowserRouter>
  )
}

export default App

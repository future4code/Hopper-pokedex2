import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage"
import Pokedex from "../pages/Pokedex/Pokedex"
import Details from "../pages/Details/Details"

export const Router = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/pokedex'} element={<Pokedex />} />
        <Route path={'/details/:id/:name'} element={<Details />} />
      </Routes>
    </BrowserRouter>
  )  
}
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage"
import Pokedex from "../pages/Pokedex"
import Details from "../pages/Details"

const Router = () => {
  <>
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/pokedex'} element={<Pokedex />} />
        <Route path={'/pokemon/:pokemon'} element={<Details />} />
      </Routes>
    </BrowserRouter>
  </>
}

export default Router
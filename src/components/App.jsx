import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"

// Pages
import Homepage from "./HomePage"
import CountryPage from "./CountryPage"
import Layout from "../Layouts/Layout"
import { useState } from "react"

function App() {
  
  const [lightmode, setLightmode] = useState(true);
  const [allCountries, setAllCountries] = useState([]);
  const [countryList, setCountryList] = useState([]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout lightmode={lightmode} setLightmode={setLightmode} allCountries={allCountries} setCountryList={setCountryList} />}>
        <Route index element={<Homepage lightmode={lightmode} allCountries={allCountries} setAllCountries={setAllCountries} countryList={countryList} setCountryList={setCountryList} />} />
        <Route path="/:id" element={<CountryPage lightmode={lightmode} />} />
      </Route>
    )
  )
  
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App

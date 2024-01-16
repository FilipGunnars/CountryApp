import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"

// Pages
import Homepage from "./HomePage"
import CountryPage from "./CountryPage"
import Layout from "../Layouts/Layout"
import { useState } from "react"

function App() {
  
  const [lightmode, SetLightmode] = useState(true);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout lightmode={lightmode} SetLightmode={SetLightmode} />}>
        <Route index element={<Homepage lightmode={lightmode} />} />
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

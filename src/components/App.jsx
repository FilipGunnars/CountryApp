import Homepage from "../pages/HomePage";
import CountryPage from "../pages/CountryPage";
import NotFound from "../pages/NotFound";
import Layout from "../Layouts/Layout";

import { useState } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

function App() {
  const [lightmode, setLightmode] = useState(true);
  const [allCountries, setAllCountries] = useState([]);
  const [countryList, setCountryList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <Layout
            lightmode={lightmode}
            setLightmode={setLightmode}
            allCountries={allCountries}
            setCountryList={setCountryList}
            setSearchTerm={setSearchTerm}
          />
        }
      >
        <Route
          index
          element={
            <Homepage
              lightmode={lightmode}
              allCountries={allCountries}
              setAllCountries={setAllCountries}
              countryList={countryList}
              setCountryList={setCountryList}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          }
        />
        <Route
          path="/:id"
          element={
            <CountryPage
              lightmode={lightmode}
              allCountries={allCountries}
              setSearchTerm={setSearchTerm}
            />
          }
        />
        <Route path="*" element={<NotFound lightmode={lightmode} />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
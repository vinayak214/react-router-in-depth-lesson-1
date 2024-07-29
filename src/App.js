// import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import {
  createBrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import CareersLayout from "./layouts/CareersLayout";
import Careers, { careersLoader } from "./pages/Careers";
import CareerDetails, { careerDetailsLoader } from "./pages/CareerDetails";
import CareersError from "./pages/CareersError";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}></Route>
      <Route path="about" element={<About />}></Route>
      {/** Nested Routes below */}
      <Route path="help" element={<HelpLayout />}>
        <Route path="Faq" element={<Faq />}></Route>
        <Route path="contact" element={<Contact />}></Route>
      </Route>
      <Route
        path="careers"
        element={<CareersLayout />}
        errorElement={<CareersError />}
      >
        <Route index element={<Careers />} loader={careersLoader}></Route>
        <Route
          path=":id"
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        ></Route>
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Route>
  )
);
function App() {
  return (
    /** Old way of writing the router in react using router provider */
    // <BrowserRouter>
    //   <header>
    //     <nav>
    //       <h1>JobRouter</h1>
    //       <NavLink to="/">Home</NavLink>
    //       <NavLink to="about">About</NavLink>
    //     </nav>
    //   </header>
    //   <main>
    //     <Routes>
    //       <Route path="/" element={<Home />}></Route>
    //       <Route path="about" element={<About />}></Route>
    //     </Routes>
    //   </main>
    // </BrowserRouter>

    /************************************************ */

    /** New way of writing the router in react using router provider */
    <RouterProvider router={router}></RouterProvider>
  );
}
//Navlink ==> it provides us active condition to check whether it is selected or not
//Link  ==>    It does not have that active paramter
// Botg NavLink and Link should be inside of the browser tag
export default App;

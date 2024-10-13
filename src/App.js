import "./App.css";
import AboutUs from "./pages/aboutus/AboutUs";
import Home from "./pages/home/Home";
import Portfolio from "./pages/PortfolioArchive/Portfolio";
import Services from "./pages/ServicesArchive/Services";
import Contacts from "./pages/contacts/Contacts";
import ToolsRent from "./pages/ToolsRent/ToolsRent";
import SignUp from "./auth/signUp/SignUp";
import LogIn from "./auth/Login/LogIn";
import ProtectedRoute from "./routes/Auth.routes";
import SingleProject from "./pages/Single Project/SingleProject";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "aboutus",
    element: <ProtectedRoute element={<AboutUs />} />,
  },
  {
    path: "SingleProject",
    element:<SingleProject/> 
  },
  {
    path: "Portfolio",
    element: <ProtectedRoute element={<Portfolio />} />,
  },
  {
    path: "Services",
    element: <ProtectedRoute element={<Services />} />,
  },
  {
    path: "Careers",
    element: <ProtectedRoute element={<Contacts />} />,
  },
  {
    path: "Tools",
    element: <ProtectedRoute element={<ToolsRent />} />,
  },
  {
    path: "login",
    element: <LogIn />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

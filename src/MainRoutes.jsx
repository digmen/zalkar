import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CardAboutPage from "./pages/CardAboutPage";
import ForEmployers from "./pages/ForEmployers";
import ForWorkers from "./pages/ForWorkers";
import ForInvestors from "./pages/ForInvestors";
import AboutUs from "./pages/AboutUs";
import ContactPage from "./pages/ContactPage";
import MyProfilePage from "./pages/MyProfilePage";
import NoviyRezume from "./pages/NoviyRezume";
import Vacancies from "./pages/Vacancies.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import {handleGoogleCallback} from "./contexts/loader.ts"

const PUBLIC_ROUTES = [
  {
    element: <HomePage />,
    path: "/",
    id: 1,
  },
  {
    element: <LoginPage />,
    path: "/login",
    id: 2,
  },
  {
    element: <RegisterPage />,
    path: "/register",
    id: 3,
  },
  {
    element: <CardAboutPage />,
    path: "/details/:id",
    id: 4,
  },
  {
    element: <Vacancies />,
    path: "/vacancies",
    id: 5,
  },
  {
    element: <ForEmployers />,
    path: "/foremployers",
    id: 6,
  },
  {
    element: <ForWorkers />,
    path: "/forworkers",
    id: 7,
  },
  {
    element: <ForInvestors />,
    path: "/forinvestors",
    id: 8,
  },
  {
    element: <AboutUs />,
    path: "/aboutus",
    id: 9,
  },
  {
    element: <ContactPage />,
    path: "/contacts",
    id: 10,
  },
  // {
  //   element: <MoreInfo />,
  //   path: "/more",
  //   id: 11,
  // },
  {
    element: <MyProfilePage />,
    path: "/myprofile/*",
    id: 12,
  },
  // {
  //   element: <Rezum />,
  //   path: "/rezum",
  //   id: 14,
  // },
  {
    element: <NoviyRezume />,
    path: "/noviyrezume",
    id: 13,
  },

  {
    element: <NotFoundPage />,
    path: "/*",
    id: 14,
  },
  {
    element: <div>Loading...</div>,
    path: "/google/callback",
    loader: handleGoogleCallback,
    id:15,
  },
];

const MainRoutes = () => {
  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.path} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;

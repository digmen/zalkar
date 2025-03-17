import React from "react";
import { Route, Routes } from "react-router-dom";
import MyProfile from "./pages/MyProfile.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import MyProfileVacancies from "./pages/MyProfileVacancies.tsx";

const PROFILE_ROUTES = [
  {
    element: <MyProfile/>,
    path: "/myprofile/",
    id: 0,
  },
  {
    element: <MyProfileVacancies/>,
    path: "/myprofile/vacancies",
    id: 5,
  },
  {
    element: <NotFoundPage/>,
    path: "/myprofile/*",
    id: 5,
  },

  //       {
  //   element: <MyProfileMySettingsPage />,
  //   path: "/myProfile/settings",
  //   id: 1,
  // },
  // {
  //   element: <MyProfileFavouritesVacancyPage />,
  //   path: "/myprofile/favourites",
  //   id: 2,
  // },
  // {
  //   element: <MyProfileOtclickPage />,
  //   path: "/myprofile/otclick",
  //   id: 3,
  // },
  // {
  //   element: <MyProfileSubsPage />,
  //   path: "/myprofile/subs",
  //   id: 4,
  // },
];

const ProfileRoutes = () => {
  return (
    <Routes>
      {PROFILE_ROUTES.map((item) => (
        <Route path={item.path} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default ProfileRoutes;

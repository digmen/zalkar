import "./styles/App.scss";
import MainLayout from "./layouts/MainLayout/MainLayout.jsx";
import MainRoutes from "./MainRoutes";
import ProfileRoutes from "./ProfileRoutes.jsx";

import AuthContextProvider from "./contexts/AuthContextProvider.jsx";
import {useEffect} from "react";

function App() {


  return (
    <>
      <div className="mainMargin">
        <AuthContextProvider>
          <MainLayout>
            <MainRoutes />
            <ProfileRoutes />
          </MainLayout>
        </AuthContextProvider>
      </div>
    </>
  );
}

export default App;

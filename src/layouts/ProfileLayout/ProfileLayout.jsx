import ProfileNavbar from "../ProfileLayout/navbar/ProfileNavbar";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../contexts/AuthContextProvider.jsx";
import {useEffect} from "react";

const ProfileLayout = ({ children }) => {

      const navigate = useNavigate();
      const {userActive, getUser, user} = useAuth();

      useEffect(() => {
            getUser();
            if(user === null || user === undefined || userActive === false) {
                  navigate("/login/");
            }
      }, []);

      return (
    <div>
      <ProfileNavbar />
      {children}
    </div>
  );
};

export default ProfileLayout;

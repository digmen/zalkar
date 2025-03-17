import { useNavigate } from "react-router-dom";
import "../../../styles/ProfileLayout.scss";
type Props = {};

const ProfileNavbar = (_props: Props) => {
  let navigate = useNavigate();
  return (
    <div>
          <div className="profileBlock_Navigation">
                <button onClick={() => navigate("/myprofile")}>Личный кабинет</button>
                <button onClick={() => navigate("/myprofile/vacancies")}>Вакансии</button>
                {/*<button onClick={() => navigate("/myprofile/otclick")}>Отклики</button>*/}
                {/*<button onClick={() => navigate("/myprofile/subs")}>Подписки</button>*/}
          </div>
    </div>
  );
};

export default ProfileNavbar;

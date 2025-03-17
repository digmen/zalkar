import { useNavigate } from "react-router-dom";
import aboutusimg from "../assets/New employee-amico.svg";

type Props = {};

const MoreInfo = (_props: Props) => {
  const navigate = useNavigate();
  return (
    <div>
      <img src={aboutusimg} alt="" />
      <div>
        <p
          onClick={() => navigate("/forworkers")}
          style={{ textDecoration: "underline", cursor: "pointer" }}>
          Для соискателя
        </p>
        <p
          onClick={() => navigate("/foremployers")}
          style={{ textDecoration: "underline", cursor: "pointer" }}>
          Для работодателя
        </p>
        <p
          onClick={() => navigate("/forinvestors")}
          style={{ textDecoration: "underline", cursor: "pointer" }}>
          Инвесторам
        </p>
      </div>
      <div>
        <p
          onClick={() => navigate("/aboutus")}
          style={{ textDecoration: "underline", cursor: "pointer" }}>
          О сервисе{" "}
        </p>
        <p
          onClick={() => navigate("/contacts")}
          style={{ textDecoration: "underline", cursor: "pointer" }}>
          Служба поддержки
        </p>
      </div>
      <div>
        <p>Контакты:</p>
        <p>+996 999 661 777</p>
        <p>+996 709 831 050</p>
      </div>
    </div>
  );
};

export default MoreInfo;

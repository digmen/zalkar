import "../../../styles/Footer.scss";
import { useNavigate } from "react-router-dom";

type Props = {};

const Footer = (_props: Props) => {
  const navigate = useNavigate();
  return (
    <div className="footerBlock">
      <h1 style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
        JOB KG
      </h1>
      <div className="close1024">
        <p onClick={() => navigate("/forworkers")} className="footer_nav">
          Для соискателя
        </p>
        <p onClick={() => navigate("/foremployers")} className="footer_nav">
          Для работодателя
        </p>
        <p onClick={() => navigate("/forinvestors")} className="footer_nav">
          Инвесторам
        </p>
      </div>
      <div>
        <p
          onClick={() => navigate("/aboutus")}
          className="close1024 footer_nav">
          О сервисе{" "}
        </p>
        <p
          onClick={() => navigate("/contacts")}
          className="close1024 footer_nav">
          Служба поддержки
        </p>
        {/*<p onClick={() => navigate("/more")} className="footer_nav">*/}
        {/*  Доп Сведения...*/}
        {/*</p>*/}
      </div>
      <div className="close425">
        <p className="footer_nav">+996 999 661 777</p>
        <p className="footer_nav">+996 709 831 050</p>
      </div>
    </div>
  );
};

export default Footer;

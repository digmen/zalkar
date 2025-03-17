import { useNavigate } from "react-router-dom";
import manSearching from "../../../assets/mainSection.svg";
import "../../../styles/mainSection.scss";

type Props = {};

const MainSection = (_props: Props) => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div>
        <img src={manSearching} alt="error" className="mainSection_img" />
      </div>
      <div className="infoBlock">
        <h1>Найдите себе стажировку или подберите персонал мгновенно!</h1>
        {/*    <div className="infoBlock_search">*/}
        {/*  <input*/}
        {/*    type="text"*/}
        {/*    placeholder="Профессия, должность или компания"*/}
        {/*    className="infoBlock_input"*/}
        {/*  />*/}
        {/*  <button className="infoBlock_btn btn_naity">Найти</button>*/}
        {/*</div>*/}
        <button
          className="infoBlock_btn btn_razmestit"
          onClick={() => navigate("/noviyrezume")}>
          Разместить вакансию
        </button>
      </div>
    </div>
  );
};

export default MainSection;

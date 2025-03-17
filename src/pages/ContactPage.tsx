import "../styles/SubPages.scss";
import aboutusimg from "../assets/New employee-amico.svg";

type Props = {};

const ContactPage = (_props: Props) => {
  return (
    <div className="mainBlockSub">
      <img src={aboutusimg} alt="error" style={{ width: "40vmax" }} />

      <div>
        <h2>Ура!</h2>
        <h4
          style={{
            lineHeight: "1.3rem",
            fontWeight: "normal",
            marginTop: "2rem",
          }}>
          Благодарим вас за проявленный интерес к нашей компании! Мы - команда,
          готовая помочь вам в поиске идеального рабочего места или поиске
          квалифицированных специалистов для вашего бизнеса. У нас есть широкий
          спектр возможностей: от поиска работы различных уровней и отраслей до
          предоставления компаниям инновационных решений для найма персонала. Мы
          стремимся создать среду, где ваши профессиональные цели встретятся с
          подходящими возможностями. Чтобы узнать больше о том, как мы можем
          помочь вам или вашей компании, свяжитесь с нами:
          <br /> Электронная почта: info@ourcompany.com <br />
          Телефон: +996999661777
          <br />
        </h4>
      </div>
    </div>
  );
};

export default ContactPage;

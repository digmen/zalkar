import { useNavigate } from "react-router-dom";
import "../styles/NotFoundPage.scss";

const NotFoundPage = () => {
      const navigate = useNavigate();

      return (
              <div className="notfound-container">
              <h1 className="notfound-title">404</h1>
                      <p className="notfound-message">Page Not Found</p>
      <button className="notfound-button" onClick={() => navigate("/")}>
      Go to Home
      </button>
      </div>
);
};

export default NotFoundPage;
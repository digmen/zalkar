import "../../styles/Card.scss";
import {useNavigate} from "react-router-dom";

interface CardProps {
  id: number,
  title: string,
  company_name: string,
  type_vacation: string,
  created_at: string,
};

const Card = ({id, title, company_name, type_vacation, created_at }: CardProps) => {
      const navigate = useNavigate();
    const date = new Date(created_at);
    const formattedDate = date.toISOString().split('T')[0];
      return (
              <>
                    <div className="cardBlock">
                          <div className="firstInfo">
                                <p className="infoTitle">{title}</p>
                                <p>{company_name}</p>
                                <p>{type_vacation}</p>
                          </div>
                          <div className="secondInfo">
                                <p
                                        className="infoBtn"
                                        onClick={() => navigate(`/details/${id}`)}>
                                      Узнать больше
                                </p>
                                <p>{formattedDate}</p>
                                {/* {like ? (
            <img
            src={heart2}
            alt="error"
            onClick={() => {
                setLike(!like);
            }}
            className="likeBtn"
            />
            ) : (
                <img
                src={heart}
                alt="error"
                onClick={() => {
                    setLike(!like);
                }}
                className="likeBtn"
                />
            )} */}
                          </div>
                    </div>
              </>
      );
};

export default Card;

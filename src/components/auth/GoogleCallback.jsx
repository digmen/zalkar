import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const GoogleCallback = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    console.log(searchParams);

    useEffect(() => {
        const code = searchParams.get("code");
        if (code) {
            navigate("/myprofile");
        } else {
            navigate("/login");
        }
    }, [navigate, searchParams]);

    return (
        <div className="google-callback">
            Идёт вход через Google...
        </div>
    );
};

export default GoogleCallback;

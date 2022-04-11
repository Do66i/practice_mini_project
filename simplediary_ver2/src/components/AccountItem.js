import { useNavigate } from "react-router-dom";
import AccountButton from "./AccountButton";

const AccountItem = ({ id, emotion, content, date }) => {
  const navigate = useNavigate();

  const strDate = new Date(parseInt(date)).toLocaleString();

  const goDetail = () => {
    navigate(`/diary/${id}`);
  };

  return (
    <div className="AccountItem">
      <div onClick={goDetail} className={["emotion_img_wrapper", `emotion_img_wrapper_${emotion}`].join(" ")}>
        <img src={process.env.PUBLIC_URL + `assets/emotion${emotion}.png`} />
      </div>
      <div onClick={goDetail} className="info_wrapper">
        <div className="account_date">{strDate}</div>
        <div className="account_content_preview">{content.slice(0.25)}</div>
      </div>
      <div className="btn_wrapper">
        <AccountButton text={"수정하기"} />
      </div>
    </div>
  );
};

export default AccountItem;

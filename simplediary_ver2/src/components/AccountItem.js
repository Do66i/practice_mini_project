const AccountItem = ({ id, emotion, content, date }) => {
  return (
    <div className="AccountItem">
      <div className={["emotion_img_wrapper", `emotion_img_wrapper_${emotion}`].join(" ")}>
        <img src={process.env.PUBLIC_URL + `assets/emotion${emotion}.png`} />
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default AccountItem;

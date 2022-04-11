const AccountButton = ({ text, type, onClick }) => {
  // const btnType = ["positive", "negative"].includes(type) ? type : "default";

  return (
    <button className={["AccountButton", `AccountButton_${type}`].join(" ")} onClick={onClick}>
      {text}
    </button>
  );
};

AccountButton.defaultProps = {
  type: "default",
};

export default AccountButton;

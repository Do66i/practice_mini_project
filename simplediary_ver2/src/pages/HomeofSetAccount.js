import AccountHeader from "../components/AccountHeader";
import AccountButton from "../components/AccountButton";
import AccountList from "../components/AccountList";

import { AccountStateContext } from "../components/Account";
import { useContext, useEffect, useState } from "react";

const HomeofSetAccount = () => {
  const accountList = useContext(AccountStateContext); //!

  const [data, setData] = useState([]);
  const [curDate, setCurDate] = useState(new Date());
  console.log("홈 컴포넌트의 날짜출력확인 :", curDate);

  //!------------ About Data List ---------------

  useEffect(() => {
    if (accountList.length >= 1) {
      const firstDay = new Date(curDate.getFullYear(), curDate.getMonth(), 1).getTime();

      const lastDay = new Date(curDate.getFullYear(), curDate.getMonth() + 1, 0).getTime();
      setData(accountList.filter((it) => firstDay <= it.date && it.date <= lastDay));
    }
  }, [accountList, curDate]);

  //!------------ About Data List ---------------

  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;
  const increaseMonth = () => {
    setCurDate(new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate()));
  };
  const decreaseMonth = () => {
    setCurDate(new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate()));
  };
  return (
    <div className="HomeofSetAccount">
      <AccountHeader headText={headText} leftChild={<AccountButton text={"<"} onClick={decreaseMonth} />} rightChild={<AccountButton text={">"} onClick={increaseMonth} />} />
      <AccountList accountList={data} />
    </div>
  );
};

export default HomeofSetAccount;

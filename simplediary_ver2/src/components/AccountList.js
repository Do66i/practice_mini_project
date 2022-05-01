import React, { useContext, useState } from "react";
import AccountButton from "./AccountButton";
import { useNavigate } from "react-router-dom";
import AccountItem from "./AccountItem";
import Test from "./Test";
const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된순" },
];

const filterOptionList = [
  { value: "all", name: "모두보기" },
  { value: "good", name: "good" },
  { value: "bad", name: "bad" },
];

const ControlMenu = ({ value, onChange, optionList }) => {
  return (
    <select className="ControlMenu" value={value} onChange={(e) => onChange(e.target.value)}>
      {optionList.map((it, idx) => (
        <option key={idx} value={it.value}>
          {it.name}
        </option>
      ))}
    </select>
  );
};

const AccountList = ({ accountList }) => {
  const navigate = useNavigate();

  const [sortType, setSortType] = useState("latest");
  const [filter, setFilter] = useState("all");

  const getProcessedAccountList = () => {
    const filterCallBack = (item) => {
      if (filter === "good") {
        return parseInt(item.emotion) <= 3;
      }
      if (filter === "bad") {
        return parseInt(item.emotion) > 3;
      }
    };

    const compare = (a, b) => {
      if (sortType === "latest") {
        return parseInt(b.date) - parseInt(a.date);
      } else {
        return parseInt(a.date) - parseInt(b.date);
      }
    };

    const copyList = JSON.parse(JSON.stringify(accountList));

    const filteredList = filter === "all" ? copyList : copyList.filter((it) => filterCallBack(it));

    const sortedList = filteredList.sort(compare);
    return sortedList;
  };

  return (
    <div className="AccountList">
      <div className="menu_wrapper">
        <div className="left_col">
          <ControlMenu value={sortType} onChange={setSortType} optionList={sortOptionList} />
          <ControlMenu value={filter} onChange={setFilter} optionList={filterOptionList} />
        </div>
        <div className="right_col">
          <AccountButton type={"positive"} text={"가계부입력"} onClick={() => navigate("/new")} />
        </div>
      </div>

      {getProcessedAccountList().map((it) => (
        <AccountItem key={it.id} {...it} />
      ))}
    </div>
  );
};

AccountList.defaultProps = { accountList: ["무언가 오류가 있습니다"] }; // 배열 전달 오류시 빈배열전송

export default AccountList;

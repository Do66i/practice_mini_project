import { useState } from "react";
const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된순" },
];

const filterOptionList = [
  { value: "all", name: "all" },
  { value: "good", name: "good" },
  { value: "bad", name: "bad" },
  { value: "idk", name: "idk" },
];

const ControlMenu = ({ value, onChange, optionList }) => {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      {optionList.map((it, idx) => (
        <option key={idx} value={it.value}>
          {it.name}
        </option>
      ))}
    </select>
  );
};

const AccountList = ({ accountList }) => {
  const [sortType, setSortType] = useState("latest");
  const [filter, setFilter] = useState("all");

  const getProcessedAccountList = () => {
    const filterCallBack = (item) => {
      if (filter === "good") {
        return item.category;
      }
      if (filter === "bad") {
        return item.category;
      }
      if (filter === "idk") {
        return item.category;
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
    <div>
      <ControlMenu value={sortType} onChange={setSortType} optionList={sortOptionList} />
      <ControlMenu value={filter} onChange={setFilter} optionList={filterOptionList} />

      {getProcessedAccountList().map((it) => (
        <div key={it.id}>{it.content}</div>
      ))}
    </div>
  );
};
export default AccountList;

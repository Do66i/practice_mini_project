import axios from "axios";
import React, { useState, useCallback, useEffect, useMemo, useReducer, useRef } from "react";
import "./Account.css";
import AccountList from "./AccountList";
import AccountModal from "./AccountModal";

const reducer = (state, action) => {
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      const create_date = new Date().getTime();
      const newItem = {
        ...action.data,
        create_date,
      };
      return [newItem, ...state];
    }
    case "REMOVE": {
      return state.filter((it) => it.id !== action.targetId);
    }
    case "EDIT": {
      return state.map((it) => (it.id === action.targetId ? { ...it, price: action.newContent } : it));
    }
    default:
      return state;
  }
};

function Account() {
  const [accountData, accountSetData] = useState([]);
  const [data, dispatch] = useReducer(reducer, []);

  const dataId = useRef(0);

  const getData = async () => {
    //axios get
    const res = await fetch("https://jsonplaceholder.typicode.com/comments").then((res) => res.json());

    const initData = res.slice(0, 20).map((it) => {
      return {
        item_name: it.email,
        currency: it.body,
        category: Math.floor(Math.random() * 5) + 1,
        created_date: new Date().getTime(),
        id: dataId.current++,
      };
    });

    dispatch({ type: "INIT", data: initData });
    accountSetData(initData);
  };

  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 1500);
  }, []);

  const onCreate = useCallback(
    (item_name, currency, category, price, paid_person, write_date) => {
      dispatch({
        type: "CREATE",
        data: { item_name, currency, category, price, paid_person, write_date, id: dataId.current },
      });

      //axios.get

      const created_date = new Date().getTime();
      const newItem = {
        item_name,
        currency,
        category,
        price,
        paid_person,
        write_date,
        id: dataId.current,
      };
      dataId.current += 1;

      accountSetData([newItem, ...accountData]);
    },
    [accountData]
  );

  const onRemove = (targetId) => {
    dispatch({ type: "REMOVE", targetId });

    //axios.delete

    const newAccountList = data.filter((it) => it.id !== targetId);
    accountSetData(newAccountList);
  };

  const onEdit = (targetId, newContent) => {
    dispatch({ type: "EDIT", targetId, newContent });

    accountSetData(data.map((it) => (it.id === targetId ? { ...it, price: newContent } : it)));
  };

  const memoizedDispatches = useMemo(() => {
    return { onCreate, onRemove, onEdit };
  }, []);

  // const getAccountAnalysis = useMemo(() => {
  //   if (data.length === 0) {
  //     return { goodcount: 0, badCount: 0, goodRatio: 0 };
  //   }

  //   const goodCount = data.filter(it => it.emotion >= 3).length;
  //   const badCount = data.length - goodCount;
  //   const goodRatio = (goodCount / data.length) * 100.0;
  //   const badRatio = (badCount / data.length) * 100.0;
  //   return { goodCount, badCount, goodRatio };
  // }, [data.length]);

  // const { goodCount, badCount, goodRatio } = getAccountAnalysis;

  return (
    <div className="Account">
      <div className="AccountHead">
        <div className="AccountHeadSpan">
          <div className="AccountHeadTotalMoney">
            <h2>
              달나라 여행에 총 <br />
              100만원을 들고갔어요
            </h2>
          </div>
          <div className="AccountHeadpaidMoney">
            <h3>사용한 돈은 78만원이에요 / 남은 돈은 22만원이에요</h3>
          </div>
        </div>
        <AccountModal onCreate={onCreate} />
      </div>
      {/* <div>기분 좋은 일기 갯수 : {goodCount}</div>
      <div>기분 나쁜 일기 갯수 : {badCount}</div>
      <div> 🥰 {goodRatio}%</div> */}
      <AccountList onEdit={onEdit} onRemove={onRemove} AccountList={accountData} />
    </div>
  );
}
export default Account;

import React, { useReducer, useRef, useState } from "react";
import AccountofSetAccount from "../pages/AccountofSetAccount";
import EditofSetAccount from "../pages/EditofSetAccount";
import HomeofSetAccount from "../pages/HomeofSetAccount";
import NewofSetAccount from "../pages/NewofSetAccount";

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      newState = [action.data, ...state];
      break;
    }
    case "REMOVE": {
      newState = state.filter((it) => it.id !== action.targerId); //targerId
      break;
    }
    case "EDIT": {
      newState = state.map((it) => (it.id === action.data.id ? { ...action.data } : it)); //전체수정 ?
      break;
    }
    default:
      return state;
  }
  return newState;
};

export const AccountStateContext = React.createContext();
export const AccountDispatchContext = React.createContext(); //Context API

//! ------------------------ 예시용 더미데이터
const dummyData = [
  {
    id: 1,
    emotion: "bad",
    content: "bad",
    date: 1649666224221,
  },
  {
    id: 2,
    emotion: "bad",
    content: "bad",
    date: 1649666224222,
  },
  {
    id: 3,
    emotion: "good",
    content: "good",
    date: 1649666224223,
  },
  {
    id: 4,
    emotion: "idk",
    content: "good",
    date: 1649666224224,
  },
  // {
  //   id: 5,
  //   emotion: "티켓",
  //   content: "더미데이터 예제입니다 무시하세요 가계부5번",
  //   date: 1649666224225,
  // },
];
//! ------------------------ 예시용 더미데이터

const Account = () => {
  const [data, dispatch] = useReducer(reducer, dummyData);
  const dataId = useRef(0);
  //CREATE
  const onCreate = (date, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
    dataId.current += 1;
  };

  //REMOVE
  const onRemove = (targetId) => {
    dispatch({ type: "REMOVE", targetId });
  };

  //EDIT
  const onEdit = (targetId, date, content, emotion) => {
    dispatch({ type: "EDIT", id: targetId, date: new Date(date).getDate(), content, emotion });
  };

  const [currentView, setCurrentView] = useState("");
  return (
    <AccountStateContext.Provider value={data}>
      {" "}
      {/* //! */}
      <AccountDispatchContext.Provider value={{ onCreate, onRemove, onEdit }}>
        <div className="Account">
          {currentView === "Account" ? <AccountofSetAccount /> : null}
          {currentView === "home" ? <HomeofSetAccount /> : null}
          {currentView === "edit" ? <EditofSetAccount /> : null}
          {currentView === "new" ? <NewofSetAccount /> : null}

          <div className="AccountButtonWrapper">
            <button onClick={() => setCurrentView("Account")}>계산</button>
            <button onClick={() => setCurrentView("home")}>홈</button>
            <button onClick={() => setCurrentView("edit")}>2</button>
            <button onClick={() => setCurrentView("new")}>4</button>
          </div>
        </div>
      </AccountDispatchContext.Provider>
    </AccountStateContext.Provider>
  );
};

export default Account;

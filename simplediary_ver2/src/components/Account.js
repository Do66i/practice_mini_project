import React, { useReducer, useRef, useState } from "react";

import HomeofSetAccount from "../pages/HomeofSetAccount";
import AccountEditor from "../components/AccountEditor";

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
    emotion: 1,
    content: "emotion : 1",
    date: 1649666224221,
  },
  {
    id: 2,
    emotion: 3,
    content: "emotion : 3",
    date: 1649666224222,
  },
  {
    id: 3,
    emotion: 5,
    content: "emotion : 3",
    date: 1649666224223,
  },
  {
    id: 4,
    emotion: 4,
    content: "emotion : 4",
    date: 1649666224224,
  },
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
      <AccountDispatchContext.Provider value={{ onCreate, onRemove, onEdit }}>
        <div className="Account">
          <HomeofSetAccount />
        </div>
      </AccountDispatchContext.Provider>
    </AccountStateContext.Provider>
  );
};

export default Account;

import React, { useState, useCallback, useEffect, useMemo, useReducer, useRef } from "react";
import "./Diary.css";
import DiaryModal from "./DiaryModal";
import DiaryList from "./DiaryList";
import axios from "axios";

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
      return state.map((it) => (it.id === action.targetId ? { ...it, content: action.newContent } : it));
    }
    default:
      return state;
  }
};

function Diary() {
  const [diaryData, diarySetData] = useState([]);
  const [data, dispatch] = useReducer(reducer, []);

  const dataId = useRef(0);

  const getData = async () => {
    axios
      .get(
        "https://www.remembertrip.tk/diary",
        { trip_id: 1 },
        {
          headers: {
            authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcl9pZCI6Imh5dW5taW4iLCJwYXNzd29yZCI6IjEyMzQiLCJpYXQiOjE2NDk4MjM2NDEsImV4cCI6MTY0OTgyNzI0MX0.KZxoMxYZUzr78ce9zGvlKFVlsw9tiPSmwi2MbHCm4B8`,
            "Content-Type": "application/json",
          },
          withCredentials: false,
        }
      )
      .then((data) => {
        console.log(data);
      });

    const res = await fetch("https://jsonplaceholder.typicode.com/comments").then((res) => res.json());

    const initData = res.slice(0, 20).map((it) => {
      return {
        location: it.email,
        content: it.body,
        // write_date: Math.floor(Math.random() * 5) + 1,
        created_date: new Date().getTime(),
        id: dataId.current++,
      };
    });
    console.log(initData);
    dispatch({ type: "INIT", data: initData });
    diarySetData(initData);
  };

  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 1500);
  }, []);

  const onCreate = useCallback(
    (location, content, write_date) => {
      dispatch({
        type: "CREATE",
        data: { location, content, write_date, id: dataId.current },
      });

      axios
        .post(
          "https://www.remembertrip.tk/diary",
          { location, content, write_date, trip_id: 1 },
          {
            headers: {
              authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcl9pZCI6Imh5dW5taW4iLCJwYXNzd29yZCI6IjEyMzQiLCJpYXQiOjE2NDk4MjI3NzIsImV4cCI6MTY0OTgyNjM3Mn0.G3M3lkIfzp6hhWmv_R3NV7Hyv3Y9dpndmurxbFECNtc`,
              "Content-Type": "application/json",
            },
            withCredentials: false,
          }
        )
        .then((data) => {
          console.log(data);
        });

      const created_date = new Date().getTime();
      const newItem = {
        location,
        content,
        write_date,
        id: dataId.current,
      };
      dataId.current += 1;

      diarySetData([newItem, ...diaryData]);
    },
    [diaryData]
  );

  const onRemove = (targetId) => {
    // axios.delete;

    dispatch({ type: "REMOVE", targetId });

    const newDiaryList = data.filter((it) => it.id !== targetId);
    diarySetData(newDiaryList);
  };

  const onEdit = (targetId, newContent) => {
    dispatch({ type: "EDIT", targetId, newContent });

    diarySetData(data.map((it) => (it.id === targetId ? { ...it, content: newContent } : it)));
  };

  const memoizedDispatches = useMemo(() => {
    return { onCreate, onRemove, onEdit };
  }, []);

  // const getDiaryAnalysis = useMemo(() => {
  //   if (data.length === 0) {
  //     return { goodcount: 0, badCount: 0, goodRatio: 0 };
  //   }

  //   const goodCount = data.filter((it) => it.write_date >= 3).length;
  //   const badCount = data.length - goodCount;
  //   const goodRatio = (goodCount / data.length) * 100.0;
  //   const badRatio = (badCount / data.length) * 100.0;
  //   return { goodCount, badCount, goodRatio };
  // }, [data.length]);

  // const { goodCount, badCount, goodRatio } = getDiaryAnalysis;

  return (
    <div className="Diary">
      <DiaryModal onCreate={onCreate} />
      {/* <div>전체 일기 : {data.length}</div>
      <div>기분 좋은 일기 갯수 : {goodCount}</div>
      <div>기분 나쁜 일기 갯수 : {badCount}</div>
      <div> 🥰 {goodRatio}%</div> */}
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={diaryData} />
    </div>
  );
}
export default Diary;

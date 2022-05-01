import React from "react";

import DiaryItem from "./DiaryItem";

function DiaryList({ diaryList, onEdit, onRemove }) {
  const a = new Date().toLocaleString();
  console.log(diaryList);
  console.log(a);
  return (
    <div className="DiaryList">
      <h2>일기리스트</h2>
      <div className="DiaryListSpanBox">
        <span>{diaryList.length}</span> <span>개의 기록이 있어요 !</span>
      </div>
      <div>
        {diaryList.map((it) => (
          <DiaryItem onEdit={onEdit} onRemove={onRemove} diaryList={diaryList} key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
}

DiaryList.defaultProps = {
  diaryList: ["에러발생 !"],
};

export default DiaryList;

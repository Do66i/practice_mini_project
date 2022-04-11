import { useContext } from "react";
import { DiarySteteContext } from "./Diary";
import DiaryItem from "./DiaryItem";

const DiaryList = () => {
  const diaryList = useContext(DiarySteteContext);
  console.log(diaryList);
  return (
    <div className="DiaryList">
      <h2>일기리스트</h2>
      <h4>{diaryList.length}개의 기록이 있어요 !</h4>
      <div>
        {diaryList.map((it) => (
          <DiaryItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};

// DiaryList.defaultProps = {
//   diaryList: [],
// };

export default DiaryList;

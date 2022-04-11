import { useContext, useRef, useState } from "react";
import { DiaryDispatchContext } from "./Diary";

const DiaryEditor = () => {
  const { onCreate } = useContext(DiaryDispatchContext);

  const authorInput = useRef();
  const contentInput = useRef();
  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  const handleChangeState = (e) => {
    console.log("타겟이름: ", e.target.name);
    console.log("타겟벨류: ", e.target.value);
    setState({ ...state, [e.target.name]: e.target.value });
    // name : value
    //ex) input에 입력시 author(input name): e.target.value(onchange동작)
  };

  const handleSubmit = (e) => {
    if (state.author.length < 1) {
      authorInput.current.focus();
      return;
    }

    if (state.content.length < 5) {
      contentInput.current.focus();
      return;
    }
    onCreate(state.author, state.content, state.emotion);
    console.log("일기작성여부확인 :", state);
    alert("저장성공!");
    setState({
      author: "",
      content: "",
      emotion: 1,
    });
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input ref={authorInput} value={state.author} name="author" onChange={handleChangeState} />
        <div>
          <textarea ref={contentInput} value={state.content} name="content" onChange={handleChangeState} />
        </div>
      </div>
      <div>
        <label>기분 점수 : </label>
        <select select name="emotion" value={state.emotion} onChange={handleChangeState}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>✏️</button>
      </div>
    </div>
  );
};

export default DiaryEditor;

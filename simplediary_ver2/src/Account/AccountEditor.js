import React, { useRef, useState } from "react";

function AccountEditor({ onCreate, openModalHandler }) {
  const item_nameInput = useRef();
  const priceInput = useRef();
  const paid_personInput = useRef();
  const currencyInput = useRef();

  const [state, setState] = useState({
    write_date: "",
    item_name: "",
    price: "",
    paid_person: "",
    currency: "",
    category: "식비",
  });

  const handleChangeState = (e) => {
    console.log("target name: ", e.target.name);
    console.log("target value: ", e.target.value);
    setState({ ...state, [e.target.name]: e.target.value });
    // name : value
    //ex) input에 입력시 author(input name): e.target.value(onchange동작)
  };

  const handleSubmit = (e) => {
    if (state.item_name.length < 1) {
      item_nameInput.current.focus();
      alert("");
      return;
    }

    if (state.price.length < 1) {
      priceInput.current.focus();
      return;
    }

    if (state.paid_person.length < 1) {
      paid_personInput.current.focus();
      return;
    }

    if (state.category.length < 1) {
      currencyInput.current.focus();
      return;
    }
    // write_date = 1;
    onCreate(
      state.item_name,
      state.currency,
      state.category,
      state.price,
      state.paid_person,
      // state.new Date
      (state.write_date = new Date().toLocaleString())
    );
    console.log("일기작성여부확인 :", state);
    alert("저장성공!");
    setState({
      write_date: "",
      item_name: "",
      currency: "",
      paid_person: "",
      price: "",
      category: "교통비",
    });
    openModalHandler(false);
  };

  return (
    <div className="AccountEditor">
      <div className="AccountEditorH2Box">
        <h2 className="AccountEditorH2">가계부를 기록해요</h2>
      </div>
      <div className="AccountEditorReturnDiv">
        <div className="InputFirstArea">
          <span>"변수지정필요" 일차 !</span>
          <br />
          <span className="item_nameSpan">
            <input className="item_nameInput" ref={item_nameInput} value={state.item_name} name="item_name" onChange={handleChangeState}></input>
            구입 !
          </span>
        </div>
        <div className="InputSecondArea">
          <span>
            <input className="priceInput" ref={priceInput} value={state.price} name="price" onChange={handleChangeState}></input>원 사용!
          </span>
        </div>
        <div className="InputThirdArea">
          <span>
            돈 쓴 사람
            <input className="paid_personInput" ref={paid_personInput} value={state.paid_person} name="paid_person" onChange={handleChangeState}></input>
          </span>
        </div>
        <div className="InputForthArea">
          <span>
            통화
            <input className="currencyInput" ref={currencyInput} value={state.currency} name="currency" onChange={handleChangeState}></input>
          </span>
        </div>

        {/* <textarea ref={contentInput} value={state.content} name="content" onChange={handleChangeState} /> */}
      </div>
      <div className="InputFifthArea">
        <label className="InputFifthAreaLabel">소비 항목을 선택해요 : </label>
        <span className="selectSpan">
          <select className="select" name="category" value={state.category} onChange={handleChangeState}>
            <option value={"식비"}>식비</option>
            <option value={"교통비"}>교통비</option>
            <option value={"숙박비"}>숙박비</option>
            <option value={"티켓"}>티켓</option>
            <option value={"기타항목"}>기타항목</option>
          </select>
        </span>
      </div>
      <div className="InputLastArea">
        <button className="InputLastAreaBtn" onClick={handleSubmit}>
          ✏️
        </button>
      </div>
    </div>
  );
}

export default AccountEditor;

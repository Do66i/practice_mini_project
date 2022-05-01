// import React, { useRef, useState } from "react";

// function AccountItem({
//   onEdit,
//   onRemove,
//   id,
//   item_name,
//   category,
//   price,
//   paid_person,
//   currency,
//   created_date,
//   write_date,
// }) {
//   const [isEdit, setIsEdit] = useState(false);
//   const toggleIsEdit = () => {
//     setIsEdit(!isEdit);
//     console.log("isEdit의 state는? ->", isEdit);
//   };
//   const [localContent, setLocalContent] = useState(price);
//   const localContentInput = useRef();

//   const handleRemove = () => {
//     if (window.confirm(`${id + 1}번째 기록을 삭제할까요?`)) {
//       onRemove(id);
//     }
//   };

//   const handleQuitEdit = () => {
//     setIsEdit(false);
//     setLocalContent(price);
//   };

//   const handleEdit = () => {
//     if (localContent.length < 1) {
//       localContentInput.current.focus();
//       return;
//     }
//     if (window.confirm(`${id + 1}번째 가계부를 수정할까요 ?`)) {
//       onEdit(id, localContent);
//       toggleIsEdit();
//     }
//   };

//   return (
//     <div className="AccountItem">
//       <div className="info">
//         <span>
//           이름 : {item_name} <br></br>
//           구매한 사람 : {paid_person}
//           <br></br>
//           통화 : {currency}
//           <br></br>
//           카테고리 : {category}
//         </span>
//         <br />
//         <span className="date">{write_date}</span>
//       </div>
//       <div className="content">
//         {isEdit ? (
//           <>
//             <input
//               ref={localContentInput}
//               value={localContent}
//               onChange={(e) => setLocalContent(e.target.value)}
//             />
//           </>
//         ) : (
//           <>쓴 돈 : {price}</>
//         )}
//       </div>
//       {isEdit ? (
//         <>
//           <button onClick={handleQuitEdit}>수정 취소</button>
//           <button onClick={handleEdit}>수정 완료</button>
//         </>
//       ) : (
//         <>
//           <button onClick={handleRemove}>삭제</button>
//           <button onClick={toggleIsEdit}>수정</button>
//         </>
//       )}
//     </div>
//   );
// }

// export default AccountItem;
//!
import React, { useRef, useState } from "react";

function AccountItem({ onEdit, onRemove, id, item_name, category, price, paid_person, currency, write_date }) {
  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => {
    setIsEdit(!isEdit);
    console.log("isEdit의 state는? ->", isEdit);
  };
  const [localContent, setLocalContent] = useState(price);
  const localContentInput = useRef();

  const handleRemove = () => {
    if (window.confirm(`${id + 1}번째 기록을 삭제할까요?`)) {
      onRemove(id);
    }
  };

  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(price);
  };

  const handleEdit = () => {
    if (localContent.length < 1) {
      localContentInput.current.focus();
      return;
    }
    if (window.confirm(`${id + 1}번째 가계부를 수정할까요 ?`)) {
      onEdit(id, localContent);
      toggleIsEdit();
    }
  };

  return (
    <div className="AccountItem">
      <div className="info">
        <div className="infoFirstBox">
          <div className=" AccountItmeP1">구매한 사람은 {paid_person}</div>

          <div className=" AccountItmeP3">카테고리 : {category}</div>
          <div className=" AccountItmeP2">통화 : {currency}</div>
          <div className="dateBox">
            <span className="date">{write_date}</span>
          </div>
        </div>
      </div>
      <div className="infoFirstSecondBox">
        <div className="AccountItemItemNameBox">{item_name} 구입</div>
        {isEdit ? (
          <div className="AccountItemInputBox">
            <input placeholder="사용금액을 입력해요" className="AccountItemInput" ref={localContentInput} value={localContent} onChange={(e) => setLocalContent(e.target.value)} />
          </div>
        ) : (
          <div className="AccountItemContentBox">
            💸
            <br />
            {price}
          </div>
        )}
      </div>
      {isEdit ? (
        <div className="AccountItemOptionBtnBox">
          <div className="AccountItemQuitEditBox">
            <button className="AccountItemQuitEditBtn" onClick={handleQuitEdit}>
              수정 취소
            </button>
          </div>
          <div className="AccountItemEditSubmitBox">
            <button className="AccountItemEditSubmitBtn" onClick={handleEdit}>
              수정 완료
            </button>
          </div>
        </div>
      ) : (
        <div className="AccountItemBtnBox">
          <div className="AccountItemRemoteBox">
            <button className="AccountItemRemoteBtn" onClick={handleRemove}>
              삭제
            </button>
          </div>
          <div className="AccountItemEditBox">
            <button className="AccountItemEditBtn" onClick={toggleIsEdit}>
              수정
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default AccountItem;

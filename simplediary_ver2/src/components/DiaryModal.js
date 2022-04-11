import { useState } from "react";
import styled from "styled-components";
import DiaryEditor from "./DiaryEditor";

export const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: grid;
  place-items: center;
  min-width: 500px;
`;

export const ModalContainer = styled.div`
  height: 15rem;
  text-align: center;
  margin: 50px auto;
`;

export const ModalBtn = styled.button`
  background-color: #ffffff;
  text-decoration: none;
  font-size: 40px;
  border: none;
  margin: 70px auto;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: grab;
`;

export const ModalView = styled.div.attrs((props) => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.
  role: "dialog",
}))`
  border-radius: 10px;
  background-color: #ffffff;
  width: 80%;
  height: 80%;
  min-width: 700px;
}

  > span.close-btn {
    margin-top: 5px;
    cursor: pointer;
  }

  > div.desc {
    margin-top: 25px;
    color: 7c98bc;
  }
`;

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <ModalContainer>
      <ModalBtn onClick={openModalHandler}>{isOpen === false ? "✏️" : "Opened!"}</ModalBtn>
      {isOpen === true ? (
        <ModalBackdrop onClick={openModalHandler}>
          <ModalView onClick={(e) => e.stopPropagation()}>
            <span onClick={openModalHandler} className="close-btn">
              &times;
            </span>
            <div className="desc">
              <DiaryEditor />
            </div>
          </ModalView>
        </ModalBackdrop>
      ) : null}
    </ModalContainer>
  );
};

export default Modal;

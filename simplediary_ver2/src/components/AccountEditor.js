import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AccountDispatchContext } from "./Account";

import AccountHeader from "../components/AccountHeader";
import AccountButton from "../components/AccountButton";
import EmotionItem from "./EmotionItem";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const emotionList = [
  {
    emotion_id: 1,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion1.png`,
    emotion_descript: "완전 좋아요",
  },
  {
    emotion_id: 2,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion2.png`,
    emotion_descript: "좋아요",
  },
  {
    emotion_id: 3,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion3.png`,
    emotion_descript: "그럭저럭",
  },
  {
    emotion_id: 4,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion4.png`,
    emotion_descript: "나쁨",
  },
  {
    emotion_id: 5,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion5.png`,
    emotion_descript: "HELL",
  },
];

const getStringData = (date) => {
  return date.toISOString().slice(0, 10);
};

const AccountEditor = () => {
  const accountNubmerRef = useRef();
  const contentRef = useRef();
  const [accountNumber, setAccountNumber] = useState("");
  const [content, setContent] = useState("");
  const [emotion, setEmotion] = useState(3);
  const [date, setDate] = useState();

  const handleClickEmote = (emotion) => {
    setEmotion(emotion);
  };

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (content.length < 1) {
      contentRef.current.focus();
      return;
    }
  };

  return (
    <div className="AccountEditor">
      <AccountHeader headText={"가게부 작성"} leftChild={<AccountButton onClick={() => navigate(-1)} text={"뒤로가기"} />} />
      <div>
        <section>
          <h4>오늘은 언제인가요 ?</h4>
          <div className="input_box">
            <input className="input_date" value={date} onChange={(e) => setDate(e.target.value)} type={"date"} />
          </div>
        </section>
        <section>
          <h4>오늘의 감정</h4>
          <div className="input_box emotion_list_wrapper">
            {emotionList.map((it) => (
              <EmotionItem key={it.emotion_id} {...it} onClick={handleClickEmote} isSelected={it.emotion_id === emotion} />
            ))}
          </div>
        </section>
        <section>
          <h4>가계부</h4>
          <div className="input_box text_wrapper"></div>
          <input
            className="input_account"
            type="text"
            oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
            placeholder="지출금액을 입력해요"
            ref={accountNubmerRef}
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
          />
          <span className="span_account">원</span>
          <textarea placeholder="메모를 입력해요" ref={contentRef} onChange={(e) => setContent(e.target.value)} />
        </section>
        <section>
          <div className="control_box">
            <AccountButton text={"취소"} onClick={() => navigate(-1)} />
            <button className="accountSubmit" onClick={() => {}}>
              ✏️
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AccountEditor;

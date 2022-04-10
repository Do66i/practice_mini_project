import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom"; // ./ 없으면 라이브러리라 생각해도 무관할듯

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,

  document.getElementById("root")
  // 대충 🐘 App이라는 컴포넌트를 HTML 파일에서 id가 root인 곳에다가 App을 갖다붙여주시오! 🐘 라는 뜻
);

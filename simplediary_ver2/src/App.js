import React from "react";
import "./App.css";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

// import NewofSetAccount from "./pages/NewofSetAccount";
import Diary from "./Diary";
import Account from "./Account/Account";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to={"/account"}>Accounttest</Link>
        <Link to={"/diary "}>DiaryTest</Link>

        <Routes>
          <Route path="/account" element={<Account />} />
          <Route path="/diary" element={<Diary />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

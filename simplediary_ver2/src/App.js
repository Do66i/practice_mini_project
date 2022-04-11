import React from "react";
import "./App.css";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Diary from "./components/Diary";
import Account from "./components/Account";
import NewofSetAccount from "./pages/NewofSetAccount";
import EditofSetAccout from "./pages/EditofSetAccount";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to={"/diary"}>Diary</Link>
        <Link to={"/account"}>Account</Link>

        <Routes>
          <Route path="/Diary" element={<Diary />} />
          <Route path="/account" element={<Account />} />
          <Route path="/new" element={<NewofSetAccount />} />
          <Route path="/edit" element={<EditofSetAccout />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

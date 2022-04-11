import React from "react";
import "./App.css";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Account from "./components/Account";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>APP 페이지임!</h1>

        <Link to={"/Account"}>Account</Link>
        <Routes>
          <Route path="/Account" element={<Account />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

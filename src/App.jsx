import { Routes, Route, Link } from "react-router-dom";
import {
  Auth,
  Home,
  Profile,
  Table
} from "./pages"
import React, { useState, useEffect } from "react";
import Ctx from "./tools/context";
import Api from "./tools/api"



function App () {
  

  return <>
    <ul className="menu">
      <li>
        <Link to="/">Главная</Link>
      </li>
      <li>
        <Link to="/table">Стол</Link>
      </li>
      <li>
        <Link to="/profile">Профиль</Link>
      </li>
      <li>
        <Link to="/auth">Авторизация</Link>
      </li>
    </ul>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/table" element={<Table />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  </>;
}

export default App;
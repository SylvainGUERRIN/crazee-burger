//import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./components/pages/error/ErrorPage";
import LoginPage from "./components/pages/login/LoginPage";
import OrderPage from "./components/pages/order/OrderPage"

function App(){
  return (
    <Routes>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/order/:name" element={<OrderPage/>}/>
      <Route path="*" element={<ErrorPage/>}/>
    </Routes>
  )
}

export default App;

import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./components/pages/error/ErrorPage";
import LoginPage from "./components/pages/login/LoginPage";
import OrderPage from "./components/pages/order/OrderPage"
import AdminModeContext from "./context/AdminModeContext"

function App(){
  const [adminMode, setAdminMode] = useState(false)
  const adminModeContextValue = {
    adminMode,
    setAdminMode
  };

  return (
    <AdminModeContext.Provider value={adminModeContextValue}>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/order/:name" element={<OrderPage/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </AdminModeContext.Provider>
  )
}

export default App;

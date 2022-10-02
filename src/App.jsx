import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import { AuthContextProvider } from "./context/AuthContext";
import Account from "./Pages/Account";
import Home from "./Pages/Home";
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
};

export default App;

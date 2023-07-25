import React, { useState } from "react";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Header from "./Components/Header";
import About from "./pages/About";
import AdminDashboard from "./pages/AdminDashboard";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Errorpage from "./pages/Errorpage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import OrderPage from "./pages/OrderPage";
import Signup from "./pages/Signup";
import SingleProductpage from "./pages/SingleProduct";
import UserDashboard from "./pages/UserDashboard";
import UserOrderData from "./pages/UserOrderData";
const basename = "/";
const App = () => {
  const [token, setToken] = useState(false);

  return (
    <Router basename={basename}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/singleproduct/:id" element={<SingleProductpage />} />
        <Route path="/errorpage" element={<Errorpage />} />
        <Route path="/signup" element={<Signup />} />
        {token === true && (
          <>
            <Route path="/userDashboard" element={<UserDashboard />} />
            <Route path="/adminDashboard" element={<AdminDashboard />} />
            <Route path="/userOrderData" element={<UserOrderData />} />
          </>
        )}
        <Route path="/login" setToken={setToken} element={<Login />} />

        <Route path="/orderPage" element={<OrderPage />} />
      </Routes>
    </Router>
  );
};

export default App;

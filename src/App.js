
import Footer from "./Components/SharedComponents/Footer";
import Navbar from "./Components/SharedComponents/Navbar";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Signup from "./Components/Login/Signup";
import { Toaster } from 'react-hot-toast';
import Dashboard from "./Components/Dashboard/Dashboard";
import Products from "./Components/Home/Products";
import { useState } from "react";
import Checkout from "./Components/Checkout/Checkout";
import RequireAuth from "./Components/SharedComponents/RequireAuth";




function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="text-accent ">
      <Navbar cartItems={cartItems} setCartItems={setCartItems} />
      <Routes>
        <Route path={"/"} element={<Products cartItems={cartItems} setCartItems={setCartItems} />} />

        <Route path="login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>

        <Route path="/dashboard" element={<RequireAuth><Dashboard/></RequireAuth>}></Route>
        <Route path="/checkout" element={<RequireAuth><Checkout cartItems={cartItems} /></RequireAuth>
        }></Route>


      </Routes>

      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}

export default App;

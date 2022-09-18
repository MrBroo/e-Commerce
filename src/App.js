import "./main/App.css";
import Header from "./home/Header";
import Home from "./home/Home";
import { Routes, Route } from "react-router-dom";
import Check from "./home/Check";
import Login from "./home/Login";
import { useStateValue } from "./home/StateProvider";
import { auth } from "./firebase";
import { useEffect } from "react";
import Payment from "./home/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./home/Orders";

const promise = loadStripe(
  "pk_test_51LjH3ELIfahDMMPDGuuPdZhhBKykk3Td5LK2fZQzQ2eU5QeQVgfxTKo28Uqxs4niD04r0nrzJBuXQdqJ1sox5Ins00iHRZIcuC"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Check />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orders" element={<Orders />} />
        <Route
          path="/payment"
          element={
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          }
        />
      </Routes>
    </>
  );
}

export default App;

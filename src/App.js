import "./main/App.css";
import Header from "./home/Header";
import Home from "./home/Home";
import { Routes, Route } from "react-router-dom";
import Check from "./home/Check";
import Login from "./home/Login";
import { useStateValue } from "./home/StateProvider";
import { auth } from "./firebase";
import { useEffect } from "react";

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
      </Routes>
    </>
  );
}

export default App;

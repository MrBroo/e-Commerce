import "./main/App.css";
import Header from "./home/Header";
import Home from "./home/Home";
import { Routes, Route } from "react-router-dom";
import Check from "./home/Check";
import Login from "./home/Login";

function App() {
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

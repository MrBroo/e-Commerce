import "./main/App.css";
import Header from "./home/Header";
import Home from "./home/Home";
import { Routes, Route } from "react-router-dom";
import Check from "./home/Check";

function App() {
  return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Check />} />
        </Routes>
      </>
  );
}

export default App;

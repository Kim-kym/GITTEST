//test code
import Home from "./components/kimgyeongbin/Home";
// import MainHome from "./app/MainHome";
import MainHome from "./app/mainHome";
// import Topping from "./app/Modal";
import { Routes, Route } from "react-router-dom";
import Start from "./components/menu/Start";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/home" element={<Home />} />
      <Route path="/test" element={<MainHome />} />
      {/* <Route path="/choice" element={<Topping />} /> */}
    </Routes>
  );
}

export default App;
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
//ALT+SHIFT+F for decorate code
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/to" element={<Home />}></Route>
        <Route path="/header" element={<Header/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;

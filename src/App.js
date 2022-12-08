import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/reset.css";
import Main from "./pages/Home/Main";
import ArtDatabase from "./pages/ArtDatabase/ArtDatabase";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/artdb" element={<ArtDatabase />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/reset.css";
import Main from "./pages/Home/Main";
import ArtDatabase from "./pages/ArtDatabase/ArtDatabase";
import ArtDbArtist from "./pages/ArtDatabase/Artist/ArtDbArtist";
import ArtDbWork from "./pages/ArtDatabase/Work/ArtDbWork";
import ArtDbWork2 from "./pages/ArtDatabase/Work/ArtDbWork2";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route
          path="/artdb"
          element={
            <ArtDatabase>
              <ArtDbArtist />
            </ArtDatabase>
          }
        ></Route>
        <Route
          path="/artdb/work"
          element={
            <ArtDatabase>
              <ArtDbWork />
            </ArtDatabase>
          }
        ></Route>

        <Route
          path="/artdb/work2"
          element={
            <ArtDatabase>
              <ArtDbWork2 />
            </ArtDatabase>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import logo from './logo.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './css/reset.css'
import Main from './pages/Home/Main'
import ArtDatabase from './pages/ArtDatabase/ArtDatabase'
import ArtDbArtist from './pages/ArtDatabase/Artist/ArtDbArtist'
import ArtDbWork from './pages/ArtDatabase/Work/ArtDbWork'
import ArtDbWork2 from './pages/ArtDatabase/Work/ArtDbWork2'
import ArtDbWork3 from './pages/ArtDatabase/Work/ArtDbWork3'
import Venue from './pages/ArtDatabase/Venue/Venue'
import VenueDetail from './pages/ArtDatabase/Venue/VenueDetail'
import VenueDisplay from './pages/ArtDatabase/Venue/VenueDisplay'
import MarketMain from './pages/Marketplace/MarketMain/MarketMain'
import Marketplace from './pages/Marketplace/Marketplace'
import SignUp from './components/SignUp/SignUp'
import Login from './components/Login/Login'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
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
        <Route
          path="/artdb/work3"
          element={
            <ArtDatabase>
              <ArtDbWork3 />
            </ArtDatabase>
          }
        ></Route>
        <Route
          path="/artdb/venue"
          element={
            <ArtDatabase>
              <Venue />
            </ArtDatabase>
          }
        ></Route>
        <Route
          path="/artdb/venue/1"
          element={
            <ArtDatabase>
              <VenueDetail />
            </ArtDatabase>
          }
        ></Route>
        <Route
          path="/artdb/venue/display/1"
          element={
            <ArtDatabase>
              <VenueDisplay />
            </ArtDatabase>
          }
        ></Route>
        <Route
          path="/market"
          element={
            <Marketplace>
              <MarketMain />
            </Marketplace>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

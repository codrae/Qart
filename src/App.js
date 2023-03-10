import logo from './logo.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './css/reset.css'
import Main from './pages/Home/Main'
import ArtDatabase from './pages/ArtDatabase/ArtDatabase'
import ArtDbArtist from './pages/ArtDatabase/Artist/ArtDbArtist'
import ArtDbWork from './pages/ArtDatabase/Work/ArtDbWork'
import ArtDbMain from './pages/ArtDatabase/Work/Main/Main'
import ArtDbWork2 from './pages/ArtDatabase/Work/ArtDbWork2'
import ArtDbWork3 from './pages/ArtDatabase/Work/ArtDbWork3'
import Venue from './pages/ArtDatabase/Venue/Venue'
import VenueDetail from './pages/ArtDatabase/Venue/VenueDetail'
import VenueDisplay from './pages/ArtDatabase/Venue/VenueDisplay'
import MarketMain from './pages/Marketplace/MarketMain/MarketMain'
import Marketplace from './pages/Marketplace/Marketplace'
import SignUp from './components/SignUp/SignUp'
import Login from './components/Login/Login'
import SignUpAuth from './components/SignUp/SignUpAuth'
import SignUpGeneral from './components/SignUp/General/SignUpGeneral'
import SignUpArtist from './components/SignUp/Artist/SignUpArtist'
import SignUpCert from './components/SignUp/SignUpCert'
import SignUpAgency from './components/SignUp/Agency/SignUpAgency'
import ArtDetail from './components/ArtDetail/ArtDetail'
import NftMain from './pages/ArtDatabase/Work/NFT/NftMain'
import ArtistDetail from './pages/ArtDatabase/Artist/ArtistDetail/ArtistDetail'
import MarketAll from './pages/Marketplace/All/MarketAll'
import MarketItem from './pages/Marketplace/Item/MarketItem'
import MarketNftItem from './pages/Marketplace/Item/MarketNftItem.js/MarketNftItem'
import MarketPlatform from './pages/Marketplace/PlatformQ/MarketPlatform'
import MarketAuction from './pages/Marketplace/Auction/MarketAuction'
import AuctionItem from './pages/Marketplace/Auction/Item/AuctionItem'
import Payment from './pages/Marketplace/Payment/Payment'
import MyPageGeneral from './pages/MyPage/General/MyPageGeneral'
import MyPageArtist from './pages/MyPage/Artist/MyPageArtist'
import ArtistExhibition from './pages/MyPage/Artist/Profile/ArtistExhibition'
import ArtistSchool from './pages/MyPage/Artist/Profile/ArtistSchool'
import ArtistArchive from './pages/MyPage/Artist/MyArchive/ArtistArchive'
import MyWorkAdd from './pages/MyPage/Artist/MyArchive/Work/MyWorkAdd'
import MyArticleAdd from './pages/MyPage/Artist/MyArchive/Article/MyArticleAdd'
import MyNftAdd from './pages/MyPage/Artist/MyArchive/Nft/MyNftAdd'
import MyPageGallery from './pages/MyPage/Gallery/MyPageGallery'
import GalleryExhibition from './pages/MyPage/Gallery/Profile/GalleryExhibition'
import GalleryTeam from './pages/MyPage/Gallery/Profile/GalleryTeam'
import GalleryAgency from './pages/MyPage/Gallery/Profile/GalleryAgency'
import SupportMain from './pages/Support/SupportMain'
import SupportAbout from './pages/Support/About/SupportAbout'
import SupportNotice from './pages/Support/Notice/SupportNotice'
import SupportFAQ from './pages/Support/FAQ/SupportFAQ'
import SupportInQuiry from './pages/Support/InQuiry/SuportInQuiry'
import SignUpKYC from './components/SignUp/SignUpKYC'
import Search from './pages/Search/Search'
import AuctionDetail from './pages/Marketplace/Auction/Item/AuctionDetail'
import QCoAMain from './pages/QCoA/QCoAMain'
import QCoAAbout from './pages/QCoA/About/QCoAAbout'
import QCoAList from './pages/QCoA/List/QcoAList'
import NFTItem from './pages/ArtDatabase/Work/NFT/NFTItem'
import GeneralProfile from './pages/MyPage/General/Profile/GeneralProfile'
import GeneralWallet from './pages/MyPage/General/Wallet/GeneralWallet'
import GeneralLike from './pages/MyPage/General/Like/GeneralLike'
import ArtistWallet from './pages/MyPage/Artist/Wallet/ArtistWallet'
import ArtistLike from './pages/MyPage/Artist/Like/ArtistLike'
import ArtistProfile from './pages/MyPage/Artist/Profile/ArtistProfile'
import AddWorkToExcel from './pages/MyPage/Artist/MyArchive/AddWorkToExcel'
import GalleryProfile from './pages/MyPage/Gallery/Profile/GalleryProfile'
import MyWorkEdit from './pages/MyPage/Artist/MyArchive/Work/MyWorkEdit'
import AdminMain from './pages/Admin/AdminMain'
import AdminManage from './pages/Admin/Main/AdminManage'
import AdminEdit from './pages/Admin/Main/AdminEdit'
import AdminTerm from './pages/Admin/Main/AdminTerm'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="/signUp/auth" element={<SignUpAuth />}></Route>
        <Route path="/signUp/auth/general" element={<SignUpGeneral />}></Route>
        <Route path="/signUp/auth/artist" element={<SignUpArtist />}></Route>
        <Route path="/signUp/auth/agency" element={<SignUpAgency />}></Route>
        <Route path="/signUp/auth/cert" element={<SignUpCert />}></Route>
        <Route path="/signUp/auth/kyc" element={<SignUpKYC />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route
          path="/artdb/artist"
          element={
            <ArtDatabase search={true} active={1}>
              <ArtDbArtist />
            </ArtDatabase>
          }
        ></Route>
        <Route
          path="/artdb/artist/:artistId"
          element={
            <ArtDatabase search={false}>
              <ArtistDetail />
            </ArtDatabase>
          }
        ></Route>
        <Route
          path="/artdb/work"
          element={
            <ArtDatabase search={true} active={0}>
              <ArtDbWork active={0}>
                <ArtDbMain />
              </ArtDbWork>
            </ArtDatabase>
          }
        ></Route>
        <Route
          path="/artdb/work/:workId"
          element={
            <ArtDatabase search={false}>
              <ArtDbWork3 />
            </ArtDatabase>
          }
        ></Route>
        <Route
          path="/artdb/work/detail"
          element={
            <ArtDatabase search={true} active={0}>
              <ArtDbWork active={0}>
                <ArtDetail />
              </ArtDbWork>
            </ArtDatabase>
          }
        ></Route>
        <Route
          path="/artdb/work/nft"
          element={
            <ArtDatabase search={true} active={0}>
              <ArtDbWork active={1}>
                <NftMain />
              </ArtDbWork>
            </ArtDatabase>
          }
        ></Route>
        <Route
          path="/artdb/work/nft/:nftId"
          element={
            <ArtDatabase search={false}>
              <NFTItem />
            </ArtDatabase>
          }
        ></Route>
        <Route
          path="/artdb/venue"
          element={
            <ArtDatabase search={true} active={2}>
              <Venue />
            </ArtDatabase>
          }
        ></Route>
        <Route
          path="/artdb/venue/:venuId"
          element={
            <ArtDatabase search={false}>
              <VenueDetail />
            </ArtDatabase>
          }
        ></Route>
        {/* <Route
          path="/artdb/venue/display/1"
          element={
            <ArtDatabase>
              <VenueDisplay />
            </ArtDatabase>
          }
        ></Route> */}
        <Route
          path="/market"
          element={
            <Marketplace search={1}>
              <MarketMain />
            </Marketplace>
          }
        ></Route>
        <Route
          path="/market/all"
          element={
            <Marketplace search={1} active={0}>
              <MarketAll />
            </Marketplace>
          }
        ></Route>
        <Route
          path="/market/:marketId"
          element={
            <Marketplace search={0}>
              <MarketItem />
            </Marketplace>
          }
        ></Route>
        <Route
          path="/market/nft/:nftId"
          element={
            <Marketplace>
              <MarketNftItem />
            </Marketplace>
          }
        ></Route>
        <Route
          path="/market/platform"
          element={
            <Marketplace search={1} active={1}>
              <MarketPlatform />
            </Marketplace>
          }
        ></Route>
        <Route
          path="/market/auction"
          element={<MarketAuction search={true} active={0} />}
        ></Route>
        <Route
          path="/market/auction/:auctionId"
          element={<AuctionItem />}
        ></Route>
        <Route
          path="/market/auction/:auctionId/:itemId"
          element={<AuctionDetail />}
        ></Route>
        <Route path="/market/payment" element={<Payment />}></Route>

        <Route
          path="/support"
          element={
            <SupportMain search={false} active={3} choice={0}>
              <SupportAbout />
            </SupportMain>
          }
        ></Route>
        <Route
          path="/support/notice"
          element={
            <SupportMain search={false} active={3} choice={1}>
              <SupportNotice />
            </SupportMain>
          }
        ></Route>
        <Route
          path="/support/faq"
          element={
            <SupportMain search={false} active={3} choice={2}>
              <SupportFAQ />
            </SupportMain>
          }
        ></Route>
        <Route
          path="/support/inquiry"
          element={
            <SupportMain search={false} active={3} choice={3}>
              <SupportInQuiry />
            </SupportMain>
          }
        ></Route>

        <Route
          path="/qcoa"
          element={
            <QCoAMain search={1} active={1} choice={0}>
              <QCoAAbout />
            </QCoAMain>
          }
        ></Route>
        <Route
          path="/qcoa/list"
          element={
            <QCoAMain search={1} active={1} choice={1}>
              <QCoAList />
            </QCoAMain>
          }
        ></Route>
        {/* 마이페이지 - 일반 */}
        <Route path="/mypage/general" element={<GeneralProfile />}></Route>
        <Route
          path="/mypage/general/wallet"
          element={
            <MyPageGeneral active={1}>
              <GeneralWallet />
            </MyPageGeneral>
          }
        ></Route>
        <Route
          path="/mypage/general/like"
          element={
            <MyPageGeneral active={2}>
              <GeneralLike />
            </MyPageGeneral>
          }
        ></Route>

        {/* 마이페이지 - 아티스트 */}
        <Route path="/mypage/artist" element={<ArtistProfile />}></Route>
        <Route
          path="/mypage/artist/wallet"
          element={
            <MyPageArtist active={2}>
              <ArtistWallet />
            </MyPageArtist>
          }
        ></Route>
        <Route
          path="/mypage/artist/like"
          element={
            <MyPageArtist active={3}>
              <ArtistLike />
            </MyPageArtist>
          }
        ></Route>

        <Route
          path="/mypage/artist/exhibition"
          element={<ArtistExhibition />}
        ></Route>
        <Route path="/mypage/artist/school" element={<ArtistSchool />}></Route>
        <Route
          path="/mypage/artist/archive"
          element={<ArtistArchive />}
        ></Route>

        <Route
          path="/mypage/artist/archive/work"
          element={<MyWorkAdd />}
        ></Route>
        <Route
          path="/mypage/artist/archive/article"
          element={<MyArticleAdd />}
        ></Route>
        <Route path="/mypage/artist/school" element={<ArtistSchool />}></Route>
        <Route path="/mypage/artist/archive/nft" element={<MyNftAdd />}></Route>

        <Route path="/mypage/excel" element={<AddWorkToExcel />}></Route>
        <Route path="/mypage/archive/edit" element={<MyWorkEdit />}></Route>

        {/* 마이페이지 - 갤러리 */}
        <Route path="/mypage/gallery" element={<GalleryProfile />}></Route>
        <Route
          path="/mypage/gallery/wallet"
          element={
            <MyPageGallery active={2}>
              <ArtistWallet />
            </MyPageGallery>
          }
        ></Route>
        <Route
          path="/mypage/gallery/like"
          element={
            <MyPageGallery active={3}>
              <ArtistLike />
            </MyPageGallery>
          }
        ></Route>

        <Route
          path="/mypage/gallery/exhibition"
          element={<ArtistExhibition />}
        ></Route>

        <Route
          path="/mypage/gallery/archive"
          element={<ArtistArchive />}
        ></Route>
        <Route
          path="/mypage/gallery/excel"
          element={<AddWorkToExcel />}
        ></Route>
        <Route
          path="/mypage/gallery/archive/work"
          element={<MyWorkAdd />}
        ></Route>
        <Route
          path="/mypage/gallery/archive/article"
          element={<MyArticleAdd />}
        ></Route>
        <Route
          path="/mypage/gallery/archive/nft"
          element={<MyNftAdd />}
        ></Route>
        <Route
          path="/mypage/gallery/exhibition"
          element={<GalleryExhibition />}
        ></Route>
        <Route path="/mypage/gallery/team" element={<GalleryTeam />}></Route>
        <Route
          path="/mypage/gallery/agency"
          element={<GalleryAgency />}
        ></Route>

        {/* 관리자 페이지  */}
        <Route
          path="/admin/"
          element={
            <AdminMain title={'운영지표'} bm={0} sm={0}>
              <AdminManage />
            </AdminMain>
          }
        ></Route>
        <Route
          path="/admin/main/info"
          element={
            <AdminMain title={'사이트 정보 수정'} bm={0} sm={1}>
              <AdminEdit />
            </AdminMain>
          }
        ></Route>
        <Route
          path="/admin/main/term"
          element={
            <AdminMain title={'약관본문 수정'} bm={0} sm={2}>
              <AdminTerm />
            </AdminMain>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

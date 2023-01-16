import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import SearchHeader from '../../components/SearchHeader/SearchHeader'
import HeaderSmall from '../../components/Header/HeaderSmall/HeaderSmall'
function ArtDatabase(props) {
  const moreList = {
    menu: [
      {
        title: 'Work',
        link: '/artdb',
      },
      {
        title: 'Artist',
        link: '/artdb/artist',
      },
      {
        title: 'Venue',
        link: '/artdb/venue',
      },
    ],
  }
  return (
    <div className="main">
      <Header active="0" colored="black" />
      <SearchHeader title="Art Database" active={props.search} />
      <HeaderSmall
        moreList={moreList}
        active={props.search}
        choice={props.active}
      />
      {props.children}
      <Footer />
    </div>
  )
}
export default ArtDatabase

import React from 'react'
import WorkHeader from '../WorkHeader/WorkHeader'
import './GalleryInfo.css'
function GalleryInfo(props) {
  const gallery_items = imgList => {
    return imgList.map((item, i) => {
      var bg = require('../../' + item.info)
      return (
        <div className="gallery__item">
          <img
            className="gallery__item-image"
            src={require('../../' + item.info)}
          />
          <div
            className="gallery__item-info"
            style={{ order: `${item.order}` }}
          >
            <a href="#">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </a>
          </div>
        </div>
      )
    })
  }
  return (
    <section className="gallery_section">
      <WorkHeader title_e={'News On'} title_k={'새소식'} />
      {gallery_items(props.items)}
    </section>
  )
}
export default GalleryInfo

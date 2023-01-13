import React from 'react'
import './SectionHeader.css'

const SectionHeader = props => {
  return (
    <div className="section-header">
      <h3 className="container section-header-container">{props.title}</h3>
    </div>
  )
}
export default SectionHeader

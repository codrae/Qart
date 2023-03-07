import React from 'react'
import './AdminHeader.css'

const AdminHeader = ({ title }) => {
  return (
    <header className="admin-header">
      <div className="container">
        <h1>{title}</h1>
        <div className="admin-logout">
          <span className="ad-logout-icon"></span>
          <h2>로그아웃</h2>
        </div>
      </div>
    </header>
  )
}
export default AdminHeader

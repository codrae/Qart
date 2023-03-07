import React from 'react'
import AdminHeader from './Header/AdminHeader'
import AdminMenu from './Menu/AdminMenu'
import './AdminMain.css'
const AdminMain = props => {
  return (
    <div className="admin">
      <AdminMenu />
      <div className="content">
        <AdminHeader title={props.title} />
        <div className="container">{props.children}</div>
      </div>
    </div>
  )
}
export default AdminMain

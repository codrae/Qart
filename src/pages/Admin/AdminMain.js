import React from 'react'
import AdminHeader from './Header/AdminHeader'
import AdminMenu from './Menu/AdminMenu'
import './AdminMain.css'
const AdminMain = props => {
  return (
    <div className="admin">
      <AdminMenu bm={props.bm} sm={props.sm} />
      <div className="content">
        <AdminHeader title={props.title} />
        {props.children}
      </div>
    </div>
  )
}
export default AdminMain

import React from 'react'
import {Outlet} from 'react-router-dom';
import SideBar from '../components/Sidebar'

const SidebarLayout = () => {
  return (
    <div className='flex'>
    <SideBar />
    <Outlet />
    </div>
  )
}

export default SidebarLayout

import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

const RootLayout = () => {
  const navigation = useNavigation()
  return (
    <div className='flex h-[100%] text-white'>
        <Sidebar/>
        <div className='flex-[7]'>
            <Header/>
            <div className={`${navigation.state != "idle" ? "opacity-20" : "opacity-100"}`}>
              <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default RootLayout

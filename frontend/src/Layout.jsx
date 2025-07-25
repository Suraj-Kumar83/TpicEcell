import React from 'react'
import  Header from './components/elements/Header.jsx'
import Footer from './components/elements/Footer.jsx'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
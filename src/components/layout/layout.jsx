/* eslint-disable react/prop-types */
import React from 'react'
import VerticalSidebar from '../sidebar'

const Layout = ({ children }) => {
  return (
    <div style={{ display: 'flex' }}>
      <VerticalSidebar />
      <main style={{ flexGrow: 1, padding: '20px' }}>{children}</main>
    </div>
  )
}

export default Layout

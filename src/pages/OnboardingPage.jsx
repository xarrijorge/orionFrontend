import React from 'react'
import { Outlet } from 'react-router-dom'
import Container from '@mui/material/Container'
import { CssBaseline } from '@mui/material'
import  "./OnboardingPage.css"
const OnboardingPage = () => {
  return (
    <div className='Center'>
        {/* <CssBaseline/> */}
        {/* <Container> */}
        <Outlet/>
    {/* </Container> */}

</div>
  )
}

export default OnboardingPage
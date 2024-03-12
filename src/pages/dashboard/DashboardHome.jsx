import React from 'react'
import Stats from '../../components/Dashboard/Stats'
import { Container, Typography, Box } from '@mui/material'
import dashboardPlaceholder from '../../assets/dashboardPlaceholder.png'

const DashboardHome = () => {
  const data = [
    { title: 'Total maintenance request', data: 'Noting to show yet' },
    { title: 'Total open work orders', data: 0 },
    { title: 'Overdue requests', data: 0 },
    { title: 'Total expenses', data: 0 },
  ]
  return (
    <>
      <Stats stats={data} />
      <Container>
        <Typography style={{ color: '#868E96', marginTop: 20 }} variant='h6'>
          Daily recommended maintenance route
        </Typography>
        <Box
          component='img'
          sx={{
            height: 233,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
            marginTop: 10,
          }}
          alt='The house from the offer.'
          src={dashboardPlaceholder}
        />
      </Container>
      <Container>
        <Typography style={{ color: '#868E96', marginTop: 20 }} variant='h5'>
          Property analytics
        </Typography>
        <Box
          component='img'
          sx={{
            height: 233,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
            marginTop: 10,
          }}
          alt='The house from the offer.'
          src={dashboardPlaceholder}
        />
      </Container>
    </>
  )
}

export default DashboardHome

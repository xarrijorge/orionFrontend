import React from 'react'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

const MaintenanceStats = (arr = []) => {
  return (
    <>
<<<<<<< Updated upstream
      <Paper>
        <Grid container xs={12}>
          <Grid xs={3}>
            <Typography variant='subtitle1'>
              Total maintenance request
            </Typography>
            <Typography variant='h6'>Nothing to show yet</Typography>
          </Grid>
          <Grid xs={3}>
            <Typography variant='subtitle1'>
              Total maintenance request
            </Typography>
            <Typography variant='h6'>Nothing to show yet</Typography>
          </Grid>
          <Grid xs={3}>
            <Typography variant='subtitle1'>
              Total maintenance request
            </Typography>
            <Typography variant='h6'>Nothing to show yet</Typography>
          </Grid>
          <Grid xs={3}>
            <Typography variant='subtitle1'>
              Total maintenance request
            </Typography>
            <Typography variant='h6'>Nothing to show yet</Typography>
          </Grid>
        </Grid>
=======
      <Paper
        style={{
          padding: '20px',
          minHeight: '100px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}>
        {arr.map((el, idx) => (
          // eslint-disable-next-line react/jsx-key
          <Grid container xs={12}>
            <Grid xs={3} key={idx}>
              <Typography variant='h5' style={{ color: '#00B286' }}>
                {el.title}
              </Typography>
              <Typography variant='h6' style={{ color: '#868E96' }}>
                {el.subtitle}
              </Typography>
            </Grid>
          </Grid>
        ))}
>>>>>>> Stashed changes
      </Paper>
    </>
  )
}

export default MaintenanceStats

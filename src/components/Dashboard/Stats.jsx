import React from 'react'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

const MaintenanceStats = () => {
  return (
    <>
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
      </Paper>
    </>
  )
}

export default MaintenanceStats

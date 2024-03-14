/* eslint-disable react/prop-types */
import React from 'react'
import { Card, CardContent, Typography, Box, Chip } from '@mui/material'

const TicketComponent = ({ ticketNumber, description, status, date }) => {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='h6' gutterBottom>
            Ticket #{ticketNumber}
          </Typography>
          <Chip label={status} color='success' size='small' />
        </Box>
        <Typography variant='body2' gutterBottom>
          {description}
        </Typography>
        <Box display='flex' justifyContent='space-between' alignItems='center'>
          <Chip label={status} color='success' size='small' />
          <Typography variant='body2'>{date}</Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default TicketComponent

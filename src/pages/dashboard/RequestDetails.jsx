/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { Box, Grid, Typography, Card, CardContent } from '@mui/material'
import TicketComponent from '../../components/Ticket'

const RequestDetails = ({ tickets }) => {
  const [selectedTicket, setSelectedTicket] = useState(tickets[0])

  const handleTicketClick = (e, ticket) => {
    e.preventDefault()
    setSelectedTicket(ticket)
  }

  useEffect(() => {
    if (selectedTicket) {
      console.log('Selected ticket:', selectedTicket)
    }
  }, [selectedTicket])

  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              maxHeight: '50vh',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
            }}>
            {tickets.map((ticket, idx) => (
              <TicketComponent
                key={idx}
                {...ticket}
                handleClick={handleTicketClick}
              />
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant='h6' gutterBottom>
                {selectedTicket.title}
              </Typography>
              <Typography variant='body1' gutterBottom>
                {selectedTicket.description}
              </Typography>
              <Typography variant='body1' gutterBottom>
                Status: {selectedTicket.status}
              </Typography>
              <Typography variant='body1' gutterBottom>
                Date: {selectedTicket.date}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default RequestDetails

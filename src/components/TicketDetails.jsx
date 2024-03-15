/* eslint-disable react/prop-types */
import React from 'react'
import { Box, Button } from '@mui/material'

const TicketDetails = ({ selectedTicket }) => {
  if (!selectedTicket) return null

  // Render detailed information about the selected ticket here
  return (
    <div className='ticket-details'>
      <h2>Ticket Details</h2>
      <p>Ticket Number: {selectedTicket.ticketNumber}</p>
      <p>Description: {selectedTicket.description}</p>
      <p>Status: {selectedTicket.status}</p>
      <p>Date: {selectedTicket.date}</p>
      {/* Add additional details as needed */}
      <footer>
        <Box display='flex'>
          <Button>Schedule inspection</Button>
          <Button>Create work order</Button>
        </Box>
      </footer>
    </div>
  )
}

export default TicketDetails

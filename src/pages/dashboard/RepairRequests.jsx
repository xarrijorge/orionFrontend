/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import UnitsTable from '../../components/UnitTable'
import Box from '@mui/material/Box'

const RepairRequests = () => {
  const dummyData = [
    {
      property: 'The Grove',
      orders: [
        {
          id: 1,
          unitNumber: 'A101',
          request: 'Repair plumbing',
          status: 'Pending',
        },
        {
          id: 2,
          unitNumber: 'B205',
          request: 'Fix electrical issue',
          status: 'In Progress',
        },
        {
          id: 3,
          unitNumber: 'C304',
          request: 'Paint walls',
          status: 'Completed',
        },
        {
          id: 4,
          unitNumber: 'D403',
          request: 'Replace light fixtures',
          status: 'Pending',
        },
        {
          id: 5,
          unitNumber: 'E502',
          request: 'Repair HVAC',
          status: 'Pending',
        },
      ],
    },
  ]

  return (
    <>
      <Box>
        <UnitsTable data={dummyData} />
      </Box>
      <Box>
        <UnitsTable data={dummyData} />
      </Box>
    </>
  )
}

export default RepairRequests

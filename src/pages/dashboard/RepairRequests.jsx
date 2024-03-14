/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import UnitsTable from '../../components/UnitTable'
import Box from '@mui/material/Box'
import ActionNav from '../../components/ActionNav'
import AppsIcon from '@mui/icons-material/Apps'
import List from '@mui/icons-material/List'

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
          title: 'Request title',
        },
        {
          id: 2,
          unitNumber: 'B205',
          request: 'Fix electrical issue',
          status: 'In Progress',
          title: 'Request title',
        },
        {
          id: 3,
          unitNumber: 'C304',
          request: 'Paint walls',
          status: 'Completed',
          title: 'Request title',
        },
        {
          id: 4,
          unitNumber: 'D403',
          request: 'Replace light fixtures',
          status: 'Pending',
          title: 'Request title',
        },
        {
          id: 5,
          unitNumber: 'E502',
          request: 'Repair HVAC',
          status: 'Pending',
          title: 'Request title',
        },
      ],
    },
  ]

  const icons = [<List />, <AppsIcon />]
  return (
    <>
      <ActionNav title='Repair requests' icons={icons} />
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

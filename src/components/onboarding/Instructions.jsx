import React, { useState } from 'react'
import CardContent from '@mui/material/CardContent';
import "./Onboarding.css"
import logo from "../../assets/logo .png"
import Stack from '@mui/material/Stack'; 
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import Item from '@mui/material/Item';

const Instructions = () => {
  return (
    <Stack sx={{ maxWidth: 878 }} variant='outlined' className='card'>
    <CardContent className='Welcome'>
        <img src={logo} alt="logo" />
    </CardContent>

    <CardContent className='Welcome'>
        <p><b className='black'>We're thrilled to have you join our property management platform!</b><br/>
            Before we begin, lets take a moment to introduce you to the onboarding process
        </p>

    </CardContent>
    <Stack direction="row" spacing={2}>
        <Item>
            <Stack spacing={2}>

            </Stack>
        </Item>



    </Stack>

   
</Stack>
  )
}

export default Instructions
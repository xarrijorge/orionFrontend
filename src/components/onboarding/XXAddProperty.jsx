import React from 'react'
import CardContent from '@mui/material/CardContent'
import logo from '../../assets/logo .png'
import indicator from '../../assets/Indicator.svg'
import {
  Box,
  CardActionArea,
  FormControl,
  FormGroup,
  FormControlLabel,
  TextField,
  Button,
} from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'

const AddProperty = () => {
  const navigate = useNavigate()
  // const countries = ['Kenya', 'Botswana', 'Ghana', 'Liberia']
  // const cities = ['Nairobi', 'Gaborone', 'Accra', 'Monrovia']
  // // const [name, setName] = useState('')
  // const [nou, setNou] = useState('')
  // const [address, setAddress] = useState('')
  // const [zipCode, setZipCode] = useState('')
  // const [statee, setStatee] = useState('')
  // const [country, setCountry] = useState(countries[0])
  // const [city, setCity] = useState(countries[0])

  const next = () => {
    navigate('/step_two')
  }

  return (
    <Box className='card addProperty' sx={{ width: '50vw' }}>
      {/* logo image */}
      <CardContent className='Welcome'>
        <img src={logo} alt='logo' />
      </CardContent>
      {/* subtitle content */}
      <CardContent className='Welcome'>
        <h3>Step 1 of 3</h3>
        <p>Some representative placeholder content for the first slide.</p>
        <img src={indicator} className='indi' alt='indicator' />
      </CardContent>
      <CardContent>
        <FormControl
          className='signupform'
          onSubmit={() => {
            next()
          }}>
          <Box display='flex'>
            {/* first content box */}
            <FormGroup>
              <FormControlLabel
                control={
                  <TextField
                    id='outlined-password-input'
                    label='Password'
                    type='password'
                    autoComplete='current-password'
                  />
                }
              />
              <FormControlLabel
                control={
                  <TextField
                    id='outlined-password-input'
                    label='Password'
                    type='password'
                    autoComplete='current-password'
                  />
                }
              />
              <FormControlLabel
                control={
                  <TextField
                    id='outlined-password-input'
                    label='Password'
                    type='password'
                    autoComplete='current-password'
                  />
                }
              />
            </FormGroup>
            <FormGroup>
              <FormControlLabel
                control={
                  <TextField
                    id='outlined-password-input'
                    label='Password'
                    type='password'
                    autoComplete='current-password'
                  />
                }
              />
              <FormControlLabel
                control={
                  <TextField
                    id='outlined-password-input'
                    label='Password'
                    type='password'
                    autoComplete='current-password'
                  />
                }
              />

              <Box display='flex' sx={{ maxWidth: '100%' }}>
                <FormControlLabel
                  control={
                    <TextField
                      id='outlined-password-input'
                      label='Password'
                      type='password'
                      autoComplete='current-password'
                    />
                  }
                />
                <FormControlLabel
                  control={
                    <TextField
                      id='outlined-password-input'
                      label='Password'
                      type='password'
                      autoComplete='current-password'
                    />
                  }
                />
              </Box>
            </FormGroup>

            {/* second content box  */}
          </Box>

          <Button type='submit' className='signup_button' variant='contained'>
            Next
          </Button>
        </FormControl>
      </CardContent>
      <CardActionArea sx={{ textAlign: 'center' }}>
        <Link className='green' to='/dashboard/home'>
          skip{' '}
        </Link>
      </CardActionArea>
    </Box>
  )
}

export default AddProperty

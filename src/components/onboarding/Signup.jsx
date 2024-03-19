/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'
import CardContent from '@mui/material/CardContent'
import './Onboarding.css'
import logo from '../../assets/logo .png'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { Link, useNavigate } from 'react-router-dom'
import { Input } from '@mui/material'

const Signup = () => {
  const navigate = useNavigate()
  const countries = ['Kenya', 'Botswana', 'Ghana', 'Liberia']
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [country, setCountry] = useState(countries[0])
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const signUp = () => {
    navigate('/instructions')
  }

  return (
    <Stack sx={{ maxWidth: 878 }} variant='outlined' className='card'>
      <CardContent className='Welcome'>
        <img src={logo} alt='logo' />
      </CardContent>

      <CardContent className='Welcome'>
        <h3>Welcome to Nyumbafix</h3>
        <p>
          Ready to join the Nyumbafix community?Sign up now to start managing
          your properties and work orders with ease. Let's fix things together!
        </p>
      </CardContent>

      <CardContent>
        <form
          className='signupform'
          onSubmit={() => {
            signUp()
          }}>
          <div className='inputs'>
            <div className='formgroup'>
              <label htmlFor='name'>
                {' '}
                <span className='Red'>*</span>Name
              </label>

              <input
                type='text'
                value={name}
                placeholder='Nairobi Apartments'
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className='formgroup'>
              <label htmlFor='surname'>Surname</label>
              <input
                type='text'
                value={surname}
                placeholder='Surname'
                onChange={(e) => setSurname(e.target.value)}
              />
            </div>

            <div className='formgroup'>
              <label htmlFor='email'>
                {' '}
                <span className='Red'>*</span>Email
              </label>
              <input
                type='email'
                value={email}
                placeholder='Nairobi@gmail.com'
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className='formgroup'>
              <label htmlFor='country'>Country</label>
              <select
                name='country'
                id='country'
                value={country}
                onChange={(e) => setCountry(e.target.value)}>
                {countries.map((countr, index) => {
                  return (
                    <option value={countr} key={index}>
                      {countr}
                    </option>
                  )
                })}
              </select>
            </div>

            <div className='formgroup'>
              <label htmlFor='password'>
                {' '}
                <span className='Red'>*</span>Password
              </label>
              <Input
                type='password'
                value={password}
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <p className='small'>
                Make sure the password is 8 characters minimum
              </p>
            </div>
            <div className='formgroup'>
              <label htmlFor='password'>Confirm Password</label>
              <Input
                type='password'
                value={confirmPassword}
                placeholder='Confirm Password'
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          <Button type='submit' className='signup_button' variant='contained'>
            Sign Up
          </Button>
        </form>
      </CardContent>

      <CardContent>
        <Link className='green' to='/signin'>
          Have an account? Sign in{' '}
        </Link>
      </CardContent>
    </Stack>
  )
}

export default Signup

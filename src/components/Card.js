/* eslint-disable react/prop-types */
// Card.js
import React from 'react';
import CardContent from '@mui/material/CardContent';
import logo from '../assets/logo .png'
import indicator from '../assets/Indicator.svg';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Card = ({ children }) => {
    return (
        <div className='card'>
            <CardContent className='Welcome'>
                <img src={logo} alt='logo' />
            </CardContent>

            <CardContent className='Welcome'>
                {children}
                <img src={indicator} className='indi' alt='indicator' />
            </CardContent>

            <CardContent>
                <form className='signupform'>{children}</form>
                <Button type='submit' className='signup_button' variant='contained'>
                    Next
                </Button>
            </CardContent>

            <CardContent>
                <Link className='green' to='/loading'>
                    skip{' '}
                </Link>
            </CardContent>
        </div>
    );
};

export default Card;

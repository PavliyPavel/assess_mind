import React from 'react'
import './auth-page.css'
import Typography from '@mui/material/Typography';
import { AuthForm } from './auth-form';

export const AuthPage: React.FC = () => {
  return (
    <div className='auth-page'>
      <AuthForm />
    </div>
  )
}

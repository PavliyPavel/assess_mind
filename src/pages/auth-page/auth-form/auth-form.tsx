import React from 'react'
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useForm, Controller, SubmitHandler,useFormState} from 'react-hook-form'
import { ISignInForm } from '../../../interface/ISignInForm';
import { loginValidation, passwordValidation } from './validation';
import './auth-form.css';

export const AuthForm = () => {
  const {handleSubmit, control} = useForm<ISignInForm>();
  const {errors} = useFormState({
      control
  });

 const onSubmit: SubmitHandler<ISignInForm> = (data) => console.log(data);

  return (
    <div className="auth-form"> 
        <Typography variant="h4" component='div'>
          Войдите
        </Typography>
        <Typography variant="subtitle1" gutterBottom={true} className='auth-form__subtitle'>
          Чтобы получить доступ
        </Typography>
        <form className='auth-form__form' onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="login"
          rules={loginValidation}
          render={({field})=>(
              <TextField
              label="Логин"
              size='small'
              margin='normal'
              className='auth-form__input'
              fullWidth={true}
              onChange={(e)=> field.onChange(e)}
              value={field.value}
              error={!!errors.login?.message}
              helperText={errors.login?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          rules={passwordValidation}
          render={({field})=>(
            <TextField
              label="Пароль"
              size='small'
              type='password'
              margin='normal'
              className='auth-form__input'
              fullWidth={true}
              onChange={(e)=> field.onChange(e)}
              value={field.value}
              error={!!errors.password?.message}
              helperText={errors.password?.message}
            />
          )}
        />
          <Button 
            type='submit'
            variant='contained'
            fullWidth={true}
            disableElevation={true}
            sx={{
              marginTop: 2
            }}
          >
            Войти
          </Button>
        </form>
    </div>
  )
}

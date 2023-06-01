import React, { useContext } from 'react'
import { Box, Stack, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useForm, Controller, SubmitHandler,useFormState} from 'react-hook-form'
import { ISignInForm } from '../../../interface/ISignInForm';
import { loginValidation, passwordValidation } from './validation';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../../context/auth-context';
import styles from './style.module.css';

export const AuthForm = () => {
  const {handleSubmit, control} = useForm<ISignInForm>();
  const navigator = useNavigate();
  const context = useContext(AuthContext);
  const {errors} = useFormState({
      control
  });

  const onSubmit: SubmitHandler<ISignInForm> = (data) => console.log(data);
 
  function handleLogin(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    context.isAuth = true;//в куках умоляю
    //TODO: Хранить в куках вошел чел или нет 
    navigator('/')      
  }
 
  return (
    <Stack
      flexGrow={1}
      direction="row" 
      > 
      <Stack
        display="flex"
        sx={{ p: 5 }}
        alignSelf="center"
        alignItems="center"
        textAlign="center"
        width="50%"
      >
        <Typography variant="h4" component='div'>
          Войдите
        </Typography>
        <Typography variant="subtitle1" gutterBottom={true} className={styles['auth-form__subtitle']}>
          Чтобы получить доступ
        </Typography>
        <form className={styles['auth-form__form']} onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="login"
            rules={loginValidation}
            render={({field})=>(
                <TextField
                label="Логин"
                size='small'
                margin='normal'
                className={styles['auth-form__input']}
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
                className={styles['auth-form__input']}
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
            onClick={
              handleLogin
            }
            sx={{
              marginTop: 2
            }}
          >
            Войти
          </Button>
        </form>
      </Stack>
      <Box 
        flexGrow={1}
        className={styles.authPage}
      ></Box>
    </Stack>
  )
}

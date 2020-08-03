import React from 'react';

// @materialui
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import HomeIcon from '@material-ui/icons/Home';
import './Registrasi.css'

export default function Registrasi() {
  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className="paper">
        <Avatar className="avatar">
          <HomeIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Registrasi Posko Pengungsian
        </Typography>
        <form className="form" noValidate>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='nama-posko'
            label='Nama Posko'
            name='nama-posko'
            type='text'
            autoComplete='namappengguna'
            autoFocus
          />

          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='petugas-posko'
            label='Petugas Posko'
            name='betugas-posko'
            type='text'
            autoComplete='petugas-posko'
            autoFocus
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            miltline
            rows={4}
            id='alamat-posko'
            label='Alamat Posko'
            name='text'
            autoComplete='alamat-posko'
            autoFocus
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label='Kata Sandi'
            type='password'
            id='password'
            autoComplete='current-password'
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password2'
            label='Ulangi Kata Sandi'
            type='password'
            id='password2'
            autoComplete='current-password'
          />

          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className="submit"
          >
            Daftar
          </Button>
          <Grid container>
            <Grid item>
              <Link href='#' variant='body2'>
                {'Sudah memiliki akun? login Disini'}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom';
import './login.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import { Grid } from '@mui/material';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { seconds: 0, sidebarOpen: true, headColor: '', showNav: false };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onSubmit() {

    }
    render() {
        return (
            <div className='Container'>
                <div className='Login_Header'>
                    <div className='login_card'>
                        <form className='login_form'>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField fullWidth type='email' label='Username' size='medium' />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth type='password' label='Password' size='medium' />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button fullWidth variant='contained' href="/todo">Login</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;

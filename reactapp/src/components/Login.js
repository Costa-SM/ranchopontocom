import React from 'react';
import SignBox from './SignBox';
import LoginText from './LoginText';
import './Login.css';

class Login extends React.Component {
    render() {
        return (
            <div className="login">
                <SignBox mainText="Entrar"/>
                <LoginText />
            </div>
        );
    }
}

export default Login;
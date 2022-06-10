import React from 'react';
import SignBox from './SignBox';
import './SignUp.css';

class SignUp extends React.Component {
    render() {
        return (
            <div className="sign_up">                    
                <SignBox mainText="Cadastrar"/>
            </div>
        );
    }
}

export default SignUp;
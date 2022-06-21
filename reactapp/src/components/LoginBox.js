import React from 'react';
import axios from 'axios';
import './LoginBox.css';
import bcryptjs from 'bcryptjs';
class LoginBox extends React.Component {    
    
    constructor(props) {
        super(props);
        this.state = {email: '', password: ''};
    }

    isPresent = (email, json) => {
        for(let i = 0; i < json.length; i++){
            if(email === json[i].email)
                return i;
        }

        return false;
    }

    validate = async (email, password, json) => {
        let jsonIndex = this.isPresent(email, json);
        
        console.log()

        if(jsonIndex){
            const response = await bcryptjs.compare(password, json[jsonIndex].password);
            console.log(response);
            return response;
        }
        
        return false;
    }

    fetchData = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/users');
            const json = await response.json();
            
            const validCredentials = await this.validate(this.state.email, this.state.password, json);

            if (validCredentials) {
                this.setState({ text: 'You are logged in' });
            }
            else {
                this.setState({ text: 'Unable to login' });
            }
        }
        catch(e) {
            console.log(e);
        }
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.fetchData();
    }

    render() {
        return(
            <div className='login_box'>
                <h1>{this.props.mainText}</h1>
                <form onSubmit={this.onFormSubmit}>
                    <div className='forms'>
                        <input
                            id='email'
                            type='text'
                            placeholder='Email'
                            value={this.state.email}
                            onChange={e => this.setState({ email: e.target.value })}
                        />

                        <input
                            id='password'
                            type='password'
                            placeholder='Senha'
                            onChange={e => this.setState({ password: e.target.value })}
                        />
                        <button type='submit'>
                            {this.props.mainText}
                        </button>
                    </div>
                </form>
                <p>{this.state.text}</p>
            </div>
        );
    }
}

export default LoginBox;
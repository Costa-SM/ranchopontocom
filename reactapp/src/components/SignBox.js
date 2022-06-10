import React from 'react';
import './SignBox.css';

class SignBox extends React.Component {    
    constructor(props) {
        super(props);
        this.state = { email: '', password: '', text: ''};
    }

    onFormSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch('http://127.0.0.1:8000/core');
        const json = await response.json();

        if (this.state.email === json.email && this.state.password === json.password) {
            this.setState({ text: 'You are logged in' });
        }
        else {
            this.setState({ text: 'Unable to login' });
        }

        const myData = {
            email: this.state.email,
            password: this.state.password
        };
      
        await fetch('http://127.0.0.1:8000/core/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(myData)
        });
    }

    render() {
        return(
            <div className='sign_box'>
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

export default SignBox;
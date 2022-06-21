import React from 'react';
import axios from 'axios';
import './SignBox.css';
import bcrypt from 'bcrypt';

class SignBox extends React.Component {    
    constructor(props) {
        super(props);
        this.state = { email: '', password: '', text: ''};
    }

    validate = async (email, password, json) => {
        for (let i = 0; i < json.length; i++) {
            if (email === json[i].email) {
                await bcrypt.compare(password, json[i].password, function(err, result) {
                    if (err) {
                        throw Error('Unable to compare');
                    }
                    return result;
                });
            }
        }
        return false;
    }

    fetchData = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/users');
            const json = await response.json();
            
            const validCredentials = this.validate(this.state.email, this.state.password, json);

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

    postData = async () => {
        let password;

        await bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(this.state.password, salt, function(err, hash) {
                if (err) {
                    throw Error('Unable to hash');
                }
                password = hash;
            });
        });

        const myData = {
            email: this.state.email,
            password
        };

        try {
            await axios.post('http://127.0.0.1:8000/api/users/', myData);
        } catch(e) {
            console.log(e);
        }
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        if (this.props.mainText === 'Entrar') {
            this.fetchData();
        }
        else {
            this.postData();
        }
      
        // await fetch('http://127.0.0.1:8000/core/', {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(myData)
        // });
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
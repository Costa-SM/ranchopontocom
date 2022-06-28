import React from 'react';
import axios from 'axios';
import './SignBox.css';
import bcryptjs from 'bcryptjs';
class SignBox extends React.Component {    
    constructor(props) {
        super(props);
        this.state = {name: '', email: '', password: '', text: ''};
    }

    isPresent = (email, json) => {
        for(let i = 0; i < json.length; i++){
            if(email === json[i].email)
                return i;
        }

        return false;
    }

    postData = async () => {
       bcryptjs.hash(this.state.password, 10, (err, hash) => {
            if(err) throw Error("Could not hash password.") 

            axios.post('http://127.0.0.1:8000/api/users/', {id: 'a', name: this.state.name, email: this.state.email, password: hash});
        });
    }

    onFormSubmit = async (event) => {
        event.preventDefault();
        this.setState({ text: ''});

        const response = await fetch('http://127.0.0.1:8000/api/users');
        const json = await response.json();

        if(this.isPresent(this.state.email, json)){
            this.setState({ text: 'User already registered'});
            return;
        }

        this.postData();
        this.setState({ text: 'You have been registered!'});
    }

    render() {
        return(
            <div className='sign_box'>
                <h1>{this.props.mainText}</h1>
                <form onSubmit={this.onFormSubmit}>
                    <div className='forms'>
                        <input
                            id='name'
                            type='text'
                            placeholder='Nome'
                            value={this.state.name}
                            onChange={e => this.setState({ name: e.target.value })}
                        />

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
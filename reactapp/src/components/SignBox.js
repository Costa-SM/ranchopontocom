import React from 'react';
import './SignBox.css';

class SignBox extends React.Component {    
    constructor(props) {
        super(props);
        this.state = { email: '', password: ''};
    }

    onFormSubmit = (event) => {
        event.preventDefault();
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
            </div>
        );
    }
}

export default SignBox;
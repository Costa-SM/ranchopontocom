import React, { useState } from 'react';
import './LoginBox.css';
import bcryptjs from 'bcryptjs';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux';
import { setUser } from '../actions';

const LoginBox = (props) => {
    const [state, setMyState] = useState({email: '', password: '', outline: 'solid 1px gray', text: '\xa0'});
    const navigate = useNavigate();

    const isPresent = (email, json) => {
        for (let i = 0; i < json.length; i++) {
            if(email === json[i].email)
                return i;
        }
    
        return false;
    }
    
    const validate = async (email, password, json) => {
        let jsonIndex = isPresent(email, json);
        
        console.log()
    
        if(jsonIndex){
            const response = await bcryptjs.compare(password, json[jsonIndex].password);
            console.log(response);
            return response;
        }
        
        return false;
    }
    
    const fetchData = async () => {
        setMyState({email: '', password: '', outline: 'solid 1px gray', text: '\xa0'});
    
        try {
            const response = await fetch('http://127.0.0.1:8000/api/users');
            const json = await response.json();
            
            const validCredentials = await validate(state.email, state.password, json);
    
            if (validCredentials) {
                props.setUser(state.email);
                setMyState({ text: 'Logging in...' });
                navigate('/');
            }
            else {
                setMyState({email: '', password: '', outline: 'solid 1px red', text: '\xa0'});
            }
        }
        catch(e) {
            console.log(e);
        }
    }
    
    const onFormSubmit = (event) => {
        event.preventDefault();
        fetchData();
    }

    return(
        <div className='login_box'>
            <h1>{props.mainText}</h1>
            <form onSubmit={onFormSubmit}>
                <div className='forms'>
                    <input
                        id='email'
                        type='text'
                        placeholder='Email'
                        value={state.email || ''}
                        onChange={e => setMyState({ email: e.target.value, password: '', outline: 'solid 1px gray', text: '\xa0'})}
                        style={{outline: state.outline}}
                    />                       

                    <input
                        id='password'
                        type='password'
                        placeholder='Senha'
                        onChange={e => setMyState({ email: state.email, password: e.target.value, outline: 'solid 1px gray', text: '\xa0' })}
                        style={{outline: state.outline}}
                    />

                    <button type='submit'>
                        {props.mainText}
                    </button>
                    <small style={{color: 'gray'}}>{state.text}</small>
                </div>
            </form>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { currentUser: state.currentUser};
};

export default connect(mapStateToProps, { setUser })(LoginBox);
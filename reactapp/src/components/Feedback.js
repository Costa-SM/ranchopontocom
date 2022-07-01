import React from 'react';
import axios from 'axios';
import HeadBar from './HeadBar';
import NavBar from './NavBar';
import Footer from './Footer';
import Fade from 'react-reveal/Fade';
import './Feedback.css';

class Feedback extends React.Component {
    state = {text: ''};

    onFormSubmit = async (event) => {
        event.preventDefault();
        this.setState({ text: ''});

        axios.post('http://127.0.0.1:8000/api/feedbacks/', {message: this.state.text});
    }

    render() {
        return (
            <div className="feedback">
                <HeadBar/>
                <NavBar/>
                <Fade clear>
                    <div className="feedback_container">
                        <div className="feedback_background">
                            Feedback
                            <form onSubmit={this.onFormSubmit}>
                                <textarea
                                    id='comment'
                                    type='text'
                                    placeholder='Digite aqui seu comentário'
                                    value={this.state.text}
                                    onChange={e => this.setState({ text: e.target.value })}
                                />
                            </form>
                        </div>             
                    </div>
                </Fade>
                <Footer/>
            </div>
        );
    }
}

export default Feedback;
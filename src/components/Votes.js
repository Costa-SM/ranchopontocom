import React from 'react';
import VoteItem from './VoteItem';
import Fade from 'react-reveal/Fade';
import HeadBar from './HeadBar';
import NavBar from './NavBar';
import Footer from './Footer';
import './Votes.css';

import moqueca from '../images/moqueca.jpg'
import nuggets from '../images/nuggets.jpg'

class Votes extends React.Component {
    render() {
        return (
            <div className="poll">
                <HeadBar/>
                <NavBar/>
                <Fade clear>
                    <VoteItem voteTotal="15" itemImage={moqueca} itemName="Moqueca"/>
                    <VoteItem voteTotal="999" itemImage={nuggets} itemName="Chinelão"/>
                </Fade>
                <Footer/>
            </div>
        );
    }
}

export default Votes;
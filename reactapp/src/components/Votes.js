import React from 'react';
import VoteItem from './VoteItem';
import Fade from 'react-reveal/Fade';
import HeadBar from './HeadBar';
import NavBar from './NavBar';
import Footer from './Footer';
import axios from 'axios';
import { connect } from 'react-redux';
import './Votes.css';

class Votes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {item1Name: '', item2Name: '', url1: '', url2: '', vote1Quantity: null, vote2Quantity: null, voteUsers: [], id: null};
    }
    
    fetchData = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/vote');
            const json = await response.json();

            this.setState({
                item1Name: json[0].item1_name,
                item2Name: json[0].item2_name,
                url1: json[0].url1,
                url2: json[0].url2,
                vote1Quantity: json[0].vote_quantity_1,
                vote2Quantity: json[0].vote_quantity_2,
                voteUsers: json[0].vote_users["users"],
                id: json[0].id
            });
        }
        catch (e) {
            console.log(e);
        }
    }

    postData = async (id) => {
        const data = {
            item1_name: this.state.item1Name,
            item2_name: this.state.item2Name,
            url1: this.state.url1,
            url2: this.state.url2,
            vote_quantity_1: this.state.vote1Quantity + id === 1 ? 1 : 0,
            vote_quantity_2: this.state.vote2Quantity + id === 2 ? 1 : 0,
            vote_users: { users: [...this.state.voteUsers, this.props.currentUser] },
            id: this.state.id
        };

        this.setState({ 
            voteUsers: [...this.state.voteUsers, this.props.currentUser],
            vote1Quantity: this.state.vote1Quantity + id === 1 ? 1 : 0,
            vote2Quantity: this.state.vote2Quantity + id === 2 ? 1 : 0
        });

        try {
            await axios.put(`http://127.0.0.1:8000/api/vote/${this.state.id}/`, data);
            await this.fetchData();
        }
        catch(e) {
            console.log(e);
        }
    }
    
    componentDidMount () {
        this.fetchData();
    }

    render() {
        return (
            <div className="poll">
                <HeadBar/>
                <NavBar/>
                <Fade clear>
                    <VoteItem postUser={this.postData} voteQuantity={this.state.vote1Quantity} itemUrl={this.state.url1} itemName={this.state.item1Name} id={1}/>
                    <VoteItem postUser={this.postData} voteQuantity={this.state.vote2Quantity} itemUrl={this.state.url2} itemName={this.state.item2Name} id={2}/>
                </Fade>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { currentUser: state.currentUser};
};

export default connect(mapStateToProps)(Votes);
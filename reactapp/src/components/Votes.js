import React from 'react';
import VoteItem from './VoteItem';
import Fade from 'react-reveal/Fade';
import HeadBar from './HeadBar';
import NavBar from './NavBar';
import Footer from './Footer';
import './Votes.css';

class Votes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {itemName: [], url: [], voteQuantity: [], voteUsers: []};
    }
    
    fetchData = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/vote');
            const json = await response.json();
            
            let itemName = [];
            let url = [];
            let voteQuantity = [];
            let voteUsers = [];

            for (let i = 0; i < json.length; i++) {
                itemName = itemName.concat(json[i].item_name);
                url = url.concat(json[i].url);
                voteQuantity = voteQuantity.concat(json[i].vote_quantity);
                voteUsers = voteUsers.concat(json[i].vote_users);
                
            }

            this.setState({
                itemName: itemName,
                url: url,
                voteQuantity: voteQuantity,
                voteUsers: voteUsers
            });
        }
        catch (e) {
            console.log(e);
        }
    }
    
    componentDidMount () {
        this.fetchData();
    
        console.log(this.state.voteUsers[0])
    }

    render() {
        return (
            <div className="poll">
                <HeadBar/>
                <NavBar/>
                <Fade clear>
                    <VoteItem voteTotal={this.state.voteQuantity[0]} itemImage={this.state.url[0]} itemName={this.state.itemName[0]} voteQuantity={this.state.voteQuantity[0]}/>
                    <VoteItem voteTotal={this.state.voteQuantity[1]} itemImage={this.state.url[1]} itemName={this.state.itemName[1]} voteQuantity={this.state.voteQuantity[1]}/>
                </Fade>
                <Footer/>
            </div>
        );
    }
}

export default Votes;
import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import { connect } from 'react-redux';
import './VoteItem.css';

class VoteItem extends React.Component {
    state = { active: false, validUser: false };

    changeState = (state) => {
        if (!this.state.active === state) {
            this.setState({ active: state });
        }
    }

    fetchUsers = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/vote');
            const json = await response.json();
            return json.vote_users.users;
        }
        catch (e) {
            console.log(e);
        }
    }

    onVoteClick = () => {
        if (this.state.validUser) this.props.postUser(this.props.id);
    }

    checkValidVoter = async () => {
        if (this.props.currentUser === null) { 
            this.setState({ validUser: false });
        };
        const userArray = await this.fetchUsers();
        for (let i = 0; i < userArray.length; i++) {
            if (this.props.currentUser === userArray[i]) {
                this.setState({ validUser: false });
            }
        }
        this.setState({ validUser: true });
    }
    

    render() {
        const Item = styled.div`
        /* background-color is value of props.color */
        background-color: white;
        color: white;
        font-size: 1.5em;
        box-shadow: 0 2px 5px rgb(0 0 0 / 15%);
        width: 100%;
        max-width: 100%;
        height: 400px;
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        justify-items: center;
        align-items: center;
        background: url(${props => props.url}) center;
        background-size: cover;
        margin-top: 2px;
        border-radius: 0px;
        background-position: (50%, 30%);

        &:hover{
            background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${props => props.url}) center;
            background-size: cover;
            background-position: (50%, 30%);
        }`;

        const VoteButton = styled.div`        
        font-size: 2.5em;
        font-weight: bolder;
        filter: brightness(${props => props.validUser() ? '100%': '30%'});
        transition-duration: 0.4s;
        transform: scale(1);           

        &:hover{
            transition-duration: 0.4s;
            transform: scale(${props => props.validUser() ? 2 : 1});
            cursor: pointer;
        }`;

        return (
            <Item url={this.props.itemUrl} onMouseEnter={() => this.changeState(true)} onMouseLeave={() => this.changeState(false)} validUser={this.checkValidVoter}>
                <div className='item_name'>{this.props.itemName}</div>
                <VoteButton validUser={this.checkValidVoter} onClick={this.onVoteClick}>
                    <Fade top collapse when={this.state.active}>
                        Votar
                    </Fade>
                </VoteButton>
                <div className='item_name'>{this.props.voteQuantity}</div>
            </Item>
        );
    }
}

const mapStateToProps = (state) => {
    return { currentUser: state.currentUser};
};

export default connect(mapStateToProps)(VoteItem);
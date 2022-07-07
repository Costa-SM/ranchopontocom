import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import './VoteItem.css';

class VoteItem extends React.Component {
    constructor(props){
        super(props);
        this.voteUsers = [];
    };
    
    fetchData = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/vote');
            const json = await response.json();

            for (let i = 0; i < json.length; i++) {
                if(this.props.itemName === json[i].item_name){
                    this.voteUsers = this.voteUsers.concat(json[i].vote_users);
                }
            }
        
            console.log(this.voteUsers)
        }
        catch (e) {
            console.log(e);
        }
    }

    postData = async () => {
        try {
            axios.put('http://127.0.0.1:8000/api/vote'.concat(this.name));
        }
        catch (e){
            console.log(e);
        }
    }

    voteOnItem = () => {
        this.fetchData();
        //this.postData();
    };

    render() {
        const Item = styled.button`
        /* background-color is value of props.color */
        background-color: white;
        color: white;
        font-size: 1.5em;
        box-shadow: 0 2px 5px rgb(0 0 0 / 15%);
        width: 100%;
        max-width: 100%;
        height: 400px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: url(${props => props.url}) center;
        background-size: cover;
        margin-top: 2px;
        border-radius: 0px;
        background-position: 50% 30%;

        &:hover{
            transition-duration: 0.2s;
            filter: brightness(60%);
        }`;
        
        return (
            <Item onClick={this.voteOnItem} url={this.props.itemImage}>
                <div className='item_name'>{this.props.itemName}</div>
                <div className='item_name'>{this.props.voteQuantity}</div>
            </Item>
        );
    }
}

export default VoteItem;
import React from 'react';
import './VoteItem.css';

class VoteItem extends React.Component {
    render() {
        return (
            <div className="vote_item">
                <div className="item_name">
                    {this.props.itemName}
                </div>

                <div className="item_image">
                    <img src={this.props.itemImage} alt="Image"/>
                </div>
                
                <div className="vote_total">
                    {this.props.voteTotal}
                </div>
            </div>
        );
    }
}

export default VoteItem;
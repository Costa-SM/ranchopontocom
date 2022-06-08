import React from 'react';

class NavItem extends React.Component {
    render() {
        return (
            <div className="nav_item">
                {this.props.itemName}
            </div>
        );
    }
}

export default NavItem;
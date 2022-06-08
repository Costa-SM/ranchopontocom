import React from 'react';
import NavItem from './NavItem';
import './NavBar.css';

class NavBar extends React.Component {
    render() {
        return (
            <div className="nav_bar">
                <NavItem itemName="Cardápio Semanal"/>
                <NavItem itemName="Votação Semanal"/>
                <NavItem itemName="Notícias"/>
                <NavItem itemName="Login"/>
            </div>
        );
    }
}

export default NavBar;
import React from 'react';
import NavItem from './NavItem';
import './NavBar.css';

class NavBar extends React.Component {
    render() {
        return (
            <div className="nav_bar">
                <div className="additional_element"></div>
                <div className="menu_section">
                    <NavItem itemName="Cardápio Semanal"/>
                    <NavItem itemName="Votação Semanal"/>
                    <NavItem itemName="Notícias"/>
                </div>
                <div className="login_section">
                    <NavItem itemName="Entrar"/>
                    <NavItem itemName="Cadastrar"/>
                </div>
            </div>
        );
    }
}

export default NavBar;
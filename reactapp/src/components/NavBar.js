import React from 'react';
import { Link } from "react-router-dom";
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
                    <NavItem itemName="Feedback"/>
                </div>
                <div className="login_section">
                    <Link to='/login'>
                        <NavItem itemName="Entrar"/>
                    </Link>
                    <Link to='/signup'>
                        <NavItem itemName="Cadastrar"/>
                    </Link>
                </div>
            </div>
        );
    }
}

export default NavBar;
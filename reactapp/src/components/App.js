import React from 'react';
import HeadBar from './HeadBar';
import NavBar from './NavBar';
import MainContent from './MainContent';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <HeadBar />
                <NavBar /> 
                <MainContent/>
            </div>
        );
    }
}

export default App;

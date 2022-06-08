import React from 'react';
import NavBar from './NavBar';
import HeadBar from './HeadBar';
import './App.css'

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <HeadBar/>
                <NavBar />
                Hello World!
            </div>
        );
    }
}

export default App;

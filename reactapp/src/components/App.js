import React from 'react';
import HeadBar from './HeadBar';
import './App.css'

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <HeadBar/>
                Hello World!
            </div>
        );
    }
}

export default App;

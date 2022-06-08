import React from 'react';
import WeekItem from './WeekItem';
import './MainContent.css';

class MainContent extends React.Component {
    render() {
        return (
            <div className="main_content">
                <WeekItem weekDay="SEGUNDA" monthDay="6 JUN"/>
                <WeekItem weekDay="TERÇA" monthDay="7 JUN"/>
                <WeekItem weekDay="QUARTA" monthDay="8 JUN"/>
                <WeekItem weekDay="QUINTA" monthDay="9 JUN"/>
                <WeekItem weekDay="SEXTA" monthDay="10 JUN"/>
                <WeekItem weekDay="SÁBADO" monthDay="11 JUN"/>
                <WeekItem weekDay="DOMINGO" monthDay="12 JUN"/>
            </div>
        );
    }
}

export default MainContent;
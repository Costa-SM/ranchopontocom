import React from 'react';
import WeekItem from './WeekItem';
import Fade from 'react-reveal/Fade';
import './MainContent.css';

class MainContent extends React.Component {
    render() {
        return (
            <div className="main_content">
                <Fade clear>
                    <WeekItem weekDay="SEGUNDA" monthDay="6 JUN" url="https://upload.wikimedia.org/wikipedia/commons/6/6b/Moqueca.jpg"/>
                    <WeekItem weekDay="TERÇA" monthDay="7 JUN" url="http://s2.glbimg.com/gl5oRhx58Ze3TBxM5hCRfT2M9us=/780x440/e.glbimg.com/og/ed/f/original/2017/06/19/feijao-porco.jpg"/>
                    <WeekItem weekDay="QUARTA" monthDay="8 JUN"/>
                    <WeekItem weekDay="QUINTA" monthDay="9 JUN"/>
                    <WeekItem weekDay="SEXTA" monthDay="10 JUN"/>
                    <WeekItem weekDay="SÁBADO" monthDay="11 JUN"/>
                    <WeekItem weekDay="DOMINGO" monthDay="12 JUN"/>
                </Fade>                
            </div>
        );
    }
}

export default MainContent;
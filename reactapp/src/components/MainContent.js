import React from 'react';
import WeekItem from './WeekItem';
import Bounce from 'react-reveal/Bounce';
import './MainContent.css';

class MainContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {weekDay: [], monthDay: [], breakfest: [], lunch: [], dinner: [], url: []};
    }

    fetchData = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/menu');
            const json = await response.json();

            for (var i = 0; i < json.lenght(); i++) {
                this.state.weekDay.append(json[i].weekDay);
                this.state.monthDay.append(json[i].monthDay);
                this.state.breakfest.append(json[i].breakfest);
                this.state.lunch.append(json[i].lunch);
                this.state.dinner.append(json[i].dinner);
                this.state.url.append(json[i].url);
            } 
        }
        catch (e) {
            console.log(e);
        }
    }

    componentDidMount () {
        this.fetchData();
    }

    render () {
        return (
            <div className="main_content">
                <Bounce left>
                    <WeekItem weekDay={this.state.weekDay[0]} monthDay={this.state.monthDay[0]} breakfest={this.state.breakfest[0]} lunch={this.state.lunch[0]} dinner={this.state.dinner[0]} url={this.state.url[0]}/>
                    <WeekItem weekDay={this.state.weekDay[1]} monthDay={this.state.monthDay[1]} breakfest={this.state.breakfest[1]} lunch={this.state.lunch[1]} dinner={this.state.dinner[1]} url={this.state.url[1]}/>
                    <WeekItem weekDay={this.state.weekDay[2]} monthDay={this.state.monthDay[2]} breakfest={this.state.breakfest[2]} lunch={this.state.lunch[2]} dinner={this.state.dinner[2]} url={this.state.url[2]}/>
                    <WeekItem weekDay={this.state.weekDay[3]} monthDay={this.state.monthDay[3]} breakfest={this.state.breakfest[3]} lunch={this.state.lunch[3]} dinner={this.state.dinner[3]} url={this.state.url[3]}/>
                    <WeekItem weekDay={this.state.weekDay[4]} monthDay={this.state.monthDay[4]} breakfest={this.state.breakfest[4]} lunch={this.state.lunch[4]} dinner={this.state.dinner[4]} url={this.state.url[4]}/>
                    <WeekItem weekDay={this.state.weekDay[5]} monthDay={this.state.monthDay[5]} breakfest={this.state.breakfest[5]} lunch={this.state.lunch[5]} dinner={this.state.dinner[5]} url={this.state.url[5]}/>
                    <WeekItem weekDay={this.state.weekDay[6]} monthDay={this.state.monthDay[6]} breakfest={this.state.breakfest[6]} lunch={this.state.lunch[6]} dinner={this.state.dinner[6]} url={this.state.url[6]}/>
                </Bounce>                
            </div>
        );
    }
}

export default MainContent;
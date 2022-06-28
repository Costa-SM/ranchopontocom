import React from 'react';
import WeekItem from './WeekItem';
import Bounce from 'react-reveal/Bounce';
import './MainContent.css';

class MainContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {weekDay: [], monthDay: [], breakfast: [], lunch: [], dinner: [], url: []};
    }

    fetchData = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/menus');
            const json = await response.json();
            

            for (let i = 0; i < json.length; i++) {
                this.setState({
                    weekDay: [...this.state.weekDay, json[i].week_day],
                    monthDay: [...this.state.monthDay, json[i].month_day],
                    breakfast: [...this.state.breakfast, json[i].breakfast],
                    lunch: [...this.state.lunch, json[i].lunch],
                    dinner: [...this.state.dinner, json[i].dinner],
                    url: [...this.state.url, json[i].url]
                });
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
                    <WeekItem weekDay={this.state.weekDay[0]} monthDay={this.state.monthDay[0]} breakfast={this.state.breakfast[0]} lunch={this.state.lunch[0]} dinner={this.state.dinner[0]} url={this.state.url[0]}/>
                    <WeekItem weekDay={this.state.weekDay[0]} monthDay={this.state.monthDay[0]} breakfast={this.state.breakfast[0]} lunch={this.state.lunch[0]} dinner={this.state.dinner[0]} url={this.state.url[1]}/>
                </Bounce>                
            </div>
        );
    }
}

export default MainContent;

// <WeekItem weekDay={this.state.weekDay[1]} monthDay={this.state.monthDay[1]} breakfast={this.state.breakfast[1]} lunch={this.state.lunch[1]} dinner={this.state.dinner[1]} url={this.state.url[1]}/>
  //                  <WeekItem weekDay={this.state.weekDay[2]} monthDay={this.state.monthDay[2]} breakfast={this.state.breakfast[2]} lunch={this.state.lunch[2]} dinner={this.state.dinner[2]} url={this.state.url[2]}/>
   //                 <WeekItem weekDay={this.state.weekDay[3]} monthDay={this.state.monthDay[3]} breakfast={this.state.breakfast[3]} lunch={this.state.lunch[3]} dinner={this.state.dinner[3]} url={this.state.url[3]}/>
    //                <WeekItem weekDay={this.state.weekDay[4]} monthDay={this.state.monthDay[4]} breakfast={this.state.breakfast[4]} lunch={this.state.lunch[4]} dinner={this.state.dinner[4]} url={this.state.url[4]}/>
     //               <WeekItem weekDay={this.state.weekDay[5]} monthDay={this.state.monthDay[5]} breakfast={this.state.breakfast[5]} lunch={this.state.lunch[5]} dinner={this.state.dinner[5]} url={this.state.url[5]}/>
      //              <WeekItem weekDay={this.state.weekDay[6]} monthDay={this.state.monthDay[6]} breakfast={this.state.breakfast[6]} lunch={this.state.lunch[6]} dinner={this.state.dinner[6]} url={this.state.url[6]}/>
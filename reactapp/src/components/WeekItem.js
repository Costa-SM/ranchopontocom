import React from 'react';
import './WeekItem.css'

class WeekItem extends React.Component {
    render() {
        return (
            <div className="week_item">
                <div className="week_day">
                    {this.props.weekDay}
                </div>
                <div className="month_day">
                    {this.props.monthDay}
                </div>
            </div>
        );
    }
}

export default WeekItem;
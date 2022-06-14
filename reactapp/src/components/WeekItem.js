import React from 'react';
import styled from 'styled-components';
import './WeekItem.css'

class WeekItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const Item = styled.div`
        /* background-color is value of props.color */
        background-color: white;
        color: white;
        font-weight: 500;
        padding: 10px;
        margin: auto;
        margin-bottom: 20px;
        margin-top: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgb(0 0 0 / 15%);
        width: 65vw;
        max-width: 880px;
        height: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: url(${props => props.url}) center;
        background-size: cover;
    `;
        return (
            <Item url={this.props.url}>
                <div className="week_day">
                    {this.props.weekDay}
                </div>
                <div className="month_day">
                    {this.props.monthDay}
                </div>
            </Item>
        );
    }
}

export default WeekItem;
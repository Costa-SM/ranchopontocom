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
        font-size: 1.5em;
        padding: 10px;
        box-shadow: 0 2px 5px rgb(0 0 0 / 15%);
        width: 100%;
        max-width: 100%;
        height: 200px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: url(${props => props.url}) center;
        background-size: cover;

        &:hover{
            transition-duration: 0.2s;
            filter: brightness(80%);
        }
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
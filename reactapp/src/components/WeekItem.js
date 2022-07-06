import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import './WeekItem.css'

class WeekItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { active: false };

        const itemSel = document.getElementById(`${this.props.item}`);

        // itemSel.addEventListener('click', () => {
        //     console.log('hey');
        // });

    }

    setActive = () => {
        this.props.dropMenu(this.props.item);
        this.setState({ active: !this.state.active });
    }

    render() {

        const Item = styled.div`
        /* background-color is value of props.color */
        background-color: white;
        cursor: pointer;
        color: white;
        font-size: 1.5em;
        padding: 10px;
        box-shadow: 0 2px 5px rgb(0 0 0 / 15%);
        width: 100 vw;
        max-width: 100 vw;
        height: 200px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: url(${props => props.url}) center;
        background-size: cover;
        margin-top: 2px;

        Item:hover{
            transition-duration: 0.2s;
            filter: brightness(80%);
        }
        `;

        const Dropdown = styled.div`
        /* display: ${() => {
            if (this.state.active) {
                return 'block';
            }
            return 'none';
        }}; */
        z-index: 10;
        height: 300px;
        background-color: blue;
        transition: 2s ease-in-out;
        opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
        top: ${( isOpen ) => (isOpen ? '0' : '-100%')};
        `;
    
        return (
            <React.Fragment>
                <Item url={this.props.url} onClick={this.setActive} id={this.props.item}>
                    <div className="week_day">
                        {this.props.weekDay}
                    </div>
                    <div className="month_day">
                        {this.props.monthDay}
                    </div>
                </Item>                
                <Dropdown isOpen={this.state.active}>
                    Hey
                </Dropdown>
            </React.Fragment>
        );
    }
}

export default WeekItem;
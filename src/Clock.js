import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
   state = {
        date: new Date(),
       };

    tick = () => {
        this.setState({date: new Date()});
    }

    componentDidMount(){
       this.timerID = setInterval(() => this.tick(), 1000);
    }
   
    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    
    render(){
      const { timezone, name, id } = this.props;
      const seconds = (this.state.date.getUTCSeconds() + (timezone * 3600))* 6;
      const hours = (this.state.date.getUTCHours() + timezone)* 30;
      const minutes = (this.state.date.getUTCMinutes() + (timezone * 60))* 6;

      return(
        <div className="clock__box">
          <h4>{name}</h4>
          <button onClick={() => this.props.removeClock(id)} className="clock__close">✕</button>
          <div className="clock__face">
            <div className="clock__hour-hand" style={{transform: `translate(-50%) rotate(${hours}deg)`}}></div>
            <div className="clock__minute-hand" style={{transform: `translate(-50%) rotate(${minutes}deg)`}}></div>
            <div className="clock__second-hand" style={{transform: `translate(-50%) rotate(${seconds}deg)`}}></div>
          </div>
        </div>
      );
    }
}

Clock.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    timezone: PropTypes.number,
    removeClock: PropTypes.func,
    };

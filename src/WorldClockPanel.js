import React from 'react';
import { AddClock } from './AddClock';
import { Clock } from './Clock';

export class WorldClockPanel extends React.Component {
    state = {
        clocks: [],
    };

    handleAdd = clock => {
        this.setState({clocks:[...this.state.clocks, clock]});
    }
    removeClock = id => {
        this.setState({clocks:this.state.clocks.filter(clock => clock.id !== id)});
    }

    render(){
        return(
             <>
              <AddClock onAdd={this.handleAdd} />
              <div className="clocks">{this.state.clocks.map(clock =>
                  <Clock key={clock.id} {...clock} removeClock={this.removeClock} />)}
              </div>
             </>
        );
    }
}

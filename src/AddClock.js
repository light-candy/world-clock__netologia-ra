import React from 'react';
import PropTypes from 'prop-types';
import ClockModel from './ClockModel';
import { nanoid } from 'nanoid';


export class AddClock extends React.Component {
    state = {
        name:"",
        timezone:"UTC+00:00",
    };

    handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]:value});
    }

    handleSubmit = event => {
        event.preventDefault();
        const offsetHour = parseInt(this.state.timezone.slice(3,6));
        const offsetMin = parseInt(this.state.timezone.slice(7,9))/60;
        const clock = new ClockModel(nanoid(), this.state.name, offsetHour + offsetMin);
        this.props.onAdd(clock);
        this.setState({name:"", timezone:"UTC+00:00"});
    }
    render(){
        return(
            <form className="form" onSubmit={this.handleSubmit}>
              <div className="form__item">
                <label htmlFor="name">Название</label>
                <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange}/>
              </div>
              <div className="form__item">
                <label htmlFor="timezone">Временная зона</label>
                <input type="text" id="timezone" name="timezone" value={this.state.timezone} onChange={this.handleChange}/>
              </div>
              <input type="submit" value="Добавить" />
            </form>
        );
    }
}

AddClock.propTypes = {
    onAdd: PropTypes.func,
}

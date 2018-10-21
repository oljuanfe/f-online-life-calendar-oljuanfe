import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Calendar extends Component {
  render() {
    const {
      data,
    } = this.props;
    return (
      <div className="Calendar">
        <Link to={'/edit/'} className="add-button">
          <button className="add-button">
            +
          </button>
        </Link>
        <ul className="calendar-list">
          {
            data.map((dayData,index) => {
              return (
                <Link 
                  to={`/${index}`} 
                  key={index}
                  className="calendar-day"
                >
                  <li key={index}>
                  <img src={require(`../images/${dayData.checkboxValue}.png`)} alt={dayData.checkboxValue}/>
                </li>
                </Link>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default Calendar;

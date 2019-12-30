import React, { Component } from 'react';
import moment from 'moment';
import './App.css';
import Navbar from './components/Navbar.js';
import CardContainer from './components/CardContainer.js';
import { API_KEY } from './key.js';

class App extends Component {
  state = {
    photo: '',
    date: moment().toDate()
  };

  componentDidMount() {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(json => this.setState({ photo: json }));
  }

  setPhoto = date => {
    fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=${API_KEY}`)
      .then(response => response.json())
      .then(json => this.setState({ photo: json }));
  };

  viewPhoto = photo => {
    this.setState({
      photo: photo,
      date: moment(photo.date.toDate(), 'YYYY-MM-DD')
    });
  };

  formatDate = date => {
    if (date) {
      let month = moment(date).month() + 1;
      let day = moment(date).date();
      let year = moment(date).year();
      return `${year}-${month}-${day}`;
    }
  };

  handleChange = date => {
    this.setState({ date: date });
    this.setPhoto(this.formatDate(date));
  };

  render() {
    return (
      <div>
        <Navbar
          setPhoto={this.setPhoto}
          photo={this.state.photo}
          date={this.state.date}
          handleChange={this.handleChange}
          handleClick={this.handleClick}
        />
        <CardContainer setPhoto={this.setPhoto} photo={this.state.photo} />
      </div>
    );
  }
}

export default App;

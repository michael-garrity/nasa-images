import React, { Component } from 'react';
import { Menu, Header } from 'semantic-ui-react';

import DateInput from './DateInput.js';

export default class Navbar extends Component {
  render() {
    return (
      <Menu>
        <div className='nav'>
          <Menu.Item>
            <Header as='h1' block>
              <i className='fas fa-user-astronaut'></i> Astronomy Picture of the
              Day
            </Header>
          </Menu.Item>
          <Menu.Item>
            <DateInput
              photo={this.props.photo}
              setPhoto={this.props.setPhoto}
              date={this.props.date}
              handleClick={this.props.handleClick}
              handleChange={this.props.handleChange}
            />
          </Menu.Item>
        </div>
      </Menu>
    );
  }
}

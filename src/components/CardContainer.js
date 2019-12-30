import React, { Component } from 'react';

import Card from './Card.js';

class CardContainer extends Component {
  render() {
    return (
      <div className='card-container'>
        <Card className='card' photo={this.props.photo} />
      </div>
    );
  }
}

export default CardContainer;

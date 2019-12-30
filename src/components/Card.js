import React from 'react';
import { Segment, Image, Header } from 'semantic-ui-react';
import ReactPlayer from 'react-player';

const Card = props => (
  <div className='card'>
    <Segment.Group horizontal>
      <Segment compact>
        <Header as='h2' textAlign='center'>
          <div className='title-date'>
            <h3>{props.photo.title}</h3>
            <h4>{props.photo.date}</h4>
          </div>
        </Header>
      </Segment>
    </Segment.Group>
    <Segment>
      {props.photo.media_type === 'image' ? (
        <Image alt={props.photo.title} src={props.photo.hdurl} centered />
      ) : null}
    </Segment>
    <Segment>
      {props.photo.media_type === 'video' ? (
        <div className='video-wrapper'>
          <ReactPlayer url={props.photo.url} width='100%' controls='true' />
        </div>
      ) : null}
    </Segment>
    {props.copyright ? 'Credit: ' : null} {props.copyright}
    <Segment secondary>
      <p>{props.photo.explanation}</p>
    </Segment>
  </div>
);

export default Card;

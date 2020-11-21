import React from 'react';
import Register from './Register';
import bg from '../../assets/img/bg.jpg';
import './picture.css';
import { Container } from 'reactstrap';
import Log from '../Showcase/Log';


function Picture(props) {
  return (
    <div className="body">
      <Container className="d-flex">
        <Log history={props.history} />
      </Container>
    </div>
  );
}

export default Picture;

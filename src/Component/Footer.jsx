import React from 'react';
import './Footer.css';

const Footer = (props) => {


  
  return (
    <div>
      <div className="card-footer bg-transparent border-success">
        <div className="first button btn btn-dark">
          <a href="/logout">Logout</a>
        </div>
        <div onClick={() => props.setPrevQuestion()} className="second button btn btn-dark">Prev</div>
        <div onClick={() => props.setNextQuestion()} className="button btn btn-success" id="next">
          Next
        </div>
        <div
          className="button btn btn-warning"
          id="prev"
          style={{ display: 'none' }}
        >
          <a href="#">Prev</a>
        </div>
        {/* <div className="button btn btn-danger" id="start"> <a href="#">Start Over</a></div> */}
      </div>
    </div>
  );
};

export default Footer;

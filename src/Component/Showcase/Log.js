import React, { useState, useCallback, useEffect } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Col,
  FormText,
} from 'reactstrap';
import { connect } from 'react-redux';
import { login } from '../../Redux/Actions/authActions';
import { clearErrors } from '../../Redux/Actions/errorAction';
import { Link } from 'react-router-dom';

const Log = (props) => {
  const [modal, setModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState(null);

  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  const handleToggle = useCallback(() => {
    // Clear errors
    clearErrors();
  }, [clearErrors]);

  useEffect(() => {
    // Check for register error
    if (props.error.id === 'LOGIN_FAIL') {
      setMsg(props.error.msg.msg);
    } else {
      setMsg(null);
    }

    if (props.isAuthenticated) {
    }
  }, [props.error, props.isAuthenticated]);

  const onSubmit = (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    //Attempt to login
    props.login(user, (data, error) => {
      console.log(data);
      if (data) {
        props.history.push('/app');
      }
    });
  };

  return (
    <Container className="themed-container" fluid="sm">
      <form onSubmit={onSubmit}>
        <Col xs="6">
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              placeholder="email"
              onChange={handleChangeEmail}
            />
          </FormGroup>
        </Col>
        <Col xs="6">
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              onChange={handleChangePassword}
              type="password"
              name="password"
              id="password"
              placeholder="Password "
            />
          </FormGroup>
        </Col>

        <Col xs="6">
          <button
            type="submit"
            color="dark"
            style={{ marginTop: '2rem' }}
            block="true"
          >
            Login
          </button>
        </Col>
        <p>
          Don't have an account?
          <Link to="/register">Register</Link>
        </p>
      </form>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { login, clearErrors })(Log);

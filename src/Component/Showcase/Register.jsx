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
import { register } from '../../Redux/Actions/authActions';
import { clearErrors } from '../../Redux/Actions/errorAction';

const Register = (props) => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState(null);
  // const [clear, setClear] = useState('false');

  const handleChangeName = (e) => setName(e.target.value);
  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  const clear = () => {
    setPassword('');
    setName('');
    setEmail('');
  };

  const handleToggle = useCallback(() => {
    // Clear errors
    clearErrors();
  }, [clearErrors]);

  useEffect(() => {
    // Check for register error
    if (props.error.id === 'REGISTER_FAIL') {
      setMsg(props.error.msg.msg);
    } else {
      setMsg(null);
    }

    if (props.isAuthenticated) {
    }
  }, [props.error, props.isAuthenticated]);

  const onSubmit = (e) => {
    

    e.preventDefault();

    const newUser = {
      name,
      email,
      password,
    };
    
    //Attempt to register
    props.register(newUser);
    e.target.reset();
  };

  return (
    <Container className="themed-container" fluid="sm">
      <form onSubmit={onSubmit}>
        <Col xs="6">
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="type"
              onChange={handleChangeName}
              name="name"
              id="name"
              placeholder="name"
            />
          </FormGroup>
        </Col>
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
          <Button
            type="submit"
            color="dark"
            style={{ marginTop: '2rem' }}
            block="true"
          >
            Register
          </Button>
        </Col>
      </form>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { register, clearErrors })(Register);

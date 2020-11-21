import React, { Fragment } from 'react';
import { NavLink } from 'reactstrap';
import { logout } from './../../Redux/Actions/authActions';
import IconButton from '@material-ui/core/IconButton';
import SettingsPowerIcon from '@material-ui/icons/SettingsPower';
import { useDispatch } from 'react-redux';

const Logout = ({history}) => {
  const dispatch= useDispatch()
  return (
    <IconButton  color="inherit">
      <SettingsPowerIcon onClick={() => {
        dispatch(logout(() => history.push('/')))
      }} />
    </IconButton>
  );
};

export default Logout;

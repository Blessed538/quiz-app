import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
// import Navbar from './Comp/Navbar';
import Profile from './pages/Profile';
// import Home from './pages/Home/Home';
import TakeTest from './pages/TakeTest';
// import Appbar from './Material-Ui/Appbar';
import FirstPage from './Component/FirstPage';
import Picture from './Component/Showcase/Picture';
import Sid from './Component/Showcase/Sid';
import Login from './pages/Login/Login';
import { loaduser } from './Redux/Actions/authActions';
import store from './Redux/store';
import { connect } from 'react-redux';
import { history } from './Component/History';
import Appbar from './Material-Ui/Appbar';
import Log from './Component/Showcase/Log';
import PrivateRoute from './Component/PrivateRoute';
import { dashboardRoutes } from './routes';

const Admin = ({ history }) => {
  return <Appbar history={history}>{dashboardRoutes['admin']}</Appbar>;
};

class App extends Component {
  componentDidMount() {
    this.props.loadUser();
  }

  render() {
    return (
      <div>
        <FirstPage />
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Picture} />

            <PrivateRoute path="/app" component={Admin} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  loadUser: () => dispatch(loaduser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

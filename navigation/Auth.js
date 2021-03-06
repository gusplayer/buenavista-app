import React from 'react';
import { LoginNavigator, DashNavigator } from './Router';
import { connect } from 'react-redux';

class Auth extends React.Component {
  render() {
    if (this.props.auth.auth == true) {
    return <DashNavigator />;
    } else {
      return <LoginNavigator />;
    }
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};
export default connect(mapStateToProps)(Auth);

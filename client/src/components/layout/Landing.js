import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';

class Landing extends Component {

  render() {
    return (
      <Fragment>
      {
        !this.props.auth.isAuthenticated ?
        <div className="landing">
          <div className="dark-overlay landing-inner text-light">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h1 className="display-3 mb-4">
                    Developer Connector
                  </h1>
                  <p className="lead"> Create a developer profile/portfolio, share posts and get help from other developers</p>
                  <hr />
                  <NavLink to="/register" className="btn btn-lg btn-info mr-2">Sign Up</NavLink>
                  <NavLink to="/login" className="btn btn-lg btn-light">Login</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        :
        <Redirect to='/dashboard' />
      }
      </Fragment>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(Landing);

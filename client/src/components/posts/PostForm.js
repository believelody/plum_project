import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import jwt_decode from 'jwt-decode';
import { addPost } from '../../store/actions/postAction';
import { setCurrentUser } from '../../store/actions/authAction';
import { TextAreaGroup } from '../Export';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      disabled: false
    }
  }

  componentDidMount() {
    const decoded = jwt_decode(localStorage.jwtToken);
    this.props.setCurrentUser(decoded);

  }

  handleChange = e => this.setState({[e.target.name]: e.target.value});

  handleSubmit = (e) => {
    e.preventDefault();
    const { user } = this.props.auth;
    const postData = {
      text: this.state.text,
      name: user.name,
      avatar: user.avatar
    };

    this.props.addPost(postData);
    this.setState({ text: '' });
  }

  render() {
    const { text } = this.state;
    return (
      <div className="post-form mb-3">
        <div className="card card-info">
          <div className="card-header bg-info text-white">
            Say Something...
          </div>
          <div className="card-body">
            <form noValidate onSubmit={this.handleSubmit}>
              <TextAreaGroup
                placeholder="Create a post"
                name="text"
                value={text}
                onChange={this.handleChange}
              />
              <button disabled={text === "" ? true : false} type="submit" className="btn btn-dark">Post</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  setCurrentUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { addPost, setCurrentUser })(withRouter(PostForm));

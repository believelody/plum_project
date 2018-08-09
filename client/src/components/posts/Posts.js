import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts } from '../../store/actions/postAction';
import { Spinner, PostItem } from '../Export';

class Posts extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { posts, loading } = this.props.post;
    return (
      <div className="posts">
        <div className="card card-body mb-3">
          {
            this.props.post && loading && <Spinner />
          }
          {
            posts.length > 0 &&
            posts.map(post =>
              <PostItem key={post._id} postItem={post} />
            )
          }
        </div>
      </div>
    );
  }
}

Posts.propTypes = {
  post: PropTypes.object.isRequired,
  getPosts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  post: state.post
})
export default connect(mapStateToProps, { getPosts })(Posts);

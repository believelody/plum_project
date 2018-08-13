import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import { QuoteSlide } from '../Export';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      plums: [
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer hendrerit sed massa ac aliquam. Vivamus posuere vestibulum purus ac blandit. Sed mollis tellus magna, in varius lectus porta id. Phasellus a lectus hendrerit, pellentesque lectus id, viverra odio. Etiam vehicula lorem id maximus pretium.',
          author: 'author 1'
        },
        {
          text: 'Etiam a lacus vel leo euismod venenatis. Proin sit amet sollicitudin nulla. Donec porttitor elit in sem ultricies convallis. Nunc nisl augue, hendrerit quis molestie vitae, tincidunt eget felis. Fusce in gravida arcu, sed commodo nulla. Nunc lacinia ultricies porttitor.',
          author: 'author 2'
        },
        {
          text: 'Duis ultricies dui sit amet arcu suscipit, in feugiat enim feugiat. In rhoncus purus vel lectus auctor faucibus. Phasellus iaculis, ex ac ullamcorper eleifend, metus sapien ullamcorper leo, in tempus augue sapien ac nisi.',
          author: 'author 3'
        },
        {
          text: 'Proin rutrum orci id metus dictum, in pulvinar purus mollis. Proin faucibus porttitor maximus.',
          author: 'author 4'
        }
      ],
      slideInterval: 4000,
      widthLoadingSlide: 0
    }
  }

  componentDidMount() {
    setInterval(() => {
      let { current, plums } = this.state;

      if (current === plums.length - 1 ) this.setState({current: 0});
      else this.setState({current: current + 1});
    }, this.state.slideInterval);
  }

  render() {
    const { current, plums, slideInterval } = this.state;

    return (
      <Fragment>
      {
        !this.props.auth.isAuthenticated ?
        <div className="landing">
          <div className="dark-overlay landing-inner text-light">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <QuoteSlide slideInterval={slideInterval} quote={plums[current]} />
                </div>
              </div>
            </div>
          </div>
        </div>
        :
        <Redirect to='/test' />
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

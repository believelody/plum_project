import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class ProfileGithub extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clientId: '9c3a738e8997f2bbe9ce',
      clientSecret: '075eba9c9300c7c30e39863e247c69204afb7179',
      count: 5,
      sort: 'created: asc',
      repos: []
    }
  }

  componentDidMount() {
    const { username } = this.props;
    const { count, sort, clientId, clientSecret } = this.state;

    fetch(`https://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`)
      .then(res => res.json())
      .then(data => {
        this.setState({repos: data});
      })
      .catch(err => console.log(err));
  }

  render() {
    const { repos } = this.state;

    return (
      <div>
        <hr />
        <h3 className="mb-4">Latest Github Repos</h3>
        {
          repos.map(repo =>
            <div key={repo.id} className="card card-body mb-2">
              <div className="row">
                <div className="col-md-6">
                  <h4>
                    <NavLink to="repo.html_url" className="text-info" target="_blank">
                      {repo.name}
                    </NavLink>
                  </h4>
                  <p>{repo.description}</p>
                </div>
                <div className="col-md-6">
                  <span className="badge badge-info mr-1">
                    Stars: {repo.stargazers_count}
                  </span>
                  <span className="badge badge-secondary mr-1">
                    Watchers: {repo.watchers_count}
                  </span>
                  <span className="badge badge-success">
                    Forks: {repo.forks_count}
                  </span>
                </div>
              </div>
            </div>
          )
        }
      </div>
    )
  }
}

ProfileGithub.propTypes = {
  username: PropTypes.string.isRequired
};

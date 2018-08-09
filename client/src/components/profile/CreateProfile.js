import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { TextFieldGroup, SelectFieldGroup, TextAreaGroup, InputSocialGroup } from '../Export';
import { setProfile } from '../../store/actions/profileAction';

class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySocialInputs: false,
      handle: '',
      status: '',
      company: '',
      location: '',
      website: '',
      skills: '',
      bio: '',
      githubUsername: '',
      twitter: '',
      facebook: '',
      linkedin: '',
      instagram: '',
      youtube: '',
      errors: {}
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();

    const { handle, status, location, bio, website, githubUsername, skills, company, facebook, twitter, linkedin, instagram, youtube } = this.state;

    const profileData = { handle, status, location, bio, website, githubUsername, skills, company, facebook, twitter, linkedin, instagram, youtube };

    this.props.setProfile(profileData, this.props.history);
  }

  render() {
    const { displaySocialInputs, handle, status, location, bio, website, githubUsername, skills, company, facebook, twitter, linkedin, instagram, youtube, errors } = this.state;

    const options = [
      {
        value: "0",
        label: "* Select Professional Status"
      },
      {
        value: "Developer",
        label: "Developer"
      },
      {
        value: "Junior Developer",
        label: "Junior Developer"
      },
      {
        value: "Senior Developer",
        label: "Senior Developer"
      },
      {
        value: "Manager",
        label: "Manager"
      },
      {
        value: "Student or Learning",
        label: "Student or Learning"
      },
      {
        value: "Instructor",
        label: "Instructor or Teacher"
      },
      {
        value: "Intern",
        label: "Intern"
      },
      {
        value: "Other",
        label: "Other"
      }
    ];
    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <NavLink to='/dashboard' className="btn btn-light">
                Go Back
              </NavLink>
              <h1 className="display-4 text-center">Create Your Profile</h1>
              <p className="lead text-center">Lets get some information to make your profile stand out</p>
              <small className="d-block pb-3">* = required field</small>
              <form onSubmit={this.handleSubmit} className="row">
                <SelectFieldGroup
                  name="status"
                  options={options}
                  value={status}
                  info="Give us an idea of where you are at in your career"
                  onChange={this.handleChange}
                />
                <TextFieldGroup
                  name="handle"
                  placeholder="* Profile handle"
                  info="A unique handle for your profile URL. Your full name, company name, nickname, etc (This CAN'T be changed later)"
                  value={handle}
                  error={errors.handle}
                  onChange={this.handleChange}
                  colMd="col-md-6"
                />
                <TextFieldGroup
                  name="company"
                  placeholder="Company"
                  value={company}
                  onChange={this.handleChange}
                  info="Could be your own company or one you work for"
                  colMd="col-md-6"
                />
                <TextFieldGroup
                  name="website"
                  placeholder="Website"
                  value={website}
                  onChange={this.handleChange}
                  info="Could be your own or a company website"
                  error={errors.website}
                  colMd="col-md-6"
                />
                <TextFieldGroup
                  name="location"
                  placeholder="Location"
                  value={location}
                  onChange={this.handleChange}
                  info="City & state suggested (eg. Boston, MA)"
                  colMd="col-md-6"
                />
                <TextFieldGroup
                  name="skills"
                  placeholder="* Skills"
                  value={skills}
                  onChange={this.handleChange}
                  info="Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)"
                  colMd="col-md-6"
                />
                <TextFieldGroup
                  name="githubUsername"
                  placeholder="Github Username"
                  value={githubUsername}
                  onChange={this.handleChange}
                  info="If you want your latest repos and a Github link, include your username"
                  colMd="col-md-6"
                />
                <TextAreaGroup
                  name="bio"
                  placeholder="A short bio of yourself"
                  value={bio}
                  onChange={this.handleChange}
                  info="Tell us a little about yourself"
                />

                <div className="mb-3 col-sm-12">
                  <button
                  type="button"
                    className="btn btn-light"
                    onClick={
                      () => {
                        let displaySocialInputs = this.state.displaySocialInputs;
                        this.setState({ displaySocialInputs: !displaySocialInputs });
                      }
                    }
                  >
                    Add Social Network Links
                  </button>
                  <span className="text-muted">Optional</span>
                </div>
                {
                  displaySocialInputs &&
                  <Fragment>
                    <InputSocialGroup
                      icon="fab fa-twitter"
                      placeholder="Twitter Profile URL"
                      name="twitter"
                      value={twitter}
                      onChange={this.handleChange}
                      error={errors.twitter}
                    />
                    <InputSocialGroup
                      icon="fab fa-facebook"
                      placeholder="Facebook Profile URL"
                      name="facebook"
                      value={facebook}
                      onChange={this.handleChange}
                      error={errors.facebook}
                    />
                    <InputSocialGroup
                      icon="fab fa-linkedin"
                      placeholder="Linkedin Profile URL"
                      name="linkedin"
                      value={linkedin}
                      onChange={this.handleChange}
                      error={errors.linkedin}
                    />
                    <InputSocialGroup
                      icon="fab fa-youtube"
                      placeholder="Youtube Profile URL"
                      name="youtube"
                      value={youtube}
                      onChange={this.handleChange}
                      error={errors.youtube}
                    />
                    <InputSocialGroup
                      icon="fab fa-instagram"
                      placeholder="Instagram Profile URL"
                      name="instagram"
                      value={instagram}
                      onChange={this.handleChange}
                      error={errors.instagram}
                    />
                  </Fragment>
                }
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateProfile.propTypes = {
  errors: PropTypes.object.isRequired,
  setProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
})

export default connect(mapStateToProps, { setProfile })(withRouter(CreateProfile));

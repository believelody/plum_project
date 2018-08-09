import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { TextFieldGroup, TextAreaGroup, CheckFieldGroup } from '../Export';
import { addExperience } from '../../store/actions/profileAction';

class AddExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      company: '',
      location: '',
      from: '',
      to: '',
      current: false,
      description: "",
      errors: {}
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleCheck = () => this.setState({
    current: !this.state.current,
    disabled: !this.state.current,
    to: this.state.current ? this.state.to : ''
  });

  handleSubmit = e => {
    e.preventDefault();

    const { title, company, location, from, to, current, description } = this.state;

    const expData = { title, company, location, from, to, current, description };

    this.props.addExperience(expData, this.props.history);
  }

  render() {
    const { title, company, location, from, to, current, description, errors } = this.state;
    return (
      <div className="section add-experience">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/dashboard" className="btn btn-light">
                Go Back
              </Link>
              <h1 className="display-4 text-center">Add Your Experience</h1>
              <p className="lead text-center">Add any job or position that you have had in the past or current</p>
              <small className="d-block pb-3">* = required field</small>
              <form noValidate onSubmit={this.handleSubmit}>
                <TextFieldGroup
                  name="title"
                  placeholder="* Job Title"
                  value={title}
                  error={errors.title}
                  onChange={this.handleChange}
                />
                <TextFieldGroup
                  name="company"
                  placeholder="* Company"
                  value={company}
                  error={errors.company}
                  onChange={this.handleChange}
                />
                <TextFieldGroup
                  name="location"
                  placeholder="Location"
                  value={location}
                  error={errors.location}
                  onChange={this.handleChange}
                />
                <h6>From Date</h6>
                <TextFieldGroup
                  name="from"
                  type="date"
                  value={from}
                  error={errors.from}
                  onChange={this.handleChange}
                />
                <h6>To Date</h6>
                <TextFieldGroup
                  name="to"
                  type="date"
                  placeholder="To"
                  value={to}
                  error={errors.to}
                  onChange={this.handleChange}
                  disabled={current}
                />
                <CheckFieldGroup
                  label="Current Job"
                  checked={current}
                  text="Current Job"
                  id="current"
                  onChange={this.handleCheck}
                />
                <TextAreaGroup
                  name="description"
                  placeholder="Job Description"
                  value={description}
                  info="Some of your responsabilities, etc"
                  onChange={this.handleChange}
                />
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(mapStateToProps, { addExperience })(withRouter(AddExperience));

import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { TextFieldGroup, TextAreaGroup, CheckFieldGroup } from '../Export';
import { addEducation } from '../../store/actions/profileAction';

class AddEducation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      school: '',
      degree: '',
      fieldOfStudy: '',
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

    const { school, degree, fieldOfStudy, from, to, current, description } = this.state;

    const eduData = { school, degree, fieldOfStudy, from, to, current, description };

    this.props.addEducation(eduData, this.props.history);
  }

  render() {
    const { school, degree, fieldOfStudy, from, to, current, description, errors } = this.state;
    return (
      <div className="section add-experience">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/dashboard" className="btn btn-light">
                Go Back
              </Link>
              <h1 className="display-4 text-center">Add Your Education</h1>
              <p className="lead text-center">Add any school, bootcamp, etc that you have attended</p>
              <small className="d-block pb-3">* = required field</small>
              <form noValidate onSubmit={this.handleSubmit}>
                <TextFieldGroup
                  name="school"
                  placeholder="* School Or Bootcamp"
                  value={school}
                  error={errors.school}
                  onChange={this.handleChange}
                />
                <TextFieldGroup
                  name="degree"
                  placeholder="* Degree Or Certificate"
                  value={degree}
                  error={errors.degree}
                  onChange={this.handleChange}
                />
                <TextFieldGroup
                  name="fieldOfStudy"
                  placeholder="Field Of Study"
                  value={fieldOfStudy}
                  error={errors.fieldOfStudy}
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
                  text="Current Year"
                  id="current"
                  onChange={this.handleCheck}
                />
                <TextAreaGroup
                  name="description"
                  placeholder="Program Description"
                  value={description}
                  info="Tell us about your experience and what you learned"
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

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(mapStateToProps, { addEducation })(withRouter(AddEducation));

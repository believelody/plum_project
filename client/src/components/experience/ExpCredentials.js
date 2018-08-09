import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ExpCredentials = ({
  experience,
  header,
  deleteExperience
}) => (
  <div>
    <h4 className="mb-2">{header}</h4>
    <table className="table">
      <thead>
        <tr>
          <th>Company</th>
          <th>Title</th>
          <th>Years</th>
          <th>Location</th>
          <th>Description</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {
          experience.map(exp =>
            <tr key={exp._id}>
              <td>{exp.company}</td>
              <td>{exp.title}</td>
              <td>
                <Moment format="YYYY/MM/DD">{exp.from}</Moment> - {exp.current ? "Now" : <Moment format="YYYY/MM/DD">{exp.to}</Moment>}
              </td>
                <td>{ exp.location !== "" ? exp.location : "" }</td>
                <td>{ exp.description !== "" ? exp.description : "" }</td>
              <td>
                <button onClick={() => deleteExperience(exp._id)} className="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          )
        }
      </tbody>
    </table>
  </div>
);

ExpCredentials.propTypes = {
  experience: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      from: PropTypes.string.isRequired,
      location: PropTypes.string,
      description: PropTypes.string,
      to: PropTypes.string,
      current: PropTypes.bool.isRequired
    })
  ).isRequired,
  deleteExperience: PropTypes.func.isRequired
};

export default ExpCredentials;

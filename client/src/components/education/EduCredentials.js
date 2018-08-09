import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const EduCredentials = ({
  education,
  header,
  deleteEducation
}) => (
  <div>
    <h4 className="mb-2">{header}</h4>
    <table className="table">
      <thead>
        <tr>
          <th>School</th>
          <th>Degree</th>
          <th>Years</th>
          <th>Field Of Study</th>
          <th>Description</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {
          education.map(edu =>
            <tr key={edu._id}>
              <td>{edu.school}</td>
              <td>{edu.degree}</td>
              <td>
                <Moment format="YYYY/MM/DD">{edu.from}</Moment> - {edu.current ? "Now" : <Moment format="YYYY/MM/DD">{edu.to}</Moment>}
              </td>
                <td>{ edu.fieldOfStudy !== "" ? edu.fieldOfStudy : "" }</td>
                <td>{ edu.description !== "" ? edu.description : "" }</td>
              <td>
                <button onClick={() => deleteEducation(edu._id)} className="btn btn-danger">
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

EduCredentials.propTypes = {
  education: PropTypes.arrayOf(
    PropTypes.shape({
      school: PropTypes.string.isRequired,
      degree: PropTypes.string.isRequired,
      from: PropTypes.string.isRequired,
      fieldOfStudy: PropTypes.string,
      description: PropTypes.string,
      to: PropTypes.string,
      current: PropTypes.bool.isRequired
    })
  ).isRequired,
  deleteEducation: PropTypes.func.isRequired
};

export default EduCredentials;

import React from 'react';
import Moment from 'react-moment';

export default ({profile}) =>
<div className="col-md-6">
  <h3 className="text-center text-info">Education</h3>
  <ul className="list-group">
    {
      profile.education.map(edu =>
        <li key={edu._id} className="list-group-item">
          <h4>{edu.school.toUpperCase()}</h4>
          <p>
            <Moment format="YYYY/MM/DD">{edu.from}</Moment> - {edu.current ? "Current" : <Moment format="YYYY/MM/DD">{edu.to}</Moment>}
          </p>
          <p>
            <strong>Degree:</strong> {edu.degree.toUpperCase()}
          </p>
          {
            edu.fieldOfStudy ?
            <p>
              <strong>Field Of Study:</strong> {edu.fieldOfStudy.toUpperCase()}
            </p> :
            null
          }
          {
            edu.description ?
            <p>
              <strong>Description:</strong> {edu.description}
            </p> :
            null
          }
        </li>
      )
    }
  </ul>
</div>

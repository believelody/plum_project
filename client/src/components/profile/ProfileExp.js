import React from 'react';
import Moment from 'react-moment';

export default ({profile}) =>
<div className="col-md-6">
  <h3 className="text-center text-info">Experience</h3>
  <ul className="list-group">
    {
      profile.experience.map(exp =>
        <li key={exp._id} className="list-group-item">
          <h4>{exp.company.toUpperCase()}</h4>
          <p>
            <Moment format="YYYY/MM/DD">{exp.from}</Moment> - {exp.current ? "Current" : <Moment format="YYYY/MM/DD">{exp.to}</Moment>}
          </p>
          <p>
            <strong>Position:</strong> {exp.title.toUpperCase()}
          </p>
          <p>
            <strong>Location:</strong> {exp.location.toUpperCase()}
          </p>
          <p>
            <strong>Description:</strong> {exp.description}
          </p>
        </li>
      )
    }
  </ul>
</div>

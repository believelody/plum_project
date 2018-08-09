import React, { Fragment } from 'react';

export default ({profile}) =>
<div className="row">
  <div className="col-md-12">
    <div className="card card-body bg-light mb-3">
      {
        profile.bio ?
        <Fragment>
          <h3 className="text-center text-info">{profile.user.name} s Bio</h3>
          <p className="lead">
            {profile.bio}
          </p>
          <hr />
        </Fragment>  :
        null
      }
      <h3 className="text-center text-info">Skill Set</h3>
      <div className="row">
        <div className="d-flex flex-wrap justify-content-center align-items-center">
          {
            profile.skills.map(skill =>
              <div key={skill} className="p-3">
                <i className="fa fa-check"></i> {skill}
              </div>
            )
          }
        </div>
      </div>
    </div>
  </div>
</div>

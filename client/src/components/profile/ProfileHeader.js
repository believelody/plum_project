import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

export default ({profile}) =>
<div className="row">
  <div className="col-md-12">
    <div className="card card-body bg-info text-white mb-3">
      <div className="row">
        <div className="col-4 col-md-3 m-auto">
          <img className="rounded-circle" src={profile.user.avatar} alt={profile.handle} />
        </div>
      </div>
      <div className="text-center">
        <h1 className="display-4 text-center">{profile.user.name}</h1>
        <p className="lead text-center">{profile.status}</p>
        <p>{profile.location}</p>
        <p>
        {
          profile.website ?
          <NavLink className="text-white p-2" to={profile.website} target="_blank">
            <i className="fas fa-globe fa-2x"></i>
          </NavLink> :
          null
        }
        {
          profile.social ?
          <Fragment>
          {
            profile.social.twitter ?
            <NavLink className="text-white p-2" to={profile.social.twitter} target="_blank">
              <i className="fab fa-twitter fa-2x"></i>
            </NavLink> :
            null
          }
          {
            profile.social.facebook ?
            <NavLink className="text-white p-2" to={profile.social.facebook} target="_blank">
              <i className="fab fa-facebook fa-2x"></i>
            </NavLink> :
            null
          }
          {
            profile.social.linkedin ?
            <NavLink className="text-white p-2" to={profile.social.linkedin} target="_blank">
              <i className="fab fa-linkedin fa-2x"></i>
            </NavLink> :
            null
          }
          {
            profile.social.instagram ?
            <NavLink className="text-white p-2" to={profile.social.instagram} target="_blank">
              <i className="fab fa-instagram fa-2x"></i>
            </NavLink> :
            null
          }
          {
            profile.social.youtube ?
            <NavLink className="text-white p-2" to={profile.social.youtube} target="_blank">
              <i className="fab fa-youtube fa-2x"></i>
            </NavLink> :
            null
          }
          </Fragment> :
          null
        }
        </p>
      </div>
    </div>
  </div>
</div>

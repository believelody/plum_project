import React from 'react';
import { PostForm, Posts } from '../Export';

export default () =>
<div className="feed">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <PostForm />
        <Posts />
      </div>
    </div>
  </div>
</div>

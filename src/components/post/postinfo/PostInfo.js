import React from 'react';
import './PostInfo.scss';

import {Link} from 'react-router-dom';
import moment from 'moment'; 


const PostInfo = ({publishedDate, title,tags}) => (
  <div className={('post-info')}>
    <div className={('info')}>
      <h1>{title}</h1>
      <div className={('tags')}>
        {
          tags && tags.map(
            tag => <Link key={tag} to ={`/tag/${tags}`}>#{tag}</Link>
          )
        }
      </div>
      <div className={('date')}>{moment(publishedDate)}</div>
    </div>
  </div>
);

export default PostInfo;

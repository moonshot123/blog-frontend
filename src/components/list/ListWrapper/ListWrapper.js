import React from 'react';
import './ListWrapper.scss';


const ListWrapper = ({children}) => (
  <div className={('list-wrapper')}>
    {children}
  </div>
);

export default ListWrapper;

import React from 'react';
import styles from './ListWrapper.scss';


const ListWrapper = ({children}) => (
    <div className={('list-wrapper')}>
        {children}
    </div>
)

export default ListWrapper;
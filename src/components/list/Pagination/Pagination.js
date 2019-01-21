import React from 'react';
import styles from './Pagination.scss';
import Button from '../../common/Button';


const Pagination = () => (
    <div className={('pagination')}>
        <Button disabled>이전페이지</Button>
        <div className ={('number')}>
            페이지1
        </div>
        <Button>
            다음페이지
        </Button>
    </div>
)

export default Pagination;
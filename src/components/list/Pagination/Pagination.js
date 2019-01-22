import React from 'react';
import './Pagination.scss';
import Button from '../../common/Button';


const Pagination = () => (
  <div className={('pagination')}>
    <Button disabled>
      이전 페이지
    </Button>
    <div className={('number')}>
      페이지 1
    </div>
    <Button>
      다음 페이지
    </Button>
  </div>
);

export default Pagination;

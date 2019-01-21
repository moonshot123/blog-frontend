import React from 'react'
import './Header.scss'
import {Link} from 'react-router-dom';
import Button from '../Button/index';

const Header = () => ( //여기서 왜 () 괄호 쓰는건지는 모르겠음...  {} 쓰면 오류생김...
    
<header className={('header')}>
<div className={('header-content')}>
  <div className={('brand')}>
    <Link to="/">reactblog</Link>
  </div>
  <div className={('right')}>
    <Button them='outline' to ='/editor'>새포스트</Button>
  </div>
</div>
</header>
    
   
)


export default Header;
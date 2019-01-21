import React from 'react';
import './Footer.scss';

import { Link } from 'react-router-dom';


const Footer = () => ( //여기서 왜 () 괄호 쓰는건지는 모르겠음...  {} 쓰면 오류생김...
    <footer className={('footer')}>
        <Link to="/" className={('brand')}>reactblog</Link>
        <div className={('admin-login')}>관리자 로그인</div>
    </footer>
    
)


export default Footer;
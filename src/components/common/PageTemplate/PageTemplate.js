import React from 'react';
import './PageTemplate.scss';
import Header from '../Header';
import Footer from '../Footer';

const PageTemplate = ({children}) => ( //여기서 왜 () 괄호 쓰는건지는 모르겠음...  {} 쓰면 오류생김...
    <div className={('page-template')}>
    <Header/>
    <main>
        {children}
    </main>
    
    <Footer/>
    </div>
)

export default PageTemplate;
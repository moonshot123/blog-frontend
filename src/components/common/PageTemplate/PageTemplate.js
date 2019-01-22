import React from 'react';
import './PageTemplate.scss';
import Header from '../Header';
import Footer from '../Footer';


const PageTemplate = ({children}) => (
  <div className={('page-template')}>
    <Header/>
    <main>
      {children}
    </main>
    <Footer/>
  </div>
);

export default PageTemplate;

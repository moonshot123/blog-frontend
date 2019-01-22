import React from 'react';
import './PreviewPane.scss';
import MarkdownRender from '../../common/MarkdownRender';


const PreviewPane = ({markdown, title}) => (
  <div className={('preview-pane')}>
    <h1 className={('title')}>
      {title}
    </h1>
    <div>
      <MarkdownRender markdown={markdown}/>
    </div>
  </div>
);

export default PreviewPane;

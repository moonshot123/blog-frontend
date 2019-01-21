import React from 'react';
import './PostInfo.scss';

const PostInfo = () => (
    <div className={('post-info')}>
        <div className={('info')}>
            <h1>타이틀</h1>
            <div className={('tags')}>
                <a>#태그</a> <a>#태그</a> <a>#태그</a>
            </div>
            <div className={('date')}> 2019 - 01 - 18 </div>
        </div>        
    </div>
)

export default PostInfo;
import React from 'react';
import PageTemplate from '../components/common/PageTemplate';
import PostInfo from '../components/post/postinfo'
import PostBody from '../components/post/postbody';

const PostPage = () => {
    return (
        <PageTemplate>
            <PostInfo/>
            <PostBody/>
        </PageTemplate>
    )
}

export default PostPage; 
import axios from 'axios';
import qureyString from 'query-string'; 

export const writePost = ({title,body,tags}) => axios.post('/routes/posts',{title,body,tags});

export const getPost = (id) => axios.get(`/routes/posts/${id}`);

export const getPostList = ({tag,page}) => axios.get(`/routes/posts/${qureyString.stringify({tag,page})}`);
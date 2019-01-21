import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import penderMiddleware from 'redux-pender';
import * as modules from './modules'

const reducers = combineReducers(modules);
const middlewares = [penderMiddleware()];

//개발모드일때만 리덕스 devtools 적용
const isDev = process.env.Node_ENV === 'development';
const devtools = isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devtools || compose;

//preloadedState는 서버사이드렌더링을 했을떄 전달받는 초기상태
const configure = (preloadedState) => createStore(reducers,preloadedState,composeEnhancers(applyMiddleware(...middlewares)))

export default configure;
# 프로젝트
블로그웹 어플리케이션
출처: 리액트를 다루는 기술 내의 블로그 프로젝트


# 프로젝트 스펙
frontend : react,redux,scss
backend : node, express
server : mongoDB


# 프로젝트 순서정리
1. CRA로 프로젝트 생성
2. 디렉토리 구조
3. 리덕스 설정
4. 기본 UI설정
5. 페이지별 UI구현
6. 마크다운 에디터 구현
7. API연동 (포스트)
8. 서버사이드렌더링
9. 코드 스플리팅


# 파일구조
components: 리덕스에 연결되지 않은 컴포넌트
catainers: 리덕스상태와 연결된 컴포넌트 정보  
lib: 백엔드 API함수와 코드스플린트에 필요한 함수 
page: 라우터에 사용할 페이지UI구현
store: Ducks구조를 적용시킨 리덕스 모듈과 스토어 생성함수 
styles: 폰트, 색상, 반응형 디자인구조





#정리내용 
1.마크업 마크다운

마크업 
마크업 언어는 "마크(Mark)"로 둘러싸인 언어입니다. "태크(Tag)"로 둘러싸였다고도 표현합니다. HTML, XML 등의 마크업 언어들은 문서의 구조를 정의합니다. 쉽게 말하면 문서의 골격에 해당하는 부분을 작성하는데 사용합니다.
태그로 조잘조잘 어떤 기능을 하는건지 설명하는 것. 그리고 그렇게 설명하는 태그를 달면 기능이 이루어지고. 한 마디로 그런 설명을 하는 자체가 마크업입니다.

마크다운
마크다운 언어는 마크업 언어의 일종으로, 읽기도 쓰기도 쉽다는 장점이 있습니다.
그 파일이 우리가 흔히 사용하는 .md 확장자의 파일입니다. (Readme.md 라던지...)
복잡한 서식을 이용하지 않고 편하게 문서를 작성할수 있도록 도와주는 것.....


# 프로젝트에서 API연동
1. 현재 프론트는 3000번 백엔드는 4000번으로개발함 하지만 이후에 서비스를 배포할떄 호스트가 변경되므로 이렇게 하면 안됩니다.
2. 이럴때는 프록시 기능을 사용하면 개발 서버ㅗ 들어온 요청을 백엔드 서버에 전달하고,응답을 그대로 반환 할수 있습니다.
3. CRA로 만든 앱이라면 package.json 에 "proxy":"http://localhost:4000" 명시하고 웹팩 개발서버로 REST API를 요청하면 프록시를 이용하여 백엔드 서버로 요청하고 응답도 받습니다.
4. 


#프로젝트 개발시 순서
1. component(ui) > 리덕스상태관리 > container컴포넌트 만들기


# 흐름도(예시:리스트, 서버, DB 세팅완료 후)
1. Root.js : store 적용, App.js 연결 
2. components > App.js : 라우터 정의, url에 따른 페이지연결
3. page > ListPage.js : 리스트 화면 구성세팅

<PageTemplate>  : 페이지 기본 ui 잡아주는 컴포넌트(components > PageTemplate.js)
    <ListWrapper>   : 포스트 리스트를 UI를 잡아주는 컴포넌트
        <ListContainer  : 리스트를 나타내는 컴포넌트의 상태를 관리
          page={parseInt(page, 10)}
          tag={tag}
        />
    <ListWrapper>
<PageTemplate>

4. container > list > ListContainer : 리스트객체에 관련된 상태관리
4-1. 페이지, 태그값, action(store/modules/list)을 부모로부터 받아옴
4-2. 페이지와 태그가 바뀔떄 리스트를 다시 불러옴
4-3. 불러온 페이지와 태그를 프리젠테이션 컴포넌트(PostList, Pagination 컴포넌트)에서 불러옴
4-4. state, dispatch값을 export해줌

5. store > modules > list : 4-1의 action 
5-1. 각종리덕스 모듈{ createAction, handleActions} 호출 
5-2. immutable{ Map, List, fromJS } 모듈 호출
5-3. pender 모듈호출
5-4. api 호출
5-5. action 객체 생성 (api에 설정해둠 함수이용)
export const getPostList = createAction(GET_POST_LIST, api.getPostList, meta => meta);

5-6. state 초기화
const initialState = Map({
  posts: List(),
  lastPage: null
});

5-7. 리듀서설정
// reducer
export default handleActions({
  ...pender({
    type: GET_POST_LIST,
    onSuccess: (state, action) => {
      const { data: posts } = action.payload;

      const lastPage = action.payload.headers['last-page'];
      return state.set('posts', fromJS(posts))
                  .set('lastPage', parseInt(lastPage, 10));
    }
  })
}, initialState)

6. lib > api : 5-5, 5-6 api 
6-1. axios 호출
6-2. query-string 호출
6-3. url에 맞는 함수 export
export const getPostList = ({ tag, page }) => axios.get(`/api/posts/?${queryString.stringify({ tag, page })}`);


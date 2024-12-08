var store = [{
        "title": "Test page",
        "excerpt":"블로그 개설 테스트  ","categories": [],
        "tags": ["test"],
        "url": "/Test/",
        "teaser": null
      },{
        "title": "2023-07-16 WIL",
        "excerpt":"이번주 한 일 &amp; 배운 것     지난주에 진행한 페어 프로그래밍 과제 공통 요소 만들기를 화요일에 마무리하고 페어와 &amp; 다른 페어팀 2분과 리뷰를 진행했다. 각자 리뷰를 마치고 Issue에 코멘트하는 방식으로 진행.   React에 mocking 서버를 붙여 회원가입과 로그인을 구현해보았다. Github 레포 바로가기👉            React의 react-cookie 라이브러리를 활용해 토큰을 쿠키에 저장하는 방식으로 구현하였다.       JWT에 대해 공부하고 사용 방법을 배울 수 있었다.           금요일부터 Spring 조원들과 팀으로 일주일 짜리 프로젝트를 시작했다.            현재 공통 요소 및 페이지 컴포넌트의 기본적인 기능을 구현했다.       react-query를 이용해 기본적인 세팅을 마치고 내일 서버와 통신 테스트 진행할 예정이다.       이 프로젝트를 위해서 json-server 개념도 공부하고 프론트에서 어떻게 테스트하면 좋을지를 배웠다.       react-query도 새로 공부해서 써보았는데, 개인적으로 thunk보다 훨씬 직관적이고 간결해서 마음에 든다.           React Toolkit과 thunk에 대해 배웠다.            아직은 리덕스를 조금 더 숙달할 필요가 있다고 생각해서 이번 프로젝트에 툴킷을 쓰진 않았다. 하지만 협업 때 사용할 가능성이 있으니 잘 알아둘 필요는 있어보인다.           Axios에 대해 공부했다.            요새 웬만한 HTTP 통신에는 다 Axios를 쓰고 있는데, 기존 fetch와 어떤 차이가 있을까 궁금해 조사해보았다.       백엔드와 함께 프로젝트 하면서 서버와 API 통신하는 방법 관련한 공부를 많이 하게 되는 것 같다.           이번주부터 블로그를 깃허브로 옮겼다. 공부하다 틈틈이 메모해두고 정리해 올리면 되니까 편하긴 한데… jekyll을 아직 잘 몰라서 우당탕탕이다! 내가 쓰는 테마에 서브메뉴를 달고 싶다.   회고  점점 부트캠프 일정이 엄청나지고 있다… 배우는 것이 엄청나게 많아졌고 복습할 시간은 생각보다 잘 나지 않는다 😂 매일매일 공부하면서 메모장에 적어놓고만 있다. 반드시 블로그에도 올려야지.   어쩌다가 이번 프로젝트 팀에서는 프론트엔드가 나 혼자 배정되었다. 아직 부족한 부분이 많다고 생각해 걱정했는데, 다행히 백엔드 팀원들이 정말 많이 배려해주시고 소통도 잘 돼서 감사하다. 진짜 감사하다…!   이번 프로젝트 주제를 마니또로 잡았다. 실제로 만들어졌을 때 우리 기수 사람들이 정말로 사용한다면 어떨까?라고 상상하며 기획했다. 이곳에서 만난 모든 사람들이 나의 현재이자 미래 동료이고, 같이 나아갈 사람이라고 생각해서 앞으로 좀더 친해지면 어떨까 하는 마음이었다. 비록 개발 가능한 기간이 4일 남짓이라 많은 기능은 넣지 못하겠지만 저런 생각을 하며 만들다보니 즐겁다!   ","categories": [],
        "tags": ["WIL"],
        "url": "/WIL/",
        "teaser": null
      },{
        "title": "2023-07-16 Axios에 대하여 (feat. fetch)",
        "excerpt":"node 에서 서버와 통신을 할 때 주로 사용하는 HTTP 클라이언트를 꼽아보자면 보통 Fetch나 Axios다. Fetch는 브라우저에 내장되어있어서 설치하지 않고 사용할 수 있다는 장점도 있고 문법도 크게 다르지 않은데 왜 Axios를 사용할까 궁금해져서 알아봤다.   Axios  공식 문서에서는 Axios에 대해 이렇게 소개하고 있다. (내가 휘뚜루마뚜루 번역함)     Axios는 Node.js와 브라우저를 위한 Promise 기반 HTTP 통신 클라이언트이다. 동형(브라우저와 Node에서 동일한 형태로 실행 가능)이며, 서버사이드에서는 Node.js의 네이티브 http 모듈을 사용하지만 클라이언트에서는 XMLHttpRequests를 사용한다.    Axios도 Promise API를 사용하기 때문에 response가 Promise 객체로 들어온다.   Axios 사용하기     설치 (npm 기준)     npm install axios          서드파티이기 때문에 이후 require해주어야 한다. (React에서는 import)      const axios = require('axios');          // in React import axios from 'axios';           요청 전송 config에 여러 설정값을 넣어서 전송하는 형태이다. 전송받은 response에 대해서 .then()을 통해 처리할 수 있다. ```javascript   // GET 요청 예시 (출처: Axios 공식 문서) axios({   method: ‘get’,   url: ‘http://bit.ly/2mTM3nY’,   responseType: ‘stream’ })   .then(function (response) {     response.data.pipe(fs.createWriteStream(‘ada_lovelace.jpg’))   });  ```javascript // POST 요청 예시 (출처: Axios 공식 문서) axios({   method: 'post',   url: '/user/12345',   data: {     firstName: 'Fred',     lastName: 'Flintstone'   } });  axios.get(), axios.post() 등 요청 메소드 명령어를 제공해주기도 한다.   fetch API  그렇다면 fetch API는 어떨까?   HTTP 통신을 위한 자바스크립트 내장 라이브러리이며 ES6부터 추가되었다. Axios에 비해 기능이 다양하지는 않으나, 성능 자체로는 Axios와 큰 차이가 없다. 문법도 큰 차이가 없으니 예제는 생략한다.   Node.js와 Axios의 차이점  문법도 성능도 큰 차이가 없는데 Axios를 왜 굳이 추가해서 사용하는가를 살펴봤다.   기본적으로 Axios가 에러 핸들링, 보안에서 fetch보다 더 나은 기능을 갖고 있다.  fetch의 장점 &amp; 단점  장점     추가적인 라이브러리 설치가 필요 없다.   기본 내장 라이브러리이기 때문에, 업데이트가 잦은 환경에서 안정적으로 사용 가능하다. ( 예를 들어 React Native. 가끔 Axios가 업데이트를 따라잡지 못하는 경우가 있다고 함 )     단점       에러 핸들링 시 catch에 걸려도 then 이 실행된다.   에러 핸들링 시 요청이 완료되지 않은 경우에만 reject가 실행되기 때문에 resolve로 한 번 받고 추가적인 예외처리를 해주어야 한다.   전달받은 데이터가 string화되어 들어온다. 데이터를 .json()으로 한 번 가공해야 한다.   body를 통해 통신하기 때문에 요청값을 보낼 때도 json.stringify()를 이용한 문자열 파싱이 필요하다.   브라우저 지원이 Axios에 비해 다소 적다.   네트워크 에러가 발생해도 response timeout을 제공해주지 않는다.     Axios의 장점 &amp; 단점      장점       객체로 바로 요청을 보낼 수 있다.   전달받은 데이터 또한 바로 json 형태로 변환되어 들어온다.   response timeout, request 취소 기능을 제공한다.   fetch에 비해 보안이 더 철저하다. CSRF 보호 기능이 있다. (사이트간 요청 위조 공격을 방지)   데이터 전달시 data를 바로 전달해주기 때문에 좀더 편리하다.   fetch와 달리(fetch 단점 2번 참고) 400, 500대의 에러를 reject로 바로 잡아내 처리할 수 있다.     단점       추가 설치가 필요한 서드파티 라이브러리.    정리해놓고 보니, Axios가 여러 모로 빌트인 라이브러리인 fetch의 단점을 개선해 만들려고 한 흔적이 보인다. 대부분의 경우 axios를 사용하겠지만, 좀더 안정적인 작업이 필요할 때는 fetch를 고려해보아야겠다.   참고 레퍼런스     Axios 공식 문서   https://velog.io/@sunkim/React-axios-%EC%99%80-fetch-%EC%B0%A8%EC%9D%B4%EC%A0%90   https://hoorooroob.tistory.com/entry/React-React-Naive-TIPS-axios-%EC%99%80-fetch-%EC%96%B4%EB%96%A4-%EA%B2%83%EC%9D%84-%EC%82%AC%EC%9A%A9%ED%95%A0%EA%B9%8C   https://dream-frontend.tistory.com/383  ","categories": [],
        "tags": ["Axios","Frontend"],
        "url": "/axios/",
        "teaser": null
      },{
        "title": "프로그래머스 등차수열의 특정한 항만 더하기 자바스크립트 알고리즘 풀이",
        "excerpt":"문제   문제 링크     아이디어   등차수열이기 때문에 특정 수식으로 일반화할 수 있을 것 같았다.      i항에서 계산되는 값은 a + d * i 이므로,   반복문을 돌면서 true일 때는 더해주고 false일 때는 더해주지 않는다.   내 코드   function solution(a, d, included) {     // 인덱스가 i일 때 i+1항은 a + i + d이므로     // true일 때 더해줌     let answer = 0;     for (let i = 0; i &lt; included.length; ++i) {         included[i] &amp;&amp; (answer += a + d * i);     }     return answer; }   다른 사람 코드   function solution(a, d, included) {     return included.reduce((acc, flag, i) =&gt; {         return flag ? acc + a + d * i : acc;     }, 0); }   reduce()를 이용한 풀이/ 사실 나도 reduce()를 쓰고 싶었는데, 왜인지 되지 않아서 for문으로 풀었었다. 생각해보니 reduce의 원리를 혼동해서 생긴 문제였다. 누산 형태이므로 true이든 false이든 기존 acc에 쌓인 값을 리턴해주었어야 했다. 그런데 나의 경우 true일 때만 리턴을 하고, false일 경우 뱉어주는 값이 없어서 계산이 잘못됐었다.   문법 정리   Array.prototype.reduce()   MDN Array.prototype.reduce()  ","categories": ["algorithm-programmers"],
        "tags": ["algorithm","JS","programmers"],
        "url": "/algorithm-programmers/181931/",
        "teaser": null
      },{
        "title": "프로그래머스 코드 처리하기 자바스크립트 알고리즘 풀이",
        "excerpt":"문제   문제 링크     아이디어      mode의 값과 짝수/홀수를 2로 나눴을 때의 나머지값이 같다.   그러므로 (인덱스 % 2) 가 mode와 일치하면 해당 인덱스의 값을 더해준다.   내 코드   function solution(code) {     let ret = \"\";     let mode = 0;      for (let i = 0; i &lt; code.length; ++i) {         if (code[i] === \"1\") {             mode = mode ^ 1; // XOR 연산자로 토글             continue; // \"1\" 문자 자체는 패스         }         // mode === 0 일 때 짝수 인덱스 문자 추가         // mode === 1 일 때 홀수 인덱스 문자 추가         // 인덱스의 나머지값과 mode가 일치할 때의 문자만 추가해줌         i % 2 === mode &amp;&amp; (ret += code[i]);     }      return ret.length === 0 ? \"EMPTY\" : ret; }   다른 사람 코드   function solution(code) {     let ret = \"\";     let mode = 0;     [...code].forEach((char, i) =&gt; {         if (char === \"1\") {             mode = Math.abs(mode - 1);             return;         }         ret += i % 2 === mode ? char : \"\";     });      return ret.length === 0 ? \"EMPTY\" : ret; }   0과 1을 토글할 수 있는 아주 신박한 방법이다.  Math.abs()를 이용해 절대값으로 0과 1을 번갈아가며 구했다.   문법 정리   ^(XOR) 연산자   문제를 풀며 XOR 연산자가 떠올라 사용하긴 했지만 이 연산자에 대한 개념을 정확히 알진 못했다.  비트 연산의 일종이며 토글/반전할 때 사용할 수 있다는 아주 결과적인 지식만 있었다. 이번에 알아보니,  [배운내용~~~~~~~~~~~~~~]  [링크도 넣기~~~~~~~~~~~~~~]   연산자의 순서   이번에 다양한 논리, 산술 연산자를 섞어 사용하다보니 중간에 순서 오류가 나기도 했어서, 다시 한 번 정리해보았다.  [링크도 넣기~~~~~~~~~~~~~~~~]   foreach문과 continue   다른 분의 코드를 보다가 알게 되었다.  foreach문에서는 continue를 사용할 수 없다.  보통 foreach 문에서 continue와 같은 사용을 원한다면 그냥 return;을 사용한다.  정확히 왜 foreach문에서 continue의 사용이 막혀있는지에 대해 알아보고 싶었으나 공식 문서에서는 아직 찾지 못했다.  ","categories": ["algorithm-programmers"],
        "tags": ["algorithm","JS","programmers"],
        "url": "/algorithm-programmers/181932/",
        "teaser": null
      },{
        "title": "프로그래머스 문자열의 앞의 n글자 자바스크립트 알고리즘 풀이",
        "excerpt":"문제   문제 링크     아이디어      n이 주어지므로, 특정 인덱스로부터 n번째만큼 자르는 메서드인 slice를 사용한다.   내 코드   function solution(my_string, n) {     return my_string.slice(0, n); }   다른 사람 코드   function solution(my_string, n) {     return my_string.substring(0, n); }   대부분 substring, substr 등 배열이나 문자열을 자를 수 있는 메서드를 활용했다.   function solution(m, n) {     var answer = \"\";     for (let i = 0; i &lt; n; i++) {         answer += m[i];     }     return answer; }   내장 메서드를 쓰지 않고 배열 형태로 접근해 가공한 방식도 있었다.  ","categories": ["algorithm-programmers"],
        "tags": ["algorithm","JS","programmers"],
        "url": "/algorithm-programmers/181907/",
        "teaser": null
      },{
        "title": "프로그래머스 flag에 따라 다른 값 반환하기 자바스크립트 알고리즘 풀이",
        "excerpt":"문제   문제 링크      두 정수 a, b와 boolean 변수 flag가 매개변수로 주어질 때, flag가 true면 a + b를 false면 a - b를 return 하는 solution 함수를 작성해 주세요.    아이디어      boolean인 flag를 이용해 삼항 연산자로 두 분기를 계산해 리턴한다.   내 코드   function solution(a, b, flag) {     return flag ? a + b : a - b; }   단순히 삼항 연산자를 사용해 풀었고,  다른 분들의 풀이도 비슷하여 이하 내용은 생략한다.  ","categories": ["algorithm-programmers"],
        "tags": ["algorithm","JS","programmers"],
        "url": "/algorithm-programmers/181933/",
        "teaser": null
      },{
        "title": "React-Query의 useQueryClient",
        "excerpt":"useQuery 고급 기능 및 useQueryClient   onSuccess, onError, onSettled  onSuccess  mutation이 성공적으로 완료되었을 때 해당 요청의 result를 반환  Promise 객체 반환시 모든 객체의 진행이 끝나고 나서 실행된다.  onError  mutation이 오류 발생시 실행 Promise 객체 반환시 모든 객체의 진행이 끝나고 나서 실행된다.  onSettled  성공 혹은 실패에 상관 없이 실행된다.      useMutation에서 콜백 실행 순서 ```javascript useMutation(addTodo, {  onSuccess: (data, variables, context) =&gt; {    // I will fire first  },  onError: (error, variables, context) =&gt; {    // I will fire first  },  onSettled: (data, error, variables, context) =&gt; {    // I will fire first  },`` });   mutate(todo, {    onSuccess: (data, variables, context) =&gt; {      // I will fire second!    },    onError: (error, variables, context) =&gt; {      // I will fire second!    },    onSettled: (data, error, variables, context) =&gt; {      // I will fire second!    }, });  ## select, keepPreviousData, placeholderData ### select select 옵션을 사용하면 `useQuery`에서 반환된 데이터 중 특정 부분만 선택할 수 있다. ```javascript useQuery(\"user\", fetchUser, { select : data =&gt; data.data })  const { data, isLoading } = useQuery(\"user\", fetchUser, { select: data =&gt; ({ id: data.id, name: data.name })});  Parallel, Dependent Queries, useQueryClient  useQuery의 delayQuery 이해 및 활용   https://velog.io/@kimhyo_0218/React-Query-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%BF%BC%EB%A6%AC-useMutation-%EA%B8%B0%EB%B3%B8-%ED%8E%B8  https://velog.io/@apro_xo/ReactQuery-useQuery-select-%EC%98%B5%EC%85%98   ``  ","categories": [],
        "tags": ["React-Query","Frontend"],
        "url": "/useQueryClient-useQuery/",
        "teaser": null
      },{
        "title": "React-Query의 useQueryClient",
        "excerpt":"React-Query 기본 설정   React Query는 클라이언트에서 ‘서버 상태’를 관리하기 위한 라이브러리다.  React 환경에서 기존 Redux와 같은 상태 관리 라이브러리는 클라이언트 데이터의 상태 관리를 위한 라이브러리이기 때문에, 서버에서의 데이터 상태가 쉽게 outdate 되는 등의 문제가 발생한다.  이를 방지하기 위해 간결한 코드와 지속적으로 서버 데이터를 업데이트하는 기능을 제공해주는 게 React Query다.   React Query의 설치 및 초기 설정   설치   npm i @tanstack/react-query@beta # npm yarn add @tanstack/react-query@beta # yarn   EsLint Plugin Query를 설치하는 명령어는 아래와 같다.   npm i -D @tanstack/eslint-plugin-query@beta # npm yarn add -D @tanstack/eslint-plugin-query@beta # yarn   ESLink 플러그인으로 설치하였을 경우 플러그인 폴더??에 있는 .eslintrc 파일에 아래를 추가한다   {   \"plugins\": [\"@tanstack/query\"] } {   \"rules\": {     \"@tanstack/query/exhaustive-deps\": \"error\", // 규칙 추가하기   } } {   \"extends\": [\"plugin:@tanstack/eslint-plugin-query/recommended\"] // 모든 권장 규칙 활성화하기 }   React Query Devtools의 설치 및 활용 방법   설치   아래 패키지를 설치하면 된다.   $ npm i @tanstack/react-query-devtools # npm $ yarn add @tanstack/react-query-devtools # yarn   사용 방법   DevTools로 최상위 앱 컴포넌트를 감싸준다. (페이지의 루트에 가까울 수록 작동이 잘 된다.)  이렇게 감싸주면 앱 화면에서 토글 버튼으로 개발자 도구를 열어서 사용할 수 있다.   import { ReactQueryDevtools } from \"@tanstack/react-query-devtools\";  function App() {     return (         &lt;QueryClientProvider client={queryClient}&gt;             &lt;MyApp /&gt;             &lt;ReactQueryDevtools initialIsOpen={false} /&gt;         &lt;/QueryClientProvider&gt;     ); }   설정 속성들에 대한 설명이다.      initialIsOpen : true이면 열린 상태로 시작                                   buttonPosition : 토글 버튼이 뜨는 위치. \"top-left\"(기본값)           \"top-right\"           \"bottom-left\"           \"bottom-right\"                           buttonPosition?: \"top-left\" | \"top-right\" | \"bottom-left\" | \"bottom-right\"awww                                      position : devTools 패널이 뜨는 위치. \"top\"           \"bottom\"(기본값)           \"left\"           \"right\"                           client: 어떤 QueryClient를 개발자 도구에서 사용할 것인지   errorTypes?: { name: string; initializer: (query: Query) =&gt; TError}      errorTypes : 쿼리에서 트리거되는 오류들을 정의해두고, 오류가 발생하면 initializer가 호출된다.   errorTypes?: { name: string; initializer: (query: Query) =&gt; TError}   React Query의 주요 옵션들에 대한 이해   React Query의 전반적인 아키텍처와 데이터 흐름에 대한 이해      https://dreamcode.tistory.com/440  https://sanoo.dev/react-query  ","categories": [],
        "tags": ["React-Query","Frontend"],
        "url": "/useQueryClient/",
        "teaser": null
      },{
        "title": "TypeScript 프로젝트 세팅",
        "excerpt":"   [NomadCoders의 ](https://nomadcoders.co/typescript-for-beginners/) 수업을 참고하여 작성하였습니다.    VSCode를 사용하고 TypeScript를 이미 설치한 경우, 프로젝트 폴더에 tsconfig.json이 있으면 자동으로 해당 프로젝트가 TypeScript 기반임을 인식한다.   기본 환경      NodeJS   TypeScript 설치   npm i -D typescript   TypeScript 프로젝트 생성   1. Node 프로젝트 생성   프로젝트를 만들 폴더로 가서 아래 명령어를 실행한다.   npm init -y   2. tsconfig.json 파일 생성   프로젝트 루트 폴더에 tsconfig.json 파일을 추가한다.  아래와 같은 내용을 작성한다.   {     \"include\": [\"src\"], // ts 파일이 위치할 경로     \"compilerOptions\": {         \"outDir\": \"build\", // 컴파일된 js 파일이 위치할 경로         \"target\": \"es6\" // 디폴트는 es2016. 특정 버전의 js로 컴파일되기를 원할 시에 수정     } }   명령어를 통해 간단히 디폴트 파일을 만들어줄 수도 있다.   tsc --init # tsconfig.json 파일 생성   2. package.json 수정   package.json에서 \"main\": \"index.js\"를 삭제하고 \"scripts\" 항목을 수정한다.   {     ...     \"scripts\": {         \"build\": \"tsc\"     }     ... }   npm run build 명령어를 실행하면 tsc 명령어가 자동으로 실행되면서 빌드가 완료된다.  ","categories": ["TypeScript"],
        "tags": ["TypeScript"],
        "url": "/typescript/ts-settings/",
        "teaser": null
      },{
        "title": "2023-10-03 TIL",
        "excerpt":"오늘 한 일      프로그래머스 알고리즘 풀이            lv.0 특정 문자 제거하기       lv.0 배열 원소의 길이       lv.0 최댓값 만들기(1)       lv.0 중복된 숫자 개수       lv.2 연속 부분 수열 합의 개수           Github 블로그 다시 세팅            기존에 쓰던 테마가 불편해서 TIL을 그냥 레포나 노션에 작성하고 있었는데, 이번에 좋은 테마를 찾아서 다시 세팅했다.  minimal-mistakes 사용하기로 했고, 지금은 할게 많으니 커스텀은 나중에…하자…                    도움이 되었던 글들                            기본 세팅에 도움된 글               포스트 설정에 참고한 글               나중에 글 인덱싱 or 게시글 리스트 커스텀에 참고하면 좋을 글 1               나중에 글 인덱싱 or 게시글 리스트 커스텀에 참고하면 좋을 글 2                                                  ","categories": ["til"],
        "tags": ["minimal-mistakes","blog"],
        "url": "/til/TIL-231003/",
        "teaser": null
      },{
        "title": "2023-10-04 TIL",
        "excerpt":"오늘 한 일      프로그래머스 알고리즘 풀이            lv.0 편지       lv.0 모음 제거       lv.0 배열 두 배 만들기       lv.0 피자 나눠 먹기 (1)       lv.0 피자 나눠 먹기 (3)       lv.2 영어 끝말잇기           Github 블로그 폰트 변경 및 사이드 바 추가   금일 면접 최종 준비   회고   면접      오늘 유선 인터뷰가 하나 있었다.  짧은 시간 진행하는 1차 면접이었지만 슬슬 면접을 계속 봐야 한다고 생각하니 참 떨렸다…  1차 인터뷰인지 딥한 기술적 질문이 있지는 않았다. 태도나 스스로의 생각을 어떤 식으로 표현하는지 위주로 평가하신 것 같았다.   이력서 쓰고 면접 준비하며 항상 느끼는 게 있다.  뭐든지 평소에 해두자. 내가 매일 매일 충실하게 일하고 공부하면 그게 쌓여서 매력적인 이력서가 되고 깊이 있는 답변이 된다는 생각이 매번 든다.   부트캠프를 하기 전과 끝난 지금 생각이 달라진 부분이 많다.  특히 개발자로서 성장할 때 가장 중요한 게 뭔지를 처음에는 전혀 몰랐다. (심지어 멘토들이 이야기해주셔도 감을 못 잡았음)  여기에 대해선 나를 채용 시장에 어필하기 위해 노력해야 하는 지금에야 조금씩 이해할 수 있게 됐다.  처음에는 마냥 개발을 잘 해야 한다고 생각했다. 그런데 사실 잘 한다는 표현에는 대상과 방향성이 빠져있다.  3달간 바쁘게 공부하면서 내린 현재의 결론은, 결국 개발자란 돈 버는 서비스를 구현하는 사람들이며 빠르고 효율적으로 구현할 수록 잘 하는 거다.  그리고 주니어인 나는 빠르고 효율적으로 구현할 수는 없지만, 앞으로 그렇게 될 만한 싹이어야 한다.  시간이 지날 수록 구현을 잘하는 사람은 곧 경험을 토대로 성장한다는 것이고, 경험을 토대로 성장하려면 그 경험을 나름의 기준으로 분석해서 경험치화할 수 있어야 한다.   그러면 어떻게 경험치를 쌓을 수 있는가?  성장했다는 것은 비포와 애프터의 차이가 있다는 뜻이다. 비포와 애프터에 대한 기준 즉 정량화가 필요하다. 그래서 명확한 근거를 갖고 사고하는 연습이 중요하다. 이는 개인의 성장에도 서비스의 발전에도 적용되는 부분인 것 같다.   나의 경우, 기준을 갖고 사고하는 연습을 위해 블로그를 열심히 쓰기로 했다… 아무리 쓰는 게 쉽지 않아도!  ","categories": ["til"],
        "tags": ["algorithm","면접"],
        "url": "/til/TIL-231004/",
        "teaser": null
      },{
        "title": "minimal-mistakes 커스터마이징 : 폰트 변경하기",
        "excerpt":"웹폰트 이용해 폰트를 변경하자   minimal-mistakes의 딱딱한(?) 기본 폰트 대신, 가독성 끝장인 프리텐다드 폰트를 적용해보자.  폰트를 변경하는 방법은 이 글을 참고하였다.   방식을 간단히 요약하자면,      main.scss에 웹폰트를 정의한다.   _variables.scss에 새로 사용할 폰트를 변수로 정의한다.   1. 웹폰트 정의하기   폰트는 웹폰트를 사용할 것이다.  추가할 코드는 여기에서 참고할 수 있다.  다양한 방식을 선택할 수 있는데, 나는 font-face 방식을 선택했다.   font-face 방식의 경우 assets/css/main.scss 경로에 들어가 추가해주면 된다.   --- # Only the main Sass file needs front matter (the dashes are enough) search: false ---  @charset \"utf-8\";  @import \"minimal-mistakes/skins/dirt\"; // skin @import \"minimal-mistakes\"; // main partials  // 추가할 코드 @font-face {     font-family: \"Pretendard\";     font-weight: 400;     font-style: normal;     src: url(\"https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.eot\");     src: url(\"https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.eot?#iefix\") format(\"embedded-opentype\"),         url(\"https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.woff2\") format(\"woff2\"),         url(\"https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.woff\") format(\"woff\"), url(\"https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.ttf\")             format(\"truetype\");     font-display: swap; }   사용하고 싶은 굵기의 font-face들을 등록해준다.   2. 웹폰트 적용하기   실 적용은 _sass/minimal-mistakes/vendor/_variables.scss에서 해주면 된다.  새로운 폰트명을 변수로 정의해준 뒤, $serif 혹은 $sans-serif 변수의 맨 왼쪽에 새 폰트 변수를 추가해준다.   $custom-font: \"Pretendard\"; // font-face에 font-family로 지정된 이름을 넣어준다. $sans-serif: $custom-font, -apple-system, BlinkMacSystemFont, \"Roboto\", \"Segoe UI\", \"Helvetica Neue\", \"Lucida Grande\", Arial,     sans-serif !default;  ","categories": ["Github Blogs"],
        "tags": ["minimal-mistakes","blog"],
        "url": "/github%20blogs/minimal-mistakes-font/",
        "teaser": null
      },{
        "title": "프로그래머스 문자열안에 문자열 자바스크립트 알고리즘 풀이",
        "excerpt":"문제   문제 링크     나의 풀이   function solution(str1, str2) {     return str1.match(str2) !== null ? 1 : 2; }   match 메서드는 매개변수의 문자열 or 정규식과 대상 문자열이 일치하는 경우 일치 문자열 결과를 담은 배열을 반환한다.  일치되지 않으면 null을 반환한다.  그러므로 str1.match(str2)의 결과값이 null이 아니면 1, 그 외에는 2를 반환한다.   다른 사람 풀이   function solution(str1, str2) {     return str1.indexOf(str2) === -1 ? 2 : 1; }   indexOf를 이용한 풀이.  만약 일치 부분이 없으면 -1를 반환하는 점을 이용했다.   function solution(str1, str2) {     return str1.includes(str2) ? 1 : 2; }   includes를 이용한 풀이.  true / false로 반환되므로 그대로 조건문에 이용했다.     레퍼런스      MDN String.prototype.match()  ","categories": ["algorithm-programmers"],
        "tags": ["algorithm","JS","programmers"],
        "url": "/algorithm-programmers/120908/",
        "teaser": null
      },{
        "title": "minimal-mistakes 커스터마이징 : 태그 목록 페이지 만들기",
        "excerpt":"minimal-mistakes 테마에서 태그 목록 페이지를 만들어보자.  태그 목록 페이지는 테마 자체에서 제공해주는 기능이 있어 생성이 매우 간편하다.  (추가적인 설명은 이 글을 참고하였다.)   설정 확인하기   minimal-mistakes에서 제공하는 tag_archive 설정이 있다.  _config.yml 파일에 가보면 아래 부분을 확인할 수 있다.   # Archives tag_archive:     type: liquid     path: /tags/   이 부분을 주석 처리하지 않고 두면 태그 목록 페이지 기능이 활성화된다.   페이지 만들기   위 설정이 활성화되어있다면, 다음은 태그를 눌렀을 때 연결될 페이지만 생성해주면 된다.  _pages 폴더 밑에 아래 md 파일을 하나 생성해준다.   --- title: \"Posts by Tag\" permalink: /tags/ layout: tags author_profile: true ---   하나씩 살펴보면,      title: 태그 목록 페이지에 나올 제목   permalink: 연결될 링크.  _config.yml을 보면 현재 태그 목록 페이지는 /tags/ 경로로 갔을 때 연결된다고 되어있다.  이 경로가 새로 만들 태그 목록 페이지의 permalink에 들어가야 한다.   layout: tags로 설정해두면 테마에서 제공하는 기본 태그 목록 페이지 레이아웃을 사용할 수 있다.   author_profile: true일 경우 프로필이 나오고, false일 경우 나오지 않는다.      ","categories": ["Github Blogs"],
        "tags": ["minimal-mistakes","blog"],
        "url": "/github%20blogs/minimal-mistakes-tags/",
        "teaser": null
      },{
        "title": "2023-10-06 TIL",
        "excerpt":"오늘 한 일      프로그래머스 알고리즘 풀이            lv.0 삼각형의 완성조건 (1)       lv.0 머쓱이보다 키 큰 사람           이력서 피드백 받고 수정하기   예상 면접 질문 답변 달기   공고 지원하기. 오늘은 총 7곳에 지원을 넣었다.   회고      이력서가 계속 마음에 들지 않아 지원을 넣기 망설이고 있었다. 어제부터 각잡고 열심히 경력 및 프로젝트 파트를 수정했다. 피드백도 받았다.  확실히 서류는 계속 고치고 피드백 받아야 퀄리티가 올라가는 것 같다.  또 이력서만 마냥 고치는 것보다는, 부족하더라도 어떻게든 면접 기회를 잡아서 질답을 하다 보면 그 자체로 이력서의 방향이 잡히기도 한다. 이제는 조금 더 공격적으로 지원을 넣어볼 생각이다.  ","categories": ["til"],
        "tags": ["algorithm","이력서"],
        "url": "/til/TIL-231006/",
        "teaser": null
      },{
        "title": "프로그래머스 머쓱이보다 키 큰 사람 자바스크립트 알고리즘 풀이",
        "excerpt":"문제   문제 링크     나의 풀이   아이디어   두 가지 아이디어가 생각났다.      height보다 큰 값을 filter로 구하고 반환된 배열의 length를 반환한다.   내림차순으로 sort한 뒤 indexOf로 머쓱이의 키가 있는 인덱스 + 1을 반환한다.   실제로 돌려보니 2번의 경우 머쓱이의 키가 array에 포함되어있지는 않는 것 같다. 그래서 1번 아이디어로 진행했다.   코드   function solution(array, height) {     return array.filter((v) =&gt; v &gt; height).length; }   다른 사람 풀이   function solution(array, height) {     let result = 0;     array.map((arr) =&gt; height &lt; arr &amp;&amp; result++);      return result; }   map을 이용한 풀이.  ","categories": ["algorithm-programmers"],
        "tags": ["algorithm","JS","programmers"],
        "url": "/algorithm-programmers/120585/",
        "teaser": null
      },{
        "title": "프로그래머스 삼각형의 완성조건 (1) 자바스크립트 알고리즘 풀이",
        "excerpt":"문제   문제 링크     나의 풀이   아이디어      sort로 sides를 내림차순 정렬하여 가장 큰 변이 0번 인덱스에 오게 한다.   나머지 변들의 길이 합보다 0번 인덱스 값보다 작은지를 확인하여 참이면 1 거짓이면 2를 반환한다.   코드   function solution(sides) {     sides.sort((a, b) =&gt; b - a);     return sides.at(0) &lt; sides.at(1) + sides.at(2) ? 1 : 2; }   다른 사람 풀이   function solution(sides) {     var answer = 0;     const max = Math.max(...sides);     const sum = sides.reduce((a, b) =&gt; a + b, 0) - max;      answer = max &lt; sum ? 1 : 2;      return answer; }   Math.max를 통해 가장 큰 변의 길이를 구하고,  reduce를 통해 나머지 변들의 길이 합을 구해 비교한 풀이이다.   function solution(sides) {     const [long, a, b] = sides.sort((a, b) =&gt; b - a);     return long &lt; a + b ? 1 : 2; }   나와 같은 로직인데 구조분해를 사용해서 굉장히 가독성이 높아졌다.  ","categories": ["algorithm-programmers"],
        "tags": ["algorithm","JS","programmers"],
        "url": "/algorithm-programmers/120889/",
        "teaser": null
      },{
        "title": "2023-10-07 TIL",
        "excerpt":"오늘 한 일     프로그래머스 알고리즘 풀이            lv.0 숨어있는 숫자의 덧셈 (1)       lv.0 짝수는 싫어요       lv.2 숫자의 표현           수요일에 진행했던 면접의 내용 정리 및 피드백을 마쳤다.   새로 구입한 맥북의 기본 설정…            특히 M2 환경에서 ruby를 설치할 때 애먹은 게 많았는데, 이건 나중에 글로 작성해둬야겠다.           회고     면접에서 어떻게 답변했는지를 복기하며… 1차를 붙은게 살짝 용하다 싶지만(?)  나름의 잘했던 점과 개선할 점을 돌이켜보았다.            먼저 이어나갈 점의 경우.  답변이 완벽해야 한다고 생각했는데 최대한 근거를 들어서 일관되게 설명하고자 하고, 나름의 관점을 갖고 답변하려고 했던 점을 좋게 봐주신 게 아닐까 생각이 들었다.  왜냐하면, 이제 와서 보니 논리 자체가 엉망이거나 정확하지 않은 답변들도 꽤 보이기 때문이다.  (심지어 개념을 몰라 제대로 답변하지 못한 질문도 있었다. 이 부분은 솔직하게 아는 내용이 없다고 말씀 드렸었는데, 이 와중에 애매하게 아는 척을 했으면 좋은 인상을 드리기 어려웠을 것 같다.)  내 생각에 대해 논리적인 자세를 유지하며 능동적으로 말하고자 한 부분은 잘 했다고 생각한다.       반대로 개선할 점을 꼽아보자면.  짧게 끊어 말하는 연습을 하자.  또한 두괄식으로 결론을 먼저 말하는 편이 좋을 것 같다.  너무 바로 대답하는 것에 강박을 가질 필요 없이 여유로운 템포로 내용을 가다듬고 말해도 좋을 것 같았다.          ","categories": ["til"],
        "tags": ["algorithm","ruby"],
        "url": "/til/TIL-231007/",
        "teaser": null
      },{
        "title": "프로그래머스 짝수는 싫어요 자바스크립트 알고리즘 풀이",
        "excerpt":"문제  문제 링크     나의 풀이  아이디어     1부터 반복문을 돌며 새로운 배열에 숫자를 넣어준다. (숫자는 2씩 증가하여 1, 3, 5… 식으로 들어갈 것이다.)   반복문의 종료 조건은 숫자가 n보다 작거나 같을 때이다.     코드      function solution(my_string) {   return [...my_string].reduce((total, v) =&gt; total + (Number(v) || 0), 0); }           다른 사람 풀이  function solution(my_string) {     const answer = my_string.replace(/[^0-9]/g, '')                             .split('')                             .reduce((acc, curr) =&gt; acc + Number(curr), 0);     return answer; }  정규식을 이용해 숫자에 해당하는 부분만 걸러내어 더한 풀이  ","categories": ["algorithm-programmers"],
        "tags": ["algorithm","JS","programmers"],
        "url": "/algorithm-programmers/120813/",
        "teaser": null
      },{
        "title": "프로그래머스 숨어있는 숫자의 덧셈 (1) 자바스크립트 알고리즘 풀이",
        "excerpt":"문제  문제 링크     나의 풀이  아이디어     주어진 문자열을 배열로 전개한 다음, reduce 메서드를 통해 순회힌다.   현재의 문자를 숫자로 형변환해 더한다. 만일 숫자가 아니라면 falsy 값인 NaN이 반환되므로 이때는 0으로 예외처리한다.     코드      function solution(my_string) {  return [...my_string].reduce((total, v) =&gt; total + (Number(v) || 0), 0); }           다른 사람 풀이  function solution(my_string) {     const answer = my_string.replace(/[^0-9]/g, '')                             .split('')                             .reduce((acc, curr) =&gt; acc + Number(curr), 0);     return answer; }  정규식을 이용해 숫자에 해당하는 부분만 걸러내어 더한 풀이  ","categories": ["algorithm-programmers"],
        "tags": ["algorithm","JS","programmers"],
        "url": "/algorithm-programmers/120851/",
        "teaser": null
      },{
        "title": "프로그래머스 숫자의 표현 자바스크립트 알고리즘 풀이",
        "excerpt":"문제  문제 링크     나의 풀이  아이디어  연속된 숫자끼리 더해야 하므로,     숫자끼리 더한 합이 sum보다 작을 경우?            다음 자연수로 넘어가서 더하기           숫자끼리 더한 합이 sum과 동일할 경우?            ++count 후 break           숫자끼리 더한 합이 sum보다 클 경우?            break         코드          function solution(n) {   let answer = 1; // 자기 자신   for(let i = 1; i &lt;= n; ++i) {    let sum = i;   for(let j = i+1; j &lt;= n; ++j){       sum += j;       if(sum === n) {           ++answer;           break;       }       else if(sum &gt; n) {           break;       }   }   }   return answer; }                           다른 사람 풀이  이번 문제는 유난히 수학 괴물(?)들의 풀이가 많았다.  function expressions(num) {     var answer = 0;     for (var i = 1; i &lt;= num; i++) {         if ((num % i == 0) &amp;&amp; (i % 2 == 1)) {             answer++;         }     }     return answer; }  등차수열의 합 공식에서 도출한 홀수 약수 개수와 연속된 자연수의 합 개수의 상관관계를 이용한 풀이.  연속된 자연수의 개수가 k이고 합이 시작하는 자연수를 m이라고 할 때, k(2m+k−1)=2n 이라는 공식이 나온다.  이때 k가 홀수인 경우 2m+k-1도 홀수이기 때문에 k는 n의 홀수 약수가 된다.  n을 연속된 자연수의 합으로 나타내는 방법의 수는 n의 홀수 약수의 개수와 동일해진다.  ","categories": ["algorithm-programmers"],
        "tags": ["algorithm","JS","programmers"],
        "url": "/algorithm-programmers/12924/",
        "teaser": null
      },{
        "title": "2023-10-08 TIL",
        "excerpt":"오늘 한 일     프로그래머스 알고리즘 풀이            lv.0 옷가게 할인 받기           블로그에 전체 글 수가 보이게 추가해봤다.   ","categories": ["til"],
        "tags": [],
        "url": "/til/TIL-231008/",
        "teaser": null
      },{
        "title": "프로그래머스 옷가게 할인 받기 자바스크립트 알고리즘 풀이",
        "excerpt":"문제  문제 링크     나의 풀이  아이디어     중첩된 삼항 연산자로 큰 금액일 때부터 할인율을 적용해 리턴한다.   소수점 이하를 버려야 하므로 Math.trunc 나 비트 연산자, 틸트 연산자 등을 활용한다.     코드      function solution(price) {   return price * (price &gt;= 500000 ? 0.8 : price &gt;= 300000 ? 0.9 : price &gt;= 100000 ? 0.95 : 1) &gt;&gt; 0; }           다른 사람 풀이  const solution=(p)=&gt;~~(p*[1, 0.95, 0.95, 0.9, 0.9, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8][~~(p/100000)])  0~9부터 할인율을 배열로 넣어두고, ~~(p/100000)로 배열의 인덱스를 계산하여 p와 곱하면 할인율이 적용된 값이 나온다.  ","categories": ["algorithm-programmers"],
        "tags": ["algorithm","JS","programmers"],
        "url": "/algorithm-programmers/120818/",
        "teaser": null
      },{
        "title": "minimal-mistakes 커스터마이징 : 전체 글 수 표시하기",
        "excerpt":"minimal-mistakes 테마의 사이드바를 조금 더 커스텀해보자.  오늘은 전체 글 수를 표시하는 아주 간단한 커스텀을 진행해보기로 했다.    메뉴에 전체 게시글 수 추가하기  _includes 폴더 하위에 nav_list라는 파일이 있다.  이전에 카테고리별 포스팅 갯수를 표시할 때도 이 파일을 수정했었다.  전체 글 수를 표시하려면 총 두 가지 수정을 하면 되는데,     전체 포스팅 수를 변수에 담는다.   태그를 추가한다.       &lt;nav class=\"nav__list\"&gt;      &lt;input id=\"ac-toc\" name=\"accordion-toc\" type=\"checkbox\" /&gt;   &lt;label for=\"ac-toc\"&gt;토글 메뉴&lt;/label&gt;   &lt;li&gt; 전체 글 (90) &lt;/li&gt;    &lt;ul class=\"nav__items\"&gt;        &lt;/ul&gt; &lt;/nav&gt;    레퍼런스     투피쉬님의 글  ","categories": ["Github Blogs"],
        "tags": ["minimal-mistakes","blog"],
        "url": "/github%20blogs/minimal-mistakes-total-articles/",
        "teaser": null
      },{
        "title": "2023-10-09 TIL",
        "excerpt":"오늘 한 일     프로그래머스 알고리즘 풀이            lv.0 순서쌍의 개수       lv.2 올바른 괄호          ","categories": ["til"],
        "tags": [],
        "url": "/til/TIL-231009/",
        "teaser": null
      },{
        "title": "프로그래머스 순서쌍의 개수 자바스크립트 알고리즘 풀이",
        "excerpt":"문제  문제 링크     나의 풀이  아이디어     n의 제곱근을 기준으로, 순서쌍은 대칭을 이룬다.  예를 들어 n이 20이라면 (1, 20), (2, 10), … (10, 2), (20, 1) 이렇게 된다.  그러므로 제곱근보다 작은 수까지만 반복문을 순회한다.   반복문 내에서는 n이 어떤 자연수로 나누어떨어질 경우 카운팅한다.   절반만 순회하였으므로 대칭되는 나머지 경우의 수를 더하기 위해 count * 2해주고, n의 제곱근이 자연수인 경우 순서쌍이 하나 더 발생하므로 + 1해준다.     코드      function solution(n) {   let count = 0;   for(let i = 1; i &lt; Math.sqrt(n); ++i) { n % i === 0 &amp;&amp; count++; }   count = count * 2 + (Math.sqrt(n) === ~~(Math.sqrt(n)) ? 1 : 0);   return count; }           다른 사람 풀이  function solution(n) {     let ans = 0;     for (let i = 1; i &lt; Math.sqrt(n); i++)         if (n%i === 0) ans+=2;      return Number.isInteger(Math.sqrt(n)) ? ans+1 : ans; }  반복문에서 바로 2씩 더해주고, 리턴문에 Number.isInteger 메서드를 사용한 부분이 나와 달랐다.  function solution(n) {     return Array(n).fill(1).map((v,idx) =&gt; v + idx).filter(v =&gt; n % v === 0).length }  1~n까지의 배열을 만든 뒤 filter 함수를 사용한 결과물의 length를 반환한 풀이.  ","categories": ["algorithm-programmers"],
        "tags": ["algorithm","JS","programmers"],
        "url": "/algorithm-programmers/120836/",
        "teaser": null
      },{
        "title": "프로그래머스 올바른 괄호 자바스크립트 알고리즘 풀이",
        "excerpt":"문제  문제 링크     나의 풀이  아이디어  올바른 괄호가 되지 않을 경우를 먼저 생각해보면,     문자열이 닫힌 괄호로 시작했거나, 열린 괄호로 끝나버리면 무조건 false   문자열이 끝났는데 열린 괄호가 다 닫히지 않을 경우   열린 괄호가 없는 상태에서 닫는 괄호가 나올 경우  가 된다.   두 번째, 세 번째 경우를 검증하기 위해서, 열려있는 괄호를 카운트하고 닫는 괄호가 나올 경우 다시 카운트를 줄이는 방식을 쓰기로 했다.  코드  function solution(s){     if(s.at(0) === ')' || s.at(-1) === '(') return false;     let cnt = 0;     for(let i = 0; i &lt; s.length; ++i){         if(s.at(i) === '(') ++cnt; // 괄호 열기. ++카운트         else {             if(cnt === 0) return false; // 열린 괄호가 없는데 닫는 괄호가 나올 경우 false             else --cnt; // 괄호 닫기. --카운트         }     }     return cnt === 0 ? true : false; // 문자열이 끝났는데 열린 괄호가 다 닫히지 않았을 경우 false }   다른 사람 풀이  function solution(s){     let cum = 0     for (let paren of s) {         cum += paren === '('? 1: -1         if(cum &lt; 0) {             return false         }     }     return cum === 0? true: false; }  같은 로직인데 굉장히 깔끔하게 정리된 풀이.  생각해보니 나같은 경우 시작 문자, 끝문자를 먼저 체크했는데 중복되는 로직이었다는 걸 이 풀이 덕에 깨달을 수 있었다.  또한 열린 괄호가 없을 경우를 굳이 if문으로 빼지 않고 카운트가 마이너스 될 경우만 생각하면 되었다는 사실도 알 수 있었다.  ","categories": ["algorithm-programmers"],
        "tags": ["algorithm","JS","programmers"],
        "url": "/algorithm-programmers/12909/",
        "teaser": null
      },{
        "title": "2023-10-10 TIL",
        "excerpt":"오늘 한 일     프로그래머스 알고리즘 풀이            lv.0 배열의 유사도       lv.2 짝지어 제거하기           5개 기업 지원.            다양한 공고 플랫폼을 확인하려고 하고 있다. 오늘은 사람인 쪽을 보았다.          ","categories": ["til"],
        "tags": [],
        "url": "/til/TIL-231010/",
        "teaser": null
      },{
        "title": "프로그래머스 배열의 유사도 자바스크립트 알고리즘 풀이",
        "excerpt":"문제  문제 링크     나의 풀이  아이디어     s1 원소들 중 조건에 맞는 것들만 filter 함수를 써서 거른 다음 걸러진 원소들의 길이를 반환한다.            filter 함수 내부에는 indexOf를 사용해서 -1보다 큰 값이 나올 경우 일치한다고 판단한다.         코드          function solution(s1, s2) {   return s1.filter(v =&gt; s2.indexOf(v) &gt;= 0).length; }                           다른 사람 풀이  function solution(s1, s2) {   return s1.filter((v) =&gt; s2.includes(v)).length; }  나와 다르게 indexOf 대신 includes를 사용한 풀이.  function solution(s1, s2) {   const concat = [...s1, ...s2];   const setConcat = Array.from(new Set(concat));    return concat.length - setConcat.length; }  중복 요소가 허용되지 않는 set의 특성을 이용한 재미있는 풀이.  s1과 s2의 전체 원소들 개수에서 s1과 s2의 set 개수를 빼주었다.  ","categories": ["algorithm-programmers"],
        "tags": ["algorithm","JS","programmers"],
        "url": "/algorithm-programmers/120903/",
        "teaser": null
      },{
        "title": "프로그래머스 짝지어 제거하기 자바스크립트 알고리즘 풀이",
        "excerpt":"문제  문제 링크     나의 풀이  아이디어 1 : 실패     문자열을 배열화한다.   겹치는 알파벳들이 나타나면 둘을 splice로 배열에서 제거한 뒤 첫 인덱스부터 다시 검사한다.     코드      let arr = s.split(\"\");   let i = 0; // 체크용 인덱스   while(i &lt; arr.length - 1) {       if(arr[i] === arr[i + 1]){           arr.splice(i, 2);           i = 0;       } else ++i;   }   return arr.length === 0 ? 1 : 0;          시간 초과로 대차게 실패!       아이디어 2 : 실패     2개가 겹치는 시작 인덱스를 찾을 때까지 문자열을 기록해둔다.   겹치는 시작 인덱스를 찾으면 기록해둔 문자열 길이만큼의 인덱스를 체크한다.            대칭이면 넘기고 끝나는 인덱스부터 다시 1번 검증 시작       대칭 안맞으면 break         코드          let arr = [...s];   let temp = [];   for(let i = 0; i &lt; arr.length - 1; ++i) {   temp.push(s[i]);   if(s[i] === s[i+1]){       if([...temp].reverse().join(\"\") === arr.slice(i+1, i + 1 + temp.length).join(\"\")) {            i += (temp.length + 1);           temp = [];       } else {           return 0;       }   }   }   return temp.length &gt; 0 ? 0 : 1;                  일부가 통과되지 않았다.  조건이 맞으면 검사한 만큼 인덱스를 넘겨버렸는데 이 부분이 문제가 될 수있겠다는 생각이 들었다.                   아이디어 3 : 성공  좀더 고민하다가 스택과 같은 방식으로 풀어보기로 했다.     빈 문자열을 만든 뒤, 반복문을 돌며 아래와 같은 로직을 수행한다.            스택에 값이 있고 스택 내 값과 현재 검사하는 값이 동일하면 =&gt; 2개의 알파벳이 중복되는 상황. 스택의 마지막 원소를 pop한다                    선입후출이기 때문에 대칭되는 값들이 순차적으로 pop될 것이다.                       위의 상황이 아니라면 현재 검사하는 값을 push해준다.           반복문이 완료된 후 스택에 남은 값이 있다면 알파벳들이 붙어있지 않았다는 뜻이므로 0 리턴한다.     코드      let temp = [];   for(let v of s){       if(temp.length &gt; 0 &amp;&amp; temp.at(-1) === v) {           temp.pop();       } else temp.push(v);   }   return temp.length === 0 ? 1 : 0;           다른 사람 풀이  대부분 스택 방식을 선택하여 풀었고, 내부 조건의 경우도 유사하여 생략한다.  ","categories": ["algorithm-programmers"],
        "tags": ["algorithm","JS","programmers"],
        "url": "/algorithm-programmers/12973/",
        "teaser": null
      },{
        "title": "2023-10-11 TIL",
        "excerpt":"오늘 한 일     프로그래머스 알고리즘 풀이            lv.0 중앙값 구하기       lv.0 제곱수 판별하기       lv.0 세균 증식           회고     오늘은 가고 싶었던 회사의 2차 면접일이었다.  어제까지 잔뜩 떨었지만, 오늘은 준비해둔 답변을 읽거나 하지 않고 오히려 내가 회사에 궁금했던 점들을 다시 정리했다.  다행히 면접 분위기도 정말 좋았고(지원자인 나를 평가하기 보다는 나의 생각 자체를 진심으로 궁금해해주셔서 참 인상깊었다.) 나도 점점 편안한 마음으로 솔직히 답변 드렸다.  놀랍게도 집에 돌아가는 길에 합격 연락을 받았고, 감사하게도 어떤 부분이 긍정적으로 보여져서 합격을 결정하셨는지까지 들을 수 있었다.   지금도 얼떨떨하다. 붙고 싶었던 회사라 더욱 그렇다.  하지만 너무 풀어지지 않고, 매일 루틴으로 하던 공부도 놓지 않고 오늘 있었던 면접도 차근히 복기해보려 한다.   ","categories": ["til"],
        "tags": ["면접"],
        "url": "/til/TIL-231011/",
        "teaser": null
      },{
        "title": "프로그래머스 중앙값 구하기 자바스크립트 알고리즘 풀이",
        "excerpt":"문제  문제 링크     나의 풀이  아이디어     배열을 정렬한다.   정렬 후에는 중간값이 배열의 중간 요소에 있을 것이므로, 해당 인덱스(배열 총 길이 / 2)의 값을 리턴해준다.     코드      function solution(array) {   return array.sort((a, b) =&gt; a - b)[~~(array.length / 2)]; }           다른 사람 풀이  나의 풀이와 대부분 유사하기 때문에 생략.  ","categories": ["algorithm-programmers"],
        "tags": ["algorithm","JS","programmers"],
        "url": "/algorithm-programmers/120811/",
        "teaser": null
      },{
        "title": "프로그래머스 제곱수 판별하기 자바스크립트 알고리즘 풀이",
        "excerpt":"문제  문제 링크     나의 풀이  아이디어     n의 제곱근이 자연수인 경우에는 1을, 아닌 경우에는 2를 리턴해준다.     코드      function solution(n) {   return Number.isInteger(Math.sqrt(n)) ? 1 : 2; }           다른 사람 풀이  나와 로직이 비슷한 경우가 대부분이라 생략.  ","categories": ["algorithm-programmers"],
        "tags": ["algorithm","JS","programmers"],
        "url": "/algorithm-programmers/120909/",
        "teaser": null
      },{
        "title": "프로그래머스 세균 증식 자바스크립트 알고리즘 풀이",
        "excerpt":"문제  문제 링크     나의 풀이  아이디어     반복문을 t회 돌며 n을 2배씩 곱한다.     코드      function solution(n, t) {   let answer = n;   for(let i = 1; i &lt;= t; ++i) { answer *= 2; }   return answer; }           다른 사람 풀이  function solution(n, t) {   return n &lt;&lt; t; }  비트 연산자로 풀 수 있을 줄이야!!  문제를 식으로 정리하면, n에 2의 t제곱을 곱해주면 된다.  이때 &lt;&lt; 비트 연산자로 한 자리만큼 왼쪽으로 시프트해주면 2를 곱하는 것과 같기 때문에,  t만큼 왼쪽으로 시프트해주면 2를 t번 곱하는 것과 같은 의미가 된다.  ","categories": ["algorithm-programmers"],
        "tags": ["algorithm","JS","programmers"],
        "url": "/algorithm-programmers/120910/",
        "teaser": null
      },{
        "title": "2023-10-12 TIL",
        "excerpt":"오늘 한 일     프로그래머스 알고리즘 풀이            lv.0 문자열 붙여서 출력하기       lv.0 문자열의 뒤의 n글자       lv.0 뒤에서 5등 위로           회고     부트캠프에서 취업을 위해 개최한 오프라인 세션을 다녀왔다.  캠프 기간 내내 참 많은 도움을 주셨던 멘토님이 와서 강연을 해주셨다.  그동안 스스로 거쳐왔던 경력을 디테일하게 들려주셨는데, 인상깊은 점이 참 많았다.            개발자도 결국은 능동성이 커리어의 방향을 좌우한다.    시작점이 같아도 단 1도만 방향이 다르면 나중에 전혀 다른 곳에 도달하는 것처럼,    현재 하는 일이나 실력 자체보다는 현재 환경에서 얼마나 최선을 다하느냐가 어떻게 복리로 굴러가는지(?)를 직접 듣는 기회였다.       처음 개발 지식이 거의 없었을 때를 거치면서 많이 고통받고 힘들었지만, 나중에 어느 순간 자신이 어떤 일을 해왔는지를 비로소 이해하고 진정한 자신의 이력으로 만들 수 있었다는 말씀을 하셨다. 나는 이 말이 너무나 와닿았다.    이번에 공백 기간 이후 다시 이직을 준비하면서 이전 회사 다닐 때 썼던 TIL을 정말 열심히 읽었었다.    그때는 부끄럽지만 내가 하는 일을 제대로 이해조차 못하고 주먹구구로 했었다.    그런데 이제 보니 그때 일하며 배웠던 것들을 이번에 부트캠프 하면서는 내가 이해하고 응용하고 있었다.    그때 쌓인 지식들이 영향을 주었는지조차 인지하지 못했는데 말이다.    아마 꼼꼼히 기록해놓지 않았다면 평생 몰랐을 것이다.    내 경험, 그리고 멘토님 말씀이 나에게 큰 용기와 자신감으로 돌아왔다.          ","categories": ["til"],
        "tags": ["인사이트"],
        "url": "/til/TIL-231012/",
        "teaser": null
      },{
        "title": "프로그래머스 뒤에서 5등 위로 자바스크립트 알고리즘 풀이",
        "excerpt":"문제  문제 링크     나의 풀이  아이디어     오름차순으로 정렬한 뒤, 앞의 5개 원소를 제거한 배열을 반환한다.   slice 메서드의 두 번째 인자를 생략하면 시작 인덱스부터 끝까지를 반환하기 때문에 첫 번째 인자를 5로 넣어 배열을 잘라준다.     코드      function solution(num_list) {   return num_list.sort((a, b) =&gt; a - b).slice(5); }           다른 사람 풀이  대부분의 풀이가 나의 풀이와 유사하여 생략.  ","categories": ["algorithm-programmers"],
        "tags": ["algorithm","JS","programmers"],
        "url": "/algorithm-programmers/181852/",
        "teaser": null
      },{
        "title": "프로그래머스 문자열의 뒤의 n글자 자바스크립트 알고리즘 풀이",
        "excerpt":"문제  문제 링크     나의 풀이  아이디어     slice 메서드의 첫 번째 인자를 음수(-n 형태)로 넣으면 끝에서부터 거꾸로 n만큼을 자른 문자열의 복사본을 반환하므로 이를 활용한다.     코드      function solution(my_string, n) {   return my_string.slice(-n); }           다른 사람 풀이  대부분의 풀이가 나의 풀이와 유사하여 생략.  ","categories": ["algorithm-programmers"],
        "tags": ["algorithm","JS","programmers"],
        "url": "/algorithm-programmers/181910/",
        "teaser": null
      },{
        "title": "프로그래머스 문자열 붙여서 출력하기 자바스크립트 알고리즘 풀이",
        "excerpt":"문제  문제 링크     나의 풀이  아이디어     output으로 들어온 출력값을 이어서 출력한다.  공백으로 나뉘어 들어오기 때문에 배열 형태로 출력될 것이므로, 두 입력값은 input[0], input[1]이 된다. 둘을 합쳐서 출력한다.     코드      ```javascript const readline = require(‘readline’); const rl = readline.createInterface({   input: process.stdin,   output: process.stdout });       let input = [];   rl.on(‘line’, function (line) {     input = line.split(‘ ‘); }).on(‘close’, function () {     console.log(input[0] + input[1]) });}   ## 다른 사람 풀이 ```javascript const readline = require('readline'); const rl = readline.createInterface({     input: process.stdin,     output: process.stdout }).on('line', function (line) {     const strArr = line.split(' ')     console.log(strArr.join('')) })  이 풀이는 입력값이 몇 개가 들어오더라도 조건에 맞게 출력할 수 있도록 로직을 짠 풀이이다.  이런 접근을 내가 미처 생각하지 못했고 기억해둘 만하다 생각해서 가져왔다.  ","categories": ["algorithm-programmers"],
        "tags": ["algorithm","JS","programmers"],
        "url": "/algorithm-programmers/181946/",
        "teaser": null
      },{
        "title": "2023-10-13 TIL",
        "excerpt":"오늘 한 일     프로그래머스 알고리즘 풀이            lv.0 특정한 문자를 대문자로 바꾸기       lv.0 문자열을 정수로 변환하기           회고     오늘 최종 합격했던 회사의 대표님과 비대면 티타임을 갖고 최종 연봉 협상을 마쳤다.  일해보고 싶었던 곳이었는데, 회사도 나와 서로 핏이 맞다고 생각해주신 것 같아 참 기쁘다.  부트캠프 하는 과정이 체력으로나 멘탈로나 쉽지 않았지만 다 보상 받은 기분!  이전 회사에서 부족하나마 최선을 다했던 업무도 이렇게 나를 어필할 기회로 돌아오게 될 줄 몰랐다.  이제 최종 계약서를 작성하는 일만 남았다. 이곳에서 보낼 시간도 최선을 다하기로 다짐한다~~!  ","categories": ["til"],
        "tags": ["면접","합격"],
        "url": "/til/TIL-231013/",
        "teaser": null
      },{
        "title": "프로그래머스 특정한 문자를 대문자로 바꾸기 자바스크립트 알고리즘 풀이",
        "excerpt":"문제  문제 링크     나의 풀이  코드  function solution(n_str) {     return Number(n_str); }   다른 사람 풀이  const solution = Number  띠용… 함수에 Number 생성자 함수 바로 넣어버리기…   function solution(n_str) {     return +n_str; }  + 단항 연산자를 이용해 숫자로 변환한 풀이이다.  ","categories": ["algorithm-programmers"],
        "tags": ["algorithm","JS","programmers"],
        "url": "/algorithm-programmers/181848/",
        "teaser": null
      },{
        "title": "프로그래머스 문자열을 정수로 변환하기 자바스크립트 알고리즘 풀이",
        "excerpt":"문제  문제 링크     나의 풀이  코드  function solution(my_string, alp) {     const regex = new RegExp(`[${alp}]`, 'g');     return my_string.replace(regex, alp.toUpperCase()); }   다른 사람 풀이  대부분 풀이가 유사하여 생략.   알게 된 것 / 리마인드  변수를 정규식에 활용하기  맨날 까먹기 때문에 리마인드 겸 정리한다.  동적으로 바뀌는 값(변수 안에 든 값 등)을 정규식 규칙으로 활용하려면, 새로운 RegExp 객체를 생성해 사용해야 한다.  템플릿 리터럴로 작성하면 된다.  const val = 'abcde'; const regex = new RegExp(`[${val}]`, g); // /[abcde]/g 인 새로운 정규식 객체 생성  String.prototype.replace()의 동작  이것도 맨날 까먹기 때문에 다시 정리한다.  아래의 내용이 결국 원시값의 불변성에 의한 자연스러운 동작 형태인데, 항상 잊는 것 같다.  // String.prototype.replace() 기본 형태 replace(pattern, replacement)     replace 메서드는 원본 문자열을 변화시키지 않는다.            원본 문자열은 수정되지 않는다. (The original string is left unchanged.) (출처: MDN)            replace 메서드는 첫 인자로 주어진 pattern에 의해 일부가 대체된 문자열을 새로 반환한다.            String의 메서드인 replace는 pattern에 대한 한 개, 일부, 또는 모든 일치 부분을 replacement로 바꾼 새로운 문자열을 반환한다. (The replace() method of String values returns a new string with one, some, or all matches of a pattern replaced by a replacement.) (출처: MDN)             레퍼런스  정규식 초기화     [JS] 정규식 안에 변수 넣는 방법   String.prototype.replace()     MDN String.prototype.replace()   MDN 원시 값  ","categories": ["algorithm-programmers"],
        "tags": ["algorithm","JS","programmers"],
        "url": "/algorithm-programmers/181873/",
        "teaser": null
      },{
        "title": "2023-10-14 TIL",
        "excerpt":"오늘 한 일     프로그래머스 알고리즘 풀이            lv.0 조건에 맞게 수열 변환하기 3          ","categories": ["til"],
        "tags": [],
        "url": "/til/TIL-231014/",
        "teaser": null
      },{
        "title": "프로그래머스 조건에 맞게 수열 변환하기 3 자바스크립트 알고리즘 풀이",
        "excerpt":"문제  문제 링크     나의 풀이  코드  function solution(arr, k) {     return arr.map(v =&gt; k % 2 === 0 ? v + k : v * k); }   다른 사람 풀이  대부분 풀이가 유사하여 생략.  ","categories": ["algorithm-programmers"],
        "tags": ["algorithm","JS","programmers"],
        "url": "/algorithm-programmers/181835/",
        "teaser": null
      },{
        "title": "2023-10-15 TIL",
        "excerpt":"오늘 한 일     프로그래머스 알고리즘 풀이            lv.0 조건에 맞게 수열 변환하기 1          ","categories": ["til"],
        "tags": [],
        "url": "/til/TIL-231015/",
        "teaser": null
      },{
        "title": "프로그래머스 조건에 맞게 수열 변환하기 1 자바스크립트 알고리즘 풀이",
        "excerpt":"문제  문제 링크     나의 풀이  코드  function solution(arr) {     return arr.map(v =&gt; v &gt;= 50 ? (v % 2 === 0 ? v / 2 : v) : (v % 2 === 1 ? v * 2 : v)); }   다른 사람 풀이  대부분 풀이가 유사하여 생략.  ","categories": ["algorithm-programmers"],
        "tags": ["algorithm","JS","programmers"],
        "url": "/algorithm-programmers/181882/",
        "teaser": null
      },{
        "title": "2023-10-16 TIL",
        "excerpt":"오늘 한 일     프로그래머스 알고리즘 풀이            lv.0 공배수       lv.0 n 번째 원소까지       lv.0 정수 찾기          ","categories": ["til"],
        "tags": [],
        "url": "/til/TIL-231016/",
        "teaser": null
      },{
        "title": "프로그래머스 정수 찾기 자바스크립트 알고리즘 풀이",
        "excerpt":"문제  문제 링크     나의 풀이  아이디어  오늘 풀었던 공배수와 비슷한 방식을 사용했다.   배열 내에 해당 원소가 있는지 판별하는 includes 메서드를 활용해 리턴된 불리언 값에 대해 숫자 형변환을 한다.  코드  function solution(num_list, n) {     return num_list.includes(n) &gt;&gt; 0; }   다른 사람 풀이  대부분 풀이가 유사하여 생략.  ","categories": ["algorithm-programmers"],
        "tags": ["algorithm","JS","programmers"],
        "url": "/algorithm-programmers/181840/",
        "teaser": null
      },{
        "title": "프로그래머스 n 번째 원소까지 자바스크립트 알고리즘 풀이",
        "excerpt":"문제  문제 링크     나의 풀이  코드  function solution(num_list, n) {     return num_list.slice(0, n); }   다른 사람 풀이  대부분 풀이가 유사하여 생략.  ","categories": ["algorithm-programmers"],
        "tags": ["algorithm","JS","programmers"],
        "url": "/algorithm-programmers/181889/",
        "teaser": null
      },{
        "title": "프로그래머스 공배수 자바스크립트 알고리즘 풀이",
        "excerpt":"문제  문제 링크     나의 풀이  아이디어  1과 0은 각각 true와 false를 숫자로 변환했을 때의 값이 되므로, 조건에 대한 결과값을 숫자로 변환한다.  코드  function solution(number, n, m) {     return Number(number % n === 0 &amp;&amp; number % m === 0); }   다른 사람 풀이  대부분 풀이가 유사하여 생략.  삼항 연산자나 if문을 활용한 풀이들이 많았다.  ","categories": ["algorithm-programmers"],
        "tags": ["algorithm","JS","programmers"],
        "url": "/algorithm-programmers/181936/",
        "teaser": null
      },{
        "title": "2023-10-17 TIL",
        "excerpt":"오늘 한 일     프로그래머스 알고리즘 풀이            lv.0 수 조작하기 1          ","categories": ["til"],
        "tags": [],
        "url": "/til/TIL-231017/",
        "teaser": null
      },{
        "title": "프로그래머스 수 조작하기 1 자바스크립트 알고리즘 풀이",
        "excerpt":"문제  문제 링크     나의 풀이  코드  function solution(n, control) {     [...control].map(v =&gt; {         switch(v) {             case \"w\":                 n++;                 break;             case \"a\":                 n -= 10;                 break;             case \"s\":                 n--;                 break;             case \"d\":                 n += 10;                 break;             default:                 break;         }     });     return n; }   다른 사람 풀이  function solution(n, control) {     var answer = n;     const o = {         \"w\" : 1,         \"s\" : -1,         \"d\" : 10,         \"a\" : -10,     }      control.split('').forEach(e =&gt; answer += o[e])     return answer; }  조건문 대신 객체를 사용한 풀이.  이렇게 하면 반복문만 사용되기 때문에, 돌려보니 내 풀이보다 훨씬 소요 시간이 짧았다.  ","categories": ["algorithm-programmers"],
        "tags": ["algorithm","JS","programmers"],
        "url": "/algorithm-programmers/181926/",
        "teaser": null
      },{
        "title": "2023-10-18 TIL",
        "excerpt":"오늘 한 일     프로그래머스 알고리즘 풀이            lv.0 부분 문자열 이어 붙여 문자열 만들기       lv.0 0 떼기       lv.0 꼬리 문자열          ","categories": ["til"],
        "tags": [],
        "url": "/til/TIL-231018/",
        "teaser": null
      },{
        "title": "프로그래머스 꼬리 문자열 자바스크립트 알고리즘 풀이",
        "excerpt":"문제  문제 링크     나의 풀이  코드  function solution(str_list, ex) {     return str_list.reduce((total, v) =&gt; total += (v.includes(ex) ? \"\" : v), \"\"); }   다른 사람 풀이  대부분 풀이가 유사하여 생략.  ","categories": ["algorithm-programmers"],
        "tags": ["algorithm","JS","programmers"],
        "url": "/algorithm-programmers/181841/",
        "teaser": null
      },{
        "title": "프로그래머스 0 떼기 자바스크립트 알고리즘 풀이",
        "excerpt":"문제  문제 링크     나의 풀이  코드  function solution(n_str) {     let targetIdx = 0;     for(let i = 0; i &lt; n_str.length; ++i){         if(n_str.at(i) !== '0') {             targetIdx = i; break;         }     }     return n_str.slice(targetIdx); }   다른 사람 풀이  const solution = (str) =&gt; String(Number(str))  const solution=s=&gt;+s+''  😲… 이런 신박한 방법이 있구나  function solution(n_str) {   return n_str.replace(/^0+/, ''); }  정규표현식을 활용한 풀이도 있었다.  ^은 문자열의 시작을 의미하고, +가 문자 뒤에 붙으면 해당 문자가 1개 이상 연속으로 나오는 것을 의미한다.  그러므로 문자열 앞에 위치한 0만 제거할 수 있게 된다.   정규표현식이 아직 익숙하지 않을 때가 많은데, 한 번 날 잡아서 규칙들을 쭉 공부해봐도 좋겠다.  ","categories": ["algorithm-programmers"],
        "tags": ["algorithm","JS","programmers"],
        "url": "/algorithm-programmers/181847/",
        "teaser": null
      },{
        "title": "프로그래머스 부분 문자열 이어 붙여 문자열 만들기 자바스크립트 알고리즘 풀이",
        "excerpt":"문제  문제 링크     나의 풀이  코드  function solution(my_strings, parts) {     return my_strings.reduce((total, v, i) =&gt; total += v.slice(parts[i][0], parts[i][1] + 1), \"\"); }   다른 사람 풀이  function solution(my_strings, parts) {     return parts.map(([s, e], i) =&gt; {         return my_strings[i].slice(s, e + 1)     }).join('') }  매개변수도 구조분해할 수 있다는 사실을 처음 알았다!  ","categories": ["algorithm-programmers"],
        "tags": ["algorithm","JS","programmers"],
        "url": "/algorithm-programmers/181911/",
        "teaser": null
      },{
        "title": "2023-10-19 TIL",
        "excerpt":"오늘 한 일     프로그래머스 알고리즘 풀이            lv.0 rny_string       lv.0 소문자로 바꾸기       lv.0 문자열 정수의 합           Vue.js 기본 문법을 학습했다.            새로 입사할 회사에서 vue를 사용하고 있어서 입사 전까지 미리 기본을 숙지하고 가기로 했다.  내 목표는 vue + vuex, vue + vuex + ts, nuxt 조합으로 4~5개의 투두리스트를 반복적으로 완성하는 것이다.       오늘은 기본적인 데이터 바인딩 방식, vue에서 사용하는 구문(v-for, v-if/else, : 사용 등)을 공부해 간단한 쇼핑몰 리스트와 모달 UI를 만들었다.  vuecli의 폴더 구조도 익혀봤다.       코딩애플 강의와 공식문서를 참고하여 공부했다.           github 프로필을 업데이트했다.  이걸 하면서 우연히 SVG의 네임스페이스 개념에 대해 공부하게 됐다.  새로 알게 된 재미있는 것들이 많아 글로 정리해뒀다.  ","categories": ["til"],
        "tags": [],
        "url": "/til/TIL-231019/",
        "teaser": null
      },{
        "title": "프로그래머스 문자열 정수의 합 자바스크립트 알고리즘 풀이",
        "excerpt":"문제  문제 링크     나의 풀이  아이디어  문자열을 한 글자씩 떼어 배열로 만든 다음, reduce를 이용해 모두 더한다.  이때 원소들은 모두 문자열 형태이므로 Number로 형변환하여 더해준다.  코드  function solution(num_str) {     return num_str.split(\"\").reduce((total, v) =&gt; total + ~~v, 0) }   다른 사람 풀이  대부분 풀이가 유사하여 생략.  ","categories": ["algorithm-programmers"],
        "tags": ["algorithm","JS","programmers"],
        "url": "/algorithm-programmers/181849/",
        "teaser": null
      },{
        "title": "프로그래머스 rny_string 자바스크립트 알고리즘 풀이",
        "excerpt":"문제  문제 링크     나의 풀이  코드  function solution(rny_string) {     return rny_string.replace(/m/g, \"rn\"); }   다른 사람 풀이  function solution(rny_string) {     var answer = '';     return [...rny_string].map(e =&gt; e == 'm' ? 'rn' : e).join(\"\"); }  문자열을 구조분해하여 map을 이용해 문자를 대체한 뒤 다시 join으로 합치는 방식의 풀이.  ","categories": ["algorithm-programmers"],
        "tags": ["algorithm","JS","programmers"],
        "url": "/algorithm-programmers/181863/",
        "teaser": null
      },{
        "title": "프로그래머스 소문자로 바꾸기 자바스크립트 알고리즘 풀이",
        "excerpt":"문제  문제 링크     나의 풀이  코드  function solution(myString) {     return [...myString].map(v =&gt; v.toLowerCase()).join(\"\"); }   다른 사람 풀이  function solution(myString) {      //아스키코드 이용 a -&gt; 97 A -&gt; 65 : 소문자와 대문자 32 차이가 남      var answer = '';     var my_splitD = [];      var my_split = myString.split('');      for(let i = 0; i &lt; my_split.length; i++){         if(my_split[i].charCodeAt() &lt; 97){             my_splitD[i] = my_split[i].charCodeAt() + 32             answer += String.fromCharCode(my_splitD[i]);         }else{             my_splitD[i] = my_split[i].charCodeAt()              answer += String.fromCharCode(my_splitD[i]);         }     }      console.log(answer);      return answer; }  charCodeAt/fromCharCode 메서드와 아스키 코드 규칙을 활용한 풀이.  소문자 a가 아스키코드 97이므로 이보다 작으면 대문자가 된다.  이 때는 현재 값에서 32를 더해 다시 문자열로 변환한다.  ","categories": ["algorithm-programmers"],
        "tags": ["algorithm","JS","programmers"],
        "url": "/algorithm-programmers/181876/",
        "teaser": null
      },{
        "title": "2023-10-20 TIL",
        "excerpt":"오늘 한 일     프로그래머스 알고리즘 풀이            lv.0 주사위 게임 1       lv.0 부분 문자열인지 확인하기       lv.0 첫 번째로 나오는 음수           어제 학습한 Vue 기본 문법에 대해 공식 문서를 읽고 복습            Vue 개발 환경 세팅       싱글 파일 컴포넌트       Vue의 데이터 바인딩 방법       v-if/v-else와 v-for       props          ","categories": ["til"],
        "tags": [],
        "url": "/til/TIL-231020/",
        "teaser": null
      },{
        "title": "Vue 문법 : 데이터 바인딩",
        "excerpt":"vue의 데이터 바인딩 방식  vue에서 데이터나 JS 표현식을 삽입할 때는 크게 두 가지 방식을 사용할 수 있다.     템플릿 문법 ``   디렉티브 (‘v-‘ 형태로 시작하는)   두 가지 모두 JS 표현식의 경우 단일 표현식만 들어갈 수 있다.  여기에서 ‘단일 표현식’이란 값으로 평가할 수 있는 코드를 말한다.  공식 문서의 설명에 의하면,     각 바인딩에는 하나의 단일 표현식만 포함될 수 있습니다. 표현식은 값으로 평가할 수 있어야 하는 코드 조각입니다. 쉽게 말해 return 뒤에 사용할 수 있는 코드여야 하는 것입니다.  (출처: Vue 공식 한국어 문서)    템플릿 문법  ``을 이용해 동적인 값을 html에 삽입할 수 있다.  내부에 동적 값이나 단일 JS 표현식을 넣으면 된다.  &lt;p&gt;안녕하세요! 제 이름은  입니다.&lt;/p&gt;  이렇게 사용할 수 있다.  이렇게 대체된 값은 텍스트로 인식된다.   디렉티브  디렉티브는 DOM 표현에 필요한 동적인 값을 넣을 수 있는 vue의 문법이다.  동적으로 DOM을 업데이트할 때 사용된다.  html의 속성과 유사한 형태를 갖고 있다.  v-[디렉티브명]=\"[속성값]\" 구조로 이루어진다.  템플릿 문법과 마찬가지로 속성값에는 동적 값이나 단일 JS 표현식이 들어간다.  (단 특정 디렉티브 - v-for, v-on, v-slot - 은 특수한 값이 들어감)   디렉티브의 경우 종류가 다양하나 대표적인 것들을 짚어보자면     v-if, v-else, v-else-if:  조건문 역할   v-for: 반복문 역할   v-bind: HTML 속성과 동적 값을 바인딩해줌   v-on: DOM 이벤트를 수신해줌   등이 있다.    레퍼런스     Vue.js 한국 공식 문서 - 템플릿 문법  ","categories": ["vue"],
        "tags": ["vue"],
        "url": "/vue/vue-data-binding/",
        "teaser": null
      },{
        "title": "Vue 개발 환경 세팅하기",
        "excerpt":"vue 기본 개발 환경 세팅하기  vue 기반으로 개발하려면 몇 가지 세팅이 필요하다.  밑에 기록한 내용은 아무런 추가 패키지 없이 기본 프로젝트만 생성하는 방법이다.   필요한 환경     node.js : npm이나 yarn같은 패키지 매니저가 필요하다.   IDE : 나의 경우 vscode로 사용했다.    vscode를 사용하면 편리한 익스텐션을 설치할 수 있다.            Volar: 문법 하이라이트, 코드 자동완성해줌. TS도 지원       vue 3 snippets: vue 문법을 자동완성해줌       Vue Peek: 컴포넌트 정의부로 바로 이동할 수 있게 해줌           이외에 vue 공식 가이드에서 추천하는 여러 도구들을 참고해도 좋겠다.   vuecli를 활용해 vue 프로젝트 생성하기  vuecli로 간단하게 vue 프로젝트를 세팅해보자.     터미널을 실행한다.   vuecli를 먼저 설치해야 한다. 아래 명령어를 입력하면 설치가 실행된다.     npm install -g @vue/cli          이때 버전을 선택하라는 메시지가 뜨는데, 나는 Vue 3를 선택했다.       설치가 완료되었으면, 터미널에서 프로젝트 폴더를 생성할 경로로 이동한다.   프로젝트를 생성하는 명령어를 입력한다.     vue create [프로젝트명]          설치가 완료되면 터미널이 있는 경로 하위에 프로젝트명으로 된 새로운 폴더가 생성된다.       cd [프로젝트명]을 입력해 프로젝트 폴더로 이동한다.   해당 경로에서 프로젝트를 실행하려면 npm 명령어를 입력하면 된다.       npm run serve           ","categories": ["vue"],
        "tags": ["vue"],
        "url": "/vue/vue-environment/",
        "teaser": null
      },{
        "title": "Vue 문법: 부모-자식 컴포넌트간 데이터 전달하기 (props)",
        "excerpt":"Vue의 props 전달 방법   1. 부모 컴포넌트에서 자식 컴포넌트에게 props 전달  v-bind 디렉티브를 사용하여 전달한다.  :[props 이름]=\"[부모 컴포넌트에서의 data명]\" 형태로, 자식 컴포넌트의 속성에 넣어준다.  &lt;template&gt;     &lt;Child :dataList=\"dataList\" /&gt; &lt;!-- 이렇게! --&gt; &lt;/template&gt;  &lt;script&gt;     import Child from './Child.vue';     export default { \t    name: 'Parent',         data: {             dataList: [0, 1, 2],         },         components: {             Child         }     };  &lt;/script&gt;   2. 자식 컴포넌트에서 props 등록  받은 props는 props에서 등록해주어야 사용 가능하다.  &lt;template&gt;     &lt;div v-for=\"(data, i) in dataList\" :key=\"i\"&gt;Hi!&lt;/div&gt; &lt;/template&gt;  &lt;script&gt;     export default { \t    name: 'Child',         // 이렇게 등록해주어야 함         props: {             dataList         }     };  &lt;/script&gt;   Vue에서 부모-자식간 이벤트 전달 방법  (학습중)  ","categories": ["vue"],
        "tags": ["vue"],
        "url": "/vue/vue-props/",
        "teaser": null
      },{
        "title": "Vue 문법 : 싱글 파일 컴포넌트",
        "excerpt":"Vue의 컴포넌트  Vue에서도 리액트와 마찬가지로 컴포넌트 개념이 있다.  구조 또한 유사한데, 컴포넌트들을 조합하여 하나의 앱이 만들어지는 트리 형태이다.     싱글 파일 컴포넌트(SFC)  Vue는 크게 두 가지 방식으로 컴포넌트 정의를 지원한다.     Vue 앱을 빌드하는 방식과,   일반 JS 객체로 생성하는 방식이 있다. (Vue 프로젝트가 아닌 환경에 부분적으로 Vue를 삽입할 때 사용한다.)   첫 번째 방식에서 컴포넌트를 정의할 때 사용하는 Vue의 컴포넌트 정의 구조가 바로 싱글 파일 컴포넌트이다.  .vue 확장자를 사용하여 생성한다.   SFC의 구조  SFC는 크게 두 파트로 나뉘어있다.     JS 로직을 작성하는 &lt;script&gt;   HTML 엘리먼트를 정의하는 &lt;template&gt;  ```html       아래에 자식 컴포넌트가 있습니다.       ``` &lt;script&gt; 파트에서는 자바스크립트 코드를 작성할 수 있다.  &lt;template&gt; 파트는 렌더링될 html 구문을 작성한다. 이 때 데이터 바인딩이나 디렉티브로 다양한 동적 제어를 할 수 있다.   부모 - 자식 컴포넌트  &lt;script setup&gt;을 사용할 경우 컴포넌트를 import해 템플릿에 사용할 수 있다.   이때 삽입된 컴포넌트가 자식 컴포넌트, 다른 컴포넌트를 포함하고 있는 컴포넌트가 부모 컴포넌트가 된다.   부모 컴포넌트는 데이터를 props로 전달할 수 있고, 자식 컴포넌트는 $emit 메서드로 이벤트를 전달할 수 있다.  ","categories": ["vue"],
        "tags": ["vue"],
        "url": "/vue/vue-sfc/",
        "teaser": null
      },{
        "title": "Vue 문법 : v-if/v-else & v-for 디렉티브",
        "excerpt":"vue에서 조건부 렌더링이나 반복 렌더링을 할 때는 특정 디렉티브를 사용한다.   조건부 렌더링 v-if, v-else, v-else-if  v-if  v-if가 적용된 html 블록은 v-if 내 표현식의 truthy/falsy 여부에 따라 렌더링된다.  &lt;button @click=\"isShow = !isShow\"&gt;TOGGLE!&lt;/button&gt; &lt;div v-if=\"isShow\"&gt;나왔다가 안 나왔다가&lt;/div&gt;   v-else  v-if가 쓰인 블록 이후에만 올 수 있다. (또는 v-else-if)  v-if 블록이 렌더링되지 않을 때만 렌더링된다.  &lt;button @click=\"isShow = !isShow\"&gt;TOGGLE!&lt;/button&gt; &lt;div v-if=\"isShow\"&gt;나왔다가 안 나왔다가&lt;/div&gt; &lt;div v-else &gt;쟤가 나오면 안나왔다가&lt;/div&gt;   v-else-if  조건문의 else if와 동일한 역할을 한다.  v-if가 렌더링되지 않았을 때 렌더링되는 경우가 2개 이상일 경우 사용한다.  v-else와 마찬가지로 v-if가 쓰인 블록 이후에만 올 수 있다.   반복 렌더링 v-for  v-for  배열과 같은 이터러블한 데이터를 이용해 블록을 반복 렌더링할 수 있다.  v-for의 속성  v-for은 특수한 속성값이 필요하다.  언제나 [alias] in [데이터] 형태로 주어져야 한다.   이때 데이터에는 아래와 같은 값이 들어올 수 있다.     Array, Map, Set, Object 와 같은 JS 네이티브 자료형   number, string : 숫자가 주어지면 해당 수만큼 고정 반복 렌더링된다. ```html                           **alias**는 데이터를 순회할 때 현재 가리키는 값에 부여하는 변수명과 같다.   총 두 개의 인자를 지정해줄 수 있는데 첫 번째 인자는 **데이터 내 현재 원소값**, 두 번째 인자는 **인덱스**이다. (단, 데이터가 객체일 경우 값 - 속성명 - 인덱스 총 3개의 인자를 받을 수 있다)    두 인자의 변수 스코프는 JS의 반복문처럼 v-for이 적용된 블록까지이다.      주의할 점은 v-for을 이용해 블록을 렌더링할 때, **반드시 `:key`를 부여**해줘야 한다는 점이다.   Vue는 리스트 렌더링을 업데이트할 때 in-place patch 전략을 사용한다.   즉 아이템의 순서가 변경되면 DOM 엘리먼트 자체를 변경하지 않고 엘리먼트 내의 내용만 바꾼다. (Reflow 방지를 위함)   그러므로 해당 엘리먼트에 고유 key 속성을 제공해서 Vue가 값을 추적할 수 있도록 해야 한다. ```html &lt;li v-for=\"(item, i) in items\" :key=\"i\"&gt;      &lt;/li&gt;    레퍼런스     Vue 공식 문서 - 조건부 렌더링   Vue 공식 문서 - 리스트 렌더링   Vue 공식 문서 - 디렉티브  ","categories": ["vue"],
        "tags": ["vue"],
        "url": "/vue/vue-vfor-vif/",
        "teaser": null
      },{
        "title": "프로그래머스 주사위 게임 1 자바스크립트 알고리즘 풀이",
        "excerpt":"문제  문제 링크     나의 풀이  코드  function solution(a, b) {     return (a + b) % 2 === 0 ? a % 2 === 0 ? Math.abs(a - b) : a**2 + b**2 : 2 * (a + b); }   다른 사람 풀이  const solution = (a, b) =&gt; a % 2 &amp;&amp; b % 2 ? a * a + b * b : a % 2 || b % 2 ? 2 * (a + b) : Math.abs(a - b)  a % 2와 b % 2의 결과는 0 또는 1이므로, 이 자체로 truthy함과 falsy함을 체크하는 방법도 있었다.  ","categories": ["algorithm-programmers"],
        "tags": ["algorithm","JS","programmers"],
        "url": "/algorithm-programmers/181839/",
        "teaser": null
      },{
        "title": "프로그래머스 부분 문자열인지 확인하기 자바스크립트 알고리즘 풀이",
        "excerpt":"문제  문제 링크     나의 풀이  아이디어  includes 메서드를 사용하면 부분 문자열인지 여부를 boolean 값으로 반환한다.  결과를 숫자로 형변환하면 조건문 없이 정답을 반환할 수 있다.  코드  function solution(my_string, target) {     return +(my_string.includes(target)); }   다른 사람 풀이  function solution(my_string, target) {     for (let i=0; i&lt;my_string.length - target.length + 1; i++){         if (target === my_string.slice(i, i + target.length)) return 1     }     return 0 }  반복문을 이용한 풀이.  target의 길이를 고려하여 첫 인덱스부터 slice해 target과 같은 문자열이 있는지를 확인했다.  ","categories": ["algorithm-programmers"],
        "tags": ["algorithm","JS","programmers"],
        "url": "/algorithm-programmers/181843/",
        "teaser": null
      },{
        "title": "프로그래머스 첫 번째로 나오는 음수 자바스크립트 알고리즘 풀이",
        "excerpt":"문제  문제 링크     나의 풀이  아이디어  includes 메서드를 사용하면 부분 문자열인지 여부를 boolean 값으로 반환한다.  결과를 숫자로 형변환하면 조건문 없이 정답을 반환할 수 있다.  코드  function solution(num_list) {     for(let i = 0; i &lt; num_list.length; ++i) {         if(num_list[i] &lt; 0) {             return i;         }     }     return -1; }   다른 사람 풀이  const solution = num_list =&gt; num_list.findIndex(v =&gt; v &lt; 0)  findIndex 메서드를 활용한 풀이.   알게 된 것  Array.prototype.findIndex()     findIndex() 메서드는 주어진 판별 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환합니다. 만족하는 요소가 없으면 -1을 반환합니다.  find 메서드처럼 주어진 조건을 만족하는 첫 번째 요소를 반환하나, find는 값 자체를 반환하는 반면 findIndex는 값의 인덱스를 반환해준다.     레퍼런스     MDN Array.prototype.findIndex()  ","categories": ["algorithm-programmers"],
        "tags": ["algorithm","JS","programmers"],
        "url": "/algorithm-programmers/181896/",
        "teaser": null
      },{
        "title": "2023-10-21 TIL",
        "excerpt":"오늘 한 일     프로그래머스 알고리즘 풀이            lv.0 문자열 바꿔서 찾기       lv.0 n개 간격의 원소들       lv.0 n 번째 원소부터       lv.0 카운트 다운       lv.0 카운트 업          ","categories": ["til"],
        "tags": [],
        "url": "/til/TIL-231021/",
        "teaser": null
      },{
        "title": "프로그래머스 문자열 바꿔서 찾기 자바스크립트 알고리즘 풀이",
        "excerpt":"문제  문제 링크     나의 풀이  아이디어     문자열을 반전한다. 이때 myString이 아닌 길이가 10 이하인 pat을 반전시키는 게 더 효율적일 것 같았다.            문자열 반전시 map을 이용한다.           includes를 이용해 부분 문자열이 포함되어있는지를 숫자로 형변환해 리턴한다.     코드      function solution(myString, pat) {   const target = [...pat].map(v =&gt; v === \"A\" ? \"B\" : \"A\").join(\"\"); // 길이가 더 짧은 pat을 반전시켜준다.   return +myString.includes(target); }           다른 사람 풀이  대부분 풀이가 유사하여 생략.  ","categories": ["algorithm-programmers"],
        "tags": ["algorithm","JS","programmers"],
        "url": "/algorithm-programmers/181864/",
        "teaser": null
      },{
        "title": "프로그래머스 n개 간격의 원소들 자바스크립트 알고리즘 풀이",
        "excerpt":"문제  문제 링크     나의 풀이  코드  function solution(num_list, n) {     const answer = [];     for(let i = 0; i &lt; num_list.length; i += n){         answer.push(num_list[i]);     }     return answer; }   다른 사람 풀이  const solution = (num_list, n) =&gt; num_list.filter((_, i) =&gt; !(i % n))  filter을 이용한 풀이.  사실 처음에는 이 방식을 쓰려 했으나, for문으로 필요한 만큼만 반복문을 도는 것이 더 좋을 것이라 생각했다.  실제로 for문을 사용할 때 미세하게 소요 시간이 적었고, 배열의 크기가 길다면 유의미한 차이가 있었을 것 같다.  ","categories": ["algorithm-programmers"],
        "tags": ["algorithm","JS","programmers"],
        "url": "/algorithm-programmers/181888/",
        "teaser": null
      },{
        "title": "프로그래머스 n 번째 원소부터 자바스크립트 알고리즘 풀이",
        "excerpt":"문제  문제 링크     나의 풀이  코드  function solution(num_list, n) {     return num_list.slice(n - 1); }   다른 사람 풀이  대부분 풀이가 유사하여 생략.  ","categories": ["algorithm-programmers"],
        "tags": ["algorithm","JS","programmers"],
        "url": "/algorithm-programmers/181892/",
        "teaser": null
      },{
        "title": "프로그래머스 카운트 다운 자바스크립트 알고리즘 풀이",
        "excerpt":"문제  문제 링크     나의 풀이  코드  function solution(start, end_num) {     return Array(start - end_num + 1).fill(start).map((v, i) =&gt; v - i); }   다른 사람 풀이  function solution(start, end) {     var answer = [];     do {         answer.push(start);         start--;     } while(start &gt;= end)     return answer; }  do while문을 이용한 풀이.  ","categories": ["algorithm-programmers"],
        "tags": ["algorithm","JS","programmers"],
        "url": "/algorithm-programmers/181899/",
        "teaser": null
      },{
        "title": "프로그래머스 카운트 업 자바스크립트 알고리즘 풀이",
        "excerpt":"문제  문제 링크     나의 풀이  코드  function solution(start_num, end_num) {     const answer = [start_num];     for(let i = start_num + 1; i &lt;= end_num; ++i){         answer.push(i);     }     return answer; }   다른 사람 풀이  function solution(start, end) {     idx = start;     return Array.from({length: end-start+1}, ()=&gt; {return start++}); }  Array.from을 이용한 풀이.   function solution(start, end) {     return Array(end-start+1).fill(start).map((x,idx) =&gt; x+idx); }  Array 생성자와 map을 이용한 풀이.  start 정수로 채워진 배열을 만들고 인덱스를 map으로 하나씩 더해주었다.   알게 된 것  Array.from  Array.from은 순회 가능한 자료형/유사 배열 객체에서 새로운 배열 인스턴스를 반환하는 메서드이다.  Array.from(arrayLike) Array.from(arrayLike, mapFn) Array.from(arrayLike, mapFn, thisArg)  총 3개의 인자를 받을 수 있다.     arrayLike: 배열화 할 순회 가능 혹은 유사 배열 객체   mapFn: 만들어진 배열의 모든 요소에 대해 호출하는 함수이다. 일종의 map 메서드와 유사하게 작동한다.   thisArg: this로 사용될 값    레퍼런스     MDN Array.from()  ","categories": ["algorithm-programmers"],
        "tags": ["algorithm","JS","programmers"],
        "url": "/algorithm-programmers/181920/",
        "teaser": null
      },{
        "title": "2023-10-22 TIL",
        "excerpt":"오늘 한 일  오늘은 하루 종일 외출하는 날이어서 간단히 알고리즘 문제 한 개만 풀었다.     프로그래머스 알고리즘 풀이            lv.0 접두사인지 확인하기           ","categories": ["til"],
        "tags": [],
        "url": "/til/TIL-231022/",
        "teaser": null
      },{
        "title": "프로그래머스 접두사인지 확인하기 자바스크립트 알고리즘 풀이",
        "excerpt":"문제  문제 링크     나의 풀이  코드  function solution(my_string, is_prefix) {     return +(my_string.indexOf(is_prefix) === 0); }   다른 사람 풀이  function solution(my_string, is_prefix) {   return +my_string.startsWith(is_prefix); }  startsWith을 이용한 풀이.   이런 메서드가 있는 줄 몰랐다.   알게 된 것  String.prototype.startsWith()  String.prototype.startsWith()은 어떤 문자열 내에 특정 문자열이 지정된 인덱스에서 시작하는지 Boolean값을 반환하는 메서드이다.  startsWith(searchString[, position])  총 2개의 인자를 받을 수 있다.     searchString: 포함되어있는지 확인할 타겟 문자열   position: 정수이며 생략 가능. (생략시 기본값은 0) searchString이 시작하는지 확인할 인덱스 위치.    레퍼런스     MDN String.prototype.startsWith()  ","categories": ["algorithm-programmers"],
        "tags": ["algorithm","JS","programmers"],
        "url": "/algorithm-programmers/181906/",
        "teaser": null
      },{
        "title": "2023-10-23 TIL",
        "excerpt":"오늘 한 일     프로그래머스 알고리즘 풀이            lv.0 뒤에서 5등까지       lv.0 공백으로 구분하기 1       lv.0 배열에서 문자열 대소문자 변환하기       lv.0 n보다 커질 때까지 더하기       lv.0 접미사인지 확인하기          ","categories": ["til"],
        "tags": [],
        "url": "/til/TIL-231023/",
        "teaser": null
      },{
        "title": "프로그래머스 뒤에서 5등까지 자바스크립트 알고리즘 풀이",
        "excerpt":"문제  문제 링크     나의 풀이  코드  function solution(num_list) {     return num_list.sort((a, b) =&gt; a - b).slice(0, 5); }   다른 사람 풀이  대부분 풀이가 유사하여 생략.  ","categories": ["algorithm-programmers"],
        "tags": ["algorithm","JS","programmers"],
        "url": "/algorithm-programmers/181853/",
        "teaser": null
      },{
        "title": "프로그래머스 공백으로 구분하기 1 자바스크립트 알고리즘 풀이",
        "excerpt":"문제  문제 링크     나의 풀이  코드  function solution(my_string) {     return my_string.split(\" \"); }   다른 사람 풀이  대부분 풀이가 유사하여 생략.  ","categories": ["algorithm-programmers"],
        "tags": ["algorithm","JS","programmers"],
        "url": "/algorithm-programmers/181869/",
        "teaser": null
      },{
        "title": "프로그래머스 배열에서 문자열 대소문자 변환하기 자바스크립트 알고리즘 풀이",
        "excerpt":"문제  문제 링크     나의 풀이  코드  function solution(strArr) {     return strArr.map((v, i) =&gt; i % 2 === 0 ? v.toLowerCase() : v.toUpperCase()); }   다른 사람 풀이  대부분 풀이가 유사하여 생략.  ","categories": ["algorithm-programmers"],
        "tags": ["algorithm","JS","programmers"],
        "url": "/algorithm-programmers/181875/",
        "teaser": null
      },{
        "title": "프로그래머스 n보다 커질 때까지 더하기 자바스크립트 알고리즘 풀이",
        "excerpt":"문제  문제 링크     나의 풀이  아이디어  reduce 메서드를 이용하여 누산값이 n보다 작거나 같을 때만 원소를 더하고, 아닐 때는 더하지 않는다.  코드  function solution(numbers, n) {     return numbers.reduce((total, v) =&gt; total + (total &lt;= n ? v : 0), 0); }   다른 사람 풀이  function solution(numbers, n) {   let sum = 0;      for(let i = 0; i&lt;numbers.length; i++) {       sum += numbers[i]       if(sum &gt; n) break;     }     return sum; }  반복문을 이용한 풀이.  조건에 충족하면 바로 반복문을 마치기 때문에 reduce보다 좀더 효율적인 코드가 될 수 있어보인다.  ","categories": ["algorithm-programmers"],
        "tags": ["algorithm","JS","programmers"],
        "url": "/algorithm-programmers/181884/",
        "teaser": null
      },{
        "title": "프로그래머스 접미사인지 확인하기 자바스크립트 알고리즘 풀이",
        "excerpt":"문제  문제 링크     나의 풀이  아이디어  만약 is_suffix기 my_string에 포함되어있다면, 부분 문자열이 있는 가장 마지막 인덱스 + is_suffix의 길이가 my_string의 길이와 같을 경우 접미사가 된다.  코드  function solution(my_string, is_suffix) {     return my_string.lastIndexOf(is_suffix) !== -1 ?          +(my_string.lastIndexOf(is_suffix) + is_suffix.length === my_string.length)          : 0; }   다른 사람 풀이  function solution(my_string, is_suffix) {     return my_string.slice(my_string.length - is_suffix.length) === is_suffix ? 1 : 0 }  my_string을 is_suffix만큼 잘라서 비교한 풀이.  훨씬 간결하고 가독성이 좋은 코드같다.   const solution = (str, suff) =&gt; str.endsWith(suff) ? 1 : 0  접두사인지 확인하기 문제에서 startsWith 메서드를 처음 봤었는데, endsWith 함수도 있었다…   알게 된 것  String.prototype.endsWith()  어떤 문자열이 특정 문자열로 끝나는지 여부를 Boolean 값으로 반환하는 메서드.  str.endsWith(searchString[, length])  총 2개의 인자를 받는다.     searchString : 문자열 내에서 찾아야 할 타겟 문자열   length : 생략 가능. (생략시 기본값은 문자열 전체 길이) 탐색을 진행할 문자열의 길이값. 즉 탐색을 진행할 문자열 내의 범위가 된다. length는 문자열 전체 길이 내여야 한다.    레퍼런스     MDN String.prototype.endsWith()  ","categories": ["algorithm-programmers"],
        "tags": ["algorithm","JS","programmers"],
        "url": "/algorithm-programmers/181908/",
        "teaser": null
      },{
        "title": "js의 속성 설명자(PropertyDescriptor)",
        "excerpt":"자바스크립트 객체의 속성 설명자 (property descriptor)   속성 설명자의 종류  객체의 속성 설명자는 총 4가지가 있다.  value를 제외한 나머지 3개의 값은 기본적으로 true가 부여된다.     value   writable: 해당 속성의 값을 변경할 수 있는지 여부   enumerable: 열거 가능한지 여부            일부 반복문의 순회 대상을 결정한다. 예를 들어 for...in 구문에서는 enumerable한 속성에만 접근 가능하다.           configurable    레퍼런스     https://developer-talk.tistory.com/277  ","categories": ["js"],
        "tags": ["JS","문법"],
        "url": "/js/js-object-property-descriptor/",
        "teaser": null
      },{
        "title": "Object.values() : 객체 내 값을 배열로 변경하기",
        "excerpt":"Object.values()  values()는 JS의 내장 객체 Object가 갖는 정적 메서드 중 하나다.  인자로 열거 가능한(enumarable) 객체를 받으며, 인자로 들어온 객체 내 속성의 값들로 이루어진 배열을 리턴한다.   이때 배열 내 값 순서는 객체의 속성을 for in 구문과 순회할 때와 동일하다.  // 유사 배열 (숫자를 속성으로 사용하는 객체) var obj = { 0: \"a\", 1: \"b\", 2: \"c\" }; console.log(Object.values(obj)); // ['a', 'b', 'c']  주의할 점     내부에 열거 가능하지 않은 속성이 있을 경우 결과 배열에서 제외된다. 또한 심볼형 프로퍼티를 무시한다.     var my_obj = Object.create( {}, {   getFoo: {     value: function () {       return this.foo;     },   }, }, ); my_obj.foo = \"bar\"; console.log(Object.values(my_obj)); // ['bar']           for-in 구문과 값 배치 순서가 같다. 즉 속성명이 숫자일 경우 숫자가 자동 오름차순 정렬되어 반환된다.     var an_obj = { 100: \"a\", 2: \"b\", 7: \"c\" }; console.log(Object.values(an_obj)); // ['b', 'c', 'a']           인자로 객체가 아닌 값을 전달하면, 객체로 강제 변환되어 적용된다.     console.log(Object.values(\"foo\")); // ['f', 'o', 'o']           배열도 객체이므로, 인자로 실제 배열이 들어올 수 있다.  배열이 인자로 들어갈 경우 인자 배열과 리턴되는 배열은 똑같은 형태의 값을 지니나, 서로 다른 주소값을 가진 복사 배열이 반환된다.     const myArray = ['유고스타', '유산슬', '유라섹', '유르페우스', '유DJ뽕디스파뤼', '유샘', '닭터유', '유두래곤'];  const myValues = Object.values(myArray);  console.log(myValues); // (8) [\"유고스타\", \"유산슬\", \"유라섹\", \"유르페우스\", \"유DJ뽕디스파뤼\", \"유샘\", \"닭터유\", \"유두래곤\"]  console.log(myArray === myValues); // false               레퍼런스       MDN Object.values()   모던 JavaScript 튜토리얼   https://bigtop.tistory.com/61  ","categories": ["js"],
        "tags": ["JS","문법"],
        "url": "/js/js-object_values/",
        "teaser": null
      },{
        "title": "맥북 (M2) 카라비너 없이 한영키를 우측 커맨드키로 바꾸기",
        "excerpt":"이번 맥북 OS를 Sonoma로 업데이트하면서 두 가지의 버그를 경험했다.     날짜와 시간이 부정확하게 설정되는 오류   기존 외장 프로그램(카라비너)으로 세팅한 키보드 설정 인식이 잘 되지 않는 오류   그중 키보드 인식이 잘 되지 않는 오류가 꽤 불편했다.  커맨드-옵션 키 순서를 바꾸는 것과 카라비너를 활용한 right command 키를 한영키로 사용하는 설정이 모두 되지 않았기 때문이다.  (카라비너 자체에서 드라이버 인식이 잘 되지 않고 있다.)   처음에는 Ventura로 다운그레이드를 해볼까도 했지만 이것때문에 포맷을 하는 건 너무 귀찮았다…  그래서 검색 끝에 아무 프로그램 설치 없이 맥북 내에서 한영키를 우측 커맨드로 바꾸는 방법을 찾아냈다!   추가 프로그램 설치 없이 한영키를 원하는 대로 바꾸기  한영키를 우측 커맨드 키로 바꾸고 싶다면 크게 아래와 같은 과정을 거치면 된다.     우측 커맨드 키를 사용하지 않는 키값으로 맵핑하기 (보통 키보드에 존재하지 않는 f18키를 이용한다).   한영키(맥에서는 설정 - 키보드 - 단축키 - 입력 소스의 ‘입력 메뉴에서 다음 소스 선택’) 단축키를 f18로 변경하기   카라비너 없이 위 과정을 실행할 수 있는 방법은 맥 내의 내장 앱 hidutil을 사용하는 것이다.  hidutil는 맥이 기본으로 제공하는 키 맵핑 앱이다.   방법     터미널에서 아래의 명령어를 실행한다.     hidutil property --set '{\"UserKeyMapping\":[{\"HIDKeyboardModifierMappingSrc\": 0x7000000E7,\"HIDKeyboardModifierMappingDst\": 0x70000006D}]}'`          hidutil이 잘 작동하고 있다면 별다른 메시지 없이 적용될 것이다.       설정 - 키보드 - 단축키 - 입력 소스에서 입력 메뉴에서 다음 소스 선택의 값을 f18로 변경한다.   다시 터미널로 돌아가 아래의 두 명령어를 입력한다.     cd ~/Library/LaunchAgents/ vi com.local.setting.key.remapping.plist          그러면 터미널의 명령어가 사라지면서 vim 에디터에 진입하게 된다.       아래 코드를 붙여넣고 저장한다.      &lt;?xml version=\"1.0\" encoding=\"UTF-8\"?&gt;  &lt;!DOCTYPE plist PUBLIC \"-//Apple//DTD PLIST 1.0//EN\" \"http://www.apple.com/DTDs/PropertyList-1.0.dtd\"&gt;  &lt;plist version=\"1.0\"&gt;  &lt;dict&gt;      &lt;key&gt;Label&lt;/key&gt;      &lt;string&gt;com.changing.KeyRemapping&lt;/string&gt;      &lt;key&gt;ProgramArguments&lt;/key&gt;      &lt;array&gt;          &lt;string&gt;/usr/bin/hidutil&lt;/string&gt;          &lt;string&gt;property&lt;/string&gt;          &lt;string&gt;--set&lt;/string&gt;          &lt;string&gt;{\"UserKeyMapping\":[          {\"HIDKeyboardModifierMappingSrc\":0x7000000E7,          \"HIDKeyboardModifierMappingDst\":0x70000006D}          ]}&lt;/string&gt;      &lt;/array&gt;      &lt;key&gt;RunAtLoad&lt;/key&gt;      &lt;true/&gt;  &lt;/dict&gt;  &lt;/plist&gt;          붙여넣기는 그냥 cmd + v를 누르면 된다.   vim 에디터에서 저장 후 에디터를 빠져나오는 방법은 :를 누른 뒤 wq 입력 후 엔터를 누르면 된다.       이렇게 적용하고 나면 한영키 변경 시 딜레이도 없고, 우측 커맨드 키로 아주 잘 변환되는 것을 확인할 수 있다!    레퍼런스     https://jintelli.tistory.com/41  ","categories": ["tips"],
        "tags": ["mac"],
        "url": "/tips/mac-right-command/",
        "teaser": null
      },{
        "title": "Window.getComputedStyle이란?",
        "excerpt":"Window.getComputedStyle()  브라우저에 그려진 엘리먼트의 스타일을 객체로 반환해주는 메서드이다.     Window.getComputedStyle() 메소드는 인자로 전달받은 요소의 모든 CSS 속성값을 담은 객체를 회신합니다. (출처: MDN) 사용하는 예시는 아래와 같다.    p {   font-size: 2rem; }      let para =let para = document.querySelector(\"p\"); let compStyles = window.getComputedStyle(para);  compStyles.getPropertyValue(\"font-size\"); // 32px      Element.style와의 차이점은?  엘리먼트의 스타일 객체를 가져올 수 있는 방법이 한 가지 더 있다.  바로 Element.style 객체를 활용하는 것이다.   모두 스타일 정보를 가져오는 객체들이지만,  크게 두 가지 차이점이 있다.  가져오는 스타일 정보의 범위가 다르다. (외부 선언 vs 인라인)  getComputedStyle()은 외부 선언된 css까지 전부 적용된 값을 가져온다.  Element.style은 인라인으로 직접 선언된 속성값만을 가져온다.  &lt;div id=\"first-element\" style=\"color: red;\"&gt;엘리먼트 1&lt;/div&gt; &lt;div id=\"second-element\"&gt;엘리먼트 2&lt;/div&gt; &lt;style&gt;   #second-element {     color: green;   } &lt;/style&gt;  const firstElement = document.getElementbyId('first-element'); const secondElement = document.getElementbyId('second-element');  // Element.style 예시 firstElement.style.color; // \"red\" secondElement.getElementbyId('second-element').style.color; // \"\" (인라인 속성으로 정의되지 않았기 때문에)  // getComputedStyle() 예시 window.getComputedStyle(secondElement).getPropertyValue(\"color\"); // \"rgb(0, 128, 0)\"  Element.style은 기본적으로 해당 엘리먼트의 ‘style’이라는 속성에 부여된 값을 가져오는 것이다.  그러므로 속성 그 자체를 통해 정의하지 않은 값들은 참조가 불가능하다.  getComputedStyle()은 모든 CSS 적용이 끝난 최종 상태를 기준으로 값을 가져올 수 있는 메서드이므로, 외부 선언된 CSS도 참조가 가능하다.   읽기 전용 vs 새로운 스타일 설정 가능  getComputedStyle()이 반환하는 객체는 기본적으로 read-only이다.  즉 getComputedStyle()을 통해 가져온 객체의 값을 변경하게 스타일을 수정할 수 없다.  반면 Element.style은 객체에 새로운 값을 할당할 수 있기 때문에, 스타일 수정 또한 가능하다.  —  레퍼런스     https://helloinyong.tistory.com/284   MDN Window.getComputedStyle()  ","categories": ["js"],
        "tags": ["JS"],
        "url": "/js/js-window-getcomputedstyle/",
        "teaser": null
      },{
        "title": "Vue UI 컴포넌트: 상하 스크롤을 따라다니는 플로팅 컴포넌트 만들기 (추가 라이브러리 X)",
        "excerpt":"플로팅 컴포넌트 만들기  상하 스크롤을 쫓아오는 플로팅 메뉴를 만들어야 했다.  해당 기능을 또 쓸 일이 있을 것 같아, 플로팅 기능만 유틸처럼 떼놓은 형태의 컴포넌트를 만들기로 결정했다.  현재는 위치를 디테일하게 정하는 기능 없이, 일단 스크롤을 따라다니는 기능만 만들어본다.  (Vue 3, Nuxt 3 환경을 기준으로 만들었다.)    기본 구조  template 구조  &lt;template&gt;   &lt;div ref=\"floatingItem\" class=\"floating\"&gt;     &lt;slot /&gt;   &lt;/div&gt; &lt;/template&gt;  template의 구조는 이렇다.  플로팅 기능을 쓰고 싶은 엘리먼트가 있다면, 이 컴포넌트로 감싸서 기능을 덧붙일 수 있도록 했다.  &lt;!-- 플로팅 사용 예시 --&gt; &lt;template&gt;     &lt;CommonFloatingItme&gt;         &lt;div&gt;스크롤 따라오세요!&lt;/div&gt;     &lt;/CommonFloatingItme&gt; &lt;/template&gt;  직접 사용할 경우 이런 모양이 될 것이다.  로직 만들기  플로팅 컴포넌트의 로직은 크게 3단계로 나뉜다.     현재 스크롤이 움직인 수치를 구한다.   스크롤이 움직인 수치를 기반으로 요소의 위치를 변경한다.   위치를 변경하는 이벤트를 이벤트 리스너의 ‘scroll’ 이벤트에 등록한다. 하나씩 살펴보자.     플로팅 요소 준비      나는 css의 position: absolute를 이용해 로직을 작성했기 때문에,  제대로 작동하려면 움직일 엘리먼트에 position: absolute와 top 속성이 적용되어있어야 한다.  아래의 css를 적어주자.      .floating {  position: absolute;  top: 0; }          스크롤이 움직인 수치 구하기      스크롤이 움직인 수치를 구하는 방법은 매우 간단하다.   window.scrollY가 상하 스크롤이 움직인 수치이므로, 이것만 구해오면 된다. scrollY가 없을 경우를 대비해 document.documentElement.scrollTop을 추가로 적어주었다..      const getScrollTop = () =&gt; window.scrollY || document.documentElement.scrollTop;          하지만 나의 경우 이대로만 작성하면 에러가 발생했다.  Nuxt 3와 같은 SSR 환경에서는 페이지가 구성될 때 window 및 document 객체가 존재하지 않을 경우가 있어 500 에러가 발생한다.  나와 같이 SSR 환경에서 컴포넌트를 작성하는 경우 아래처럼 예외 처리 코드를 추가해주자.      const getScrollTop = () =&gt; {   if (typeof window !== 'undefined') {  return window.scrollY || document.documentElement.scrollTop;   }   return 0 // window가 정의되지 않은 경우 }          window 객체가 정의되었는지 확인할 때 흔히 쓰이는 typeof window !== 'undefined' 구문을 추가해주었다.       스크롤한 만큼 요소를 움직이는 함수 만들기 (기본)  스크롤된 수치만큼 요소를 이동하는 로직을 만들어보자.  먼저 기본 로직은 아래와 같다.  const floatingItem = ref&lt;HTMLElement | null&gt;(null); // 움직일 요소를 ref로 받아오기  const handleScroll = () =&gt; {     if(floatingItem.value) {         const currentTop = getScrollTop(); // 현재 스크롤된 수치 가져오기         // 아이템의 top에 스크롤된 수치를 넣어주기         const itemTop = `${currentTop}px`;          floatingItem.value.style.top = itemTop;     } }  이렇게 하면 스크롤된 만큼 아이템의 위치가 변경된다.   CSS를 이용해 부드럽게 화면을 따라오는 효과 추가하기  위 코드까지 작성한다면, 스크롤을 따라 요소의 위치는 잘 이동된다.  하지만 부드럽게 스크롤을 따라오는 것이 아니라 ‘뚝’ 하고 움직인다.   좀더 매끄러운 효과를 주려면 CSS를 이용해 top 속성에 transition 효과만 부여해주면 된다.  아래의 CSS를 추가해보자.  .floating {     position: absolute;     top: 0;     transition: top 0.8s cubic-bezier(0.17, 0.84, 0.44, 1); // 추가하기 }  위의 예시에 쓰인 duration이나 cubic-bezier 값은 임의대로 수정해 필요한 형태로 알맞게 사용하면 된다!   완성 코드  &lt;template&gt;   &lt;div ref=\"floatingItem\" class=\"floating\"&gt;     &lt;slot /&gt;   &lt;/div&gt; &lt;/template&gt;  &lt;script lang=\"ts\" setup&gt; const floatingItem = ref&lt;HTMLElement | null&gt;(null); const getScrollTop = () =&gt; {   if (typeof window !== 'undefined') {     return window.scrollY || document.documentElement.scrollTop;   }   return 0; } const handleScroll = () =&gt; {   if (floatingItem.value) {     const currentTop = getScrollTop();     const itemTop = `${currentTop}px`;     floatingItem.value.style.top = itemTop;   } } const debouncedScrollEvent = debounce(200, handleScroll)  onMounted(() =&gt; {   window.addEventListener('scroll', debouncedScrollEvent) })  onBeforeUnmount(() =&gt; {   window.removeEventListener('scroll', debouncedScrollEvent) }) &lt;/script&gt;  &lt;style lang=\"scss\" scoped&gt; .floating {   position: absolute;   top: 0;   transition: top 0.8s cubic-bezier(0.17, 0.84, 0.44, 1); } &lt;/style&gt;  (참고로 위에서 handleScroll을 감싼 debouncedScrollEvent는 스크롤 이벤트에 디바운싱을 적용하기 위해 기존에 작성된 debounce 유틸로 함수를 감싼 것이다.)   ","categories": ["vue"],
        "tags": ["vue","vue3","Javascript","UI"],
        "url": "/vue/vue-floating-component/",
        "teaser": null
      },{
        "title": "poetry에서 파이썬 버전 관련 에러 해결하기 (The current project's supported Python range...)",
        "excerpt":"파이썬을 학습하며 다양한 버전을 사용해야 해서, pyenv와 poetry를 이용하고 있다.  pyenv는 여러 파이썬 버전을 관리 및 변경해 사용할 수 있도록 도와주는 version management 라이브러리이며,  poetry는 가상환경 및 파이썬 패키지 매니징 기능을 제공하는 라이브러리다.   dataprep이라는 라이브러리를 사용하던 도중, 분명 요구사항에 맞는 파이썬 버전을 사용했는데도 아래처럼 에러가 발생했다.  The current project's supported Python range (&gt;=3.8,&lt;4.0) is not compatible with some of the required packages Python requirement:   - dataprep requires Python &gt;=3.8,&lt;3.11, so it will not be satisfied for Python &gt;=3.11,&lt;4.0  Because no versions of dataprep match &gt;0.4.5,&lt;0.5.0  and dataprep (0.4.5) requires Python &gt;=3.8,&lt;3.11, dataprep is forbidden. So, because eda-dataprep depends on dataprep (^0.4.5), version solving failed.     The current project’s supported Python range… 에러가 발생하는 이유  poetry로 가상 환경을 설정한 경우, 패키지 관리용 페이지가 생성되어 있다. (pyproject.toml)  내 실제 프로젝트 파일을 예시로 들면,  [tool.poetry] name = \"eda-dataprep\" version = \"0.1.0\" description = \"\" authors = [\"Seung Hyun Tark &lt;makepin2r@gmail.com&gt;\"] readme = \"README.md\"  [tool.poetry.dependencies] python = \"^3.8\" dataprep = \"^0.4.5\"   [build-system] requires = [\"poetry-core\"] build-backend = \"poetry.core.masonry.api\"  tool.poetry.dependencies 항목을 보면 python 의존성이 ^3.8로 되어있다.  (해당 프로젝트를 설정할 때 3.8.19 버전 파이썬을 사용했기 때문에 파일이 이렇게 생성된 것 같다.)   버전 앞에 ^는 semantic versioning을 사용한다는 의미이다. (~을 사용하기도 한다)   시맨틱 버저닝을 사용할 경우 정확히 일치하는 버전을 사용하는 게 아닌, 제한된 버전 내의 최신 버전을 사용하겠다는 의미가 된다.   위의 에러를 읽어보면 시맨틱 버저닝으로 인해 이 프로젝트에서 허용되는 범위가 &gt;=3.8,&lt;4.0로 해석됨을 알 수 있다.  하지만 dataprep에서 요구하는 범위는 &gt;=3.8,&lt;3.11로, &gt;=3.8,&lt;4.0보다 더 좁은 범위이기 때문에 의존성 에러가 발생한다.   해결 방법  이때는 의존성 값을 변경해주어야 한다.  나의 경우 에러에서 제시된 dataprep을 그대로 입력했고, 에러가 해결되었다.  [tool.poetry.dependencies] python = \"&gt;=3.8,&lt;3.11\" dataprep = \"^0.4.5\"    레퍼런스     stackoverflow   시맨틱 버저닝이란?  ","categories": ["python"],
        "tags": ["python"],
        "url": "/python/python-poetry-version/",
        "teaser": null
      },{
        "title": "자유로운 커스텀 에디터를 만들어보자 : TipTap 도입기 (Nuxt 3)",
        "excerpt":"Toast Editor… 안녕  회사에서 커뮤니티 게시판 기능을 개선하는 프로젝트에서, 에디터를 전면 수정하게 되었다.  기존에는 Toast 에디터를 이용해 정석적인 형태의 UI만 제공하고 있었다.  (블로그 글쓰기 화면같이 상단에 툴바가 있는 모양이었다.)     이번 개선안을 구현하려면 Toast만으로 대응하기 어려운 포인트들이 있었다.     타이포그래피를 변경하는 UI가 자유롭게 커스텀이 되어야 함            새로운 UI에서는 별도의 드롭다운에서 제목 레벨, 볼드, 이탤릭 처리 등이 필요했다.       Toast는 툴바 내의 요소를 자유롭게 세팅할 수 있으나, 타이포그래피 변경하는 메서드를 내가 만든 UI에 연결하는 방식을 지원하지 않았다.           HTML과 Markdown을 모두 지원하고, 입력 즉시 양식이 적용되어야 함            Toast의 경우 위지윅 모드로 입력할 때는 입력창에 바로 타이포그래피가 적용된 상태로 출력된다. 단 마크다운은 입력 - preview 창이 나뉘어져 있다.       이번 기획안에서는 HTML과 마크다운 모두 입력창에서 양식이 적용된 형태로 확인 및 수정이 가능해야 했다.           문제점을 추려 보고 나니, 현재 우리 프로젝트에 맞는 새로운 라이브러리를 찾아야겠다는 결론이 났다.   TipTap을 선택한 이유  최종적으로 선택한 것은 TipTap이었다.  텍스트 에디터도 headless 라이브러리가 있었다니!   여러 라이브러리를 검토해보고 TipTap을 선택한 이유는 이러했다.           Nuxt, Next 모두 호환 가능할 것     텍스트 편집 기능을 커스텀 가능하게 제공할 것     HTML, Markdown을 모두 지원할 것     HTML, Markdown 상관 없이 모두 입력창에 즉시 적용된 양식이 보여질 것     무료면 좋겠다…      위 5 가지 조건은 Toast에서 아쉬웠던 점과 프로젝트에서 꼭 필요한 기능들을 모아 정리한 것들이다.   일단 우리 회사는 기존 웹서비스를 모바일 앱으로 옮기는 작업도 하고 있다.  웹서비스는 Nuxt 3, 웹뷰는 Next 14 기반으로 제작되기 때문에 되도록 두 환경 모두 매끄럽게 호환되는 라이브러리를 희망했다.   또한 디자인에 맞추려면 텍스트 편집 기능을 자유롭게 직접 만든 UI에 연결할 수 있어야 했고, 위지윅이든 마크다운이든 입력창에 바로 텍스트 양식이 적용되어야 했다. 기능 별로 위지윅/마크다운 작성이 혼용되어 있기 때문이다.   직접 적용해본 결과, 자유도가 높은 만큼 품도 많이 들긴 한다.  그래도 웬만한 것들은 구현이 가능해서 만족도가 높다.   Nuxt 3에 TipTap 세팅하는 방법 (에디터 컴포넌트 만들기)  공식 문서를 참고해 Nuxt 3 기반의 프로젝트에 에디터 컴포넌트를 작성했다.   우리 프로젝트에는 입력 기능을 지원해야 하는 곳이 많고, 기능마다 UI 형태가 조금씩  다르다.  관리가 편하도록 에디터 초기화와 기본적인 기능이 포함된 컴포넌트를 만든 뒤 (이미지 업로드, 타이포그래피 CSS 등), 추후 디자인을 덧씌운 실제 UI 컴포넌트를 그때 그때 만들기로 했다.   라이브러리 설치하기  먼저 라이브러리를 설치한다. 기본으로 설치해야 하는 패키지는 아래 3가지다.  npm install @tiptap/vue-3 @tiptap/pm @tiptap/starter-kit   마크다운도 지원해야 하므로 추가로 한 가지를 더 설치했다. https://github.com/aguingand/tiptap-markdown  npm install tiptap-markdown   컴포넌트 만들기  패키지를 모두 설치했다면 기본적인 컴포넌트를 만든다.  (아래 예시 코드의 개발 환경은 Nuxt 3, Vue 3 이다.)  &lt;template&gt;     &lt;div class=\"editor-content\" /&gt; &lt;/template&gt;  &lt;script lang=\"ts\" setup&gt; import { ref, onMounted, onBeforeUnmount } from 'vue' import { Editor } from '@tiptap/vue-3' import StarterKit from '@tiptap/starter-kit' import { Markdown } from 'tiptap-markdown'  const props = defineProps&lt;{   modelValue: string }&gt;() const emit = defineEmits&lt;{   (event: 'update:modelValue', value: string): void }&gt;()  const inputValue = computed({   get: () =&gt; props.modelValue,   set: (value) =&gt; emit('update:modelValue', value) })  const editor = ref&lt;Editor | null&gt;(null)  onMounted(() =&gt; {   // 에디터 초기화   editor.value = new Editor({     element: document.querySelector('.editor-content') as HTMLElement,     content: inputValue.value,     extensions: [       StarterKit,       Markdown     ],     onUpdate: ({ editor }) =&gt; {       // 값 입력 시 수행할 로직       inputValue.value = editor.storage.markdown.getMarkdown()       // HTML 형태로 전달하고 싶다면 editor.getHTML() 을 넘겨주자     }   }) })  onBeforeUnmount(() =&gt; {   // 클린업   editor.value?.destroy() }) &lt;/script&gt; &lt;style lang=\"scss\" scoped&gt;     /* 타이포그래피 커스텀이 필요하다면 추가하기 */ &lt;/style&gt;   먼저 컴포넌트가 생성될 때, TipTap 에디터를 초기화해준다.  new Editor() 생성자를 이용하고, 추가적인 세팅이 필요하다면 생성자 안에 객체로 넘겨주면 된다. 옵션은 공식 문서에 잘 설명되어 있다.  컴포넌트가 종료될 때 클린업을 위하여 생성된 Editor 인스턴스는 변수에 할당해둔다.   먼저 element 옵션에서 초기화할 HTML 엘리먼트를 지정해준다.  content는 초기 입력값을 지정할 수 있는 옵션이다. 문자열을 그냥 넘겨줘도 되지만, 동적으로 초기값을 지정해줄 경우를 생각해서 나는 props가 연결된 ref 변수의 값을 넣어주었다.   참고로 inputValue라는 computed 변수를 따로 지정해둔 이유는, 입력값을 외부 ref 변수에 연결해두고 싶었기 때문이다.  따로 연결하지 않고 Editor 내의 최종 값만 나중에 전송하면 업데이트가 덜 일어나겠지만, 그러려면 최종 전송 이벤트를 트리거하는 추가적인 요소가 이 컴포넌트에 붙어야 한다. 외부 ref 값에 연결해두면 저장 버튼같은 부수적인 UI를 따로 두지 않고 순수하게 에디터만 있는 컴포넌트를 만들 수 있다.   extension은 추가하고 싶은 패키지를 등록하는 옵션이다. 나의 경우 StarterKit을 등록해주었다. 기본적인 텍스트 편집 기능이 모두 포함되어있는 패키지다. + 추가로 마크다운 기능을 위해 Markdown 패키지도 포함했다.  각각의 익스텐션은 configure 메서드를 활용해 더 디테일하게 커스텀할 수 있다. 예를 들면, Heading의 레벨을 1~3까지만 사용하고 싶다면 이렇게 수정하면 된다.  // ...     extensions: [       StarterKit.configure({         heading: {           levels: [1, 2, 3]         }       }),       Markdown     ], // ...   onUpdate는 입력값이 변경될 때 트리거 된다. 입력 시 추가적인 로직 수행이 필요할 때 옵션을 추가하면 된다.   문제 발생…!  컴포넌트는 아주 잘 작동했으나, 만들고 나니 문제가 하나 있었다.  특이하게도 엔터키를 눌렀을 때 아무런 작동도 하지 않더라…!   Shift + Enter를 누르면 \\n이 입력되어 줄바꿈은 되지만, 양식이 적용된 상태에선 마크다운의 단축키가 새롭게 인식되지 않았다.   이를 해결하기 위해 추가적인 수정을 거치게 되었다.  다음 글에서 엔터키 적용을 위한 트러블슈팅에 대해 적어보려 한다.  ","categories": ["vue"],
        "tags": ["vue","nuxt"],
        "url": "/vue/nuxt-tiptap/",
        "teaser": null
      }]

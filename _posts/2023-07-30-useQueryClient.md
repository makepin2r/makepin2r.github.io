---
layout: post
title: "React-Query의 useQueryClient"
description:
date: 2023-07-30
feature_image:
tags: [React-Query, Frontend]
---

# React-Query 기본 설정

React Query는 클라이언트에서 '서버 상태'를 관리하기 위한 라이브러리다.  
React 환경에서 기존 Redux와 같은 상태 관리 라이브러리는 클라이언트 데이터의 상태 관리를 위한 라이브러리이기 때문에, 서버에서의 데이터 상태가 쉽게 outdate 되는 등의 문제가 발생한다.  
이를 방지하기 위해 간결한 코드와 지속적으로 서버 데이터를 업데이트하는 기능을 제공해주는 게 React Query다.

## React Query의 설치 및 초기 설정

### 설치

```bash
npm i @tanstack/react-query@beta # npm
yarn add @tanstack/react-query@beta # yarn
```

`EsLint Plugin Query`를 설치하는 명령어는 아래와 같다.

```bash
npm i -D @tanstack/eslint-plugin-query@beta # npm
yarn add -D @tanstack/eslint-plugin-query@beta # yarn
```

ESLink 플러그인으로 설치하였을 경우 플러그인 폴더??에 있는 .eslintrc 파일에 아래를 추가한다

```json
{
  "plugins": ["@tanstack/query"]
}
{
  "rules": {
    "@tanstack/query/exhaustive-deps": "error", // 규칙 추가하기
  }
}
{
  "extends": ["plugin:@tanstack/eslint-plugin-query/recommended"] // 모든 권장 규칙 활성화하기
}
```

## React Query Devtools의 설치 및 활용 방법

### 설치

아래 패키지를 설치하면 된다.

```bash
$ npm i @tanstack/react-query-devtools # npm
$ yarn add @tanstack/react-query-devtools # yarn
```

### 사용 방법

DevTools로 최상위 앱 컴포넌트를 감싸준다. (페이지의 루트에 가까울 수록 작동이 잘 된다.)  
이렇게 감싸주면 앱 화면에서 토글 버튼으로 개발자 도구를 열어서 사용할 수 있다.

```javascript
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <MyApp />
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}
```

설정 속성들에 대한 설명이다.

-   `initialIsOpen` : true이면 열린 상태로 시작
-   `buttonPosition` : 토글 버튼이 뜨는 위치. `"top-left"`(기본값) | `"top-right"` | `"bottom-left"` | `"bottom-right"`

```javascript
buttonPosition?: "top-left" | "top-right" | "bottom-left" | "bottom-right"awww
```

-   `position` : devTools 패널이 뜨는 위치. `"top"` | `"bottom"`(기본값) | `"left"` | `"right"`
-   `client`: 어떤 QueryClient를 개발자 도구에서 사용할 것인지

```javascript
errorTypes?: { name: string; initializer: (query: Query) => TError}
```

-   `errorTypes` : 쿼리에서 트리거되는 오류들을 정의해두고, 오류가 발생하면 initializer가 호출된다.

```javascript
errorTypes?: { name: string; initializer: (query: Query) => TError}
```

## React Query의 주요 옵션들에 대한 이해

## React Query의 전반적인 아키텍처와 데이터 흐름에 대한 이해

![React Query Architecture]('https://github.com/makepin2r/makepin2r.github.io/blob/main/images/23-07-30-react-query-architecture.PNG?raw=true')

https://dreamcode.tistory.com/440  
https://sanoo.dev/react-query

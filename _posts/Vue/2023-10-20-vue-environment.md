---
title: "Vue 개발 환경 세팅하기"
last_modified_at: 2023-10-20
categories:
    - vue
tags:
    - vue
---

## vue 기본 개발 환경 세팅하기
vue 기반으로 개발하려면 몇 가지 세팅이 필요하다.  
밑에 기록한 내용은 아무런 추가 패키지 없이 기본 프로젝트만 생성하는 방법이다.  

### 필요한 환경
1. node.js : npm이나 yarn같은 패키지 매니저가 필요하다.
2. IDE : 나의 경우 vscode로 사용했다.  
  vscode를 사용하면 편리한 익스텐션을 설치할 수 있다.  
    - Volar: 문법 하이라이트, 코드 자동완성해줌. TS도 지원
    - vue 3 snippets: vue 문법을 자동완성해줌
    - Vue Peek: 컴포넌트 정의부로 바로 이동할 수 있게 해줌  

이외에 [vue 공식 가이드에서 추천하는 여러 도구](https://ko.vuejs.org/guide/scaling-up/tooling.html)들을 참고해도 좋겠다.

## vuecli를 활용해 vue 프로젝트 생성하기
`vuecli`로 간단하게 vue 프로젝트를 세팅해보자.  
1. 터미널을 실행한다.  
2. vuecli를 먼저 설치해야 한다. 아래 명령어를 입력하면 설치가 실행된다.  
```bash
npm install -g @vue/cli
```
이때 버전을 선택하라는 메시지가 뜨는데, 나는 Vue 3를 선택했다.  
3. 설치가 완료되었으면, 터미널에서 프로젝트 폴더를 생성할 경로로 이동한다.  
4. 프로젝트를 생성하는 명령어를 입력한다.  
```bash
vue create [프로젝트명]
```
설치가 완료되면 터미널이 있는 경로 하위에 프로젝트명으로 된 새로운 폴더가 생성된다.  
5. `cd [프로젝트명]`을 입력해 프로젝트 폴더로 이동한다.
  해당 경로에서 프로젝트를 실행하려면 npm 명령어를 입력하면 된다.
  ```bash
  npm run serve 
  ```
---
title: "TypeScript 프로젝트 세팅"
categories:
    - TypeScript
last_modified_at: 2023-08-03
tags:
    - TypeScript
---

> [NomadCoders의 <타입스크립트로 블록체인 만들기>](https://nomadcoders.co/typescript-for-beginners/) 수업을 참고하여 작성하였습니다.

VSCode를 사용하고 TypeScript를 이미 설치한 경우,
프로젝트 폴더에 `tsconfig.json`이 있으면 자동으로 해당 프로젝트가 TypeScript 기반임을 인식한다.

## 기본 환경

-   NodeJS

## TypeScript 설치

```bash
npm i -D typescript
```

## TypeScript 프로젝트 생성

### 1. Node 프로젝트 생성

프로젝트를 만들 폴더로 가서 아래 명령어를 실행한다.

```bash
npm init -y
```

### 2. `tsconfig.json` 파일 생성

프로젝트 루트 폴더에 `tsconfig.json` 파일을 추가한다.  
아래와 같은 내용을 작성한다.

```json
{
    "include": ["src"], // ts 파일이 위치할 경로
    "compilerOptions": {
        "outDir": "build", // 컴파일된 js 파일이 위치할 경로
        "target": "es6" // 디폴트는 es2016. 특정 버전의 js로 컴파일되기를 원할 시에 수정
    }
}
```

명령어를 통해 간단히 디폴트 파일을 만들어줄 수도 있다.

```bash
tsc --init # tsconfig.json 파일 생성
```

### 2. package.json 수정

package.json에서 `"main": "index.js"`를 삭제하고 `"scripts"` 항목을 수정한다.

```json
{
    ...
    "scripts": {
        "build": "tsc"
    }
    ...
}
```

`npm run build` 명령어를 실행하면 `tsc` 명령어가 자동으로 실행되면서 빌드가 완료된다.

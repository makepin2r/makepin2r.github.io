---
layout: post
title: "React-Query의 useQueryClient"
description: 
date: 2023-07-30
feature_image: 
tags: [React-Query, Frontend]
---

# useQuery 고급 기능 및 useQueryClient

## onSuccess, onError, onSettled
### onSuccess
mutation이 성공적으로 완료되었을 때 해당 요청의 result를 반환  
Promise 객체 반환시 모든 객체의 진행이 끝나고 나서 실행된다.
### onError
mutation이 오류 발생시 실행
Promise 객체 반환시 모든 객체의 진행이 끝나고 나서 실행된다.
### onSettled
성공 혹은 실패에 상관 없이 실행된다.  

- useMutation에서 콜백 실행 순서
```javascript
useMutation(addTodo, {
   onSuccess: (data, variables, context) => {
     // I will fire first
   },
   onError: (error, variables, context) => {
     // I will fire first
   },
   onSettled: (data, error, variables, context) => {
     // I will fire first
   },``
  });

mutate(todo, {
   onSuccess: (data, variables, context) => {
     // I will fire second!
   },
   onError: (error, variables, context) => {
     // I will fire second!
   },
   onSettled: (data, error, variables, context) => {
     // I will fire second!
   },
});
```
## select, keepPreviousData, placeholderData
### select
select 옵션을 사용하면 `useQuery`에서 반환된 데이터 중 특정 부분만 선택할 수 있다.
```javascript
useQuery("user", fetchUser, { select : data => data.data })

const { data, isLoading } = useQuery("user", fetchUser, { select: data => ({ id: data.id, name: data.name })});
```
## Parallel, Dependent Queries, useQueryClient
## useQuery의 delayQuery 이해 및 활용

https://velog.io/@kimhyo_0218/React-Query-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%BF%BC%EB%A6%AC-useMutation-%EA%B8%B0%EB%B3%B8-%ED%8E%B8  
https://velog.io/@apro_xo/ReactQuery-useQuery-select-%EC%98%B5%EC%85%98  

``
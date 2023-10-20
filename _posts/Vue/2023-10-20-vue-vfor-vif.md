---
title: "Vue 문법 : v-if/v-else & v-for 디렉티브"
last_modified_at: 2023-10-20
categories:
    - vue
tags:
    - vue
---

vue에서 조건부 렌더링이나 반복 렌더링을 할 때는 특정 디렉티브를 사용한다.

## 조건부 렌더링 v-if, v-else, v-else-if
### v-if
`v-if`가 적용된 html 블록은 v-if 내 표현식의 truthy/falsy 여부에 따라 렌더링된다.
```html
<button @click="isShow = !isShow">TOGGLE!</button>
<div v-if="isShow">나왔다가 안 나왔다가</div>
```

### v-else
`v-if`가 쓰인 블록 이후에만 올 수 있다. (또는 `v-else-if`)  
`v-if` 블록이 렌더링되지 않을 때만 렌더링된다.  
```html
<button @click="isShow = !isShow">TOGGLE!</button>
<div v-if="isShow">나왔다가 안 나왔다가</div>
<div v-else >쟤가 나오면 안나왔다가</div>
```

### v-else-if
조건문의 else if와 동일한 역할을 한다.  
`v-if`가 렌더링되지 않았을 때 렌더링되는 경우가 2개 이상일 경우 사용한다.  
`v-else`와 마찬가지로 `v-if`가 쓰인 블록 이후에만 올 수 있다.  

## 반복 렌더링 v-for
### v-for
배열과 같은 이터러블한 데이터를 이용해 블록을 반복 렌더링할 수 있다.  
#### v-for의 속성
`v-for`은 특수한 속성값이 필요하다.  
언제나 `[alias] in [데이터]` 형태로 주어져야 한다.  
  
이때 데이터에는 아래와 같은 값이 들어올 수 있다.  
- Array, Map, Set, Object 와 같은 JS 네이티브 자료형  
- number, string : 숫자가 주어지면 해당 수만큼 고정 반복 렌더링된다.
```html
<script>
    const items = ref([{ message: 'Foo' }, { message: 'Bar' }])
</script>
<template>
    <li v-for="item in items">
        {{ item.message }}
    </li>
</template>
```
  
**alias**는 데이터를 순회할 때 현재 가리키는 값에 부여하는 변수명과 같다.  
총 두 개의 인자를 지정해줄 수 있는데 첫 번째 인자는 **데이터 내 현재 원소값**, 두 번째 인자는 **인덱스**이다. (단, 데이터가 객체일 경우 값 - 속성명 - 인덱스 총 3개의 인자를 받을 수 있다)   
두 인자의 변수 스코프는 JS의 반복문처럼 v-for이 적용된 블록까지이다.  
  
주의할 점은 v-for을 이용해 블록을 렌더링할 때, **반드시 `:key`를 부여**해줘야 한다는 점이다.  
Vue는 리스트 렌더링을 업데이트할 때 in-place patch 전략을 사용한다.  
즉 아이템의 순서가 변경되면 DOM 엘리먼트 자체를 변경하지 않고 엘리먼트 내의 내용만 바꾼다. (Reflow 방지를 위함)  
그러므로 해당 엘리먼트에 고유 key 속성을 제공해서 Vue가 값을 추적할 수 있도록 해야 한다.
```html
<li v-for="(item, i) in items" :key="i">
    {{ item.message }}
</li>
```

---
#### 레퍼런스
- [Vue 공식 문서 - 조건부 렌더링](https://ko.vuejs.org/guide/essentials/conditional.html#v-if)
- [Vue 공식 문서 - 리스트 렌더링](https://ko.vuejs.org/guide/essentials/list.html)
- [Vue 공식 문서 - 디렉티브](https://ko.vuejs.org/api/built-in-directives.html#v-if)

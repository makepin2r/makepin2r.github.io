---
title: "Object.values() : 객체 내 값을 배열로 변경하기"
last_modified_at: 2023-12-10
categories:
    - js
tags:
    - JS
    - 문법
# toc: true
# toc_sticky: true
---

## Object.values()
`values()`는 JS의 내장 객체 Object가 갖는 정적 메서드 중 하나다.  
인자로 열거 가능한(enumarable) 객체를 받으며, 인자로 들어온 객체 내 속성의 값들로 이루어진 배열을 리턴한다.  
  
이때 배열 내 값 순서는 객체의 속성을 for in 구문과 순회할 때와 동일하다.
```javascript
// 유사 배열 (숫자를 속성으로 사용하는 객체)
var obj = { 0: "a", 1: "b", 2: "c" };
console.log(Object.values(obj)); // ['a', 'b', 'c']
```
### 주의할 점
- 내부에 열거 가능하지 않은 속성이 있을 경우 결과 배열에서 제외된다. 또한 심볼형 프로퍼티를 무시한다.
```javascript
var my_obj = Object.create(
  {},
  {
    getFoo: {
      value: function () {
        return this.foo;
      },
    },
  },
);
my_obj.foo = "bar";
console.log(Object.values(my_obj)); // ['bar']
```
- for-in 구문과 값 배치 순서가 같다. 즉 속성명이 숫자일 경우 숫자가 자동 오름차순 정렬되어 반환된다.
```javascript 
var an_obj = { 100: "a", 2: "b", 7: "c" };
console.log(Object.values(an_obj)); // ['b', 'c', 'a']
```
- 인자로 객체가 아닌 값을 전달하면, 객체로 강제 변환되어 적용된다.
```javascript
console.log(Object.values("foo")); // ['f', 'o', 'o']
```
- 배열도 객체이므로, 인자로 실제 배열이 들어올 수 있다.  
  배열이 인자로 들어갈 경우 인자 배열과 리턴되는 배열은 똑같은 형태의 값을 지니나, <u>서로 다른 주소값</u>을 가진 복사 배열이 반환된다.
  ```javascript
  const myArray = ['유고스타', '유산슬', '유라섹', '유르페우스', '유DJ뽕디스파뤼', '유샘', '닭터유', '유두래곤'];

  const myValues = Object.values(myArray);

  console.log(myValues);
  // (8) ["유고스타", "유산슬", "유라섹", "유르페우스", "유DJ뽕디스파뤼", "유샘", "닭터유", "유두래곤"]

  console.log(myArray === myValues);
  // false
  ```
---
#### 레퍼런스
- [MDN Object.values()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)
- [모던 JavaScript 튜토리얼](https://ko.javascript.info/keys-values-entries)
- [https://bigtop.tistory.com/61](https://bigtop.tistory.com/61)
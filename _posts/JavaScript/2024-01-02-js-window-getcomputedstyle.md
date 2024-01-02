---
title: "Window.getComputeStyle이란?"
last_modified_at: 2024-01-02
categories:
    - js
tags:
    - JS
# toc: true
# toc_sticky: true
---

## Window.getComputedStyle()
브라우저에 그려진 엘리먼트의 스타일을 객체로 반환해주는 메서드이다.
> Window.getComputedStyle() 메소드는 인자로 전달받은 요소의 모든 CSS 속성값을 담은 객체를 회신합니다. (출처: MDN)
사용하는 예시는 아래와 같다.
```css
p {
  font-size: 2rem;
}
```
```javascript
let para =let para = document.querySelector("p");
let compStyles = window.getComputedStyle(para); 
compStyles.getPropertyValue("font-size"); // 32px
```

## `Element.style`와의 차이점은?
엘리먼트의 스타일 객체를 가져올 수 있는 방법이 한 가지 더 있다.  
바로 [`Element.style` 객체](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style)를 활용하는 것이다.  
  
모두 스타일 정보를 가져오는 객체들이지만,  
크게 두 가지 차이점이 있다.
### 가져오는 스타일 정보의 범위가 다르다. (외부 선언 vs 인라인)
getComputedStyle()은 외부 선언된 css까지 전부 적용된 값을 가져온다.  
Element.style은 인라인으로 직접 선언된 속성값만을 가져온다.  
```html
<div id="first-element" style="color: red;">엘리먼트 1</div>
<div id="second-element">엘리먼트 2</div>
<style>
  #second-element {
    color: green;
  }
</style>
```
```javascript
const firstElement = document.getElementbyId('first-element');
const secondElement = document.getElementbyId('second-element');

// Element.style 예시
firstElement.style.color; // "red"
secondElement.getElementbyId('second-element').style.color; // "" (인라인 속성으로 정의되지 않았기 때문에)

// getComputedStyle() 예시
window.getComputedStyle(secondElement).getPropertyValue("color"); // "rgb(0, 128, 0)"
```
Element.style은 기본적으로 해당 엘리먼트의 'style'이라는 속성에 부여된 값을 가져오는 것이다.  
그러므로 속성 그 자체를 통해 정의하지 않은 값들은 참조가 불가능하다.  
getComputedStyle()은 모든 CSS 적용이 끝난 최종 상태를 기준으로 값을 가져올 수 있는 메서드이므로, 외부 선언된 CSS도 참조가 가능하다.
  
### 읽기 전용 vs 새로운 스타일 설정 가능
getComputedStyle()이 반환하는 객체는 기본적으로 read-only이다.  
즉 getComputedStyle()을 통해 가져온 객체의 값을 변경하게 스타일을 수정할 수 없다.  
반면 Element.style은 객체에 새로운 값을 할당할 수 있기 때문에, 스타일 수정 또한 가능하다.  
---
#### 레퍼런스
- [https://helloinyong.tistory.com/284](https://helloinyong.tistory.com/284)
- [MDN Window.getComputedStyle()](https://developer.mozilla.org/ko/docs/Web/API/Window/getComputedStyle)
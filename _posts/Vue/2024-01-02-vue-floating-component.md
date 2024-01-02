---
title: "Vue UI 컴포넌트: 상하 스크롤을 따라다니는 플로팅 컴포넌트 만들기 (추가 라이브러리 X)"
last_modified_at: 2024-01-02
categories:
    - vue
tags:
    - vue
    - vue3
    - Javascript
    - UI
---

## 플로팅 컴포넌트 만들기
상하 스크롤을 쫓아오는 플로팅 메뉴를 만들어야 했다.  
해당 기능을 또 쓸 일이 있을 것 같아, 플로팅 기능만 유틸처럼 떼놓은 형태의 컴포넌트를 만들기로 결정했다.  
현재는 위치를 디테일하게 정하는 기능 없이, 일단 스크롤을 따라다니는 기능만 만들어본다.  
(Vue 3, Nuxt 3 환경을 기준으로 만들었다.)
![floating](https://github.com/makepin2r/makepin2r.github.io/assets/39889583/3edbcd29-784e-4ba4-8756-50604608942c)

## 기본 구조
### template 구조
```html
<template>
  <div ref="floatingItem" class="floating">
    <slot />
  </div>
</template>
```
template의 구조는 이렇다.  
플로팅 기능을 쓰고 싶은 엘리먼트가 있다면, 이 컴포넌트로 감싸서 기능을 덧붙일 수 있도록 했다.  
```html
<!-- 플로팅 사용 예시 -->
<template>
    <CommonFloatingItme>
        <div>스크롤 따라오세요!</div>
    </CommonFloatingItme>
</template>
```
직접 사용할 경우 이런 모양이 될 것이다.  
## 로직 만들기
플로팅 컴포넌트의 로직은 크게 3단계로 나뉜다.  
1. 현재 스크롤이 움직인 수치를 구한다.
2. 스크롤이 움직인 수치를 기반으로 요소의 위치를 변경한다.
3. 위치를 변경하는 이벤트를 이벤트 리스너의 'scroll' 이벤트에 등록한다.
하나씩 살펴보자.
### 플로팅 요소 준비
나는 css의 `position: absolute`를 이용해 로직을 작성했기 때문에,  
제대로 작동하려면 움직일 엘리먼트에 position: absolute와 top 속성이 적용되어있어야 한다.  
아래의 css를 적어주자.
```scss
.floating {
    position: absolute;
    top: 0;
}
```
### 스크롤이 움직인 수치 구하기
스크롤이 움직인 수치를 구하는 방법은 매우 간단하다.   
window.scrollY가 상하 스크롤이 움직인 수치이므로, 이것만 구해오면 된다.
scrollY가 없을 경우를 대비해 document.documentElement.scrollTop을 추가로 적어주었다..
```javascript
const getScrollTop = () => window.scrollY || document.documentElement.scrollTop;
```
하지만 나의 경우 이대로만 작성하면 에러가 발생했다.  
Nuxt 3와 같은 SSR 환경에서는 페이지가 구성될 때 window 및 document 객체가 존재하지 않을 경우가 있어 500 에러가 발생한다.  
나와 같이 SSR 환경에서 컴포넌트를 작성하는 경우 아래처럼 예외 처리 코드를 추가해주자.
```javascript
const getScrollTop = () => {
  if (typeof window !== 'undefined') {
    return window.scrollY || document.documentElement.scrollTop;
  }
  return 0 // window가 정의되지 않은 경우
}
```
window 객체가 정의되었는지 확인할 때 흔히 쓰이는 `typeof window !== 'undefined'` 구문을 추가해주었다.

### 스크롤한 만큼 요소를 움직이는 함수 만들기 (기본)
스크롤된 수치만큼 요소를 이동하는 로직을 만들어보자.  
먼저 기본 로직은 아래와 같다.
```typescript
const floatingItem = ref<HTMLElement | null>(null); // 움직일 요소를 ref로 받아오기

const handleScroll = () => {
    if(floatingItem.value) {
        const currentTop = getScrollTop(); // 현재 스크롤된 수치 가져오기
        // 아이템의 top에 스크롤된 수치를 넣어주기
        const itemTop = `${currentTop}px`; 
        floatingItem.value.style.top = itemTop;
    }
}
```
이렇게 하면 스크롤된 만큼 아이템의 위치가 변경된다.  

### CSS를 이용해 부드럽게 화면을 따라오는 효과 추가하기
위 코드까지 작성한다면, 스크롤을 따라 요소의 위치는 잘 이동된다.  
하지만 부드럽게 스크롤을 따라오는 것이 아니라 '뚝' 하고 움직인다.  
  
좀더 매끄러운 효과를 주려면 CSS를 이용해 top 속성에 transition 효과만 부여해주면 된다.  
아래의 CSS를 추가해보자.  
```scss
.floating {
    position: absolute;
    top: 0;
    transition: top 0.8s cubic-bezier(0.17, 0.84, 0.44, 1); // 추가하기
}
```
위의 예시에 쓰인 duration이나 cubic-bezier 값은 임의대로 수정해 필요한 형태로 알맞게 사용하면 된다!  
  
## 완성 코드
```html
<template>
  <div ref="floatingItem" class="floating">
    <slot />
  </div>
</template>

<script lang="ts" setup>
const floatingItem = ref<HTMLElement | null>(null);
const getScrollTop = () => {
  if (typeof window !== 'undefined') {
    return window.scrollY || document.documentElement.scrollTop;
  }
  return 0;
}
const handleScroll = () => {
  if (floatingItem.value) {
    const currentTop = getScrollTop();
    const itemTop = `${currentTop}px`;
    floatingItem.value.style.top = itemTop;
  }
}
const debouncedScrollEvent = debounce(200, handleScroll)

onMounted(() => {
  window.addEventListener('scroll', debouncedScrollEvent)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', debouncedScrollEvent)
})
</script>

<style lang="scss" scoped>
.floating {
  position: absolute;
  top: 0;
  transition: top 0.8s cubic-bezier(0.17, 0.84, 0.44, 1);
}
</style>
```


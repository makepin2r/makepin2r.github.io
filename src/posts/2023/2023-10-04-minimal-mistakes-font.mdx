---
title: "minimal-mistakes 커스터마이징 : 폰트 변경하기"
last_modified_at: 2023-10-04
categories:
    - Github Blogs
tags:
    - minimal-mistakes
    - blog
---

## 웹폰트 이용해 폰트를 변경하자

`minimal-mistakes`의 딱딱한(?) 기본 폰트 대신, 가독성 끝장인 프리텐다드 폰트를 적용해보자.  
폰트를 변경하는 방법은 [이 글](https://searching-fundamental.tistory.com/54)을 참고하였다.

방식을 간단히 요약하자면,

1. `main.scss`에 웹폰트를 정의한다.
2. `_variables.scss`에 새로 사용할 폰트를 변수로 정의한다.

### 1. 웹폰트 정의하기

폰트는 웹폰트를 사용할 것이다.  
추가할 코드는 [여기](https://wess.tistory.com/388)에서 참고할 수 있다.  
다양한 방식을 선택할 수 있는데, 나는 font-face 방식을 선택했다.

font-face 방식의 경우 `assets/css/main.scss` 경로에 들어가 추가해주면 된다.

```scss
---
# Only the main Sass file needs front matter (the dashes are enough)
search: false
---

@charset "utf-8";

@import "minimal-mistakes/skins/{{ site.minimal_mistakes_skin | default: 'default' }}"; // skin
@import "minimal-mistakes"; // main partials

// 추가할 코드
@font-face {
    font-family: "Pretendard";
    font-weight: 400;
    font-style: normal;
    src: url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.eot");
    src: url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.eot?#iefix") format("embedded-opentype"),
        url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.woff2") format("woff2"),
        url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.woff") format("woff"), url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.ttf")
            format("truetype");
    font-display: swap;
}
```

사용하고 싶은 굵기의 font-face들을 등록해준다.

### 2. 웹폰트 적용하기

실 적용은 `_sass/minimal-mistakes/vendor/_variables.scss`에서 해주면 된다.  
새로운 폰트명을 변수로 정의해준 뒤, `$serif` 혹은 `$sans-serif` 변수의 맨 왼쪽에 새 폰트 변수를 추가해준다.

```scss
$custom-font: "Pretendard"; // font-face에 font-family로 지정된 이름을 넣어준다.
$sans-serif: $custom-font, -apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI", "Helvetica Neue", "Lucida Grande", Arial,
    sans-serif !default;
```

---
title: "깃허브 프로필을 예쁘게 꾸며보자 (svg로 css 커스텀하기)"
last_modified_at: 2023-10-19
categories:
    - tips
tags:
    - github
    - svg
---

## 깃허브 프로필을 (독특하고) 예쁘게 꾸미고 싶다
오늘 깃허브 프로필을 업데이트했다.  
  
![image](https://github.com/makepin2r/TIL/assets/39889583/08358080-4a87-4a0d-8c1b-ba68feda6d07)  
  
'깃허브 프로필 꾸미기'로 검색하면 예쁜 페이지를 만들어주는 이런저런 생성기들이 많지만,  
왠지 다 비슷한 느낌이 들어 쓰고 싶지 않았다(?)  
차라리 내가 직접 css를 입힐 수 있으면 좋으련만 깃허브 마크다운에서는 css 적용이 제한적이다.  
  
좋은 방법이 없을까 찾아 헤매다가, 엄청난 꿀팁을 찾고 말았는데...  
  
바로바로 **SVG**를 활용하기!

## SVG의 `foreignObject`를 사용해 마크다운에 css를 넣어보자
`foreignObject` 엘리먼트는 다른 네임스페이스의 요소를 포함하는 컨테이너를 생성해준다. (출처: [W3C](https://dev.w3.org/SVG/profiles/1.2T/publish/diff/extend.html))  
여기에서 네임스페이스란 svg 루트 요소에 지정되는 일종의 식별자를 말한다.   
```xml
<svg xmlns="http://www.w3.org/2000/svg">
  <!-- more tag here -->
</svg>
```
위에서 `xmlns` 속성으로 지정된 문자열이 해당 svg의 네임스페이스가 된다.  
즉 foreignObject가 하는 역할은 외부 코드를 집어넣을 수 있게 해주는 것이라고 간단히 이해하면 좋을 듯 하다.  
  
  
그러면 우리는 아래 코드처럼 html 태그를 활용해 스타일까지 입힐 수 있게 된다!  
```xml
<svg fill="none" viewBox="0 0 600 300" width="600" height="300" xmlns="http://www.w3.org/2000/svg">
  <foreignObject width="100%" height="100%">
    <div xmlns="http://www.w3.org/1999/xhtml">
      <style>
        .container {
          display: flex;
          width: 100%;
          height: 300px;
          background-color: black;
          color: white;
        }
      </style>

      <div class="container">
        <h1>Hi there, my name is Nikola 👋</h1>
      </div>
    </div>
  </foreignObject>
</svg>
<!-- 출처: https://pragmaticpineapple.com/adding-custom-html-and-css-to-github-readme/ -->
```
출처 글을 읽어보면, css를 극한으로 활용해 
- 애니메이션도 주고
- 시스템 컬러 모드를 가져와 라이트/다크 모드시 컬러를 변경도 할 수 있다.

## 리드미 커스텀하기
하지만 내맘대로 꾸미는 건 조금 뒤로 하고, 기본적인 코드만 긁어와 직접 작성해보았다.  
내 깃허브 프로필 레포에 [svg 파일을 하나 생성해 코드를 넣어주면](https://github.com/makepin2r/makepin2r/blob/main/assets/header.svg), 아래처럼 멋진 썸네일이 만들어진다.  
  
![header](https://github.com/makepin2r/makepin2r/raw/main/assets/header.svg)  
  
여유 생기면 좀더 커스텀해보아야겠다!


---
#### 레퍼런스
- https://pragmaticpineapple.com/adding-custom-html-and-css-to-github-readme/
- https://dev.w3.org/SVG/profiles/1.2T/publish/diff/extend.html
- https://mirabo.tistory.com/175
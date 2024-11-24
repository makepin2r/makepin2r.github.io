---
title: "맥북 (M2) 카라비너 없이 한영키를 우측 커맨드키로 바꾸기"
last_modified_at: 2023-12-13
categories:
    - tips
tags:
    - mac
---
이번 맥북 OS를 Sonoma로 업데이트하면서 두 가지의 버그를 경험했다.
- 날짜와 시간이 부정확하게 설정되는 오류
- 기존 외장 프로그램(카라비너)으로 세팅한 키보드 설정 인식이 잘 되지 않는 오류

그중 키보드 인식이 잘 되지 않는 오류가 꽤 불편했다.  
커맨드-옵션 키 순서를 바꾸는 것과 카라비너를 활용한 right command 키를 한영키로 사용하는 설정이 모두 되지 않았기 때문이다.  
(카라비너 자체에서 드라이버 인식이 잘 되지 않고 있다.)  
  
처음에는 Ventura로 다운그레이드를 해볼까도 했지만 이것때문에 포맷을 하는 건 너무 귀찮았다...  
그래서 검색 끝에 아무 프로그램 설치 없이 맥북 내에서 한영키를 우측 커맨드로 바꾸는 방법을 찾아냈다!

## 추가 프로그램 설치 없이 한영키를 원하는 대로 바꾸기
한영키를 우측 커맨드 키로 바꾸고 싶다면 크게 아래와 같은 과정을 거치면 된다.  
1. 우측 커맨드 키를 사용하지 않는 키값으로 맵핑하기 (보통 키보드에 존재하지 않는 f18키를 이용한다).
2. 한영키(맥에서는 설정 - 키보드 - 단축키 - 입력 소스의 '입력 메뉴에서 다음 소스 선택') 단축키를 f18로 변경하기  
  
카라비너 없이 위 과정을 실행할 수 있는 방법은 맥 내의 내장 앱 **hidutil**을 사용하는 것이다.  
hidutil는 맥이 기본으로 제공하는 키 맵핑 앱이다.  
  
### 방법
1. 터미널에서 아래의 명령어를 실행한다.
```bash
hidutil property --set '{"UserKeyMapping":[{"HIDKeyboardModifierMappingSrc": 0x7000000E7,"HIDKeyboardModifierMappingDst": 0x70000006D}]}'`
```
hidutil이 잘 작동하고 있다면 별다른 메시지 없이 적용될 것이다.  
  
2. 설정 - 키보드 - 단축키 - 입력 소스에서 **입력 메뉴에서 다음 소스 선택**의 값을 `f18`로 변경한다.
3. 다시 터미널로 돌아가 아래의 두 명령어를 입력한다.
```bash
cd ~/Library/LaunchAgents/
vi com.local.setting.key.remapping.plist
```
그러면 터미널의 명령어가 사라지면서 vim 에디터에 진입하게 된다.

4. 아래 코드를 붙여넣고 저장한다.  
    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
    <plist version="1.0">
    <dict>
        <key>Label</key>
        <string>com.changing.KeyRemapping</string>
        <key>ProgramArguments</key>
        <array>
            <string>/usr/bin/hidutil</string>
            <string>property</string>
            <string>--set</string>
            <string>{"UserKeyMapping":[
            {"HIDKeyboardModifierMappingSrc":0x7000000E7,
            "HIDKeyboardModifierMappingDst":0x70000006D}
            ]}</string>
        </array>
        <key>RunAtLoad</key>
        <true/>
    </dict>
    </plist>
    ```
    붙여넣기는 그냥 `cmd + v`를 누르면 된다.  
    vim 에디터에서 저장 후 에디터를 빠져나오는 방법은 `:`를 누른 뒤 `wq` 입력 후 엔터를 누르면 된다.  

  
이렇게 적용하고 나면 한영키 변경 시 딜레이도 없고, 우측 커맨드 키로 아주 잘 변환되는 것을 확인할 수 있다!  

---
#### 레퍼런스
- [https://jintelli.tistory.com/41](https://jintelli.tistory.com/41)
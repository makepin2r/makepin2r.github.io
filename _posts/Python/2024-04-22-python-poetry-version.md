---
title: "poetry에서 파이썬 버전 관련 에러 해결하기 (The current project's supported Python range...)"
last_modified_at: 2024-04-22
categories:
    - python
tags:
    - python
---

파이썬을 학습하며 다양한 버전을 사용해야 해서, pyenv와 poetry를 이용하고 있다.  
pyenv는 여러 파이썬 버전을 관리 및 변경해 사용할 수 있도록 도와주는 version management 라이브러리이며,  
poetry는 가상환경 및 파이썬 패키지 매니징 기능을 제공하는 라이브러리다.  
  
dataprep이라는 라이브러리를 사용하던 도중, 분명 요구사항에 맞는 파이썬 버전을 사용했는데도 아래처럼 에러가 발생했다.  
```bash
The current project's supported Python range (>=3.8,<4.0) is not compatible with some of the required packages Python requirement:
  - dataprep requires Python >=3.8,<3.11, so it will not be satisfied for Python >=3.11,<4.0

Because no versions of dataprep match >0.4.5,<0.5.0
 and dataprep (0.4.5) requires Python >=3.8,<3.11, dataprep is forbidden.
So, because eda-dataprep depends on dataprep (^0.4.5), version solving failed.
```
![image](https://github.com/makepin2r/TIL/assets/39889583/c910d9c8-94e9-4a2b-8716-7a699fa35e20)

## The current project's supported Python range... 에러가 발생하는 이유
poetry로 가상 환경을 설정한 경우, 패키지 관리용 페이지가 생성되어 있다. (pyproject.toml)  
내 실제 프로젝트 파일을 예시로 들면,
```
[tool.poetry]
name = "eda-dataprep"
version = "0.1.0"
description = ""
authors = ["Seung Hyun Tark <makepin2r@gmail.com>"]
readme = "README.md"

[tool.poetry.dependencies]
python = "^3.8"
dataprep = "^0.4.5"


[build-system]
requires = ["poetry-core"]
build-backend = "poetry.core.masonry.api"
```
tool.poetry.dependencies 항목을 보면 python 의존성이 `^3.8`로 되어있다.  
(해당 프로젝트를 설정할 때 3.8.19 버전 파이썬을 사용했기 때문에 파일이 이렇게 생성된 것 같다.)  
  
버전 앞에 `^`는 **semantic versioning**을 사용한다는 의미이다. (`~`을 사용하기도 한다)   

시맨틱 버저닝을 사용할 경우 정확히 일치하는 버전을 사용하는 게 아닌, 제한된 버전 내의 최신 버전을 사용하겠다는 의미가 된다. 

위의 에러를 읽어보면 시맨틱 버저닝으로 인해 이 프로젝트에서 허용되는 범위가 `>=3.8,<4.0`로 해석됨을 알 수 있다.  
하지만 dataprep에서 요구하는 범위는 `>=3.8,<3.11`로, `>=3.8,<4.0`보다 더 좁은 범위이기 때문에 의존성 에러가 발생한다.  

### 해결 방법
이때는 의존성 값을 변경해주어야 한다.  
나의 경우 에러에서 제시된 dataprep을 그대로 입력했고, 에러가 해결되었다. 
```
[tool.poetry.dependencies]
python = ">=3.8,<3.11"
dataprep = "^0.4.5"
```


---
#### 레퍼런스
- [stackoverflow](https://stackoverflow.com/questions/73116647/why-cant-i-install-a-python-package-with-the-python-requirement-3-8-3-11-i)
- [시맨틱 버저닝이란?](https://jake-seo-dev.tistory.com/283)
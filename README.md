# **MINIPROJECT: 5조 귀엽조?**


![귀엽조 고양이](https://github.com/user-attachments/assets/0a5f1745-290a-4ea1-8542-98da0201287e)


## 프로젝트 소개


![20241004_092203](https://github.com/user-attachments/assets/5443b688-bd6a-438c-af11-f81ff6bcc659)

(1) 궁극적인 목표<br>
팀원 소개 페이지를 시작으로 다양한 기능을 지닌 웹페이지를 제작하는 것이 목표입니다. 공부량은 많겠지만, 저희 다양한 기능을 구현해봅시다. 귀여운 기능도요. 우리는 연결을 강화하고 공동체 의식을 키우는 팀 빌딩 활동을 우선시하여 목표를 달성할 뿐만 아니라 우리 팀의 귀엽고 사랑스러운 본질을 반영하여 긍정적인 영향을 미치는 작품을 만들 수 있습니다.<br>
(2) 프로젝트 명 : 5조 귀엽조?<br>
(3) 프로젝트 소개 : 팀원을 소개하는 웹페이지입니다.<br>
(4) 개발기간 : 일주일

| 팀장<br> 김현지|팀원<br> 조아라 |팀원<br> 박민준 |팀원<br> 최강건 |팀원<br> 최한솔| 팀원<br> 강란규|
|:---:|:---:| :---:|:---:|:---:|:---:|
| ![title](https://cdn-static.zep.us/static/assets/baked-avartar-images/2-408-12-86.png)| ![title](https://cdn-static.zep.us/static/assets/baked-avartar-images/2-517-12-433.png)|![title](https://cdn-static.zep.us/static/assets/baked-avartar-images/1-206-63-433.png)|![title](https://cdn-static.zep.us/static/assets/baked-avartar-images/2-517-12-433.png)|![title](https://cdn-static.zep.us/static/assets/baked-avartar-images/7-61-56-61.png)|![title](https://cdn-static.zep.us/static/assets/baked-avartar-images/1-543-36-21.png)|
|팀원소개 MORE 모달 기능|nav/<br>모달<br> html,css|헤더 아래 배너의 하드 코딩 및 스타일링|팀원 소개 CSS| 방명록 등록구현 |귀여운 팀의 목표|

## 개발환경
- environment : Visual Studio Code, git, github<br>
- development : HTML5, CSS3, Javascript, jQuery3.3.1, bootstrap5.0.2, fontawesome<br>
- DB : Firebase10.7.1<br>
- communication : figma, slack, notion, zep, google docs<br>


## 와이어프레임
- 프로젝트 화면 구성 및 기능
- 필수사항 : CRUD, api
- 선택 사항 : 맴버카드는 정해진 틀 없이 개개인이 직접 만들기, 헤더 자유롭게 디자인 하기, 네비게이션 기능 구현
- 화면구성 : 


![20241004_104010](https://github.com/user-attachments/assets/cf317d9c-0505-4b23-83c6-60eabb92810b)




## 구현기능

### (0) 네비게이션

![title](https://github.com/user-attachments/assets/9524bf6e-51e8-47a1-871c-d3879915fb4f)   


- 헤더에 있는 귀여운 고양이가 직접 날씨를 알려줍니다. 이 기능은 오픈 api를 받아와 제작되었으며, 브라우저의 위치 데이터를 참조하여, 사용자가 사는 지역에 따라 정확한 날씨를 받아볼 수 있습니다. 

![title](https://github.com/user-attachments/assets/f1c7f1d5-139c-40af-ad2e-3dce8cc0e6dc)   

- 헤더에 네비게이트 기능을 구현하여, 쉽고 빠르게 사용자가 원하는 구역으로 갈 수 있습니다. 

### (1) 배너
공부하는 고양이 그려진 귀여운 배너.

![title](https://github.com/user-attachments/assets/0b759385-4f76-4d1a-b855-dedec53a9683)   


챗 GPT를 통해 생성한 저희, 귀여운 5조의 소개는 들어오는 사람들로 하여금 귀여움을 느끼게 만들어 홈페이지로부터 헤어나올 수 없게 만드는 신선한 심리적 매력을 선사합니다. 

이건 gpt로 생성한 말 아닙니다. 

### (2) 모달

![title](https://github.com/user-attachments/assets/136449df-d990-41dd-8308-6d8719953361)   

- MORE 버튼과 연동하여, 클릭 시, 팀원들의 모달이 표시되게끔 만들었습니다. 모달의 템플릿은 정해져 있지 않으며, 팀원들 각자의 개성이 표시되게끔 만들었습니다. 또한 각자 모달에 추가된 닫기 버튼을 누를 시 초기 화면으로 돌아오게끔 되어 있습니다. 

<img width="511" alt="모달 예시" src="https://github.com/user-attachments/assets/d4ee87ab-1014-479f-95f7-a3ee5b8698a8" width="400" height="400"> 

- 각자의 모달에는 블로그로 향하는 링크가 a태그를 이용하여 첨부되어 있습니다. 

### (3) 방명록
![title](https://github.com/user-attachments/assets/f1d83ef6-6abd-42d8-a1a0-958235400d7d)
>CRUD 기능이 구현된 방명록.

- 방명록에 팀 소개 페이지에 저희 페이지에 방문한 사람들이 글을 남길 수 있도록 하였습니다. 또한, 방명록으로 쓴 글은 수정 및 삭제가 가능합니다. 

- 방명록에 쓴 글은 파이어베이스 데이터베이스에 저장되며, 파이어베이스의 키는 철저하게 암호화되어 악용을 방지하였습니다. 

## 프로젝트 종료 후 팀원들의 소감



| 이름 | 소감 |
| --- | --- |
| 팀장 김현지 ![title](https://cdn-static.zep.us/static/assets/baked-avartar-images/2-408-12-86.png) | 블라블라 |
| 팀원 조아라 ![title](https://cdn-static.zep.us/static/assets/baked-avartar-images/2-517-12-433.png)| 블라블라 |
| 팀원 박민준 ![title](https://cdn-static.zep.us/static/assets/baked-avartar-images/1-206-63-433.png) | 블라블라 |
| 팀원 최강건 ![title](https://cdn-static.zep.us/static/assets/baked-avartar-images/2-517-12-433.png) | 블라블라 |
| 팀원 최한솔 ![title](https://cdn-static.zep.us/static/assets/baked-avartar-images/7-61-56-61.png)| 블라블라 |
| 팀원 강란규 ![title](https://cdn-static.zep.us/static/assets/baked-avartar-images/1-543-36-21.png)| 블라블라 |

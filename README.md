# wanted_pre_onboarding  
2022.02 wanted_pre_onboarding  
최용록  
  
## 실행방법  
1. main 브랜치의 파일을 clone  
2. 해당 폴더에서 `yarn install`을 통해 dependency 설치  
3. `yarn start`를 통해 로컬 서버를 열어서 확인 
4. 페이지 상단 헤더의 네비게이션 탭을 통해 구현한 각 컴포넌트 확인 
  
## 구현 목록  
1. Toggle  
`useState`를 통해 상태값을 관리하여 토글여부 체크를 체크합니다  
범용적인 기능의 컴포넌트이기에 props로 토글 여부`toggleState`를 boolean으로 받습니다(재사용 가능성을 위해)  
2. Modal  
`useState`를 통해 모달 표시 여부 체크를 체크합니다  
props로 모달 표시 여부`modalState`, 모달 버튼 내용`modalOpenText`, 모달 내부 내용`modalContentText`을 받습니다  
모달이 표시되었을 때, 모달창 외부 배경을 클릭하면 모달이 닫힙니다  
  -> 모달창 외부 배경을 클릭했을 때와 모달창 내부의 닫기 버튼을 눌렀을 때의 로직을 통일했습니다.
  -> 닫기 기능이 필요한 태그에 class를 부여하여 클릭한 타겟을 구별할 수 있었습니다.  
3. Tab  
`useState`를 통해 상태값 tabIndex을 관리하여 현재 표시 중인 탭의 index를 체크합니다.   
props로 탭 목록`tabs`를 받습니다. 이를 통해서 index와 내부 내용을 표시합니다.  
4. Tag  
`useState`를 통해 태그 목록을 체크합니다. 저장된 태그 목록을 map함수로 렌더합니다.  
`useRef`를 통해 input값을 받습니다. 태그가 저장되면 `reset()` 함수를 통해 input값을 초기화합니다.  
props로 저장된 태그 목록`savedTags`를 받습니다. 미리 저장된 태그가 있다면 표시합니다.  
5. Auto Complete  
`useState`를 통해 저장된 단어`words`와 입력값과 일치하는 단어`matchWords`를 체크합니다  
`useRef`를 통해 input값을 받습니다. input값이 변화할 때마다 `words`를 참조하여 일치하는 단어 `matchWords`를 갱신합니다. 이후 갱신된 `matchWords`가 `map`함수를 통해 렌더링됩니다.  
렌더링된 `matchWords`를 클릭하면 input값은 해당하는 단어로 바뀝니다.  
enter로 입력값을 제출하면 단어가 `words`에 추가됩니다. reset() 함수를 통해 input값을 초기화합니다.  
props로 저장된 단어 목록`savedWords`를 받습니다.  
6. Click To Edit    
`useState`를 통해 포커싱 대상을 체크합니다. 포커싱 대상과 input이 일치하지 않으면 `disabled`속성을 추가합니다   
props로 컴포넌트 이름`stateName`, 입력값`inputRef`, 제출 로직`onSubmit`을 받습니다  
해당 컴포넌트를 사용하는 페이지에서는 관리하는 상태값에 따라 분류하여 처리합니다.

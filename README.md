## ✅ 컨벤션

### 네이밍 컨벤션

- 상수: `SNAKE_CASE`
- 컴포넌트, interface 타입: `PascalCase`
- 변수, 함수: `camelCase`
- 폴더명: `kebab-case`
- 파일명
  - 이미지 파일(public 폴더): `_`(언더바)로 구분
  - 이미지 import 시: `PascalCase`
  - 페이지 및 API 파일 (app, api 폴더): `kebab-case`
  - 컴포넌트 파일 (components 폴더): `PascalCase`
  - 유틸리티 파일 (lib, utils, hooks 폴더): `camelCase`

### 타입

- **feat** : 새로운 기능 추가
- **fix** : 버그 수정
- **docs** : 문서 수정
- **style** : 코드 스타일 변경(코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우 등)
- **design**: 사용자 UI 디자인 변경(CSS 등)
- **refactor** : 코드 리팩토링
- **test** : 테스트 코드 작성
- **build**: 빌드 파일 수정
- **ci**: CI 설정 파일 수정
- **perf**: 성능 개선
- **chore**: 빌드 수정, 패키지 매니저 설정, 운영 코드 변경이 없는 경우 등
- **rename** : 파일 혹은 폴더명을 수정한 경우
- **remove**: 파일 삭제만 한 경우

### 커밋 메세지

```
type: 요약
```

### 브랜치명

```
type/#Issue-Number/Content
```

### 이슈 제목

```
[type] Content
```

### PR 제목

```
[type] #Issue-Number Content1 / Content2 ...
```

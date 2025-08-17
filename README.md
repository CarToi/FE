# 새길 FE Repository
<!--
  프로젝트의 새길 리드미 타이틀입니다.
  FE: 프론트엔드 전용 README
  BE: 백엔드 전용 README
  적절히 맞춰서 기재해주세요
-->

## 1. 소개
<!--
  프로젝트 개요를 서술합니다.
  예: 서비스 목적, 주요 기능 요약, 사용 기술 스택, 참여 인원 등
-->

>**새길**은 2025 새만금 공공데이터 공모전 신규데이터 생산 부문에 참가한 웹 개발 프로젝트 출품작입니다.\
>사용자 맞춤형 문화 콘텐츠를 추천하고, 결과를 지도에 시각화하는 설문조사 데이터 수집 플랫폼입니다.

<br />

- **🌐 배포 링크** : [설문조사 참여하기](https://saegil.vercel.app/)
- **🛠️ 사용 스택** : JavaScript, TypeScript, React, Next.js, Tailwind CSS, Axios, Vercel
- **👥 참여 인원** : 총 4명 (BE 1, FE 2, UX/UI 1)
- **⏳ 개발 기간** : 2025.07

---

## 2. 수행 역할
<!--
  프로젝트에서 구현한 주요 기능을 나열합니다.
  기능 요약, URL (있다면), 설명 포함해도 좋습니다.
-->

### 노현지
- 기존 코드 구조 개선 및 재사용성 향상 작업 (랜딩 페이지, 온보딩 설문 페이지)
- 추천 결과 페이지
- 서비스 만족도 조사 모달
- 설문 제출 완료 페이지
- 버튼 공통 컴포넌트
- API 함수 구현
- Vercel 배포

### 양혜린
- 랜딩 페이지 개선 및 반응형 스타일 적용
- 온보딩 설문 페이지 반응형 스타일 적용


## 4. 디렉토리 구조
<!--
  주요 폴더 구조를 간략하게 표현합니다.
  트리 구조 또는 코드 블럭 사용
-->

<details>
<summary>펼쳐보기📁</summary>

```bash
src/
├─ app/
│  ├─ _components/
│  │  ├─ LandingPage/
│  │  │  └─ index.tsx
│  │  ├─ SurveyScreen/
│  │  │  ├─ hooks/
│  │  │  │  ├─ usePostSurvey.ts
│  │  │  │  └─ useSurvey.ts
│  │  │  ├─ index.tsx
│  │  │  ├─ ProgressBar.jsx
│  │  │  └─ SurveyOption.tsx
│  │  └─ TransitionScreen/
│  │     └─ index.tsx
│  ├─ recommend/
│  │  ├─ _components/
│  │  │  ├─ MapView/
│  │  │  │  ├─ index.tsx
│  │  │  │  └─ RecommendationMarker.tsx
│  │  │  └─ RecommendationPanel/
│  │  │     ├─ index.tsx
│  │  │     ├─ SkeletonCard.tsx
│  │  │     └─ SpaceCard.tsx
│  │  ├─ SatisfactionModalContent/
│  │  │  ├─ hooks/
│  │  │  │  └─ usePatchSatisfaction.ts
│  │  │  ├─ index.tsx
│  │  │  └─ SatisfactionForm.tsx
│  │  ├─ NavBar.tsx
│  │  ├─ SatisfactionModalButton.tsx
│  │  ├─ _hooks/
│  │  │  └─ useGetRecommendation.ts
│  │  └─ page.tsx
│  ├─ submit-success/
│  │  └─ page.tsx
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.tsx
│  └─ page.tsx
├─ assets/
│  ├─ fonts/
│  ├─ icons/
│  ├─ images/
│  └─ logo/
├─ components/
│  ├─ Button/
│  ├─ ErrorScreen/
│  └─ Modal/
├─ constants/
│  ├─ satisfactionData.ts
│  ├─ spaceData.ts
│  ├─ surveyData.ts
│  └─ transitionData.ts
├─ lib/
│  ├─ apis/
│  │  └─ survey.ts
│  ├─ axiosInstance.ts
│  └─ type.ts
└─ utils/
   ├─ createNewUser.ts
   ├─ getCity.ts
   ├─ getDestination.ts
   └─ getMidpoint.ts
```

</details>

---

## 5. 기타
<!--
  추가적으로 기록할 정보 (예: 향후 계획, 라이센스, 협업 도구 등)
-->

- **Notion 문서** : [노션 링크](https://kimd0ngjun.notion.site/200420aa1940809faa85e562a0fb1fbf)


<p align="right">(<a href="#readme-top">🔝 back to top</a>)</p>

[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/

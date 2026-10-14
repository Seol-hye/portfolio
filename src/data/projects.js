
export const projects = [
  {
    slug: 'provit',
    name: 'Provit',
    period: '2026.09 — 2026.10',
    tagline: 'AI와 채용 정보를 연결한 통합 취업 지원 플랫폼',
    description:
      '이력서·포트폴리오와 채용공고 정보를 연결해 개인화된 AI 모의 면접과 취업 준비 과정을 지원하는 웹 플랫폼입니다.',
    accent: 'blue',

    tech: [
      'React 19',
      'JavaScript',
      'Vite',
      'React Router v7',
      'Bootstrap 5',
      'Axios',
      'Java 17',
      'Spring MVC',
      'MyBatis',
      'Oracle 19c',
    ],

    purpose:
      '취업 준비 과정에 흩어진 정보와 연습 경험을 한 곳에서 관리하고, 사용자별 취업 준비를 돕는 것을 목표로 했습니다.',

    features: [
      '이력서·포트폴리오·채용공고 기반 AI 모의 면접 및 답변 평가',
      '논리력·전문성·자신감·문제 해결력·의사소통 역량 분석',
      '사람인 채용공고 수집 데이터 기반 조건별 공고 검색',
      'AI 문서 첨삭과 개선 피드백',
      '사주 정보와 채용공고 데이터를 결합한 추천 기능',
    ],

    responsibilities: [
      '공통 네비게이션(GNB) 및 메인 페이지 레이아웃 설계·구현',
      '로그인·회원가입 UI 구현 및 백엔드 API 연동',
      '마이페이지 사용자 정보·활동 내역 조회 UI 구현',
      'Bootstrap 5 기반 데스크톱·모바일 반응형 UI 구현',
      'MBTI 검사 문항 응답 UI 및 유형별 결과 페이지 구현',
    ],

    experience:
      '공통 UI와 인증·마이페이지 화면을 역할별 컴포넌트로 구성하고 API 상태에 따라 사용자에게 필요한 정보를 표시했습니다. MBTI 검사는 React 상태로 진행 상태와 응답을 관리하며 결과를 서버에 저장하지 않도록 설계했습니다.',

    screenshots: [
      {
        src: 'images/projects/provit/main.png',
        title: '메인 화면',
        description:
          '공통 네비게이션과 메인 페이지 UI 구현',
      },
      {
        src: 'images/projects/provit/login.png',
        title: '로그인 화면',
        description:
          '로그인·회원가입 UI 및 백엔드 API 연동',
      },
      {
        src: 'images/projects/provit/mbti.png',
        title: 'MBTI 검사 및 결과',
        description:
          'React 상태 기반 검사 진행 및 결과 화면 구현',
      },
    ],

    videoUrl:
      'https://www.youtube-nocookie.com/embed/CqEBdIDPjlA',


    githubUrl: 'https://github.com/Seol-hye/provit',
    notionUrl: 'https://app.notion.com/p/3-provit-bb6ac8c79c4183dda1d2811e561b9fa4',


    retrospective:
      '프론트엔드 화면과 백엔드 API를 연결하면서 화면 구현을 넘어 데이터가 전달·처리되는 전체 흐름을 이해했습니다. 다양한 화면 크기를 고려한 반응형 UI 구현 경험도 쌓았습니다.',
  },

  {
    slug: '5asis',
    name: '5ASIS',
    period: '2026.08 — 2026.09',
    tagline: '게임 유저의 정보 공유와 파티 모집을 위한 커뮤니티',
    description:
      '게임 인원 모집을 중심으로 회원·게시글·댓글 기능을 데이터베이스와 연동한 커뮤니티형 웹 애플리케이션입니다.',
    accent: 'violet',

    tech: [
      'Java 11',
      'Spring MVC 5.3',
      'MyBatis',
      'Oracle Database',
      'JSP',
      'HTML5',
      'CSS3',
      'JavaScript',
    ],

    purpose:
      '게임 사용자들이 게시판 중심으로 정보를 나누고, 목적에 맞는 파티 모집 글을 작성할 수 있는 공간을 만드는 것이 목표였습니다.',

    features: [
      '회원가입·로그인 및 이메일 기반 비밀번호 재설정',
      '게임별 게시판과 파티 모집 게시글 CRUD, 파일 첨부',
      '댓글·대댓글과 게시글·댓글 추천',
      '회원·관리자 권한별 게시글·댓글 관리',
      '치지직 라이브 방송 정보 및 Steam 게임 정보 제공',
    ],

    responsibilities: [
      '메뉴트리·User Flow·요구사항 명세서 기반 화면 구조와 핵심 기능 정의',
      '테이블 명세서 작성 및 Oracle DB 설계 지원',
      '프로젝트 계획서·WBS·결과보고서 작성 및 일정·업무 조율',
      '게시글 작성·상세·수정·삭제와 첨부파일 기능 구현',
      '게시글·댓글 기능의 DB 연동 및 주요 기능 개발 지원',
    ],

    experience:
      '게시글과 첨부파일의 생명주기를 분리해 관리하고, MyBatis Mapper를 통해 화면 요구사항과 SQL을 연결했습니다. 파티원 모집은 별도 매칭이 아닌 게시판 유형으로 구현했습니다.',


    screenshots: [
      {
        src: 'images/projects/5ASIS/post-detail.png',
        title: '게시글 상세',
        description: '게시글 상세 조회 화면',
      },
      {
        src: 'images/projects/5ASIS/post-write.png',
        title: '게시글 작성',
        description: '게시글 작성 및 첨부파일 기능',
      },
    ],



    videoUrl: 'https://www.youtube-nocookie.com/embed/VRP_6ZniMJs',
    githubUrl: 'https://github.com/Seol-hye/Team_5asis',
    notionUrl: 'https://app.notion.com/p/5ASIS-2-d0bac8c79c4182ecae1b011207c79b4e',



    retrospective:
      'Java·Spring MVC·MyBatis·Oracle DB 기반 서비스의 전체 흐름을 경험했습니다. 요구사항 정의와 WBS 작성, 일정 조율을 함께 수행하며 개발과 협업의 연결을 배웠습니다.',
  },

  {
    slug: 'essage',
    name: 'Essage',
    period: '2026.06 — 2026.07',
    tagline: '팀의 소통과 정보 공유를 돕는 React 협업 애플리케이션',
    description:
      '팀원 간 소통과 정보·일정 공유를 목적으로 개발한 React 기반 커뮤니티형 웹 애플리케이션입니다.',
    accent: 'orange',

    tech: [
      'React 19',
      'JavaScript',
      'React Router DOM',
      'Zustand',
      'Bootstrap 5',
      'React-Bootstrap',
      'Vite',
    ],

    purpose:
      '팀원들이 게시글과 댓글을 중심으로 업무 맥락을 공유하고, 자신의 활동을 한눈에 확인할 수 있도록 했습니다.',

    features: [
      '회원가입 및 팀 소속 참여',
      '팀별 커뮤니티 게시글 작성·조회',
      '게시글 상세·댓글 기능',
      '사용자 정보 확인·관리를 위한 마이페이지',
      'React Router 기반 페이지 라우팅 및 Zustand 전역 상태 관리',
    ],

    responsibilities: [
      '프로젝트 기획 및 화면 설계 참여',
      '팀별 게시글 상세의 조회·댓글·수정·삭제 UI와 사용자 상호작용 구현',
      'React 기반 재사용 컴포넌트와 사용자 인터페이스 구현',
      '사용자 프로필, 작성 게시글·댓글 활동 요약 UI 구성',
      '닉네임·자기소개 수정 폼 화면 구성',
    ],

    experience:
      'Zustand로 여러 화면에서 필요한 상태를 간결하게 관리하고, 상세 화면의 반복 요소를 컴포넌트로 분리해 일관성을 높였습니다. React Router와 React-Bootstrap을 활용해 화면 이동과 반응형 UI를 구성했습니다.',


    screenshots: [
      {
        src: 'images/projects/essage/post-detail.png',
        title: '게시글 상세',
        description: '게시글 상세 화면 및 사용자 상호작용 구현',
      },
      {
        src: 'images/projects/essage/login.png',
        title: '로그인 화면',
        description: '서비스 로그인 화면',
      },
      {
        src: 'images/projects/essage/signup.png',
        title: '회원가입 화면',
        description: '신규 사용자 회원가입 화면',
      },
    ],


    videoUrl:
      'https://www.youtube-nocookie.com/embed/t0KmAp1z7_Y',

    liveUrl:
      'https://jws909.github.io/Essage/',

    githubUrl:
      'https://github.com/Seol-hye/Essage',

    notionUrl: 'https://app.notion.com/p/1-988ac8c79c418224a5af81faa912d8e4',

    retrospective:
      '컴포넌트 재사용, 상태 관리, 사용자 상호작용을 구현하며 화면 완성뿐 아니라 유지보수 가능한 코드 구조를 고려하는 습관을 만들었습니다.',
  },

  {
    slug: 'ott-teacher',
    name: 'Ott Teacher',
    period: '2023.03 — 2023.12',
    tagline: 'OTT 콘텐츠 제공 여부를 빠르게 찾는 Android 앱',
    description:
      '미디어 콘텐츠 정보를 API로 연동해 콘텐츠별 OTT 서비스 플랫폼을 확인할 수 있는 Android 애플리케이션입니다.',
    accent: 'green',

    tech: [
      'Java',
      'Android XML',
      'Android Studio',
      'REST API',
      'JSON Parsing',
    ],

    purpose:
      '보고 싶은 콘텐츠가 어느 OTT 플랫폼에서 제공되는지 쉽고 빠르게 확인할 수 있도록 만들었습니다.',

    features: [
      '미디어 콘텐츠 검색 및 검색 결과 조회',
      '콘텐츠 상세 정보 조회',
      '콘텐츠별 OTT 플랫폼 서비스 여부 확인',
      '외부 API 데이터 조회·가공 및 Android UI 표시',
    ],

    responsibilities: [
      '프로젝트 총괄 및 일정 관리',
      '팀원별 업무 분담과 진행 상황 조율',
      'Android XML 기반 UI와 사용자 인터랙션 구현',
      '외부 콘텐츠 API 연동',
      'JSON 응답 파싱 및 화면 데이터 가공',
      '프로젝트 발표 및 기능 시연',
    ],

    experience:
      '외부 API 응답을 앱 화면에 맞는 데이터로 가공하고, 네트워크 결과와 UI 상태를 연결하는 흐름을 구현했습니다.',

    // 현재 스크린샷 없음
    screenshots: [],

    videoUrl: '',
    githubUrl: 'https://github.com/Seol-hye/ott-teacher',

    retrospective:
      '첫 장기 프로젝트에서 외부 API 데이터로 사용자가 필요한 정보를 제공하는 과정을 경험했습니다. 역할 분담과 일정 조율을 통해 협업의 중요성도 배웠습니다.',
  },
];

export const findProject = (slug) =>
  projects.find((project) => project.slug === slug);

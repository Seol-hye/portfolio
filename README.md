
# Developer Portfolio

신입 웹 개발자 이설혜의 개인 포트폴리오 웹사이트입니다.

React 19와 Vite를 사용해 제작했으며,
프로젝트 경험과 담당 기능, 기술 스택을 소개합니다.

## 배포 사이트

https://seol-hye.github.io/portfolio/

## 기술 스택

- React 19
- JavaScript
- Vite
- React Router
- CSS3
- Lucide React

## 주요 구성

- **HOME**: 포트폴리오 소개
- **ABOUT ME**: 기본 정보
- **TECH STACK**: 사용 기술
- **PROJECTS**: 프로젝트 목록 및 상세 페이지

각 프로젝트 상세 페이지에서는 개발 목적, 주요 기능,
직접 담당한 기능, 구현 경험, 스크린샷,
시연 영상 및 관련 링크를 확인할 수 있습니다.

## 프로젝트

| 프로젝트 | 설명 |
| --- | --- |
| Provit | AI 기반 통합 취업 지원 플랫폼 |
| 5ASIS | 게임 정보 공유 및 파티 모집 커뮤니티 |
| Essage | React 기반 팀 협업 커뮤니티 |
| Ott Teacher | OTT 콘텐츠 검색 Android 애플리케이션 |

## 로컬 실행

Node.js와 npm이 설치된 환경에서 실행합니다.

```bash
npm install
npm run dev
```

개발 서버가 실행되면 터미널에 표시된 주소로 접속합니다.

## 프로덕션 빌드

```bash
npm run build
```

빌드 결과물은 `dist/` 폴더에 생성됩니다.

## 데이터 수정

- `src/data/profile.js`: 이름, 이메일, GitHub 등 기본 정보
- `src/data/projects.js`: 프로젝트 설명, 기술 스택, 스크린샷, 영상 및 관련 링크
- `src/data/skills.js`: 기술 스택 정보

프로젝트 스크린샷 이미지는
`public/images/projects/` 폴더에서 관리합니다.

## GitHub Pages 배포

React Router의 `HashRouter`를 사용하며,
Vite의 `base`를 `/portfolio/`로 설정했습니다.

`.github/workflows/deploy.yml`을 통해
`main` 브랜치에 코드가 push되면
GitHub Actions가 프로젝트를 빌드하고
GitHub Pages에 자동 배포합니다.

GitHub 저장소의
**Settings → Pages → Build and deployment → Source**에서
**GitHub Actions**를 선택해야 합니다.

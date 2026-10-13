# Developer Portfolio

독립 React + Vite 포트폴리오입니다.

## 실행

```bash
cd D:\portfolio
npm install
npm run dev
```

## 빌드

```bash
npm run build
```

이름·이메일·GitHub 주소는 `src/data/profile.js`, 프로젝트 정보·영상·링크는 `src/data/projects.js`에서 수정합니다.

## GitHub Pages 배포

`HashRouter`와 Vite의 `base: './'`를 적용해 프로젝트 페이지 환경에서도 경로 새로고침 문제가 발생하지 않도록 구성했습니다. `.github/workflows/deploy.yml`이 `main` 브랜치 push 시 `dist/`를 자동 배포합니다. 저장소 **Settings → Pages**에서 배포 방식을 **GitHub Actions**로 선택하세요.

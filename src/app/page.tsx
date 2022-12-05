import styles from '@/styles/components/main/page.module.scss';

import Description from '@/components/main/description';
import About from '@/components/main/about';
import Projects from '@/components/main/projects';

const Page = () => {
  return (
    <div className={styles.container}>
      <Description />
      <Projects PROJECTS_DATA={PROJECTS_DATA} />
      <About />
    </div>
  );
};

export default Page;

const PROJECTS_DATA = [
  {
    title: '포트폴리오 웹사이트',
    period: '2022.10 ~ 2022.10',
    personnel: '1인 개발',
    src: 'https://user-images.githubusercontent.com/62737638/198938359-6966e6ee-3315-4000-af71-e86d782e9162.png',
    description: `포트폴리오 용도로 제작한 웹사이트입니다.
     지금 보고 있는 바로 이 웹사이트에 해당합니다. 
    Next.js의 학습을 위해 이를 Next.js로 개발하였습니다.
     또한, Vercel을 이용하여 정적 웹사이트의 Lean한 배포도 경험해볼 수 있었습니다.`,
    stack: 'next.js, TypeScript, Sass ',
    functions: 'UI, 기능',
    github: 'https://github.com/hoonjo1/hoonjo-portfolio',
    url: 'https://hoonjo-portfolio.vercel.app/',
  },
  {
    title: 'K-coach',
    period: '2021.03 ~ 2021.06',
    personnel: '팀 개발 (FE 1명 BE 1명)',
    src: 'https://user-images.githubusercontent.com/94885534/156906981-34323867-8ec7-4f55-9196-053e66389702.png',
    description: `사내 데이터 활용 운전 습관 관리 모바일 애플리케이션
     해당 애플리케이션 서비스 후 승무 사원간 안전 운전 점수 경쟁을 통해. 
    교통 법규 위반 발생률 및 이용자 서비스 만족도 15% 상승.`,
    stack: 'React-Native, Javascript ',
    functions: '프론트엔드',
    github: 'https://github.com/hoonjo1/k-coach',
  },
  {
    title: '하이퍼 클라우드 어드민 페이지',
    period: '2022.10.17 ~ 2022.10.19',
    personnel: '팀 개발 (FE 3명)',
    src: 'https://user-images.githubusercontent.com/62737638/197748493-11e71f58-77c4-4880-a36a-ca59a254ef81.gif',
    description: `원티드 프리온보딩 기업과제
     컨텐츠 관리 어드민 페이지를 개발하였습니다.
     json-server를 활용하여 CRUD를 구현 했습니다
     로그인/회원가입 유효성 검사 적용
     `,
    stack: 'react, TypeScript, Tailwind ',
    functions: '로그인/회원가입, 글 작성',
    github: 'https://github.com/hoonjo1/hypercloud-admin-team10',
  },
  {
    title: '룰루랩 예약/조회 페이지',
    period: '2022.10.15 ~ 2022.10.17',
    personnel: '팀 개발 (FE 3명)',
    src: 'https://user-images.githubusercontent.com/62737638/197747751-3e983841-6a6c-4386-8bad-171097012897.gif',
    description: `원티드 프리온보딩 기업과제.
     캘린더 예약/조회 페이지를 개발하였습니다.
     동일한 상태 값으로 캘린더 / 예약 / 조회 사용함으로 전역 상태관리 recoil 사용
     동일한 날짜+시간, 중복예약 등 예외처리 적용`,
    stack: 'react, TypeScript, recoil',
    functions: '예약/조회, recoil 세팅',
    github: 'https://github.com/hoonjo1/lululab-booking-team10',
    url: 'https://sensational-strudel-86bb09.netlify.app/',
  },
  {
    title: '웹 녹음/재생 플레이어',
    period: '2022.10.11 ~ 2022.10.13',
    personnel: '팀 개발 (FE 3명)',
    src: 'https://user-images.githubusercontent.com/62737638/197746091-e00711df-9866-49ee-ad9e-4d787ec7aa32.gif',
    description: `원티드 프리온보딩 기업과제.
     녹음/재생 플레이어를 개발하였습니다.
     녹음시간 설정 / 녹음 종료시 종료된 시점의 시간 적용 리스트화`,
    stack: 'react, JavaScript, Styled-Components',
    functions: '플레이어 UI, 녹음 기능',
    github: 'https://github.com/hoonjo1/haii-audio-player-team10',
    url: 'https://glittery-pithivier-1655dd.netlify.app/',
  },
  {
    title: '센서목록 테이블 페이지',
    period: '2022.10.07 ~ 2022.10.10',
    personnel: '팀 개발 (FE 6명)',
    src: 'https://user-images.githubusercontent.com/62737638/197745773-682965f2-c995-469c-9826-3d2a6ce68c72.png',
    description: `원티드 프리온보딩 기업과제.
     온도, 습도, 기압을 표시하는 센서 테이블/ 대시보드를 개발하였습니다.
     특정 열 기준 오름/내림차순 정렬 / 필터 구현`,
    stack: 'react, TypeScript, Styled-Components',
    functions: '테이블, 정렬,필터 ',
    github: 'https://github.com/hoonjo1/data_management_program',
    url: 'https://singular-cajeta-7b6744.netlify.app/',
  },
  {
    title: '플레이 키보드 웹스토어',
    period: '2022.10.04 ~ 2022.10.07',
    personnel: '팀 개발 (FE 6명)',
    src: 'https://user-images.githubusercontent.com/62737638/197745141-8d1c1c1d-1a4c-4c80-b27c-03b54df7c3f5.png',
    description: `원티드 프리온보딩 기업과제.
     플레이 키보드 웹스토어 내 키보드를 체험할수있는 UI를 개발하였습니다.
     사용자 경험 향상을 위한 점진적 언마운트 애니메이션 적용`,
    stack: 'react, JavaScript, Styled-Components',
    functions: '키보드 UI, 기능  ',
    github: 'https://github.com/hoonjo1/playkeyboard_webstore_project',
    url: 'https://extraordinary-basbousa-068052.netlify.app/',
  },
  {
    title: '모바일 애플리케이션 전환 유도 랜딩페이지',
    period: '2022.08.16 ~ 2022.09.07',
    personnel: '팀 개발 (FE 3명 BE 3명)',
    src: 'https://user-images.githubusercontent.com/62737638/198942314-b0b17f12-c4d3-4b01-a836-fa61e2c2f948.gif',
    description: `푸드 커뮤니티 뉴뉴 의 모바일애플리케이션 전환 유도 랜딩페이지를 개발했습니다.
     기존 모바일 애플리케이션의 기능 (리스트, 글쓰기, 디테일모달, 마이페이지) 등 포함 구현`,
    stack: 'react, TypeScript, React-query',
    functions: '전역 nav, footer, 모달, 캐러셀 포함 디테일',
    github: 'https://github.com/hoonjo1/knewnew',
  },
];

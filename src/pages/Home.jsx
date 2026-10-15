import { useEffect } from 'react';

import { Code2, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

import ProjectCard from '../components/ProjectCard';
import SkillSection from '../components/SkillSection';

import { profile } from '../data/profile';
import { projects } from '../data/projects';
import { skillGroups } from '../data/skills';

export default function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-scroll-reveal]');
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -35px 0px' });

    elements.forEach((element) => {
      // 스크롤 아래에 있는 요소만 숨겨 첫 화면 콘텐츠가 깜빡이지 않도록 함
      if (element.getBoundingClientRect().top >= window.innerHeight - 35) {
        element.classList.add('scroll-reveal-ready');
        observer.observe(element);
      }
    });
    return () => observer.disconnect();
  }, []);

  const info = [
    ['이름', profile.name],
    ['이메일', profile.email],
    ['GitHub', profile.githubUrl],
  ];
  return (
    <main>
      {/* HOME */}
      <section id="home" className="hero section">
        <div className="hero-copy">
          <p className="eyebrow hero-entrance hero-entrance-1">
            <Code2 size={15} />
            WEB DEVELOPER PORTFOLIO
          </p>

          <h1 className="hero-entrance hero-entrance-2">
            안녕하세요.
            <br />
            웹 개발자{' '}
            <span className="hero-name">
              {profile.name}
            </span>
            입니다.
          </h1>

          <p className="hero-summary hero-entrance hero-entrance-3">
            사용자가 편리하게 이용할 수 있는 웹 서비스를
            만드는 개발자가 되고 싶습니다.
            <br />
            새로운 기술을 배우고 직접 적용하며,
            맡은 기능을 끝까지 구현하고 개선하는 경험을
            쌓고 있습니다.
          </p>

        </div>
      </section>

      <section
        id="about"
        className="section onepage-section"
        data-scroll-reveal
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">ABOUT ME</p>
            <h2>개인정보</h2>
          </div>
        </div>

        <div className="home-about-info">
          {info.filter(([, value]) => value).map(([label, value]) => (
            <div key={label}>
              <span>{label}</span>

              <strong>
                {label === 'GitHub' && value ? (
                  <a
                    href={value}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="profile-link"
                  >
                    {value.replace(/^https?:\/\//, '')}
                    <ExternalLink size={15} />
                  </a>
                ) : value}
              </strong>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="section onepage-section"
        data-scroll-reveal
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">PROJECTS</p>
            <h2>프로젝트</h2>
          </div>
        </div>

        <p className="section-intro">
          참여한 프로젝트 4개를 소개합니다.
          카드를 클릭하면 담당 역할과 구현 기능을
          자세히 확인할 수 있습니다.
        </p>

        <div className="project-grid full-grid">
          {projects.map((project) => (
            <div
              id={`project-${project.slug}`}
              key={project.slug}
              className="home-project-item"
              data-scroll-reveal
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </section>

      {/* TECH STACK */}
      <section
        id="skills"
        className="section onepage-section"
        data-scroll-reveal
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">TECH STACK</p>
            <h2>기술 스택</h2>
          </div>
        </div>

        <div className="skills-layout">
          {skillGroups.map((group) => (
            <SkillSection
              key={group.category}
              group={group}
            />
          ))}
        </div>
      </section>



      {/* ABOUT ME */}
      {false && (<section
        id="about"
        className="section onepage-section"
        data-scroll-reveal
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">ABOUT ME</p>
            <h2>개인정보</h2>
          </div>
        </div>

        <div className="home-about-info">
          {info.filter(([, value]) => value).map(([label, value]) => (
            <div key={label}>
              <span>{label}</span>

              <strong>
                {label === 'GitHub' && value ? (
                  <a
                    href={value}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="profile-link"
                  >
                    {value.replace(/^https?:\/\//, '')}
                    <ExternalLink size={15} />
                  </a>
                ) : value}
              </strong>
            </div>
          ))}
        </div>
      </section>)}


    </main>
  );
}

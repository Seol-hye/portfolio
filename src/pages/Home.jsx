
import { ArrowRight, Code2, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

import ProjectCard from '../components/ProjectCard';
import SkillSection from '../components/SkillSection';

import { profile } from '../data/profile';
import { projects } from '../data/projects';
import { skillGroups } from '../data/skills';

export default function Home() {
  const info = [
    ['이름', profile.name],
    ['생년월일', profile.birthDate],
    ['위치', profile.location],
    ['연락처', profile.phone],
    ['이메일', profile.email],
    ['학력', profile.education],
    ['GitHub', profile.githubUrl],
  ];

  return (
    <main>
      {/* HOME */}
      <section id="home" className="hero section">
        <div className="hero-copy">
          <p className="eyebrow">
            <Code2 size={15} />
            WEB DEVELOPER PORTFOLIO
          </p>

          <h1>
            안녕하세요.
            <br />
            신입 웹 개발자{' '}
            <span className="hero-name">
              {profile.name}
            </span>
            입니다.
          </h1>

          <p className="hero-summary">
            사용자가 편리하게 이용할 수 있는 웹 서비스를
            만드는 개발자가 되고 싶습니다.
            <br />
            새로운 기술을 배우고 직접 적용하며,
            맡은 기능을 끝까지 구현하고 개선하는 경험을
            쌓고 있습니다.
          </p>

          <div className="hero-actions">
            <Link
              className="button primary"
              to="/#projects"
            >
              프로젝트 보기
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>

        {/* 프로젝트 빠른 이동 */}
        <div className="hero-aside">
          <span className="aside-caption">
            PROJECT EXPERIENCE
          </span>

          <strong>
            {String(projects.length).padStart(2, '0')}
            <span> Projects</span>
          </strong>

          <p>
            프로젝트별로 직접 담당한 기능과
            구현 경험을 정리했습니다.
          </p>

          <div className="aside-projects">
            {projects.map((project, index) => (
              <Link
                key={project.slug}
                to={`/#project-${project.slug}`}
              >
                <span>
                  {String(index + 1).padStart(2, '0')}
                </span>

                {project.name}

                <ArrowRight size={15} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT ME */}
      <section
        id="about"
        className="section onepage-section"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">ABOUT ME</p>
            <h2>기본 정보</h2>
          </div>
        </div>

        <div className="home-about-info">
          {info.map(([label, value]) => (
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
                ) : (
                  value || '정보 입력 예정'
                )}
              </strong>
            </div>
          ))}
        </div>
      </section>

      {/* TECH STACK */}
      <section
        id="skills"
        className="section onepage-section"
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

      {/* PROJECTS */}
      <section
        id="projects"
        className="section onepage-section"
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
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

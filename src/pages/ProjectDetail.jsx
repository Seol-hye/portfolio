

import { useEffect, useState } from 'react';

import {
    ArrowLeft,
    ArrowRight,
    BookOpen,
    ChevronLeft,
    ChevronRight,
    ExternalLink,
    GitFork,
    X,
} from 'lucide-react';


import {
    Link,
    Navigate,
    useParams,
} from 'react-router-dom';

import ProjectVisual from '../components/ProjectVisual';

import {
    findProject,
    projects,
} from '../data/projects';

// 목록형 정보 출력
function InfoList({ title, items }) {
    return (
        <section className="detail-section">
            <h2>{title}</h2>

            <ul>
                {items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </section>
    );
}

// 프로젝트 스크린샷 출력
function ProjectScreenshots({ project }) {
    const screenshots = project.screenshots || [];
    const [selectedIndex, setSelectedIndex] = useState(null);

    const closeModal = () => setSelectedIndex(null);
    const showPrevious = () => {
        setSelectedIndex((index) =>
            index === 0 ? screenshots.length - 1 : index - 1
        );
    };
    const showNext = () => {
        setSelectedIndex((index) =>
            index === screenshots.length - 1 ? 0 : index + 1
        );
    };

    useEffect(() => {
        if (selectedIndex === null) {
            return undefined;
        }

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') closeModal();
            if (event.key === 'ArrowLeft') showPrevious();
            if (event.key === 'ArrowRight') showNext();
        };

        document.addEventListener('keydown', handleKeyDown);
        document.body.classList.add('modal-open');

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.classList.remove('modal-open');
        };
    }, [selectedIndex, screenshots.length]);

    // 스크린샷이 없으면 영역 자체를 표시하지 않음
    if (screenshots.length === 0) {
        return null;
    }

    return (
        <section className="detail-section project-screenshots">
            <h2>프로젝트 스크린샷</h2>

            <div className="screenshot-grid">
                {screenshots.map((image, index) => {
                    // GitHub Pages 배포 경로 대응
                    const imageUrl = `${import.meta.env.BASE_URL
                        }${image.src.replace(/^\/+/, '')}`;

                    return (
                        <figure
                            className="screenshot-item"
                            key={image.src}
                        >
                            <button
                                className="screenshot-trigger"
                                type="button"
                                onClick={() => setSelectedIndex(index)}
                                aria-label={`${image.title} 크게 보기`}
                            >
                                <img
                                    src={imageUrl}
                                    alt={`${project.name} - ${image.title}`}
                                    loading="lazy"
                                />
                            </button>

                            <figcaption>
                                <span className="screenshot-number">
                                    SCREENSHOT{' '}
                                    {String(index + 1).padStart(2, '0')}
                                </span>

                                <strong>{image.title}</strong>

                                {image.description && (
                                    <p>{image.description}</p>
                                )}
                            </figcaption>
                        </figure>
                    );
                })}
            </div>

            {selectedIndex !== null && (
                <div
                    className="screenshot-modal-backdrop"
                    role="presentation"
                    onClick={closeModal}
                >
                    <div
                        className="screenshot-modal"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="screenshot-modal-title"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            className="screenshot-modal-close"
                            type="button"
                            onClick={closeModal}
                            aria-label="스크린샷 닫기"
                        >
                            <X size={24} />
                        </button>

                        <button
                            className="screenshot-modal-nav screenshot-modal-prev"
                            type="button"
                            onClick={showPrevious}
                            aria-label="이전 스크린샷"
                        >
                            <ChevronLeft size={30} />
                        </button>

                        <img
                            className="screenshot-modal-image"
                            src={`${import.meta.env.BASE_URL}${screenshots[selectedIndex].src.replace(/^\/+/, '')}`}
                            alt={`${project.name} - ${screenshots[selectedIndex].title}`}
                        />

                        <button
                            className="screenshot-modal-nav screenshot-modal-next"
                            type="button"
                            onClick={showNext}
                            aria-label="다음 스크린샷"
                        >
                            <ChevronRight size={30} />
                        </button>

                        <div className="screenshot-modal-caption">
                            <strong id="screenshot-modal-title">
                                {screenshots[selectedIndex].title}
                            </strong>
                            <span>
                                {selectedIndex + 1} / {screenshots.length}
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default function ProjectDetail() {
    const { slug } = useParams();

    const project = findProject(slug);

    // 존재하지 않는 프로젝트는 홈으로 이동
    if (!project) {
        return <Navigate to="/#projects" replace />;
    }

    const index = projects.findIndex(
        (item) => item.slug === slug
    );

    const previous = projects[index - 1];
    const next = projects[index + 1];

    return (
        <main className="detail">
            {/* 프로젝트 상단 */}
            <div className="section">
                <Link
                    className="back-link"
                    to="/#projects"
                >
                    <ArrowLeft size={17} />
                    프로젝트 목록
                </Link>

                <div className="detail-head">
                    <div>
                        <p className="eyebrow">
                            PROJECT / 0{index + 1}
                        </p>

                        <h1>{project.name}</h1>

                        <p>{project.description}</p>
                    </div>

                    <dl>
                        <div>
                            <dt>기간</dt>
                            <dd>{project.period}</dd>
                        </div>

                        <div>
                            <dt>기술</dt>
                            <dd>{project.tech.join(' · ')}</dd>
                        </div>
                    </dl>
                </div>

                <ProjectVisual
                    project={project}
                    large
                />
            </div>

            {/* 프로젝트 상세 내용 */}
            <div className="section detail-content">
                {/* 개발 목적 */}
                <section className="detail-section">
                    <h2>개발 목적</h2>
                    <p>{project.purpose}</p>
                </section>

                {/* 프로젝트 전체 주요 기능 */}
                <InfoList
                    title="프로젝트 전체 주요 기능"
                    items={project.features}
                />

                {/* 내가 담당한 기능 */}
                <InfoList
                    title="핵심 담당 기능"
                    items={project.responsibilities}
                />

                {/* 구현 경험 */}
                <section className="detail-section">
                    <h2>구현 과정 및 기술적 경험</h2>
                    <p>{project.experience}</p>
                </section>

                {/* 실제 프로젝트 스크린샷 */}
                <ProjectScreenshots project={project} />

                {/* YouTube 시연 영상 */}
                {project.videoUrl && (
                    <section className="detail-section">
                        <h2>YouTube 시연 영상</h2>

                        <div className="video-frame">
                            <iframe
                                src={project.videoUrl}
                                title={`${project.name} 시연 영상`}
                                loading="lazy"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                        </div>
                    </section>
                )}

                {/* 관련 링크 */}

                <section className="detail-section link-section">
                    <h2>관련 링크</h2>

                    <div>
                        {/* 배포 사이트 */}
                        {project.liveUrl && (
                            <a
                                className="button secondary"
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <ExternalLink size={17} />
                                배포 사이트
                            </a>
                        )}

                        {/* GitHub 저장소 */}
                        {project.githubUrl && (
                            <a
                                className="button secondary"
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <GitFork size={17} />
                                GitHub 저장소
                            </a>
                        )}

                        {/* Notion 프로젝트 문서 */}
                        {project.notionUrl && (
                            <a
                                className="button secondary"
                                href={project.notionUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <BookOpen size={17} />
                                Notion 프로젝트 문서
                            </a>
                        )}

                        {/* 등록된 링크가 없는 경우 */}
                        {!project.liveUrl &&
                            !project.githubUrl &&
                            !project.notionUrl && (
                                <p>등록된 프로젝트 링크가 없습니다.</p>
                            )}
                    </div>
                </section>


                {/* 프로젝트 회고 */}
                <section className="detail-section retrospective">
                    <h2>프로젝트 회고</h2>
                    <p>{project.retrospective}</p>
                </section>
            </div>

            {/* 이전 / 다음 프로젝트 */}
            <nav
                className="project-pagination section"
                aria-label="프로젝트 이동"
            >
                {previous ? (
                    <Link to={`/projects/${previous.slug}`}>
                        <ArrowLeft size={18} />

                        <span>
                            PREV
                            <br />
                            <b>{previous.name}</b>
                        </span>
                    </Link>
                ) : (
                    <span />
                )}

                {next ? (
                    <Link to={`/projects/${next.slug}`}>
                        <span>
                            NEXT
                            <br />
                            <b>{next.name}</b>
                        </span>

                        <ArrowRight size={18} />
                    </Link>
                ) : (
                    <span />
                )}
            </nav>
        </main>
    );
}

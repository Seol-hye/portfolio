import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectVisual from './ProjectVisual';
export default function ProjectCard({ project }) {
  return (
    <Link className="project-card reveal" to={`/projects/${project.slug}`} aria-label={`${project.name} 프로젝트 상세 보기`}>
      <ProjectVisual project={project} />
      <div className="card-body">
        <div className="card-meta"><span>{project.period}</span><span>{project.tech.slice(0, 2).join(' · ')}</span></div>
        <h3>{project.name}</h3><p>{project.description}</p>
        <span className="text-link">상세 보기 <ArrowUpRight size={17} /></span>
      </div>
    </Link>
  );
}

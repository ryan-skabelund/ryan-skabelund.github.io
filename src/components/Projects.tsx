import React, { useEffect, useRef } from 'react';
import { projects } from '../data/portfolio';
import { Project } from '../types';

interface ProjectsProps {
	onItemClick: (item: Project) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onItemClick }) => {
	const sectionRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.querySelector('.dimmer')?.classList.add('dim-anim-immediate');
					}
				});
			},
			{ threshold: 0.1 }
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		const itemObserver = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const firstChild = entry.target.firstElementChild;
						if (firstChild && firstChild.id) {
							firstChild.classList.add(firstChild.id);
						}
					}
				});
			},
			{ threshold: 0.1 }
		);

		const wrappers = document.querySelectorAll('.project-wrapper');
		wrappers.forEach((wrapper) => itemObserver.observe(wrapper));

		return () => itemObserver.disconnect();
	}, []);

	return (
		<>
			<div className="divider-dark">
				<h3>Projects</h3>
				<p>
					Throughout my career, I've worked on hundreds of projects ranging from small experiments to production systems.
					Here you'll find my most notable work - from AI-powered applications to game mods and embedded systems -
					showcasing the breadth of my technical skills and passion for building innovative solutions.
				</p>
			</div>

			<div className="background-3" ref={sectionRef}>
				<div className="dimmer"></div>
				<div className="projects-grid">
					{projects.map((project, index) => (
						<div className="project-wrapper" key={project.id} onClick={() => onItemClick(project)}>
							<div className="project" id={`project-anim-${(index % 2) + 1}`}>
								<img src={project.image} alt={project.name} />
								<div className="project-name">
									<h3>{project.name}</h3>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Projects;

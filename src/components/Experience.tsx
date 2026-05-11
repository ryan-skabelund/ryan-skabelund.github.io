import React, { useEffect, useRef } from 'react';
import { experiences } from '../data/portfolio';
import { Experience as ExperienceType } from '../types';

interface ExperienceProps {
	onItemClick: (item: ExperienceType) => void;
}

const Experience: React.FC<ExperienceProps> = ({ onItemClick }) => {
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
				<h3>Experience</h3>
			</div>

			<div className="background-xp" ref={sectionRef}>
				<div className="dimmer"></div>
				<div className="projects-grid">
					{experiences.map((exp, index) => (
						<div className="project-wrapper" key={exp.id} onClick={() => onItemClick(exp)}>
							<div className="project" id={`project-anim-${index + 1}`}>
								<img src={exp.image} alt={exp.name} />
								<div className="project-name">
									<h3>{exp.name}</h3>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Experience;

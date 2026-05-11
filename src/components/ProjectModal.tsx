import React, { useEffect } from 'react';
import { Project, Experience } from '../types';

interface ProjectModalProps {
	item: Project | Experience | null;
	onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ item, onClose }) => {
	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose();
		};

		if (item) {
			window.addEventListener('keydown', handleEscape);
			return () => window.removeEventListener('keydown', handleEscape);
		}
	}, [item, onClose]);

	if (!item) return null;

	const handleOverlayClick = (e: React.MouseEvent) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	const isProject = (item: Project | Experience): item is Project => {
		return 'link' in item;
	};

	return (
		<div className="project-details-portal" style={{ display: 'block' }}>
			<div className="project-details-overlay" onClick={handleOverlayClick}>
				<div className="project-details-content">
					<div className="modal-wrapper">
						<button className="btn-close" onClick={onClose}>
							<img src="/images/x.png" alt="Close" />
						</button>
						<div className="project-top">
							<img
								src={(item as any).banner ? (item as any).banner : item.image}
								className={`project-details-img ${(item as Project).wideImage ? 'project-image-wide' : ''}`}
								alt={item.name}
							/>
						</div>
						<div className="project-bottom">
							<p className="project-details-name">{item.name}</p>
							<p className="project-framework-languages">{item.frameworkLanguages}</p>
							<p className="project-details-description" dangerouslySetInnerHTML={{ __html: item.description }}></p>
							{isProject(item) && item.link && (
								<p>
									<a href={item.link} target="_blank" rel="noopener noreferrer" className="project-details-link">
										{item.link}
									</a>
								</p>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectModal;

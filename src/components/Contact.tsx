import React, { useEffect, useRef } from 'react';

const Contact: React.FC = () => {
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

		const wrappers = document.querySelectorAll('.row-item-wrapper');
		wrappers.forEach((wrapper) => itemObserver.observe(wrapper));

		return () => itemObserver.disconnect();
	}, []);

	return (
		<>
			<div className="divider-dark">
				<h3>CONTACT ME</h3>
				<p className="center">Reach out to me, I'd love to hear from you!</p>
			</div>

			<div className="background-4" ref={sectionRef}>
				<div className="dimmer"></div>
				<div className="row">
					<div className="row-item-wrapper">
						<div className="row-item dark-background" id="row-item-anim-1">
							<h3 className="dark">Email</h3>
							<p className="center dark">
								<a href="mailto:theryanskabelund@gmail.com">theryanskabelund@gmail.com</a>
							</p>
						</div>
					</div>
					<div className="row-item-wrapper">
						<div className="row-item dark-background" id="row-item-anim-1">
							<h3 className="dark">GitHub</h3>
							<p className="center dark">
								<a href="https://github.com/ryan-skabelund" target="_blank" rel="noopener noreferrer">
									github.com/ryan-skabelund
								</a>
							</p>
						</div>
					</div>
					<div className="row-item-wrapper">
						<div className="row-item dark-background" id="row-item-anim-1">
							<h3 className="dark">LinkedIn</h3>
							<p className="center dark">
								<a href="https://www.linkedin.com/in/ryan-skabelund" target="_blank" rel="noopener noreferrer">
									linkedin.com/in/ryan-skabelund
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;

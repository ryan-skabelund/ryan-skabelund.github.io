import React, { useEffect, useRef } from 'react';

const EducationSkills: React.FC = () => {
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
		<div className="background-2" ref={sectionRef}>
			<div className="dimmer"></div>
			<div className="row">
				<div className="row-item-wrapper">
					<div className="row-item" id="row-item-anim-1">
						<h3>Education</h3>
						<h4>Arizona State University</h4>
						<p>
							<em>M.S. Computer Science</em>
							<br />
							3.2 GPA - May 2025
						</p>
						<h4>Arizona State University</h4>
						<p>
							<em>B.S. Computer Science</em>
							<br />
							4.0 GPA - May 2024
						</p>
					</div>
				</div>
				<div className="row-item-wrapper">
					<div className="row-item" id="row-item-anim-2">
						<h3>Skills</h3>
						<p>
							<strong>Languages:</strong> C++, Python, SQL, JavaScript/TypeScript. Additional: C, C#, Java, Lua, HTML/CSS
							<br />
							<br />
							<strong>Cloud & Infrastructure:</strong> Azure (Functions, Static Web Apps, ADLS, Foundry, AI Search, OpenAI, AI Translator), Docker, CI/CD, Proxmox
							<br />
							<br />
							<strong>Data & AI:</strong> ETL pipelines, RAG, MCP, LLM API integration, prompt engineering, multi-agent architectures, vector embeddings
							<br />
							<br />
							<strong>Frameworks & Tools:</strong> React, Vue, Express, FastAPI, Git, Jupyter, Starburst, Power BI, Power Automate
						</p>
					</div>
				</div>
				<div className="row-item-wrapper">
					<div className="row-item" id="row-item-anim-3">
						<h3>Abilities</h3>
						<ul>
							<li>Expert in AI/ML pipeline development and deployment</li>
							<li>Strong problem-solving and systems thinking</li>
							<li>Full-stack development (frontend to cloud)</li>
							<li>Data engineering and ETL design</li>
							<li>Natural leadership and collaboration</li>
							<li>Fluent in Spanish</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EducationSkills;

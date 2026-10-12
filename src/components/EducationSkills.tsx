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
							May 2025
						</p>
						<h4>Arizona State University</h4>
						<p>
							<em>B.S. Computer Science</em>
							<br />
							May 2024
						</p>
					</div>
				</div>
				<div className="row-item-wrapper">
					<div className="row-item" id="row-item-anim-2">
						<h3>Skills</h3>
						<p>
							<strong>AI & Machine Learning:</strong> Generative AI, LLM integration, agentic workflows, RAG, prompt engineering, LLM output testing, structured function calling, MCP, Copilot Studio, OpenAI GPT, Anthropic Claude, Ollama, open-weight LLMs, vector embeddings, NLP, clustering, PyTorch, AI-assisted development
							<br />
							<br />
							<strong>Cloud & DevOps:</strong> Azure Functions, Azure AI Foundry, Azure OpenAI, Azure AI Search, Azure AI Translator, Azure Data Lake Storage, Application Insights, serverless, Docker, Linux, CI/CD, GitHub Actions, Git, MLOps, Proxmox
							<br />
							<br />
							<strong>Data Engineering:</strong> ETL/ELT pipelines, API integrations, SQL, relational data modeling, Databricks, Starburst, Power BI
							<br />
							<br />
							<strong>Languages & Frameworks:</strong> Python, TypeScript/JavaScript, C++, C#, Java; React, Vue, Express, FastAPI, Jupyter
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

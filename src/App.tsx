import { useState } from 'react';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import EducationSkills from './components/EducationSkills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProjectModal from './components/ProjectModal';
import { Project, Experience as ExperienceType } from './types';
import './App.css';

function App() {
	const [selectedItem, setSelectedItem] = useState<Project | ExperienceType | null>(null);

	return (
		<>
			<Hero />
			<Introduction />
			<EducationSkills />
			<Experience onItemClick={setSelectedItem} />
			<Projects onItemClick={setSelectedItem} />
			<Contact />
			<ProjectModal item={selectedItem} onClose={() => setSelectedItem(null)} />
		</>
	);
}

export default App;

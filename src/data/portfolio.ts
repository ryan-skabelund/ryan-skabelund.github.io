import { Project, Experience } from '../types';

export const experiences: Experience[] = [
	{
		id: 'aligntechnology',
		name: 'Align Technology',
		image: '/images/experience/align-technology--big.svg',
		banner: '/images/experience/Align_tagline_vertical_RGB_charcoal_2c.png',
		frameworkLanguages: 'CX Insights Analyst II | May 2023 - Present',
		description: `Promoted from intern to full-time upon graduation (May 2024); concurrently completed M.S. full-time.
		<p>Key achievements:</p>
		<ul>
			<li>Developed a full-stack CX chatbot using a React/TypeScript frontend on Azure Static Web Apps with an Azure Functions backend. Implemented a Python ETL pipeline to pull Twilio call transcripts from SQL, generate vector embeddings, and load them into Azure AI Search. Used that index to power RAG in the chat agent, giving the product team the ability to query customer pain points across thousands of support transcripts for the first time.</li>
			<li>Built a survey enrichment pipeline as an Azure Function that pulls data from SQL across multiple sources, then calls Azure OpenAI via API to translate, classify, and score sentiment on every incoming survey response. Uses structured function calling with GPT-4.1 to enforce consistent topic taxonomy. Output is uploaded to ADLS and used to augment survey data across all downstream reporting. Replaced a manual process that required hours of work per cycle.</li>
			<li>Built an AI summary pipeline as an Azure Function that aggregates customer feedback from surveys, complaints, and tickets via SQL, then submits batched requests to a GPT-4o-mini deployment in Azure AI Foundry to generate structured pain-point summaries per customer. Results are uploaded to ADLS and are viewed in the customer churn Power BI dashboard.</li>
			<li>Designed a data sync pipeline as an Azure Function that pulls the latest survey results from a third-party platform via API and upserts records into ADLS, keeping data current across downstream systems with no manual intervention.</li>
			<li>Partnered with regional CX teams across North America, LATAM, EMEA, and APAC to consolidate survey data into a centralized Power BI dataflow, giving all teams a consistent source of truth for reporting and analysis.</li>
		</ul>`
	},
	{
		id: 'americanairlines',
		name: 'American Airlines',
		image: '/images/experience/aa professional 2.jpg',
		banner: '/images/experience/aa 777.jpg',
		frameworkLanguages: 'Hub & Gateway Operations Strategy Intern | June 2022 - March 2023',
		description: `My time with American was amazing and it taught me a lot. Working in the admin office above one of the concourses, I used my talents to automate processes and intelligently analyze data. My primary task was in relation to the wheelchair services provided by a vendor, mainly to understand why their data was so strikingly different than to what American had. Using my skills in Jupyter, I was able to observe, process, and correlate trends between the two datasets. In presenting my findings, I explained how and why the data was different and showed how in reality they are similar. This paved the way for a better understanding on how the vendor operates and how we could better utilize them for a more efficient operation. I also spent much of my time automating admin processes and creating Excel macros to quickly breakdown data.
		<p>Here are some of the highlights from my internship:</p>
		<ul>
			<li>Solved a long-lasting question of variance between two datasets by using Jupyter (Python) to clean, filter, and analyze certain trends, correlations, and differences.</li>
			<li>Automated the administrative process of approving DAT/COMP forms, greatly improving overall workflow and eliminating the need to manually send emails.</li>
			<li>Asynchronously exported 4,200 completed DAT/COMP forms to PDFs in Jupyter, sorting them by month and year, increasing speed and efficiency by a factor of 60.</li>
			<li>Developed a macro in Excel VBA to accept multiple employee rosters, format them, and then create pivot tables and graphs based on position and employment type to quickly compare and analyze bid rosters.</li>
			<li>Created a flow in Power Automate to streamline the approval process for a manager time adjustment form in SharePoint.</li>
		</ul>`
	}
];

export const projects: Project[] = [
	{
		id: 'regexautomata',
		name: 'Regex to Finite Automata',
		image: '/images/projects/regexToFiniteAutomata.png',
		banner: '/images/projects/regexToFiniteAutomataBanner.png',
		frameworkLanguages: 'React, JavaScript, Theoretical Computer Science',
		description: `Built an interactive web app that converts regular expressions into finite automata and simulates input string traversal, applying formal language theory to a functional visualization tool. This project demonstrates both theoretical computer science concepts and practical frontend development skills.`,
		link: 'https://ryan-skabelund.github.io/regex-finite-automata/'
	},
	{
		id: 'satisfactorymods',
		name: 'Satisfactory Mods',
		image: '/images/projects/satisfactoryMods.jpg',
		banner: '/images/projects/satisfactoryModsBanner.png',
		frameworkLanguages: 'C++, Unreal Engine',
		description: `Developed multiple mods for Satisfactory using C++ and Unreal Engine, with a primary focus on Dynamic Train Routes: a comprehensive routing system that has been downloaded over 40,000 times. This mod implements custom A* pathfinding algorithms to enable trains to automatically calculate optimal routes through complex rail networks. The system adapts dynamically to network changes, handles multi-destination routes, and optimizes for both efficiency and path validity in real-time.
		<p>Dynamic Train Routes required deep understanding of game engine architecture, advanced pathfinding algorithms, and careful performance optimization to ensure smooth gameplay even with large, intricate rail networks. The mod transforms Satisfactory's transportation system by eliminating the need for manual track switching and preset routes, allowing for truly dynamic logistics automation.</p>
		<p>In addition to Dynamic Train Routes, I've created several other quality-of-life mods that enhance the Satisfactory experience. All of my mods are available on my <a href="https://ficsit.app/user/6CFnDcDHq3Cwf7" target="_blank" rel="noopener noreferrer">Ficsit.app profile</a>.</p>`,
		link: 'https://ficsit.app/user/6CFnDcDHq3Cwf7'
	},
	{
		id: 'templogger',
		name: 'Temperature Logger',
		image: '/images/projects/s2mini.jpg',
		banner: '/images/projects/temperaturePlot.png',
		wideImage: true,
		frameworkLanguages: 'Python, C#, Azure, Jupyter',
		description: `Deployed ESP32 microprocessors running Python to record temperature at hourly intervals and upload readings to an ASP.NET API hosted on Azure with SQL storage, then visualized the data alongside local weather in Jupyter. This project demonstrates full-stack development from IoT devices to cloud infrastructure and data analysis.`,
		link: 'https://github.com/ryan-skabelund/Climate-Data-API'
	},
	{
		id: 'musicalbricks',
		name: 'Musical Bricks',
		image: '/images/projects/musicalbricks.png',
		banner: '/images/projects/musicalbricksBanner.png',
		frameworkLanguages: 'Unity | C#',
		description: `Musical Bricks is a 2D brick-breaker mobile game made with Unity. It features a variety of levels, bricks, and music resulting in a fun, unique game. Utilizing C#, I designed and fully developed the game to expand my capabilities as a programmer and learn a new framework. The game is currently released on both the Play Store and the App Store.`,
		link: 'https://nostalgicgames.github.io/musicalbricks'
	},
	{
		id: 'minigames',
		name: 'Hexagames',
		image: '/images/projects/minigames.png',
		banner: '/images/projects/minigameBanner.png',
		frameworkLanguages: 'Roblox | Lua',
		description: `Hexagames is a project I worked on throughout my time in high school. It's a minigames published on Roblox, which received over 200,000 plays. Using Lua, I designed and developed the game using techniques and practices that I had learned over the years. At the time, it represented a culmination of my skills and it's a project I was proud of.`,
		link: 'https://www.roblox.com/games/268886507'
	}
];

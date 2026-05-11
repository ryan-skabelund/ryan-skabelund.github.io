import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
	const dimmerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const timer = setTimeout(() => {
			if (dimmerRef.current) {
				dimmerRef.current.classList.add('dim-anim');
			}
		}, 200);
		return () => clearTimeout(timer);
	}, []);

	const scrollToIntro = () => {
		const introSection = document.getElementById('introduction');
		if (introSection) {
			const targetScroll = introSection.offsetTop - introSection.offsetTop / 10;
			window.scrollTo({ top: targetScroll, behavior: 'smooth' });
		}
	};

	return (
		<div className="background-1">
			<div className="dimmer" ref={dimmerRef}></div>
			<div className="caption">
				<div className="slide-initial">
					<h1>RYAN</h1>
				</div>
				<div className="slide-rest">
					<h1>SKABELUND</h1>
				</div>
				<h3>Software Engineer & Data Scientist</h3>
			</div>

			<button className="arrow" onClick={scrollToIntro} type="button">
				<img src="/images/arrow.png" alt="Scroll down" />
			</button>
		</div>
	);
};

export default Hero;

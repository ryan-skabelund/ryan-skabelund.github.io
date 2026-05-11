export interface Project {
	id: string;
	name: string;
	image: string;
	banner?: string;
	wideImage?: boolean;
	frameworkLanguages: string;
	description: string;
	link?: string;
}

export interface Experience {
	id: string;
	name: string;
	image: string;
	banner?: string;
	frameworkLanguages: string;
	description: string;
}

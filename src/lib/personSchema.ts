/**
 * Centralized Person (Swapnil Biswas) schema.
 * Emitted site-wide from BaseLayout via @graph, and referenced by @id
 * from BlogPosting.author, ProfilePage.mainEntity, etc.
 *
 * Reference anywhere else via:  { "@id": "https://swapbiswas.com/#person" }
 */

export const PERSON_ID = 'https://swapbiswas.com/#person';

export const personSchema = {
	'@type': 'Person',
	'@id': PERSON_ID,
	name: 'Swapnil Biswas',
	givenName: 'Swapnil',
	familyName: 'Biswas',
	url: 'https://swapbiswas.com',
	image: 'https://swapbiswas.com/assets/portrait-new.webp',
	jobTitle: 'Senior Product Marketing Manager',
	description:
		'Senior Product Marketing Manager specializing in AI, SEO, content, and growth strategy for B2B SaaS. 4+ years in marketing with experience at TestMu AI (formerly LambdaTest), Samsung, Appknox, Sociowash, and Lido Learning.',
	worksFor: {
		'@type': 'Organization',
		name: 'TestMu AI',
		alternateName: 'LambdaTest',
		url: 'https://www.testmuai.com',
	},
	alumniOf: [
		{
			'@type': 'CollegeOrUniversity',
			name: 'Indian Institute of Management Visakhapatnam',
			url: 'https://www.iimv.ac.in/',
		},
		{
			'@type': 'CollegeOrUniversity',
			name: 'Amity University',
			url: 'https://www.amity.edu/',
		},
	],
	address: {
		'@type': 'PostalAddress',
		addressLocality: 'Mumbai',
		addressRegion: 'Maharashtra',
		addressCountry: 'IN',
	},
	nationality: {
		'@type': 'Country',
		name: 'India',
	},
	knowsLanguage: ['English', 'Hindi'],
	knowsAbout: [
		'Product Marketing',
		'Go-to-Market Strategy',
		'Growth Strategy',
		'Artificial Intelligence',
		'Search Engine Optimization',
		'Answer Engine Optimization',
		'Content Marketing',
		'B2B SaaS Marketing',
		'Marketing Automation',
		'Competitive Intelligence',
	],
	award: [
		'Value of Agility Award, LambdaTest (Aug 2024)',
		'Top Performer, LambdaTest (Oct 2023)',
		'Buddy of the Month, LambdaTest (Aug 2023)',
		'Best Mentor of the Month, LambdaTest (Aug 2023)',
		'Wall of Fame, LambdaTest (Nov 2022)',
	],
	sameAs: [
		'https://linkedin.com/in/swapbiswas/',
		'https://twitter.com/swapbiswas',
		'https://github.com/swapbiswasmarketing/',
		'https://www.instagram.com/swapbiswas/',
		'https://medium.com/@swapbiswas',
		'https://www.testmuai.com/learning-hub/author/swapnil-biswas/',
		'https://swapnil-biswas.kit.com/profile',
	],
};

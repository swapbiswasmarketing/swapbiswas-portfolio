const fs = require('fs');
const path = require('path');

let pass = 0, fail = 0;
const check = (name, ok, detail = '') => {
	const status = ok ? 'PASS' : 'FAIL';
	console.log(status + ' - ' + name + (detail ? ' :: ' + detail : ''));
	if (ok) pass++; else fail++;
};

const dist = 'dist';

// 1) llms.txt + llms-full.txt
const llms = fs.readFileSync(path.join(dist, 'llms.txt'), 'utf8');
check('llms.txt exists', llms.length > 1000);
check('llms.txt has blockquote', llms.includes('> Product marketing'));
check('llms.txt lists blog posts', (llms.match(/\]\(https:\/\/swapbiswas\.com\/blog\//g) || []).length >= 30);

const llmsFull = fs.readFileSync(path.join(dist, 'llms-full.txt'), 'utf8');
check('llms-full.txt size >100kb', llmsFull.length > 100000);
check('llms-full.txt has Ahrefs stat', llmsFull.includes('Ahrefs surveyed 439'));
check('llms-full.txt has PMM stat', llmsFull.includes('State of Product Marketing 2025'));

// 2) HowTo schema
const howToPosts = [
	['how-to-conduct-a-technical-seo-site-audit', 8],
	['how-to-do-content-marketing-competitor-analysis', 6],
	['how-to-use-chatgpt-for-sales-and-marketing', 4],
];
for (const [slug, expectedSteps] of howToPosts) {
	const html = fs.readFileSync(path.join(dist, 'blog', slug, 'index.html'), 'utf8');
	const schemas = (html.match(/<script[^>]*type=\"application\/ld\+json\"[^>]*>([\s\S]*?)<\/script>/g) || [])
		.map(s => {
			const json = s.replace(/<script[^>]*>/, '').replace(/<\/script>/, '');
			try { return JSON.parse(json); } catch { return null; }
		})
		.filter(Boolean);
	const howTo = schemas.find(s => s['@type'] === 'HowTo');
	check('HowTo schema on ' + slug, !!howTo, howTo ? howTo.step.length + ' steps' : 'MISSING');
	if (howTo) check('  ' + slug + ' has ' + expectedSteps + ' steps', howTo.step.length === expectedSteps);
}

// Non-HowTo post should not have HowTo schema
const nonHowTo = fs.readFileSync(path.join(dist, 'blog', 'how-much-does-an-seo-audit-cost', 'index.html'), 'utf8');
check('non-howto post has NO HowTo schema', !nonHowTo.includes('"@type":"HowTo"'));

// 3) Category pages - count + CollectionPage schema
const catDir = path.join(dist, 'blog', 'category');
const cats = fs.readdirSync(catDir).filter(f => fs.statSync(path.join(catDir, f)).isDirectory());
check('9 category pages built', cats.length === 9, cats.join(', '));

for (const cat of cats) {
	const html = fs.readFileSync(path.join(catDir, cat, 'index.html'), 'utf8');
	check('category/' + cat + ' has CollectionPage schema', html.includes('"@type":"CollectionPage"'));
}

// 4) Post counts per category match frontmatter reality
const categoryPosts = {};
for (const f of fs.readdirSync('src/content/blog').filter(x => x.endsWith('.md'))) {
	const content = fs.readFileSync(path.join('src/content/blog', f), 'utf8');
	const catMatch = content.match(/^category:\s*\[([^\]]+)\]/m);
	if (catMatch) {
		for (const c of catMatch[1].split(',').map(s => s.trim())) {
			categoryPosts[c] = (categoryPosts[c] || 0) + 1;
		}
	}
}
const slugify = (s) => s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
for (const [cat, expected] of Object.entries(categoryPosts)) {
	const slug = slugify(cat);
	const html = fs.readFileSync(path.join(catDir, slug, 'index.html'), 'utf8');
	// Count unique blog card links (exclude /category/ and /blog/ which is self)
	const cardLinks = (html.match(/href=\"\/blog\/[a-z0-9-]+\/?\"/g) || []);
	const unique = [...new Set(cardLinks)].filter(l => !l.includes('/category/'));
	check('category/' + slug + ' has ' + expected + ' posts', unique.length === expected, 'found ' + unique.length);
}

// 5) Blog index filter bar is ANCHORS (not buttons)
const blogIndex = fs.readFileSync(path.join(dist, 'blog', 'index.html'), 'utf8');
// Extract filter-bar block
const filterBarMatch = blogIndex.match(/<nav class=\"filter-bar\"[\s\S]*?<\/nav>/);
check('blog index has <nav class="filter-bar">', !!filterBarMatch);
if (filterBarMatch) {
	const fb = filterBarMatch[0];
	const buttonCount = (fb.match(/<button/g) || []).length;
	const anchorCount = (fb.match(/<a class=\"filter-btn/g) || []).length;
	check('filter-bar has NO <button> elements', buttonCount === 0, buttonCount + ' buttons');
	check('filter-bar has 10 <a> elements (All + 9 cats)', anchorCount === 10, anchorCount);
	check('filter-bar "All" links to /blog/', fb.includes('href="/blog/"'));
	check('filter-bar links to /blog/category/seo/', fb.includes('href="/blog/category/seo/"'));
	check('filter-bar links to /blog/category/product-marketing/', fb.includes('href="/blog/category/product-marketing/"'));
}

// 6) Category page filter bar has active state on current category
const seoCatHtml = fs.readFileSync(path.join(catDir, 'seo', 'index.html'), 'utf8');
const seoFilterBarMatch = seoCatHtml.match(/<nav class=\"filter-bar\"[\s\S]*?<\/nav>/);
check('category/seo has filter bar', !!seoFilterBarMatch);
if (seoFilterBarMatch) {
	const fb = seoFilterBarMatch[0];
	check('category/seo filter-bar "All" links to /blog/', fb.includes('href="/blog/"'));
	check('category/seo filter-bar marks SEO as active', /class=\"filter-btn active\"[^>]*href=\"\/blog\/category\/seo\/\"/.test(fb));
	check('category/seo filter-bar has no <button>', !(fb.match(/<button/g) || []).length);
}

// 7) BlogPreview cards: card-link text-decoration is none (via !important inline)
const blogCSS = blogIndex.match(/<style[^>]*>([\s\S]*?)<\/style>/g) || [];
const allStyles = blogCSS.join(' ');
check('card-link has text-decoration: none !important', /\.card-link[^}]*text-decoration:\s*none\s*!important/.test(allStyles));
check('card-link has color override', /\.card-link[^}]*color:\s*var\(--gray-200\)/.test(allStyles));

// 8) No nested anchors (HTML validity)
function maxAnchorDepth(html) {
	let depth = 0, max = 0;
	const re = /<(\/?)a(\s[^>]*)?>/gi;
	let m;
	while ((m = re.exec(html)) !== null) {
		if (m[1] === '/') depth--;
		else depth++;
		if (depth > max) max = depth;
	}
	return max;
}
check('blog index max anchor depth = 1', maxAnchorDepth(blogIndex) === 1);
check('category/seo max anchor depth = 1', maxAnchorDepth(seoCatHtml) === 1);
const howToHtml = fs.readFileSync(path.join(dist, 'blog', 'how-to-conduct-a-technical-seo-site-audit', 'index.html'), 'utf8');
check('blog post max anchor depth = 1', maxAnchorDepth(howToHtml) === 1);
const homeHtml = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
check('homepage max anchor depth = 1', maxAnchorDepth(homeHtml) === 1);

// 9) JSON-LD validity
function validateSchemas(html, label) {
	const schemas = (html.match(/<script type=\"application\/ld\+json\">([\s\S]*?)<\/script>/g) || []);
	let valid = 0, invalid = 0;
	for (const s of schemas) {
		const json = s.replace(/<script[^>]*>/, '').replace(/<\/script>/, '');
		try { JSON.parse(json); valid++; } catch { invalid++; }
	}
	check(label + ': all JSON-LD valid', invalid === 0, valid + ' valid / ' + invalid + ' invalid');
}
validateSchemas(howToHtml, 'how-to post');
validateSchemas(nonHowTo, 'non-howto post');
validateSchemas(seoCatHtml, 'category/seo');
validateSchemas(blogIndex, 'blog index');
validateSchemas(homeHtml, 'homepage');

// 10) Sitemap includes category pages
const sitemap = fs.readFileSync(path.join(dist, 'sitemap-0.xml'), 'utf8');
check('sitemap has 9 category URLs', (sitemap.match(/\/blog\/category\/[a-z-]+\//g) || []).length === 9);
check('sitemap excludes llms.txt', !sitemap.includes('/llms.txt'));

// 11) Pagefind still wired up
check('blog index loads pagefind', blogIndex.includes('pagefind/pagefind.js') || allStyles.includes('pagefind'));
check('blog post has data-pagefind-body', howToHtml.includes('data-pagefind-body'));

// 12) Blog post header pills link to category pages
const pillsInHeader = howToHtml.match(/<a class=\"pill\" href=\"\/blog\/category\/([a-z-]+)\/\"/g) || [];
check('blog post header has pill anchors', pillsInHeader.length >= 2, pillsInHeader.length);

// 13) BlogPreview tag anchors
const tagAnchors = (blogIndex.match(/<a class=\"tag\" href=\"\/blog\/category\/[a-z-]+\/\"/g) || []).length;
check('blog index has card tag anchors', tagAnchors > 50, tagAnchors + ' tag anchors');

// 14) About/Work/Home pills render as div (no href)
const aboutHtml = fs.readFileSync(path.join(dist, 'about', 'index.html'), 'utf8');
check('about page renders Pills as <div>', (aboutHtml.match(/<div class=\"pill\"/g) || []).length >= 3);
check('about page has NO unexpected anchor pills', !/(<a class=\"pill\"(?!\s+href))/.test(aboutHtml));

// 15) Blog index no longer has client-side category filter JS artifacts (data-categories removed)
check('blog-item no longer has data-categories attr', !blogIndex.includes('data-categories='));

console.log('\n=================');
console.log('PASSED: ' + pass + ' / FAILED: ' + fail);
console.log('=================');
process.exit(fail > 0 ? 1 : 0);

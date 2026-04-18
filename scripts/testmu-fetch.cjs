// Fetch a URL as markdown via TestMu AI Browser Cloud.
// Use when WebFetch or curl returns a shell/archive page (JS-rendered content,
// paywalled checks, dynamic sites) during blog fact-checking (BLOG_INSTRUCTIONS sec 6).
//
// Usage: node scripts/testmu-fetch.cjs <url>
// Requires env vars: LT_USERNAME, LT_ACCESS_KEY
//
// Output: JSON with { title, content, markdown, url, metadata }.
// Grep for a specific phrase:
//   node scripts/testmu-fetch.cjs <url> | grep -o 'pattern'

const { Browser } = require('@testmuai/browser-cloud');

(async () => {
  const url = process.argv[2];
  if (!url) {
    console.error('Usage: node scripts/testmu-fetch.cjs <url>');
    console.error('Requires LT_USERNAME and LT_ACCESS_KEY in env.');
    process.exit(1);
  }
  if (!process.env.LT_USERNAME || !process.env.LT_ACCESS_KEY) {
    console.error('Missing LT_USERNAME or LT_ACCESS_KEY env var.');
    process.exit(1);
  }
  const client = new Browser();
  try {
    const data = await client.scrape({
      url,
      format: 'markdown',
      lambdatestOptions: {
        'LT:Options': {
          username: process.env.LT_USERNAME,
          accessKey: process.env.LT_ACCESS_KEY,
        }
      }
    });
    console.log(typeof data === 'string' ? data : JSON.stringify(data));
  } catch (e) {
    console.error('ERR:', e.message);
    process.exit(2);
  }
})();

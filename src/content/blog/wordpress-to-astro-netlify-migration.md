---
title: "How I Moved My Website from WordPress to Astro and Saved ₹12,000/Year"
description: "A step-by-step guide on how I migrated from WordPress to Astro with Netlify - going from ₹12K/year to ₹0 with better performance, speed, and security."
publishDate: 2026-03-01
updatedDate: 2026-03-21
category: [Marketing]
img: /assets/stock-3.webp
img_alt: WordPress to Astro migration illustration
---

I was paying close to ₹12,000 a year for a WordPress Business plan. For a personal portfolio site that I updated maybe once a quarter, that felt like paying rent on a house I barely lived in.

The site was slow, bloated with plugins I didn't need, and every time I logged in, there were 14 updates waiting - half of which I was afraid to install because they might break something. Sound familiar?

So I did what any marketer obsessed with efficiency would do - I migrated everything to **Astro + Netlify** and brought my hosting bill down to exactly **₹0**. The site is now faster, more secure, and I have complete control over every pixel.

Here's exactly how I did it, what tools I used, and why you should consider it too - even if you're not a developer.

## Why I Left WordPress

Don't get me wrong - WordPress powers [42.8% of all websites](https://kinsta.com/wordpress-market-share/) on the internet. It's an incredible platform. But for a personal portfolio or blog that doesn't need a CMS dashboard, it comes with serious baggage.

### 1. The Cost Adds Up

WordPress.com's Business plan costs around [$300/year (roughly ₹25,000)](https://wordpress.com/pricing/) at current exchange rates. Even the Personal plan runs ₹4,000-6,000/year. And if you're on self-hosted WordPress with a decent host, you're looking at $5-20/month for hosting alone - before you add premium themes, plugins, and security tools.

For a site I updated a few times a year, this was hard to justify.

### 2. Performance Was Mediocre

My WordPress site scored around **70-80 on Google Lighthouse**. Every page load required PHP execution, database queries, and loading scripts from a dozen plugins. According to [Core Web Vitals data](https://www.corewebvitals.io/core-web-vitals/wordpress-guide), only **44% of WordPress sites pass all Core Web Vitals** on mobile.

Why does this matter? Because **63% of visitors bounce from pages that take more than 4 seconds to load** ([Yottaa, 2025](https://huckabuy.com/20-important-page-speed-bounce-rate-and-conversion-rate-statistics/)), and every additional second of load time drops conversions by [4.42%](https://www.luckyorange.com/blog/posts/website-speed-impacts-conversions).

### 3. Security Is a Constant Worry

In 2025, the WordPress ecosystem saw [11,334 new security vulnerabilities](https://patchstack.com/whitepaper/state-of-wordpress-security-in-2025/) - a **42% increase** over 2024. The scariest part? **92% of successful WordPress breaches** came from plugins and themes, not WordPress core. That means the very tools you install to make your site better can be the ones that compromise it.

### 4. Plugin Bloat Is Real

Every plugin adds scripts, stylesheets, and database queries. [Research shows](https://wpsiteplan.com/blog/impact-of-plugin-bloat-on-wordpress-speed/) that excess plugins directly impact your Time to First Byte (TTFB) and page load times - which Google's algorithm uses as a ranking factor. I had plugins for SEO, caching, security, contact forms, analytics, image optimization - most of which are unnecessary with a static site.

## What I Switched To

My new stack is three tools. That's it.

**Astro** is a modern static site generator. It takes your content (markdown files, like writing in a Google Doc), applies your design template, and generates plain HTML files. No databases. No PHP. No server processing on every visit. The result is a site that loads almost instantly.

Astro has [48,000+ stars on GitHub](https://astro.build/blog/year-in-review-2025/) and achieves **perfect 100 Lighthouse scores** with literally **0 KB of JavaScript** by default. It only sends JavaScript to the browser when you explicitly need interactivity.

**Netlify** hosts the generated HTML files on a global CDN (Content Delivery Network). Your site is served from the server closest to your visitor, which means fast load times worldwide. It also handles SSL certificates (HTTPS), custom domains, and automatic deployments - all for free.

**GitHub** stores my code and acts as the trigger for deployments. When I push an update, Netlify automatically rebuilds and deploys the site in under 60 seconds.

## Every Tool I Used (And What It Cost)

Here's the complete list of tools in my stack. Notice a pattern?

| Tool | What It Does | Cost |
|------|-------------|------|
| [Astro 5](https://astro.build/) | Generates the website from markdown files | Free |
| [Netlify](https://www.netlify.com/) | Hosts the site with CDN, SSL, and auto-deploy | Free (100GB bandwidth/month) |
| [GitHub](https://github.com/) | Stores the code, triggers deployments | Free |
| [Claude Code](https://claude.ai/) | AI assistant that wrote most of the code | Subscription |
| [VS Code](https://code.visualstudio.com/) | Code editor (barely needed, AI handled it) | Free |
| [Google Fonts](https://fonts.google.com/) | Typography (Rubik + Public Sans) | Free |
| [Kit (ConvertKit)](https://kit.com/) | Newsletter subscriber management | Free (up to 10,000 subscribers) |
| [FormSubmit.co](https://formsubmit.co/) | Contact form submissions via email | Free |
| [Google Analytics 4](https://analytics.google.com/) | Website analytics and traffic tracking | Free |
| [Google Tag Manager](https://tagmanager.google.com/) | Tag management for tracking scripts | Free |
| [Microsoft Clarity](https://clarity.microsoft.com/) | Heatmaps and session recordings | Free |
| [Satori + resvg](https://github.com/vercel/satori) | Generates social share images at build time | Free |

**Total monthly cost: ₹0** (excluding the AI assistant subscription, which I use for many other things).

Compare that to the ₹10,000-15,000/year I was spending on WordPress - and I'm getting a faster, more secure, better-performing site.

## How I Actually Did the Migration

Here's where it gets interesting. **I'm not a developer.** I'm a marketer who understands technology, but I don't write code for a living. The entire migration was done with an AI coding assistant (Claude Code) in about two sessions.

### Step 1: Export Content from WordPress

I exported all my content from WordPress as an XML file. This gave me all my blog posts, pages, and media in one download. WordPress makes this easy - it's under **Tools → Export** in the dashboard.

### Step 2: Set Up the Astro Project

Using Claude Code, I set up a new Astro project based on a portfolio template. The AI handled all the configuration - installing dependencies, setting up the project structure, and configuring the build process.

### Step 3: Migrate Content

Each blog post became a simple markdown file with frontmatter (metadata at the top). For example:

```markdown
---
title: "My Blog Post Title"
description: "A brief description for SEO"
publishDate: 2026-01-15
category: Marketing
---

The actual content goes here in plain text...
```

No shortcodes. No Gutenberg blocks. No Visual Composer. Just clean, portable text that will work anywhere.

### Step 4: Build Features

This is where the AI assistant really shone. In two sessions, we built:

- **A tabbed resume section** with animated skill bars
- **Stats counter** with scroll-triggered count-up animations
- **Dynamic OG images** that auto-generate branded social share graphics for every blog post
- **Newsletter signup** integrated with Kit (ConvertKit)
- **Contact form** with FormSubmit.co
- **Dark/light mode toggle**
- **Full SEO setup** - canonical URLs, Open Graph tags, Twitter Cards, sitemap, robots.txt
- **Analytics** - GA4, GTM, and Microsoft Clarity

All of these would have required 8-10 WordPress plugins. Here, they're built into the site with zero external dependencies.

### Step 5: Deploy to Netlify

I connected my GitHub repository to Netlify, pointed my domain's DNS records, and the site was live. Netlify automatically builds the site every time I push an update. SSL certificate? Automatic. CDN? Built in. Continuous deployment? Already done.

### Step 6: Cancel WordPress

After confirming everything worked on the live domain, I cancelled my WordPress Business plan. WordPress.com offers a [14-day refund policy](https://wordpress.com/support/refunds/) for annual plans - if you're within the window, you can get a full refund.

## The Results: Before vs After

Here's what changed after the migration:

| Metric | WordPress | Astro + Netlify | Improvement |
|--------|-----------|----------------|-------------|
| Annual Cost | ₹10,000-15,000 | ₹0 | 100% savings |
| Lighthouse Performance | 70-80 | 95-100 | +25-30 points |
| Page Load Time (LCP) | ~0.8s | ~0.4s | [46% faster](https://kashifaziz.me/blog/wordpress-to-astro-migration-journey/) |
| JavaScript Shipped | Heavy (plugins) | 0 KB (default) | [60% reduction](https://tapflare.com/articles/static-html-vs-wordpress-comparison) |
| CSS Shipped | Bloated | Scoped per component | [90% reduction](https://tapflare.com/articles/static-html-vs-wordpress-comparison) |
| Security Vulnerabilities | Constant plugin updates | Zero attack surface | Static = no server to hack |
| Deployment Time | Manual via dashboard | Auto on git push | ~30 seconds |
| SEO Score | 86 | 100 | [+14 points](https://kashifaziz.me/blog/wordpress-to-astro-migration-journey/) |

The performance difference is stark. Static HTML files served from a CDN will always outperform a PHP application querying a database on every request. It's not a fair fight.

## Should You Make the Switch?

### This Is Perfect For You If:

- You have a **personal website, portfolio, or blog** that doesn't need daily content updates
- You're tired of **paying for hosting** you barely use
- You care about **page speed and SEO** performance
- You want a site that's **secure by default** (no plugins to exploit)
- You're comfortable using an **AI assistant** to help with technical setup

### Stay on WordPress If:

- You run an **e-commerce store** with dynamic inventory
- You need a **multi-author CMS** with roles and permissions
- You publish content **multiple times a day** and need a visual editor
- You rely heavily on **WordPress-specific plugins** (WooCommerce, LMS, membership sites)
- You have **zero interest** in touching any code, even with AI help

## The Bigger Picture

The Jamstack movement (static sites + APIs + CDN) is not just a developer trend. [65% of Fortune 500 companies](https://www.growin.com/blog/react-and-the-jamstack-web-applications-2025/) have adopted static sites for documentation and content. [70% of developers](https://thenewstack.io/survey-finds-majority-of-jamstack-community-testing-edge/) report using serverless architectures, up from 46% the previous year.

The web is moving toward pre-built, edge-served content - and tools like Astro and Netlify make it accessible to everyone, not just engineers.

For me, the math was simple: **better performance + better security + better SEO + ₹0 cost = an obvious choice**.

If you're sitting on a WordPress site you barely update, paying thousands a year for the privilege, maybe it's time to rethink. The tools are free. The AI can handle the technical heavy lifting. And your site will be faster than 95% of the web.

## FAQs

**Do I need to know how to code to use Astro?**

Not really. I used an AI coding assistant (Claude Code) for the entire migration. You need basic comfort with a text editor and the command line, but the AI handles the actual coding. If you can write a Google Doc, you can write a markdown blog post.

**What happens to my WordPress content?**

You export it as XML, then convert each post to a markdown file. The content is fully portable - it's just text. Images need to be moved to your new project's public folder.

**Is Netlify really free?**

Yes. The free tier includes 100GB bandwidth per month, 300 build minutes, unlimited sites, automatic SSL, and global CDN. For a personal site or blog, you'll likely never exceed these limits.

**What about my domain name?**

You keep your domain. You just update the DNS records to point to Netlify instead of WordPress. The domain stays with whatever registrar you bought it from (WordPress.com, GoDaddy, Namecheap, etc.).

**Can I still have a contact form without a backend?**

Yes. Services like FormSubmit.co and Formspree handle form submissions for free by sending the data to your email. For newsletters, Kit (ConvertKit) offers a free tier for up to 10,000 subscribers.

**How do I update my site after migration?**

You edit a markdown file, save it, and push to GitHub. Netlify automatically rebuilds and deploys your site in under a minute. No logging into a dashboard, no update notifications, no plugin conflicts.

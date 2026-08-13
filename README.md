# josephakintunde.com

Personal portfolio site, built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com).

## Project structure

```text
/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── resume.pdf        ← add your real resume here (see "Resume" below)
├── src/
│   ├── components/       ← Nav, Footer
│   ├── data/              ← site.ts, projects.ts, experience.ts (edit these first)
│   ├── layouts/           ← shared page shell (head/meta, nav, footer)
│   └── pages/              ← index, projects, experience, resume, contact
└── package.json
```

## Before you go live: fill in your real content

Everything you need to personalize lives in three files:

- **`src/data/site.ts`**: your name, email, GitHub/LinkedIn URLs, hero headline, and about text.
- **`src/data/projects.ts`**: your real projects (title, description, tags, links).
- **`src/data/experience.ts`**: your real internships/roles.

Every placeholder is marked with a `// TODO` comment.

### Resume

Drop your resume PDF at `public/resume.pdf`. The `/resume` page checks at build time
whether that file exists. If it does, it shows a download button and an inline
preview; if not, it shows a "coming soon" placeholder. No broken links either way.

## Commands

All commands run from the project root:

| Command             | Action                                      |
| :------------------- | :------------------------------------------- |
| `npm install`         | Install dependencies                          |
| `npm run dev`          | Start local dev server at `localhost:4321`   |
| `npm run build`        | Build the production site to `./dist/`        |
| `npm run preview`      | Preview the production build locally          |

This machine didn't have Node.js installed, so [nvm](https://github.com/nvm-sh/nvm) was
set up first. In new terminal sessions, if `node`/`npm` aren't found, run:

```sh
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```

(This is already wired into `~/.zshrc`, so new terminal windows should pick it up automatically.)

## Deploying + connecting josephakintunde.com

### 1. Push this project to GitHub

```sh
cd ~/Documents/josephakintunde-portfolio
git init
git add .
git commit -m "Initial portfolio site"
gh repo create josephakintunde-portfolio --source=. --private --push
```

(Requires the [GitHub CLI](https://cli.github.com); run `gh auth login` first if you haven't.
You can also create the repo manually on github.com and `git remote add origin ...` instead.)

### 2. Deploy: Vercel or Netlify both work well with Astro

**Vercel:**
1. Go to vercel.com → New Project → import your GitHub repo.
2. Framework preset: Astro (auto-detected). No config changes needed.
3. Deploy, then you'll get a `*.vercel.app` URL to confirm it works.

**Netlify:**
1. Go to app.netlify.com → Add new site → Import an existing project.
2. Build command: `npm run build`, publish directory: `dist`.
3. Deploy, then you'll get a `*.netlify.app` URL to confirm it works.

### 3. Point josephakintunde.com at it

In your domain registrar's DNS settings:

- **Vercel:** add the domain in Project → Settings → Domains, then set the DNS
  records it gives you (typically an `A` record for the apex domain to Vercel's IP,
  and a `CNAME` for `www` → `cname.vercel-dns.com`).
- **Netlify:** add the domain in Site settings → Domain management, then either
  point your registrar's nameservers at Netlify DNS, or add the `A`/`CNAME`
  records it gives you.

DNS changes can take anywhere from a few minutes to ~48 hours to propagate.
Both platforms auto-provision HTTPS via Let's Encrypt once the domain resolves.

## Learn more

[Astro docs](https://docs.astro.build) · [Tailwind CSS docs](https://tailwindcss.com/docs)

# Jesri Joseph — Portfolio

Personal portfolio site for **Jesri Joseph**, a software developer. It showcases selected projects, experience, skills, and contact information with a minimal editorial design.

**Live:** [jesri-joseph-portfolio.vercel.app](https://jesri-joseph-portfolio.vercel.app)

## What's included

- Home — intro and carousel of featured work / experience
- Work — project grid and individual case study pages
- About — background, skills, and experience
- Contact — email and social links

## Stack

- [Next.js](https://nextjs.org) (App Router) + React + TypeScript
- Tailwind CSS
- Deployed on [Vercel](https://vercel.com)

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content

- Site details: `src/content/site.ts`
- Projects: `src/content/projects.ts`
- Project images: `src/content/project-images.ts` and `src/photos/`
- Experience & skills: `src/content/experience.ts`, `src/content/skills.ts`

## Deploy

```bash
npx vercel deploy --prod
```

# ATLGroup Friday Sessions

Session recaps and walkthroughs for **ATLGroup**, the Friday technology group at
Mount Street Neighbourhood House. This is a members' site: a place to recap
what we covered each week, at our own pace.

**Live site:** https://bennyp85.github.io/atlgroup-friday-sessions/

## What's on the site

- **Weekly session pages** — what we covered, step-by-step walkthroughs, and
  the lessons we learned together, for every Friday session.
- **Member FAQs** — the questions that come up every week, answered in plain
  language.
- **Term program** — session dates, special events, and the term outline.
- **Shared lessons** — scam near-misses and discoveries from our discussions,
  shared so the whole group benefits.

A note on privacy: recaps here share only the lessons we learn together —
personal stories stay in the room. No member names or private details appear
anywhere on the site.

## For maintainers

The site is built with React + TypeScript + Vite.

```bash
npm install      # install dependencies
npm run dev      # local dev server
npm run build    # production build (output in dist/)
```

Content lives in `src/data/sessions.ts` — each session is one entry with its
topics, walkthrough steps, lessons and FAQs. Editing that file is usually all
that's needed after a Friday session.

## Deployment

The site auto-deploys to **GitHub Pages**. Every push to `main` rebuilds and
publishes the site within a couple of minutes via the workflow in
`.github/workflows/deploy.yml`. There is nothing to run or pay for manually.

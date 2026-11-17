# LessonKit migration spec (Indonesian → English, single source of truth)

Repo: `C:\HermesProject\kelas_tools`. Live URL base **after** the rename:
`https://kang851216.github.io/lessonkit/`

Every page you write must follow this file. Do not invent brand text, slugs or
metadata.

## 1. Brand

- Name: **LessonKit** (one word, capital L, capital K).
- Header markup: `<a class="brand" href="index.html">Lesson<span>Kit</span></a>`
  (the `<span>` is what the CSS colours — keep it).
- Never write "KelasTools", "Kelas", "guru", or any Indonesian word in output.

## 2. Slug map (old → new)

| old | new |
|---|---|
| index.html | index.html |
| roulette.html | name-picker-wheel.html |
| kelompok.html | group-maker.html |
| timer.html | class-timer.html |
| cara-mengundi-siswa.html | how-to-pick-a-student-at-random.html |
| timer-ujian-30-menit.html | 30-minute-exam-timer.html |
| pembagi-kelompok-4-orang.html | groups-of-four.html |
| roda-nama-offline.html | offline-name-picker.html |
| ide-ice-breaking-kelas.html | icebreaker-ideas-for-class.html |
| timer-hitung-mundur-online.html | online-countdown-timer.html |
| ice-breaking-smp.html | icebreakers-for-middle-school.html |
| ice-breaking-kelas-4-sd.html | icebreakers-for-4th-grade.html |
| pembagi-kelompok-dan-materi.html | group-maker-with-topics.html |
| roda-nama-kelompok.html | name-wheel-for-groups.html |
| roda-nama-arisan.html | raffle-name-picker.html |
| panduan/cara-membagi-kelompok-belajar.html | guides/how-to-group-students.html |
| panduan/ide-memilih-siswa-acak.html | guides/random-student-picker-ideas.html |

Translate **every** internal `href` through this table (and `?embed=1` iframe
`src` too). Files under `guides/` link back with `../index.html`,
`../group-maker.html`, … Files at the root link into guides with
`guides/how-to-group-students.html`.

## 3. Head template (replace `SLUG`, `TITLE`, `DESC`, `H1KEYS`)

```html
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>TITLE</title>
<meta name="description" content="DESC">
<link rel="canonical" href="https://kang851216.github.io/lessonkit/SLUG">
<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1">
<meta name="theme-color" content="#2563eb">
<link rel="manifest" href="manifest.webmanifest">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3EEMOJI%3C/text%3E%3C/svg%3E">
<link rel="stylesheet" href="css/style.css">
<meta property="og:type" content="article">
<meta property="og:site_name" content="LessonKit">
<meta property="og:locale" content="en_US">
<meta property="og:title" content="TITLE">
<meta property="og:description" content="DESC">
<meta property="og:url" content="https://kang851216.github.io/lessonkit/SLUG">
<meta property="og:image" content="https://kang851216.github.io/lessonkit/img/og-SLUGBASE.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="TITLE">
<meta name="twitter:description" content="DESC">
<meta name="twitter:image" content="https://kang851216.github.io/lessonkit/img/og-SLUGBASE.png">
<script type="application/ld+json">{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://kang851216.github.io/lessonkit/"},{"@type":"ListItem","position":2,"name":"BREADCRUMB","item":"https://kang851216.github.io/lessonkit/SLUG"}]}</script>
<script type="application/ld+json">{"@context":"https://schema.org","@type":"Article","headline":"H1 TEXT","inLanguage":"en","mainEntityOfPage":"https://kang851216.github.io/lessonkit/SLUG","author":{"@type":"Organization","name":"LessonKit","url":"https://kang851216.github.io/lessonkit/"},"publisher":{"@type":"Organization","name":"LessonKit","url":"https://kang851216.github.io/lessonkit/"},"datePublished":"2026-11-10","dateModified":"2026-11-17","description":"DESC","image":"https://kang851216.github.io/lessonkit/img/og-SLUGBASE.png"}</script>
<script type="application/ld+json">{"@context":"https://schema.org","@type":"FAQPage","inLanguage":"en","mainEntity":[ … same questions as the visible FAQ, in English … ]}</script>
</head>
```

- `SLUGBASE` = slug without `.html` and without any folder (e.g. `groups-of-four`).
  For `guides/*` pages the og image is `img/og-SLUGBASE.png` too.
- `EMOJI` = the same emoji the old page used (👥 🎡 ⏱️ …), URL-encoded or raw — keep
  whichever the old file had.
- Keep the exact `<script type="application/ld+json">` structure; only the text changes.

## 4. Shared blocks (English, copy verbatim)

Header:
```html
<header class="top"><div class="inner">
  <a class="brand" href="index.html">Lesson<span>Kit</span></a>
  <nav><a href="name-picker-wheel.html">Wheel</a><a href="group-maker.html">Groups</a><a href="class-timer.html">Timer</a></nav>
</div></header>
```
(inside `guides/`, prefix with `../`)

Breadcrumbs: `<p class="crumbs"><a href="index.html">Home</a> › <span>BREADCRUMB</span></p>`

Bottom nav:
```html
<nav class="bottomnav">
  <a href="index.html"><b>🏠</b>Home</a>
  <a href="name-picker-wheel.html"><b>🎡</b>Wheel</a>
  <a href="group-maker.html"><b>👥</b>Groups</a>
  <a href="class-timer.html"><b>⏱️</b>Timer</a>
</nav>
```

Footer, when the page has one:
`<footer class="site"><p>LessonKit — free classroom tools for teachers. <a href="index.html">All tools</a></p></footer>`

## 5. Copy rules

- Audience: **English-speaking K-12 teachers** (US/UK/AU). Neutral, concrete, no
  hype adjectives ("powerful", "amazing", "best-in-class" are banned).
- Keep the page's *shape*: same sections, same tables, same numbers, same worked
  examples — translate and localise them, do not delete content. A page must not
  get thinner: keep word count within ~10% of the Indonesian original.
- Numbers, class sizes and step counts stay (32 students → 8 groups of 4, etc.).
  Example names switch to English ones (Ava, Ben, Chloe, Diego, Emma, Finn …).
- US spelling (`favorite`, `organize`, `color`).
- Tools keep working: never remove a `<script>` tag, an `id`, an `iframe`, a
  `figure`, or a CSS class. `iframe src` only changes its slug.
- Image files keep their filenames (`img/shot-*.webp`) — only `alt`/`figcaption`
  become English.
- FAQ `<details>` text and the FAQPage JSON-LD must match.
- SEO: `<title>` ≤ 60 chars including brand-free wording, `<meta description>`
  ≤ 160 chars, exactly one `<h1>`, H2s for each section.

## 6. Self-check before you report

Run:
```
python C:/HermesProject/kelas_tools/tools/i18n_lint.py <new-file> [<new-file> ...]
```
It fails on Indonesian words, missing `lang="en"`, long title/description,
multiple H1s, and internal links that point at old slugs. Fix everything it
reports, then report per page: title length, description length, H1, word count,
and the lint result.

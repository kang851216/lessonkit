# LessonKit — free classroom tools for teachers

Small browser tools that work **without an account, without an install, and
without internet** once the page has been opened. Built for K-12 teachers who
need to call on a student at random, split a class into groups, or run a visible
timer at the front of the room.

Site: <https://kang851216.github.io/lessonkit/>

## Tools

| Tool | What it does | Open |
|---|---|---|
| Name picker wheel | Picks a student at random with a 3D wheel | [name-picker-wheel.html](https://kang851216.github.io/lessonkit/name-picker-wheel.html) |
| Group maker | Splits a class into 2–10 groups, assigns roles | [group-maker.html](https://kang851216.github.io/lessonkit/group-maker.html) |
| Class timer | Countdown for exams, quizzes and group work | [class-timer.html](https://kang851216.github.io/lessonkit/class-timer.html) |

## Guides

- [How to pick a student at random](https://kang851216.github.io/lessonkit/how-to-pick-a-student-at-random.html)
- [How to group students](https://kang851216.github.io/lessonkit/guides/how-to-group-students.html)
- [Random student picker ideas](https://kang851216.github.io/lessonkit/guides/random-student-picker-ideas.html)
- [A 30-minute exam timer](https://kang851216.github.io/lessonkit/30-minute-exam-timer.html)
- [Groups of four](https://kang851216.github.io/lessonkit/groups-of-four.html)
- [Offline name picker](https://kang851216.github.io/lessonkit/offline-name-picker.html)
- [10 icebreaker ideas](https://kang851216.github.io/lessonkit/icebreaker-ideas-for-class.html)

## How it is built

Plain HTML, CSS and JavaScript, no build step and no external dependency except a
locally bundled `three.js` for the 3D wheel. Deployed with GitHub Pages; the
service worker (`sw.js`) caches the pages so the tools keep running when the
school network drops. Student lists live in `localStorage` and are never sent
anywhere.

## Local preview

```
python -m http.server 8099
# http://127.0.0.1:8099/
```

`sw.js` caches aggressively, so bump `CACHE` in `sw.js` after changing a page
you are testing through the service worker.

## Checks

```
python tools/i18n_lint.py index.html            # copy, SEO limits, links
node tools/pages_check.js                        # every page loads without JS errors
node tools/en_check.js <url>                     # language + a real spin on the wheel
```

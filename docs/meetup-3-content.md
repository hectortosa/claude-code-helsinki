# Meetup #3 — Content Guide

**Status:** Draft (not yet implemented as slides)
**Date:** TBD
**Venue:** Sanomat (host)
**Theme:** *Claude beyond the keyboard — using Claude for non-coding work*

This is a planning document. Implementation moves into
`src/app/slides/{YYYYMMDD}/` once the date is locked. Format follows meetup #2:
informational, slide-per-item, no live demos in the news section. The non-
coding focus runs through both the news roundup and the speaker lineup.

## Sources used to build this guide

- User-supplied list of recent Claude/Anthropic news items
- Luma event description (audience, format, speakers, venue)
- Clauders weekly digests, weeks of April 6, 12, and 19, 2026: https://clauders.com/blog/
- id8labs *Shipped*, Issue 01 ("The Shadow Release"): https://id8labs.app/shipped/01
- Reference: previous meetup deck at `src/app/slides/20260305/page.tsx`

The id8labs newsletter covers the same April window in detail and is the most
useful single reference for fact-checking each news slide.

---

## 1. Theme and audience

The Luma copy sets the frame. Coding has had most of the attention. There is
a lot more you can do with Claude that we have not covered: workflows,
decisions, research, planning, communication, the work that fills most
people's days regardless of job title. This meetup is open to operations,
finance, customer success, RevOps, UX, or anyone curious about what Claude
can do beyond writing code. Developers welcome too.

The deck should read for a non-engineering audience. Avoid CLI screenshots
unless they are explicitly the point. Lean into screen captures, vocabulary
that finance and ops people use, and the four speaker topics as the spine.

---

## 2. Format and time budget

Aligns with the Luma structure (the live Anthropic Q&A is no longer
happening, so it has been dropped).

| Section            | Time     | Notes                                       |
| ------------------ | -------- | ------------------------------------------- |
| Opening            | ~5 min   | Welcome, hosts, community, speakers preview |
| Claude News        | ~12 min  | Slide-per-item, informational               |
| Speakers           | ~60 min  | Four speakers, ~15 min each                 |
| Open stage + demos | ~10 min  | Prompted by host                            |
| Networking         | open     | Logistics slide for venue + drinks          |

Total content ≈90 min plus networking.

---

## 3. Slide outline

Numbers nominal.

### Opening

1. **Title.** Meetup #3, Claude Code Helsinki, date.
2. **Welcome / Built by all of us.** Quick acknowledgement of the community,
   matches the meetup #2 opener.
3. **Tonight's hosts.** Same pattern as meetup #2. New co-host Tapio Haaja
4. **Sanomat — thank you to our venue.** A slide for the host, similar to a
   sponsor card.
5. **Community stats.** Members, recurring meetups, anything we want to put
   on the board. Mirror meetup #2 layout. 
    Software Developer	55
    Founder / Entrepreneur	41
    Other	37
    Product Manager	12
    Researcher	11
    Designer	10
    Student	6
5. Next Meetup tobe announce soon: Claude Code for teams and orgs, beyond vibe coding
6. **Tonight's lineup.** One slide that previews: news, four speakers,
   QnA cancelled sadly, networking.

### Framing (1 slide)

7. **Claude beyond coding.** A year ago Claude Code was released, which kind of started the Claude wave.
   November last year was a turning point for Claude Code, and started to be everywhere, used by everybody,
   changing software development in a short period of time. Now, non-coders also want that Claude Code revolution,
   and that is something Anthropic is betting hard.

### Claude News (≈12 min, slide per item)

The news act is intentionally short and pared. Speakers will go deep on
specific workflows; this section is the world they live in.

#### Models

8. **Claude Opus 4.7** (Apr 16). Same price, better vision, sharper coding.
   One stat per row, similar to the Opus 4.6 slide in meetup #2. Benchmarks
   to confirm at slide-build time.
9. **Tokenizer change in Opus 4.7.** Same input may consume 1.0 to 1.35× more
   tokens. Brief note for anyone migrating production prompts.
10. **Mythos** (Apr 7, gated preview). Twelve security partners only. The
    frame is the launch chart: the gap between the model that ships publicly
    and the model that exists is now visible.
11. **Anthropic Advisor Tool.** Faster executor paired with a higher-
    intelligence advisor that provides strategic guidance mid-generation.

#### Cowork and async work

12. **Cowork is out of beta** (Apr 20). RBAC for Enterprise plans, OpenTelemetry,
    custom roles per group, Cowork analytics. The non-coding angle: Cowork
    has matured into the primary surface for recurring business work.
13. **Cowork Dispatch.** Manage Cowork tasks from phones via Claude Desktop or
    mobile.
14. **Live Artifacts in Cowork** (Apr 20). Live charts, sketches, and shareable
    assets render visually inside conversations. Sets up Anna's spreadsheet
    talk later.

#### Tools for non-coders

15. **Claude Design** (Apr 17, Anthropic Labs). Figma integration, designer-
    first surface.
16. **Computer Use updates.** Claude can drive screens to perform tasks
    independently. Sets up Sohvi's sales workflow talk later.
17. **Vision in Opus 4.7.** UI mockups, architecture diagrams, and whiteboard
    photos now become structured input.

#### For the developers in the room

Brisk. Five slides, no analysis.

18. **Claude Code /init.** Revamped and aplying the principles I shared last meetup.
19. **Auto Approval Mode.** Fewer permission prompts in trusted workflows.
    One-line trade-off note: safe for read-only or sandboxed work, less so
    for shared infra writes, force-pushes, or dependency changes.
20. **Remote Schedule.** Schedule background tasks cron-style without leaving
    your machine on. Cloud only.
21. **New Session Limits.** What changed, why, how to plan around it.
22. **Quality Post-Mortem** (Apr 23). What broke, what 2.1.116+ fixed, the
    lessons. Credit Anthropic for shipping the post-mortem publicly.

### Speakers (≈60 min, ~15 min each)

Each speaker gets:
- An intro slide (name, photo, role, one-line bio, the topic title)
- Their own slides (owned by them, drop into the deck before the meetup)
- An outro slide (thank-you and applause prompt)

23. **Speakers section divider.**
24. **Alejandra Soni — A centralized knowledge layer your business runs on.**
    Topic intro slide. Tie-in: Cowork, Projects, auto-memory, Skills.
25. **Anna Ursin — Real business questions, asked directly from your spreadsheets.** 
    Topic intro slide. Tie-in: Live Artifacts, vision, Cowork.
26. **Sohvi Silius — A full sales workflow with Claude as your teammate.**
    Topic intro slide. Tie-in: Cowork, Routines, Computer Use.
27. **Tapio Haaja — From casual AI user to building your own skills and integrations, with no technical background.**
    Topic intro slide. Tie-in: Skills system, Claude Design, Anthropic Labs.

Order of speakers TBD with the speakers themselves; the listing above
follows the Luma copy.

### Open stage and networking

28. **Networking.** Venue logistics for Sanomat, where to go after,
    Luma link for follow-up, community Discord/Slack/Mailing list.

### Closing

30. **Takeaways.** Three or four bullets pulling the thread:
    - Anthropic is aiming Claude at the rest of the org, not just engineering.
    - Cowork has matured into the primary surface for recurring work.
    - Vision and Computer Use shift the input surface from text to screen.
    - The Claude Code stack is more stable and more transparent at the same
      time.
31. **Thanks.** Speakers, Sanomat, Anthropic, the community. Tease meetup #4.

---

## 4. Speaker tie-ins to news act

Useful for the host's transitions between sections, and for cutting the news
act if it runs long.

| Speaker        | Topic                          | News slides that set it up   |
| -------------- | ------------------------------ | ---------------------------- |
| Alejandra Soni | Centralized knowledge layer    | Cowork GA (12), Projects, Skills |
| Anna Ursin     | Spreadsheets and live artifacts| Live Artifacts (14), Vision (17) |
| Sohvi Silius   | Sales workflow as teammate     | Cowork Dispatch (13), Computer Use (16) |
| Tapio Haaja    | Skills with no technical bg    | Claude Design (15), Skills system |

If the news act has to lose slides, drop in this priority order: tokenizer
note (9), Mythos (10), Advisor Tool (11), Quality Post-Mortem (22). Keep the
Cowork, Live Artifacts, Computer Use, Claude Design, and Vision slides
because they directly set up the speakers.

---

## 5. Section owners

| Section                         | Owner | Notes                          |
| ------------------------------- | ----- | ------------------------------ |
| Opening (1-6)                   | TBD   | Same hosts as meetup #2 ideal  |
| Framing (7)                     | TBD   |                                |
| Models (8-11)                   | TBD   | Confirm benchmarks before deck |
| Cowork and async work (12-14)   | TBD   |                                |
| Tools for non-coders (15-17)    | TBD   |                                |
| For developers (18-22)          | TBD   | Brisk                          |
| Speakers section (23-27)        | Speakers themselves            |
| Open stage + networking (28-29) | Host                           |
| Closing (30-31)                 | TBD   |                                |

---

## 6. Open questions for the team

1. What date are we locking in for meetup #3?
2. Speaker order: any preference, or first-on-first-prepared?
3. Do speakers want their own slide template, or do they bring their own?
4. Are speakers OK with photos and bios on the intro slides?
5. Do we want a community lightning-talk slot during open stage, or keep it
   unstructured?
6. Hackathon from Feb 2026: anything to revisit on a slide, especially with
   non-coding outcomes?

---

## 7. Things to verify before locking the deck

- Speaker names spelled correctly: Alejandra Soni, Anna Ursin, Sohvi Silius,
  Tapio Haaja
- Sanomat venue logistics: directions, accessibility, food and drinks
- Opus 4.7 token-cost change (1.0 to 1.35×) against the official migration
  notes at slide-build time
- Opus 4.7 benchmarks
- Claude Design availability tier by meetup date
- Cowork RBAC and OpenTelemetry availability per plan tier
- New Session Limits exact numbers
- Quality post-mortem URL once Anthropic publishes it
- Mythos partner count (twelve at id8labs press time)

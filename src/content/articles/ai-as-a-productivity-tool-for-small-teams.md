---
title: "AI as a productivity multiplier for small BD teams"
description: "What I've learned running AI implementation POCs at Axiomtek — and what actually changes when a small team starts working with LLMs seriously."
date: 2026-05-15
tags: ["AI", "business development", "workflow"]
lang: en
draft: false
---

I lead AI implementation POC projects at Axiomtek. We're a traditional hardware company — not a software startup, not an AI-first org. The team I work with is small, the workflows are manual, and the ROI expectations are practical: does this make us meaningfully faster or better at something we already do?

Here's what I've learned from six months of running real POCs in a real industrial B2B context.

## What small teams actually need from AI

The LLM conversation tends to get captured by two poles: enterprise automation (workflow orchestration, RAG pipelines, knowledge bases) and individual productivity (ChatGPT for writing, coding assistants). The interesting space for a small BD team is somewhere in between.

We don't need a full knowledge management system. We need to process information faster, draft better, and spend less time on coordination overhead. The ROI for us is measured in hours per week per person, not in percentage revenue uplift.

The POCs we've run that worked:
- **RFQ-to-quote acceleration** — parsing customer RFQs, extracting requirements, pre-populating quote templates with relevant product specs. The manual version took hours. The LLM-assisted version takes 20 minutes.
- **Competitive intelligence synthesis** — ingesting competitor product pages, tradeshow announcements, and press releases, then producing structured summaries. Replaces a lot of ad-hoc Googling.
- **First-draft generation for outreach** — not fully automated emails, but structured first drafts that a human then edits. The quality of the draft depends heavily on how well you brief the model.

The POCs that haven't worked as well:
- **CRM data hygiene** — harder than it sounds because the underlying data is inconsistent. Garbage in, garbage out.
- **Automated follow-up scheduling** — introduces more coordination risk than it removes.

## What actually changes

When a small team starts using LLMs seriously, the first thing that changes is *speed on known tasks*. You can process more information, draft faster, and get to a good-enough version of a document in a fraction of the time.

The second thing that changes — and this takes longer to notice — is the *ceiling on what you can attempt*. Tasks that previously felt too time-consuming to be worth doing (synthesizing three months of market news, writing a structured competitive analysis, drafting a capabilities document for a new vertical) become feasible. The team's effective scope expands.

The third thing is *different by person*. Some people integrate AI tools into their workflow naturally. Others don't — not because they're resistant, but because the workflow change requires a certain kind of deliberate practice that not everyone has time for. Implementation is a change management problem as much as a technology problem.

## What I'd do differently

Start with one workflow, not five. Pick the highest-friction task that has clear inputs and outputs, and make the AI integration for that workflow excellent before expanding.

Invest in prompting as a skill. The quality gap between a casually-prompted LLM and a carefully-prompted one is much larger than most people expect. This isn't prompt engineering in the academic sense — it's just disciplined briefing.

Measure actual time saved, not perceived efficiency. People systematically overestimate how much time AI saves them on tasks they enjoy, and underestimate savings on tasks they find tedious. Track the numbers.

The potential is real. The work is in the implementation, not the technology.

---
title: "What EN50155 actually means for embedded hardware"
description: "Railway hardware certification isn't just a checkbox. Here's what it actually requires — and why it matters for the engineers spec-ing compute into rail systems."
date: 2026-07-02
tags: ["railway", "hardware", "IPC"]
lang: en
draft: false
---

Most conversations about railway embedded computers start and end with "EN50155 certified" — as if that phrase answers the question. It doesn't. It's the beginning of the question.

EN50155 is the European standard for electronic equipment used on rolling stock. But the standard doesn't test a product; it defines a *test regime*. What the certification tells you is that the hardware was tested according to those procedures. What it doesn't tell you is which specific conditions, which temperature class, which power isolation category, or which vibration profile.

## The variables that matter

**Temperature class.** EN50155 defines several operational temperature ranges. A product tested to TX (−40°C to +70°C) is fundamentally different from one tested to T1 (−25°C to +55°C). A system integrator specifying compute for a locomotive cab needs TX. A wayside cabinet in a mild climate might get away with T1. The spec sheet rarely makes this prominent.

**Power input and isolation.** Railway power supplies are notoriously dirty — voltage transients, surge events, polarity reversal. EN50155 requires the hardware to survive defined surge conditions, but the isolation architecture matters too. Some products survive a surge and then fail subtly. Look for the test report, not just the badge.

**Vibration and shock.** Rolling stock generates continuous low-frequency vibration plus intermittent shock (track joints, coupling events). The standard defines shock and vibration profiles, but the question is whether your mount and enclosure design transmits those loads to the board in the same way as the test fixture.

## Why this matters for procurement

When a rail equipment maker (PIS system, TCMS component, onboard HMI) selects a compute platform, the certification is a necessary but not sufficient condition for a design win. What you're actually buying is:

1. A platform that can *enter* the approval process without surprises
2. A vendor who has been through vehicle-level approval cycles and understands the documentation burden
3. Hardware whose failure modes are known and whose MTBF is documented under relevant conditions

The certification doesn't guarantee longevity. What does is whether the manufacturer has a 10-year product lifecycle commitment — because rail projects run for 20–30 years and nobody wants to redesign around an EOL CPU board mid-programme.

## The practical takeaway

If you're an engineer spec-ing compute for a rail application: ask for the test report, not the certificate. Ask which temperature class. Ask what the long-term supply commitment is. And ask whether the vendor has done vehicle-level approval before — because the difference between a supplier who has done it and one who hasn't is measured in months of approval delay.

EN50155 is a starting point. The rest is engineering judgment.

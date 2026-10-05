# Resume Claim Checklist

Use this before submitting the resume. Keep only claims you can explain precisely
and honestly in an interview.

## Trading analytics platform

- **$100+/month per user, 10+ users:** Know the replaced product, its actual price,
  how many people stopped using it, and whether this is realized or estimated
  savings.
- **10,000+ instruments daily:** Be ready to define an instrument, describe the
  data source and screening schedule, and explain whether this is records read,
  instruments evaluated, or completed screens.
- **15+ indicators:** Name representative indicators and explain how they were
  computed, cached, and delivered.
- **<100 ms p95 latency:** State the start and end points, test duration, load,
  sample size, environment, and measurement tool. Remove `end-to-end` or the
  metric entirely if those details are unavailable.
- **8+ production features:** Name the most complex two or three features and
  explain your individual contribution, deployment process, and a production
  issue you diagnosed.

## Clinic scheduling platform

- **5-person team:** Explain your scope versus the other contributors' work.
- **50+ weekly appointments:** Confirm that this reflects actual staff usage,
  not test data or projected capacity.
- **Prevented double-bookings:** Be ready to explain transaction boundaries,
  relevant database constraints or isolation behavior, race-condition handling,
  and tests.
- **Deployment:** Know who used the system, where it ran, and what you personally
  handled in production.

## Mentoring

- **30+ students and 10+ hours/week:** Explain whether 30 is cumulative or
  concurrent and how hours were tracked.
- **50+ assignments:** Clarify whether these were formal evaluations, tutoring
  reviews, or informal code reviews.

## Distributed email processing

- **10,000+ emails and 4 workers:** Describe the workload, message size, hardware,
  consumer-group configuration, and how duplicate or abandoned jobs were handled.
- **200+ emails/minute and 1,500 ms p95:** Explain concurrency, the measurement
  boundary, model/API behavior, dataset size, warm-up, and whether throughput
  includes failed or retried jobs.
- **5 failure modes:** Name all five, how each was injected, the expected recovery
  behavior, and the evidence that no job was silently lost.

## Contractor Marketplace

- **40+ users and 20+ contractors:** Confirm these are real distinct users rather
  than seeded or test accounts. Replace with a non-user metric if not.
- **Authorization:** Point to the session, role, ownership, and participation
  checks in the server-side handlers and actions.
- **Transactional hiring:** Explain how accepting one bid assigns a contractor
  and rejects competing bids atomically.
- **Stripe idempotency:** Explain signature verification, event-ID deduplication,
  expected-amount verification, and the transaction that records payment state.
- **Deployment history:** The repository documents the current Vercel deployment.
  Keep AWS EC2 and Amazon RDS in Skills only if you personally deployed and
  operated the application on those services previously.

## Final submission checks

- Replace every contact placeholder in `backend_resume.tex`.
- Confirm that the live project link and GitHub profile are public and polished.
- Tailor genuine keywords to each job description; do not add unused tools.
- Recompile and confirm that the PDF remains one page.
- Open the PDF, test every link, and copy all text into a plain-text editor to
  confirm the reading order.

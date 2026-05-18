# Membership Downgrade Requirements

## Context

Blackjet's `sec-api` contains a membership lifecycle with real business rules around:

- membership downgrade eligibility
- future bookings and renewal dates
- immediate vs scheduled plan changes
- durable async processing

For this exercise, build a simplified version of that flow.

## What To Build

Implement a small service that supports:

- `POST /memberships/:userId/downgrade`

## Core Rules

- Only a user on `UNLIMITED_ELITE` can downgrade.
- The target plan is always `UNLIMITED`.
- Count the user's bookings whose departure time is after the user's renewal date.
- If future bookings after renewal date are greater than `2`, reject the downgrade.
- If future bookings after renewal date are `0`, apply the downgrade immediately.
- If future bookings after renewal date are `1..2`, store a scheduled downgrade to be executed at the renewal date.

## Durable Async Requirement

If a downgrade is scheduled, it must be executed by a durable async mechanism.

Requirements:

- The design must survive process restarts.
- The work must be retryable.
- The execution must be safe if the same job is attempted more than once.

You should design the durable async approach yourself. The starter intentionally does not provide a jobs schema or worker implementation.

## What Is Provided

Inside `template/` you will find:

- a minimal TypeScript starter
- a running Nest starter
- a health endpoint
- a `User` domain entity
- a `users` schema
- a `UserRepository`
- seed fixtures for `users`, `memberships`, and `bookings`
- starter structure including `src/app.module.ts`
- starter structure including `src/main.ts`
- starter structure including `src/shared/...`
- starter structure including `src/modules/health/...`
- starter structure including `src/modules/user/...`
- starter structure including `src/modules/membership/...`

Important:

- Only the `users` schema is provided.
- You must design the schema for memberships, bookings, downgrade requests, jobs, and any other supporting tables you need.
- After defining your own schemas, extend the seeder so those scenarios are inserted into the database as well.

## Expected Deliverables

- working downgrade endpoint
- your schema design
- durable async implementation for scheduled downgrades
- clear setup instructions
- tests for the important business rules

## Non-Goals

You do not need to implement:
- authentication

## Suggested Timebox

Aim for roughly `3-5 hours`.

You do not need to over-polish the app. We care more about correctness, tradeoffs, and code quality than breadth.

## What We Evaluate

- separation of domain logic from transport code
- schema design quality
- correctness of downgrade decisioning
- durable job design
- idempotency and retry handling
- test quality
- clarity of tradeoffs in your README

## Setup

From the root directory:

```bash
pnpm install
cp .env.example .env
docker compose up -d postgres
pnpm db:seed
pnpm dev
```

## Simple Health Check

```bash
curl http://localhost:3000/sec/v2/health
```

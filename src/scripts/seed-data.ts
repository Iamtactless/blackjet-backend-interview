import type { NewUserRecord } from "../shared/infrastructure/database/schema/index.js";

export type MembershipSeed = {
  id: string;
  userId: string;
  tier: "UNLIMITED" | "UNLIMITED_ELITE";
  renewalDate: string; // membership renewal date
};

export type BookingSeed = {
  id: string;
  userId: string;
  flight: string;
  departureAt: string;
  status: "CONFIRMED";
};

export const userSeed: NewUserRecord[] = [
  {
    id: "user-immediate-001",
    email: "immediate@example.com",
    firstName: "Iris",
    lastName: "Immediate",
    createdAt: "2026-01-10T09:00:00.000Z",
  },
  {
    id: "user-scheduled-001",
    email: "scheduled@example.com",
    firstName: "Sam",
    lastName: "Scheduled",
    createdAt: "2026-01-11T09:00:00.000Z",
  },
];

export const membershipSeed: MembershipSeed[] = [
  {
    id: "membership-immediate-001",
    userId: "user-immediate-001",
    tier: "UNLIMITED_ELITE",
    renewalDate: "2026-08-01T00:00:00.000Z",
  },
  {
    id: "membership-scheduled-001",
    userId: "user-scheduled-001",
    tier: "UNLIMITED_ELITE",
    renewalDate: "2026-08-01T00:00:00.000Z",
  },
];

export const bookingSeed: BookingSeed[] = [
  {
    id: "booking-before-cycle-001",
    userId: "user-immediate-001",
    flight: "BJ-1001",
    departureAt: "2026-07-20T10:00:00.000Z",
    status: "CONFIRMED",
  },
  {
    id: "booking-after-cycle-001",
    userId: "user-scheduled-001",
    flight: "BJ-2001",
    departureAt: "2026-08-10T10:00:00.000Z",
    status: "CONFIRMED",
  },
  {
    id: "booking-after-cycle-002",
    userId: "user-scheduled-001",
    flight: "BJ-2002",
    departureAt: "2026-08-18T10:00:00.000Z",
    status: "CONFIRMED",
  },
];

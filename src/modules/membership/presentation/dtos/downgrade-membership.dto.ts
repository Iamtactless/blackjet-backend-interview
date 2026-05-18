export type DowngradeMembershipResponseDto =
  | {
      status: 'APPLIED_IMMEDIATELY';
      userId: string;
      targetTier: 'UNLIMITED';
      effectiveAt: string;
    }
  | {
      status: 'SCHEDULED';
      userId: string;
      targetTier: 'UNLIMITED';
      effectiveAt: string;
    }
  | {
      status: 'REJECTED';
      userId: string;
      reason: string;
    };


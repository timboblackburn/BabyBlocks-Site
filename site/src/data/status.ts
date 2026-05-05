// Canonical status states for the Intrigue MMC product family.
// Identical file on all four sites: intriguemmc.com, intriguinginsight.com,
// babyblocks.io, foundry-os.io. Edit one site, copy the file to the others
// so the four properties never disagree on what "Live" or "In build" looks like.

export type StatusKey = 'live' | 'appReview' | 'inBuild' | 'comingSoon';

export interface StatusDef {
  key: StatusKey;
  label: string;
  /** Hex colour for a coloured dot or accent, picked to match each state's mood. */
  dot: string;
  /** Optional sentence describing what the state means, surfaced in tooltips or alt text. */
  description: string;
}

export const STATUS: Record<StatusKey, StatusDef> = {
  live: {
    key: 'live',
    label: 'Live',
    dot: '#047857',
    description: 'Shipping. Available to use today.',
  },
  appReview: {
    key: 'appReview',
    label: 'In App Review',
    dot: '#F59E0B',
    description: 'Submitted to the App Store. Awaiting Apple review.',
  },
  inBuild: {
    key: 'inBuild',
    label: 'In build',
    dot: '#7A2030',
    description: 'Active development. Not yet shipped.',
  },
  comingSoon: {
    key: 'comingSoon',
    label: 'Coming soon',
    dot: '#6B6861',
    description: 'Planned. Not yet started or scoped.',
  },
};

/** Canonical product status table. Every site reads from this. */
export const PRODUCT_STATUS: Record<string, StatusKey> = {
  'intrigue-mmc':       'live',
  'intriguing-insight': 'live',
  'think-sharper':      'live',
  babyblocks:           'live',
  budgetbaby:           'appReview',
  pantrybaby:           'inBuild',
  'babyblocks-core':    'comingSoon',
  foundry:              'live',
  'foundry-core':       'live',
  'foundry-desk':       'inBuild',
  'foundry-automations':'inBuild',
  screenforge:          'inBuild',
};

export function statusFor(productKey: string): StatusDef {
  const key = PRODUCT_STATUS[productKey] ?? 'comingSoon';
  return STATUS[key];
}

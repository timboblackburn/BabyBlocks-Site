export interface DocNavItem {
  label: string;
  href: string;
}

export interface DocNavGroup {
  group: string;
  items: DocNavItem[];
}

/**
 * LAUNCH GATE for the Group Sharing docs. Group sharing is still in beta and not in
 * the public App Store release, so its doc page is hidden: it is omitted from the docs
 * navigation below AND the page itself redirects away (see group-sharing.astro) while
 * this is false. Flip to `true` in the same release that ships group sharing publicly,
 * and the page + nav entry go live together.
 */
export const GROUP_SHARING_DOC_PUBLISHED = false;

export const docsNav: DocNavGroup[] = [
  {
    group: 'Getting Started',
    items: [
      { label: 'Documentation Home', href: '/budgetbaby/docs' },
      { label: 'Quickstart', href: '/budgetbaby/docs/quickstart' },
    ],
  },
  {
    group: 'Core Concepts',
    items: [
      { label: 'How BudgetBaby Works', href: '/budgetbaby/docs/core-concepts' },
    ],
  },
  {
    group: 'Features',
    items: [
      // Group Sharing is hidden from the nav until GROUP_SHARING_DOC_PUBLISHED is true.
      ...(GROUP_SHARING_DOC_PUBLISHED
        ? [{ label: 'Group Sharing', href: '/budgetbaby/docs/group-sharing' }]
        : []),
      { label: 'Reminders', href: '/budgetbaby/docs/reminders' },
    ],
  },
  {
    group: 'Data and Account',
    items: [
      { label: 'Backup and Restore', href: '/budgetbaby/docs/backup-and-restore' },
      { label: 'Exporting Data', href: '/budgetbaby/docs/exporting-and-data' },
      { label: 'Privacy and Data Model', href: '/budgetbaby/docs/privacy-and-data-model' },
    ],
  },
  {
    group: 'Account & Billing',
    items: [
      { label: 'Plans and Purchases', href: '/budgetbaby/docs/subscriptions' },
    ],
  },
  {
    group: 'Help',
    items: [
      { label: 'Common Cases', href: '/budgetbaby/docs/common-cases' },
      { label: 'Troubleshooting', href: '/budgetbaby/docs/troubleshooting' },
      { label: 'Contact Support', href: '/budgetbaby/docs/contact-support' },
    ],
  },
];

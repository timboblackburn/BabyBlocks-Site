export interface DocNavItem {
  label: string;
  href: string;
}

export interface DocNavGroup {
  group: string;
  items: DocNavItem[];
}

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
    group: 'Subscriptions',
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

export interface CybersecurityLab {
  slug: string;
  title: string;
  description: string;
  category: string;
  eventId?: string;
  mitreAttack: string;
  objective: string;
  environment: string;
  toolsUsed: string[];
  investigationProcess: string;
  findings: string;
  recommendations: string;
  conclusion: string;
  github: string;
}

export const bruteForceInvestigation: CybersecurityLab = {
  slug: 'brute-force-investigation',
  title: 'Brute Force Attack Investigation',
  description: 'A cybersecurity investigation focused on identifying repeated failed authentication attempts and analyzing Windows Security Event Logs.',
  category: 'SOC / Incident Investigation',
  eventId: '4625',
  mitreAttack: 'T1110 - Brute Force',
  objective: 'Identify repeated failed authentication attempts and analyze Windows Security Event Logs.',
  environment: 'Windows Security Event Logs',
  toolsUsed: ['Windows Event Viewer'],
  investigationProcess: 'Review repeated failed authentication attempts in Windows Security Event Logs.',
  findings: 'Verified findings will be added after the investigation is documented.',
  recommendations: 'Recommendations will be added from the verified investigation findings.',
  conclusion: 'The investigation conclusion will be added once the case study is documented.',
  github: 'https://github.com/maharshkewat-india/cybersecurity-labs/tree/main/brute-force-investigation',
};

export const phishingEmailInvestigation: CybersecurityLab = {
  slug: 'phishing-email-investigation',
  title: 'Phishing Email Investigation',
  description: 'A cybersecurity investigation focused on reviewing a suspected phishing email and documenting the investigation method.',
  category: 'Cybersecurity Lab',
  mitreAttack: 'To be documented from verified investigation details.',
  objective: 'To be documented from verified investigation details.',
  environment: 'To be documented from verified investigation details.',
  toolsUsed: ['To be documented from verified investigation details.'],
  investigationProcess: 'Investigation steps will be added from the verified case study.',
  findings: 'Verified findings will be added after the investigation is documented.',
  recommendations: 'Recommendations will be added from the verified investigation findings.',
  conclusion: 'The investigation conclusion will be added once the case study is documented.',
  github: 'https://github.com/maharshkewat-india/cybersecurity-labs',
};

export const windowsEventLogInvestigation: CybersecurityLab = {
  slug: 'windows-event-log-investigation',
  title: 'Windows Event Log Investigation',
  description: 'A cybersecurity investigation focused on reviewing Windows Event Logs and documenting the investigation method.',
  category: 'Cybersecurity Lab',
  mitreAttack: 'To be documented from verified investigation details.',
  objective: 'To be documented from verified investigation details.',
  environment: 'To be documented from verified investigation details.',
  toolsUsed: ['To be documented from verified investigation details.'],
  investigationProcess: 'Investigation steps will be added from the verified case study.',
  findings: 'Verified findings will be added after the investigation is documented.',
  recommendations: 'Recommendations will be added from the verified investigation findings.',
  conclusion: 'The investigation conclusion will be added once the case study is documented.',
  github: 'https://github.com/maharshkewat-india/cybersecurity-labs',
};

export const cybersecurityLabs: CybersecurityLab[] = [
  bruteForceInvestigation,
  phishingEmailInvestigation,
  windowsEventLogInvestigation,
];
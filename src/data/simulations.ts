export interface Simulation {
  company: string;
  title: string;
  focus: string;
  skills: string[];
  url?: string;
}

// This data is based on information found in the project files.
// Please confirm and provide more details if available.
export const simulations: Simulation[] = [
  {
    company: 'Mastercard',
    title: 'Cybersecurity Job Simulation',
    focus: 'Served as an analyst on the Security Awareness Team, identifying threats like phishing and implementing targeted security training.',
    skills: ['Security Awareness', 'Phishing Detection', 'Threat Reporting', 'Data Analysis'],
    url: 'https://www.theforage.com/completion-certificates/mfxGwGDp6WkQmtmTf/vcKAB5yYAgvemepGQ_mfxGwGDp6WkQmtmTf_696bac122e40c7c03c06d2b9_1781940301585_completion_certificate.pdf',
  },
  {
    company: 'Tata',
    title: 'Cybersecurity Analyst Job Simulation',
    focus: 'Completed a job simulation involving identity and access management (IAM) and aligning security with business objectives.',
    skills: ['IAM', 'Security Assessment', 'Access Control', 'User Provisioning', 'Communication'],
    url: 'https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_696bac122e40c7c03c06d2b9_1782468334263_completion_certificate.pdf',
  },
  {
    company: 'Deloitte',
    title: 'Data Analytics Job Simulation',
    focus: 'Completed a job simulation involving data analysis and forensic technology, creating a data dashboard with Tableau.',
    skills: ['Data Analysis', 'Forensic Technology', 'Tableau', 'Excel', 'Business Analysis'],
    url: 'https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_696bac122e40c7c03c06d2b9_1782473206773_completion_certificate.pdf',
  },
  {
    company: 'J.P. Morgan',
    title: 'Quantitative Research Job Simulation',
    focus: "Analyzed a book of loans to estimate a customer's probability of default using dynamic programming and FICO score conversion.",
    skills: ['Quantitative Research', 'Credit Analysis', 'Default Prediction', 'Dynamic Programming'],
    url: 'https://www.theforage.com/completion-certificates/Sj7temL583QAYpHXD/bWqaecPDbYAwSDqJy_Sj7temL583QAYpHXD_696bac122e40c7c03c06d2b9_1781935457189_completion_certificate.pdf',
  },
];
export interface LearningRecord {
  title: string;
  provider: string;
  kind: string;
  category: string;
  topics: string[];
  url?: string;
}

// This is placeholder data. Replace with your actual certifications.
export const learningRecords: LearningRecord[] = [
  {
    title: 'Microsoft Certified: Security, Compliance, and Identity Fundamentals',
    provider: 'Microsoft',
    kind: 'Certification',
    category: 'Cybersecurity',
    topics: ['Security', 'Compliance', 'Identity', 'Azure AD', 'Microsoft 365'],
    url: 'https://learn.microsoft.com/en-us/users/maharshkewat/achievements/wzrmpc9n',
  },
  // NOTE: The Skill India URLs below are temporary and may expire.
  // It is recommended to find permanent links if possible.
  {
    title: 'Information Security Analyst',
    provider: 'Skill India',
    kind: 'Certification',
    category: 'Cybersecurity',
    topics: ['Information Security', 'Security Analysis', 'Risk Management'],
    url: 'https://skill-india-dev.s3.ap-south-1.amazonaws.com/certificate_generic/uploaded_elements/2024082936406350/certificate_02da6be6-46a2-4f11-817b-2ed6c7cbc4b5.pdf',
  },
  {
    title: 'Network Security Engineer',
    provider: 'Skill India',
    kind: 'Certification',
    category: 'Cybersecurity',
    topics: ['Network Security', 'Firewalls', 'VPNs', 'Intrusion Detection'],
    url: 'https://skill-india-dev.s3.ap-south-1.amazonaws.com/certificate_generic/uploaded_elements/2024082936406350/certificate_aea0e014-9bff-40e4-b2d2-1013f11aa122.pdf',
  },
  {
    title: 'Describe the concepts of security, compliance, and identity',
    provider: 'Microsoft Learn',
    kind: 'Badge',
    category: 'Cybersecurity',
    topics: ['Security Concepts', 'Compliance Concepts', 'Identity Concepts'],
    url: 'https://learn.microsoft.com/en-us/users/maharshkewat/achievements/XMZPBK6Y',
  },
  {
    title: 'Describe the capabilities of Microsoft identity and access management solutions',
    provider: 'Microsoft Learn',
    kind: 'Badge',
    category: 'Cybersecurity',
    topics: ['IAM', 'Azure AD', 'Access Management'],
    url: 'https://learn.microsoft.com/en-us/users/maharshkewat/achievements/9XWAZDEU',
  },
  {
    title: 'Describe the capabilities of Microsoft security solutions',
    provider: 'Microsoft Learn',
    kind: 'Badge',
    category: 'Cybersecurity',
    topics: ['Microsoft Security', 'Azure Security', 'Microsoft Sentinel'],
    url: 'https://learn.microsoft.com/en-us/users/maharshkewat/achievements/N2AQ499F',
  },
  {
    title: 'Innovating with Google Cloud Artificial Intelligence',
    provider: 'Google',
    kind: 'Course',
    category: 'AI & Machine Learning',
    topics: ['Generative AI', 'LLMs', 'Vertex AI', 'Responsible AI'],
    url: 'https://www.skills.google/public_profiles/31ce1316-fd0f-41c3-9ba7-82ccd8f17237/badges/25272612',
  },
  {
    title: 'Introduction to Responsible AI',
    provider: 'Google',
    kind: 'Badge',
    category: 'AI & Machine Learning',
    topics: ['AI Ethics', 'Bias Mitigation', 'AI Safety', 'Privacy'],
    url: 'https://www.skills.google/public_profiles/31ce1316-fd0f-41c3-9ba7-82ccd8f17237/badges/8304921',
  },
  {
    title: 'Artificial Intelligence Fundamentals',
    provider: 'IBM',
    kind: 'Certification',
    category: 'AI & Machine Learning',
    topics: ['Machine Learning', 'Deep Learning', 'NLP', 'IBM Watson', 'AI Ethics'],
    url: 'https://www.credly.com/badges/9dec5597-7ca2-4573-818f-b0e192cf916d',
  },
  {
    title: 'Microsoft Certified: Azure Fundamentals',
    provider: 'Microsoft',
    kind: 'Certification',
    category: 'Cloud Security',
    topics: ['Azure', 'Cloud Concepts', 'Azure Services', 'Azure Security'],
    url: 'https://learn.microsoft.com/en-us/users/maharshkewat/achievements/ESKVMA7P',
  },
  {
    title: 'Scaling with Google Cloud Operations',
    provider: 'Google',
    kind: 'Course',
    category: 'Cloud Security',
    topics: ['Cloud Cost Management', 'Observability', 'Cloud Monitoring', 'Logging', 'SRE'],
    url: 'https://www.skills.google/public_profiles/31ce1316-fd0f-41c3-9ba7-82ccd8f17237/badges/25273447',
  },
  {
    title: 'Trust and Security with Google Cloud',
    provider: 'Google',
    kind: 'Course',
    category: 'Cloud Security',
    topics: ['Cloud Security', 'IAM', 'Data Protection', 'Security Frameworks'],
    url: 'https://www.skills.google/public_profiles/31ce1316-fd0f-41c3-9ba7-82ccd8f17237/badges/25273161',
  },
  {
    title: 'Modernize Infrastructure and Applications with Google Cloud',
    provider: 'Google',
    kind: 'Course',
    category: 'Cloud Security',
    topics: ['Cloud Infrastructure', 'Cloud-Native', 'Scalability', 'Reliability'],
    url: 'https://www.skills.google/public_profiles/31ce1316-fd0f-41c3-9ba7-82ccd8f17237/badges/25272887',
  },
  {
    title: 'Digital Transformation with Google Cloud',
    provider: 'Google',
    kind: 'Course',
    category: 'Cloud Security',
    topics: ['Cloud Strategy', 'Data Innovation', 'Modernization'],
    url: 'https://www.skills.google/public_profiles/31ce1316-fd0f-41c3-9ba7-82ccd8f17237/badges/25238679',
  },
  {
    title: 'Exploring Data Transformation with Google Cloud',
    provider: 'Google',
    kind: 'Course',
    category: 'Data Analysis',
    topics: ['Data Strategy', 'Data Management', 'Structured Data', 'Unstructured Data'],
    url: 'https://www.skills.google/public_profiles/31ce1316-fd0f-41c3-9ba7-82ccd8f17237/badges/25271407',
  },
  {
    title: 'Power BI Micro Course',
    provider: 'SkillCourse',
    kind: 'Micro Course',
    category: 'Data Analysis',
    topics: ['Power BI', 'Data Visualization', 'Dashboards'],
    url: 'https://exam.skillcourse.in/student/view_certificate?uid=SC-3E812CC4F7',
  },
];
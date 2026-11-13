import {
  BeforeAfterPair,
  FaqItem,
  IndustryItem,
  ProcessPhase,
  ServiceItem,
  WorkflowStep,
} from '../types';

export const LOGO_PATH = '/assets/aistudio/image_e83f88db.png';

export const CONTACT_PLACEHOLDERS = {
  email: '[contact@arizotek.com — Placeholder]',
  emailShort: 'contact@arizotek.com (Placeholder)',
  phone: '[(000) 000-0000 — Placeholder]',
  phoneShort: '(000) 000-0000 (Placeholder)',
  location: '[City, State — Placeholder]',
  locationNote: 'Service area and office address will be finalized prior to launch.',
};

export const HERO_WORKFLOW_STEPS: WorkflowStep[] = [
  {
    id: 'inquiry',
    stepNumber: '01',
    title: 'Customer Inquiry',
    subtitle: 'Web Form · Email · Chat',
    description:
      'A prospect submits a service question or consultation request through your website or inbox.',
    iconName: 'Inbox',
  },
  {
    id: 'ai-processing',
    stepNumber: '02',
    title: 'AI Processing',
    subtitle: 'Classify · Extract · Route',
    description:
      'An AI workflow reads the message, identifies intent, extracts contact fields, and assigns priority.',
    iconName: 'Cpu',
  },
  {
    id: 'automated-action',
    stepNumber: '03',
    title: 'Automated Action',
    subtitle: 'Instant Draft · Reply · Task',
    description:
      'A tailored acknowledgment email and calendar booking link are sent automatically within seconds.',
    iconName: 'Zap',
  },
  {
    id: 'crm-update',
    stepNumber: '04',
    title: 'CRM Update',
    subtitle: 'Sync Record · Tag Lead',
    description:
      'Contact details, inquiry summary, and next-step status are logged cleanly into your CRM.',
    iconName: 'Database',
  },
  {
    id: 'notification',
    stepNumber: '05',
    title: 'Notification',
    subtitle: 'Team Alert · Follow-Up',
    description:
      'The right team member receives a concise summary alert and a scheduled follow-up reminder.',
    iconName: 'Bell',
  },
];

export const BEFORE_AFTER_STEPS: BeforeAfterPair[] = [
  {
    step: 1,
    stage: 'Intake',
    manual: 'Customer submits an inquiry.',
    automated: 'Inquiry is captured automatically.',
  },
  {
    step: 2,
    stage: 'Triage',
    manual: 'Employee manually reviews the request.',
    automated: 'AI processes and categorizes the request.',
  },
  {
    step: 3,
    stage: 'Record Entry',
    manual: 'Information is entered into a spreadsheet.',
    automated: 'Customer information is saved to the CRM.',
  },
  {
    step: 4,
    stage: 'Response',
    manual: 'Employee sends a response.',
    automated: 'Automated response is triggered.',
  },
  {
    step: 5,
    stage: 'Follow-Up',
    manual: 'Follow-up is performed manually.',
    automated: 'Follow-up is scheduled.',
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'ai-agents-chatbots',
    number: '01',
    title: 'AI Agents & Chatbots',
    shortDescription:
      'Intelligent chatbots that handle customer inquiries, qualify leads, and provide automated assistance.',
    detailedIntro:
      'Deploy conversational AI assistants trained on your approved business documentation so visitors receive clear, accurate answers and qualified next steps around the clock.',
    capabilities: [
      'Customer support automation.',
      'Lead generation and qualification.',
      'Automated customer responses.',
      'Website and messaging-platform chatbots.',
      'Knowledge-base-powered AI assistants.',
    ],
    iconName: 'Bot',
    demoLabel: 'Illustrative Assistant Flow',
    demoSteps: [
      { label: 'Visitor Question', detail: 'Asks about service scope and availability' },
      { label: 'Knowledge Retrieval', detail: 'Matches approved company guidelines' },
      { label: 'Lead Qualification', detail: 'Collects name, email, and project timeline' },
      { label: 'Hand-off', detail: 'Routes qualified summary to your team' },
    ],
  },
  {
    id: 'ai-workflow-automation',
    number: '02',
    title: 'AI Workflow Automation',
    shortDescription:
      'Automate repetitive business operations, data processing, notifications, and multi-step workflows.',
    detailedIntro:
      'Replace fragmented manual handoffs with connected multi-step workflows that read incoming information, apply business rules, and trigger consistent downstream actions.',
    capabilities: [
      'Repetitive task automation.',
      'Automated email and notification workflows.',
      'Data processing and organization.',
      'Lead management automation.',
      'Multi-step business workflows.',
    ],
    iconName: 'Workflow',
    demoLabel: 'Illustrative Workflow Sequence',
    demoSteps: [
      { label: 'Event Trigger', detail: 'New inquiry or form submission received' },
      { label: 'AI Classification', detail: 'Categorizes urgency and service type' },
      { label: 'Data Formatting', detail: 'Standardizes contact and request fields' },
      { label: 'Team Notification', detail: 'Dispatches summary alert and task owner' },
    ],
  },
  {
    id: 'business-process-automation',
    number: '03',
    title: 'Business Process Automation',
    shortDescription:
      'Reduce manual work and streamline administrative and operational activities.',
    detailedIntro:
      'Eliminate bottleneck spreadsheets and copy-paste routines across invoicing, onboarding, document intake, and weekly operational reporting.',
    capabilities: [
      'Administrative task automation.',
      'Document and invoice processing.',
      'Data entry automation.',
      'Reporting and operational workflows.',
      'Improved internal business processes.',
    ],
    iconName: 'Layers',
    demoLabel: 'Illustrative Operations Pipeline',
    demoSteps: [
      { label: 'Document Intake', detail: 'PDF invoice or onboarding form arrives' },
      { label: 'Field Extraction', detail: 'Captures vendor, dates, and line items' },
      { label: 'Approval Routing', detail: 'Notifies manager for one-click review' },
      { label: 'Clean Archive', detail: 'Files structured record in accounting folder' },
    ],
  },
  {
    id: 'system-integration',
    number: '04',
    title: 'System Integration',
    shortDescription:
      'Connect business applications, CRM platforms, communication tools, and existing systems.',
    detailedIntro:
      'Bridge the gap between disconnected software tools so customer records, calendars, emails, and operational databases stay accurate without manual re-entry.',
    capabilities: [
      'CRM integrations.',
      'Connecting business applications.',
      'Google Workspace integrations.',
      'API-based integrations.',
      'Automated data synchronization.',
    ],
    iconName: 'PlugZap',
    demoLabel: 'Illustrative Sync Architecture',
    demoSteps: [
      { label: 'Website & Forms', detail: 'Captures structured customer submissions' },
      { label: 'CRM Platform', detail: 'Creates or updates contact & deal records' },
      { label: 'Google Workspace', detail: 'Generates Drive folders and Calendar invites' },
      { label: 'Billing & Comms', detail: 'Syncs status updates across team channels' },
    ],
  },
];

export const WHY_CHOOSE_FEATURES = [
  {
    number: '01',
    title: 'Business-Focused Solutions',
    description: 'Automation designed around actual business requirements.',
  },
  {
    number: '02',
    title: 'Improved Efficiency',
    description: 'Reduce repetitive tasks and manual processes.',
  },
  {
    number: '03',
    title: 'Seamless Integration',
    description: 'Connect existing applications and business tools.',
  },
  {
    number: '04',
    title: 'Scalable Solutions',
    description: 'Build automation that can evolve with business needs.',
  },
];

export const HOW_WE_WORK_PHASES: ProcessPhase[] = [
  {
    number: '01',
    title: 'Discover',
    description: 'Understand your business processes and identify repetitive tasks.',
  },
  {
    number: '02',
    title: 'Analyze',
    description: 'Find opportunities where automation can improve efficiency.',
  },
  {
    number: '03',
    title: 'Implement',
    description: 'Develop and integrate suitable automation solutions.',
  },
  {
    number: '04',
    title: 'Optimize',
    description: 'Test, refine, and improve automated workflows.',
  },
];

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    title: 'Real Estate',
    description:
      'Automate property inquiry responses, lead qualification, showing reminders, and CRM contact updates.',
    iconName: 'Building2',
  },
  {
    title: 'Healthcare & Clinics',
    description:
      'Streamline appointment scheduling requests, intake routing, patient reminders, and administrative follow-ups.',
    iconName: 'Stethoscope',
  },
  {
    title: 'E-commerce & Retail',
    description:
      'Automate common order questions, customer support routing, inventory alerts, and post-purchase updates.',
    iconName: 'ShoppingBag',
  },
  {
    title: 'Professional Services',
    description:
      'Simplify client onboarding, proposal preparation workflows, document collection, and recurring administration.',
    iconName: 'Briefcase',
  },
  {
    title: 'Education',
    description:
      'Support admissions inquiries, student onboarding communications, schedule notices, and administrative record routing.',
    iconName: 'GraduationCap',
  },
  {
    title: 'Small & Mid-Sized Businesses',
    description:
      'Connect everyday email, spreadsheets, calendars, and CRM tools to eliminate manual data entry across teams.',
    iconName: 'Store',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'What is business process automation?',
    answer:
      'Business process automation uses software and intelligent rules to perform recurring operational tasks—such as data entry, routing inquiries, updating records, and sending notifications—without manual copy-and-paste work.',
  },
  {
    question: 'How can AI automation help my business?',
    answer:
      'AI automation goes beyond rigid rules by understanding unstructured inputs like emails, customer questions, and documents. It can summarize requests, categorize leads, draft clear responses, and route tasks to the right team member automatically.',
  },
  {
    question: 'Can automation integrate with my existing tools?',
    answer:
      'Yes. Solutions are designed to connect with the software your team already relies on—such as CRM platforms, Google Workspace, email providers, spreadsheets, forms, and messaging tools—so you do not have to replace your core systems.',
  },
  {
    question: 'Do I need technical knowledge to use automation?',
    answer:
      'No. ArizoTek designs and configures workflows so your team interacts with simple, familiar outputs like clean CRM records, inbox alerts, and scheduled tasks rather than complex technical dashboards.',
  },
  {
    question: 'Can automation solutions be customized?',
    answer:
      'Yes. Every business has its own terminology, approval steps, and software stack. Workflows are tailored around your specific operational process rather than forcing your team into a generic template.',
  },
  {
    question: 'How do I get started with ArizoTek?',
    answer:
      'Start by reaching out through the Contact Us page to schedule a consultation. We review your current workflows, identify high-impact manual bottlenecks, and recommend a practical automation plan.',
  },
];

export const SERVICES_FIVE_STAGE_FLOW = [
  {
    step: '01',
    title: 'Input',
    description: 'An inquiry, form submission, email, or document enters your business.',
  },
  {
    step: '02',
    title: 'AI Analysis',
    description: 'Intelligent logic reads context, extracts key fields, and classifies intent.',
  },
  {
    step: '03',
    title: 'Automated Processing',
    description: 'Information is formatted, validated, and matched to your business rules.',
  },
  {
    step: '04',
    title: 'Action',
    description: 'Connected tools update records, draft replies, and route tasks automatically.',
  },
  {
    step: '05',
    title: 'Result',
    description: 'Faster customer response, clean data, and hours returned to your team.',
  },
];

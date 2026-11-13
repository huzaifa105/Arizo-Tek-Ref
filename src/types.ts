export type PageRoute = 'home' | 'services' | 'contact';

export type ServiceCategory =
  | 'AI Agents & Chatbots'
  | 'AI Workflow Automation'
  | 'Business Process Automation'
  | 'System Integration'
  | 'Other';

export interface ServiceItem {
  id: string;
  number: string;
  title: Exclude<ServiceCategory, 'Other'>;
  shortDescription: string;
  detailedIntro: string;
  capabilities: string[];
  iconName: 'Bot' | 'Workflow' | 'Layers' | 'PlugZap';
  demoLabel: string;
  demoSteps: { label: string; detail: string }[];
}

export interface WorkflowStep {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: 'Inbox' | 'Cpu' | 'Zap' | 'Database' | 'Bell';
}

export interface BeforeAfterPair {
  step: number;
  stage: string;
  manual: string;
  automated: string;
}

export interface ProcessPhase {
  number: string;
  title: string;
  description: string;
}

export interface IndustryItem {
  title: string;
  description: string;
  iconName:
    | 'Building2'
    | 'Stethoscope'
    | 'ShoppingBag'
    | 'Briefcase'
    | 'GraduationCap'
    | 'Store';
}

export interface FaqItem {
  question: string;
  answer: string;
}

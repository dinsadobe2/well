export interface Plan {
  id: string;
  duration: string;
  investment: string;
  originalPrice?: string;
  bestFor: string;
  tag?: string;
  features: string[];
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  iconName: string; // references lucide-react names dynamically
}

export interface Pillar {
  id: string;
  title: string;
  subtitle: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  highlights?: string[];
}

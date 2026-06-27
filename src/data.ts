import { Plan, Benefit, Pillar, FaqItem } from "./types";

export const BRAND_CONTACTS = {
  email: "getfitwithpriya23@gmail.com",
  phone: "+91-9176667744",
  phoneFormatted: "+91 91766 67744",
  consultationUrl: "https://forms.gle/djZGq3oj19XD6gSr9",
  transformationUrl: "https://forms.gle/EKkH2a4S2nxMXng17"
};

export const PILLARS: Pillar[] = [
  {
    id: "pillar-1",
    title: "Scientific Proven Methods",
    subtitle: "Ditch the guesswork. Coach Priya crafts pathways governed by metabolic evidence, physiological science, and bio-nutritional principles."
  },
  {
    id: "pillar-2",
    title: "Sustainable Wellness",
    subtitle: "True physical fitness isn't a 30-day crash; it's a structural integration that enhances, rather than challenges, your everyday cognitive performance."
  },
  {
    id: "pillar-3",
    title: "Realistic Fitness",
    subtitle: "Minimal, hyper-targeted workout routines structured precisely to slide into your calendar slots, honoring corporate meetings, parenthood, or social priorities."
  },
  {
    id: "pillar-4",
    title: "Strength & Confidence",
    subtitle: "Moving heavy things is empowering. This is designed to unlock physical resilience, tone muscles, correct posture, and rebuild cognitive power."
  },
  {
    id: "pillar-5",
    title: "Lifestyle Transformation",
    subtitle: "Form matches function. We systematically transform default habits so that clean, healthy behavior patterns become your effortless baseline."
  }
];

export const FOR_YOU_PROFILES = [
  {
    id: "fy-1",
    text: "You struggle to stay consistent with workouts and nutrition due to stress or fatigue",
    icon: "Repeat"
  },
  {
    id: "fy-2",
    text: "You are a busy professional balancing demanding work commitments and your health",
    icon: "Briefcase"
  },
  {
    id: "fy-3",
    text: "You want sustainable fat loss and body toning without resorting to extreme, restrictive dieting",
    icon: "Salad"
  },
  {
    id: "fy-4",
    text: "You are restarting your fitness journey after pregnancy and motherhood, seeking a safe return",
    icon: "Sparkles"
  },
  {
    id: "fy-5",
    text: "You are a complete beginner looking for step-by-step guidance, confidence, and structure",
    icon: "Map"
  },
  {
    id: "fy-6",
    text: "You want to build clean muscle mass, enhance body aesthetics, and elevate functional strength",
    icon: "Dumbbell"
  },
  {
    id: "fy-7",
    text: "You want to feel physically stronger, inside-out healthier, and profoundly confident in your body",
    icon: "Heart"
  },
  {
    id: "fy-8",
    text: "You want fitness to dissolve naturally into your permanent lifestyle—not be a painful, temporary stage",
    icon: "Calendar"
  }
];

export const DIFFERENCES = [
  {
    title: "Strength & Longevity",
    desc: "Targeted resistance plans structured for skeletal health, functional mobility, and elevated cellular energy."
  },
  {
    title: "Sustainable Nutrition",
    desc: "A transition toward nutrition that honors culturally diverse and real-life food scenarios. Absolutely zero starvation."
  },
  {
    title: "Sustainable Fitness & Functional Health",
    desc: "Workouts targeting baseline cardiovascular capability, metabolic rate improvements, and pain-free joints."
  },
  {
    title: "Accountability & Structure",
    desc: "Proactive tracking and coaching touchpoints keeping you reliable and motivated even during uninspired weeks."
  },
  {
    title: "Lifestyle Transformation",
    desc: "Behavior micro-pivots ensuring healthy sleep, hydration, and nutritional choices compound quietly over time."
  },
  {
    title: "Confidence through Consistency",
    desc: "Proving to yourself that you can follow through. Building structural identity shift as a fit, vibrant individual."
  }
];

export const BENEFITS: Benefit[] = [
  {
    id: "ben-1",
    title: "Personalized Coaching",
    description: "Workouts and nutrition guidance tailored to your unique lifestyle, goals, schedule, and current physical stamina level.",
    iconName: "UserCheck"
  },
  {
    id: "ben-2",
    title: "Sustainable Fat Loss",
    description: "Build healthy, permanent nutritional habits that support long-term body re-composition without energy crashes.",
    iconName: "Flame"
  },
  {
    id: "ben-3",
    title: "Build Strength & Fitness",
    description: "Improve overall raw strength, muscle tone, general endurance, metabolic flexibility, and daylight energy levels.",
    iconName: "Dumbbell"
  },
  {
    id: "ben-4",
    title: "Accountability & Support",
    description: "Stay consistent with recurring data tracking, structured check-ins, routine revisions, and real-time guidance.",
    iconName: "ShieldCheck"
  },
  {
    id: "ben-5",
    title: "Lifestyle Transformation",
    description: "Create automatic default routines that help you feel deeply healthy, mentally centered, and in total control of your body.",
    iconName: "Smile"
  }
];

export const PLANS: Plan[] = [
  {
    id: "plan-3m",
    duration: "3 Months Coaching",
    investment: "₹6,000",
    originalPrice: "₹7,500",
    bestFor: "Building consistency & sustainable habits",
    features: [
      "Custom Gym / Home Workout Blueprint",
      "Realistic & Sustainable Calorie/Macro Guides",
      "Weekly Metric Audits & Goal Calibration",
      "Direct WhatsApp Chat Access with Priya",
      "Exercise Video Form Correction & Technique Feedback",
      "Ideal for: Restarting or building stable routine foundations"
    ]
  },
  {
    id: "plan-6m",
    duration: "6 Months Coaching",
    investment: "₹10,000",
    originalPrice: "₹12,800",
    bestFor: "Deeper transformation & strength progress",
    tag: "Most Popular",
    features: [
      "Custom Gym / Home Workout Blueprint",
      "Dynamic Nutritional Progression & Habit Mapping",
      "Bi-Weekly Interactive Metric Audits",
      "Priority Live Support & Troubleshooting",
      "Advanced Form Audits (Detailed Video Analysis)",
      "Ideal for: Busy professionals looking to drop solid fat & build strength"
    ]
  },
  {
    id: "plan-9m",
    duration: "9 Months Coaching",
    investment: "₹14,000",
    originalPrice: "₹17,500",
    bestFor: "Long-term body re-composition & discipline",
    features: [
      "Advanced Progressive Overload Periodization",
      "Holistic Metabolic Recovery Coaching",
      "Adaptive Goal Pivots (Fat Loss to Lean Gain)",
      "Direct Priority Support & Proactive Accountability",
      "Deep-dive Posture, Strength & Flexibility Audits",
      "Ideal for: True skeletal reconstruction, body framing, & mindset hardening"
    ]
  },
  {
    id: "plan-12m",
    duration: "12 Months Coaching",
    investment: "₹18,000",
    originalPrice: "₹24,000",
    bestFor: "Complete lifestyle & wellness transformation",
    tag: "Best Value",
    features: [
      "Full 365-Day Progressive Wellness Roadmap",
      "Elite Nutritional Behavioral Transformation Training",
      "Ongoing Metabolic Re-Conditioning",
      "Premium Direct Coaching Inclusions & Lifetime Habits",
      "Full Self-Sufficiency Training (Learn to Coach Yourself)",
      "Ideal for: Full body scale replacement & bulletproof routine development"
    ]
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "I am a busy professional. Would this work for me?",
    answer: "Absolutely. This program is specifically designed for individuals balancing demanding work schedules, endless meetings, travel obligations, and personal responsibilities. We construct this with complete flexibility in mind.",
    highlights: [
      "Highly flexible workout structures (30-45 mins)",
      "Time-efficient training blueprints that accommodate late meetings or travel",
      "Sustainable, straightforward nutritional habits requiring minimal prep time",
      "Realistic routines designed to adapt to, rather than fight, your schedule"
    ]
  },
  {
    question: "I am a new mother. Would this work for me?",
    answer: "Yes. The program is designed to support women through different phases of life, including postpartum recovery and safely rebuilding operational core strength and kinetic stability after pregnancy.",
    highlights: [
      "Completely safe and gradual progression matching your current recovery curve",
      "Rebuilding structural core strength, back support, and overall physical vitality",
      "Stress-free, sustainable nutritional habits that respect lactation or energy needs",
      "Flexible, short workout structures that easily fit around erratic baby routines"
    ]
  },
  {
    question: "I have no background or experience in workouts. Is it beginner friendly?",
    answer: "Definitely. You do not need a single ounce of prior fitness or lifting experience to start. Priya focuses on making physical competence approachable, clear, and highly empowering.",
    highlights: [
      "Crystal-clear video guides showcasing flawless mechanical execution",
      "Step-by-step weight and complexity ramp-ups that make sense",
      "Zero-judgment, feedback-focused space where form comes first",
      "Empathetic coaching designed to build structural physical self-esteem"
    ]
  },
  {
    question: "I do not have access to a gym. Would this work for me?",
    answer: "Yes. Every single routine can be custom tailored corresponding to the environment and gear you have within reach.",
    highlights: [
      "Robust programs for training from home, living rooms, or hotels",
      "Minimal gear setups utilizing simple resistance bands, handles, or pairs of dumbbells",
      "Complete gym access progression models if and when you choose to join a facility",
      "Structured proof that consistent kinetic tension matters far more than fancy machines"
    ]
  }
];

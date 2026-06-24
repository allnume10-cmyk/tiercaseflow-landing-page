import {
  CONTACT_US_EMAIL,
  CONTACT_US_MAILTO,
  CONTACT_US_PHONE,
  FOUNDING_MEMBER_APPLY_FORM_URL,
  ONBOARDING_FORM_URL,
  PRIVACY_POLICY_URL,
  SCHEDULE_DEMO_URL,
  SITE_URL,
} from '../config/site'

export type FaqItem = {
  id: string
  question: string
  answer: string
}

export type FaqCategory = {
  id: string
  title: string
  items: FaqItem[]
}

/** Shown on pricing-related answers. */
export const PRICING_DISCLAIMER =
  'Pricing on our website is subject to change. Final amounts for Access Only, Operational Advisory & Support, and onboarding depend on your plan, caseload, and scope of support. See the [Pricing](/#pricing) section on the home page or contact us for current details.'

/** Shown on security-related answers. */
export const SECURITY_DISCLAIMER =
  'TIER CaseFlow uses industry-standard cloud practices and access controls, but no system can guarantee absolute security. Your organization remains responsible for account hygiene, device security, and compliance with applicable rules.'

/** Plain text for SEO JSON-LD (strips [label](url) to "label"). */
export function faqAnswerPlainText(answer: string): string {
  return answer.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
}

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    items: [
      {
        id: 'learn-new-system',
        question: 'Will I have to learn a new system?',
        answer:
          "The goal isn't to change what you do ? it's to organize how you already work.",
      },
      {
        id: 'new-investigators',
        question: 'Will this work for new investigators?',
        answer:
          'Absolutely. It actually helps new investigators build organized habits early instead of trying to piece systems together later.',
      },
      {
        id: 'mobile-access',
        question: 'Can I access this from my phone?',
        answer: 'Yes ? the system can be accessed from mobile devices.',
      },
      {
        id: 'setup-time',
        question: 'How long does setup take?',
        answer:
          'That depends on the size of your caseload and whether onboarding assistance is needed.',
      },
      {
        id: 'how-sign-up',
        question: 'How do I sign up?',
        answer: `Visit [tiercaseflow.com](${SITE_URL}) and select the option that best fits your needs.`,
      },
    ],
  },
  {
    id: 'onboarding-setup',
    title: 'Onboarding & Setup',
    items: [
      {
        id: 'import-duration',
        question: 'How long would it take to import my cases?',
        answer:
          "That really depends on the number of cases and how your information is currently stored ? whether it's spreadsheets, emails, handwritten notes, or another system.",
      },
      {
        id: 'transfer-cases',
        question: 'Do I have to transfer my cases myself?',
        answer:
          "No ? onboarding assistance is available if you'd like help getting your cases into the system.",
      },
      {
        id: 'onboarding-cost',
        question: 'How much does onboarding cost?',
        answer: `That depends on your case inventory and how the information is currently stored. Once you submit an [onboarding request](${ONBOARDING_FORM_URL}), we'll review your information and follow up with pricing and next steps. ${PRICING_DISCLAIMER}`,
      },
      {
        id: 'training',
        question: 'Is training provided?',
        answer:
          "Yes. We're currently building out video tutorials, and in the meantime we'll provide live walkthrough sessions to help users get comfortable with the system.",
      },
    ],
  },
  {
    id: 'pricing-support',
    title: 'Pricing & Support',
    items: [
      {
        id: 'how-much-cost',
        question: 'How much does it cost?',
        answer: `System access is $75 per month. Onboarding or Operational Advisory & Support is an additional cost and customized based on your caseload and level of support needed. ${PRICING_DISCLAIMER}`,
      },
      {
        id: 'system-only',
        question: 'What if I only want the system and not support?',
        answer:
          "That's completely fine ? many investigators may only need system access to help organize their workflow.",
      },
      {
        id: 'access-only-vs-advisory',
        question: 'What is the difference between Access Only and Operational Advisory & Support?',
        answer:
          'Access Only provides system access for investigators who prefer to manage their own workflow. Operational Advisory & Support includes system access plus ongoing operational support, workflow oversight, reporting assistance, voucher monitoring, and case management guidance.',
      },
      {
        id: 'access-only-included',
        question: 'Is the monthly Access Only subscription included with Operational Advisory & Support?',
        answer:
          'Yes. Operational Advisory & Support includes full access to TIER CaseFlow during the period you are receiving support services. You are not charged a separate Access Only subscription while enrolled in the support program.',
      },
      {
        id: 'leave-advisory',
        question: 'What happens if I no longer need Operational Advisory & Support?',
        answer:
          'You may discontinue support services at any time and continue using TIER CaseFlow through the Access Only subscription option.',
      },
      {
        id: 'full-case-management',
        question: 'What is included in Full Case Management Oversight?',
        answer:
          'Full Case Management Oversight provides ongoing operational support to help investigators maintain visibility across active cases. Services may include updating court dates and events, monitoring case status, maintaining judge information, moving cases through workflow stages, monitoring voucher activity, updating payment status, and assisting with case closure and archival activities.',
      },
      {
        id: 'features-later',
        question: 'Can features be added later?',
        answer:
          "Yes ? there's actually a built-in feature request section where users can submit suggestions and enhancements.",
      },
    ],
  },
  {
    id: 'founding-members',
    title: 'Founding Members Program',
    items: [
      {
        id: 'what-is-founding',
        question: 'What is the Founding Members Program?',
        answer:
          'The Founding Members Program is a limited opportunity for ten investigators to receive enhanced onboarding benefits, three months of advisory support, direct founder access, and the opportunity to help shape future platform enhancements.',
      },
      {
        id: 'founding-available',
        question: 'Is the Founding Members Program available to everyone?',
        answer:
          'No. The program is limited to ten investigators to ensure each participant receives personalized onboarding and support.',
      },
      {
        id: 'founding-selected',
        question: 'How are Founding Members selected?',
        answer: `Founding Membership is limited to ten investigators and is offered on a first-come, first-served basis. Interested investigators complete a short [Discovery Form](${FOUNDING_MEMBER_APPLY_FORM_URL}), followed by a discovery call to discuss workflow needs, onboarding requirements, and next steps while positions remain available.`,
      },
      {
        id: 'founding-guaranteed',
        question: 'Am I guaranteed a Founding Member spot if I complete the Discovery Form?',
        answer:
          'Completing the Discovery Form does not reserve a spot. Founding Membership is limited to ten investigators and enrollment is offered on a first-come, first-served basis while positions remain available.',
      },
    ],
  },
  {
    id: 'security-data',
    title: 'Security & Data',
    items: [
      {
        id: 'security-measures',
        question: 'Are there security measures in place?',
        answer: `Yes. The system operates in a secure cloud environment with controlled access and encryption protecting sensitive information. Users only have access to their assigned work, communications are routed securely, and the system includes protections such as automatic session timeouts and audit tracking. ${SECURITY_DISCLAIMER} See our [Privacy Policy](${PRIVACY_POLICY_URL}) for more detail.`,
      },
      {
        id: 'export-data',
        question: 'Can I export my information?',
        answer:
          'Yes. The system includes options to export and back up your information in multiple formats.',
      },
    ],
  },
  {
    id: 'features-workflow',
    title: 'Features & Workflow',
    items: [
      {
        id: 'multiple-investigators',
        question: 'Can multiple people work in the same case?',
        answer:
          'Not at this time. Multiple-investigator case support is planned for a future release.',
      },
      {
        id: 'replacing-email',
        question: 'Is TIER CaseFlow replacing email?',
        answer:
          'Not necessarily. TIER CaseFlow includes a Communication Hub that allows communications to be logged and associated with the appropriate case, creating a centralized record of case-related activity. Investigators may choose to use the Communication Hub, continue using their existing email service, or use a combination of both depending on their workflow preferences.',
      },
    ],
  },
  {
    id: 'contact-assistance',
    title: 'Contact & Assistance',
    items: [
      {
        id: 'contact-questions',
        question: 'How do we contact you if we have questions?',
        answer: `Email [${CONTACT_US_EMAIL}](${CONTACT_US_MAILTO}) or call ${CONTACT_US_PHONE} (Mon?Fri, 8:00am?5:00pm ET). You can also [schedule a demo](${SCHEDULE_DEMO_URL}) from the website.`,
      },
    ],
  },
]

import {
  APP_URL,
  CALENDLY_URL,
  CONTACT_US_EMAIL,
  CONTACT_US_MAILTO,
  CONTACT_US_PHONE,
  PRIVACY_POLICY_URL,
  REFUND_POLICY_URL,
  SITE_URL,
  TERMS_URL,
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
  'Pricing on our website is subject to change. Final amounts for Starter, Pro, and onboarding depend on your plan, caseload, and scope of support. See the [Pricing](/#pricing) section on the home page or contact us for current details.'

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
        id: 'who-is-it-for',
        question: 'Who is TIER CaseFlow built for?',
        answer:
          'TIER CaseFlow is built for criminal defense investigators and the firms or offices that support themùespecially CJA and court-appointed workflows. Solo investigators, small teams, and firms with administrators who assign cases and monitor workload all use the same platform with role-appropriate views.',
      },
      {
        id: 'learn-new-system',
        question: 'Will I have to learn a new system?',
        answer:
          'The goal is not to change how you investigateùit is to organize how you already work. Most users start with cases, activity logs, and reports they already track today, just in one place.',
      },
      {
        id: 'new-investigators',
        question: 'Will this work for new investigators?',
        answer:
          'Yes. TIER CaseFlow helps new investigators build organized habits early instead of piecing together spreadsheets, email, and notes later.',
      },
      {
        id: 'demo-vs-starter',
        question: 'What is the difference between a demo and signing up for Starter?',
        answer: `A demo is a live walkthrough with our team so you can see whether the platform fits your workflowù[schedule a demo](${CALENDLY_URL}) or visit [tiercaseflow.com](${SITE_URL}). Starter is a paid subscription that gives you your own account at [app.tiercaseflow.com](${APP_URL}) so you can enter cases, log activity, and run reports on your real work.`,
      },
      {
        id: 'install-required',
        question: 'Do I need to install anything?',
        answer: `No download is required. TIER CaseFlow runs in your web browser. Sign in at [app.tiercaseflow.com](${APP_URL}) from a desktop or mobile device with an internet connection.`,
      },
      {
        id: 'supported-browsers',
        question: 'Which browsers work best?',
        answer:
          'Use a current version of Chrome, Microsoft Edge, or Safari for the best experience. Desktop browsers are recommended for bulk data entry, Report Hub, and exports. Mobile works well for quick lookups and light updates.',
      },
      {
        id: 'mobile-access',
        question: 'Can I access this from my phone?',
        answer:
          'Yes. You can sign in from mobile devices and tablets. For heavy data entry, a desktop browser is still recommended.',
      },
      {
        id: 'setup-time',
        question: 'How long does setup take?',
        answer:
          'That depends on your caseload and whether you want onboarding assistance. Self-service Starter users can begin quickly; larger imports or Pro onboarding are scoped individually.',
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
          'It depends on how many cases you have and how your information is stored todayùspreadsheets, email, handwritten notes, or another system. We can scope timing after we understand your sources.',
      },
      {
        id: 'spreadsheet-import',
        question: 'Can I import cases from a spreadsheet?',
        answer:
          'Yes. Firms and investigators can use bulk intake with a CSV or Excel template from the Intake Folder to load many cases at once. For large or messy source files, onboarding assistance can help map and validate data before go-live.',
      },
      {
        id: 'transfer-cases',
        question: 'Do I have to transfer my cases myself?',
        answer:
          'No. Onboarding assistance is available if you want help loading cases into the system. You can also use bulk import tools where they fit your workflow.',
      },
      {
        id: 'onboarding-info-needed',
        question: 'What information should I have ready for onboarding?',
        answer: `Helpful items include an active case list (case numbers, defendant names, status), assigned attorneys, key dates (court, assignment), voucher status where known, and any spreadsheets or exports you already maintain. Complete the [onboarding questionnaire](${SITE_URL}/#onboarding) on our website so we can scope your project.`,
      },
      {
        id: 'admin-multiple-investigators',
        question: 'Can an admin manage multiple investigators?',
        answer:
          'Yes. Administrator accounts can assign cases, view firm-wide workload and reports, run attachment audit reviews, and use investigator scope filters on Mission Control and Report Hub. Investigators typically see only their assigned casework unless your firm configures broader access.',
      },
      {
        id: 'onboarding-cost',
        question: 'How much does onboarding cost?',
        answer: `That depends on your case inventory and how your data is stored. After you complete the onboarding questionnaire, we review everything and follow up with pricing and next steps. ${PRICING_DISCLAIMER}`,
      },
      {
        id: 'back-office-support',
        question: 'What does back-office support include?',
        answer:
          'It depends on the level of support you needùfor example workflow monitoring, reporting, voucher tracking, and helping keep cases moving. The Pro questionnaire helps us tailor advisory support appropriately.',
      },
      {
        id: 'training',
        question: 'Is training provided?',
        answer:
          'Yes. Video tutorials are being expanded, and live walkthrough sessions are available to help your team get comfortable with the platform.',
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
        answer: `Starter system access is $75 per month on our public [Pricing](/#pricing) page. Pro includes hands-on advisory and support in one arrangement. Onboarding and back-office projects are customized by caseload and data sources (many projects fall in the $250ù$750 range). ${PRICING_DISCLAIMER}`,
      },
      {
        id: 'starter-vs-pro',
        question: 'What is the difference between Starter and Pro?',
        answer: `Starter is software access: case management, activity logging, Voucher Hub, Report Hub, exports, and standard support channels. Pro includes everything in Starter plus hands-on advisory and back-office support scoped to your firm (workflow monitoring, reporting help, voucher follow-up, and similar services). Pro pricing is quoted individually; Starter is available via checkout on [tiercaseflow.com](${SITE_URL}). ${PRICING_DISCLAIMER}`,
      },
      {
        id: 'how-sign-up',
        question: 'How do I sign up?',
        answer: `Visit [tiercaseflow.com](${SITE_URL}), review [Pricing](/#pricing), and choose Starter checkout or request a Pro quote. You can also [schedule a demo](${CALENDLY_URL}) if you want a walkthrough first.`,
      },
      {
        id: 'system-only',
        question: 'What if I only want the system and not support?',
        answer:
          'That is fine. Many investigators use Starter for system access only to organize casework without Pro advisory services.',
      },
      {
        id: 'cancel-anytime',
        question: 'Can I cancel anytime?',
        answer: `Starter is designed as a monthly subscription you can manage through your checkout provider. Cancellation terms, refunds, and any grace periods are described in our [Refund Policy](${REFUND_POLICY_URL}). ${PRICING_DISCLAIMER}`,
      },
      {
        id: 'contract-commitment',
        question: 'Is there a contract or long-term commitment?',
        answer: `Starter is typically month-to-month unless otherwise stated at checkout. Pro and onboarding engagements are scoped in writing based on your quote or agreement. ${PRICING_DISCLAIMER}`,
      },
      {
        id: 'support-starter-vs-pro',
        question: 'What support is included with Starter vs. Pro?',
        answer: `Starter includes standard product support by email at [${CONTACT_US_EMAIL}](${CONTACT_US_MAILTO}) during business hours (MonùFri, ET) for account and how-to questions. Pro adds agreed advisory and operational supportùsuch as workflow check-ins, report preparation help, and voucher tracking assistanceùbased on your signed scope. Neither plan is a 24/7 emergency hotline unless separately agreed in writing.`,
      },
      {
        id: 'features-later',
        question: 'Can features be added later?',
        answer:
          'Yes. The product evolves based on firm needs, and users can submit suggestions through in-app feature request flows where available.',
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
        answer: `Yes. TIER CaseFlow operates in a secure cloud environment with controlled access and encryption for sensitive information. Users typically see only their assigned work; communications are routed securely; and the platform includes protections such as session timeouts and audit tracking where enabled. ${SECURITY_DISCLAIMER} See our [Privacy Policy](${PRIVACY_POLICY_URL}) for more detail.`,
      },
      {
        id: 'data-ownership',
        question: 'Who owns my case data?',
        answer: `Your firm or organization retains ownership of the case content you enter. TIER provides the software platform and processes data to operate the service as described in our [Terms & Conditions](${TERMS_URL}) and [Privacy Policy](${PRIVACY_POLICY_URL}). You are responsible for the accuracy of what you enter and for using the system in compliance with court rules and applicable law.`,
      },
      {
        id: 'where-stored',
        question: 'Where is data stored?',
        answer: `Application data is hosted with established U.S. cloud providers (including Supabase for database and authentication services and Vercel for the web application). ${SECURITY_DISCLAIMER} Specific subprocessors and practices are summarized in our [Privacy Policy](${PRIVACY_POLICY_URL}).`,
      },
      {
        id: 'export-data',
        question: 'Can I export my information?',
        answer:
          'Yes. Investigators can export and back up their assigned case and task data in supported formats from System Settings (for example JSON and CSV exports, depending on role and scope).',
      },
      {
        id: 'data-after-cancel',
        question: 'Can I get my data out if I leave?',
        answer: `Export your assigned data from System Settings before or when you wind down service. After cancellation, access to the live account ends per your subscription terms; retention of copies you exported is your responsibility. Our [Refund Policy](${REFUND_POLICY_URL}) and [Terms & Conditions](${TERMS_URL}) describe billing and service termination. ${SECURITY_DISCLAIMER}`,
      },
      {
        id: 'who-can-see',
        question: 'Who can see my cases?',
        answer: `Visibility depends on role. Investigators see cases assigned to them. Administrators configured for your firm can see broader caseload and operational reports. Attorney-facing communications and reports go only to the recipients you choose. ${SECURITY_DISCLAIMER} Your firm controls account provisioning and should disable access when someone leaves the organization.`,
      },
    ],
  },
  {
    id: 'features-workflow',
    title: 'Features & Workflow',
    items: [
      {
        id: 'voucher-tracking',
        question: 'How does voucher tracking work?',
        answer:
          'Voucher Hub shows voucher status by segment (for example missing, submitted, or paid) so you can see which cases need attention. You update status in the case jacket as work progresses. TIER CaseFlow does not replace the federal or local CJA voucher systemùit helps you stay organized so fewer billable items are overlooked.',
      },
      {
        id: 'voucher-reports',
        question: 'Does the system submit vouchers for me?',
        answer:
          'No. Report Hub tools can help you prepare date, hours, and description lines (including optional AI-suggested wording you must review) for copy into your external, password-protected voucher system. Submission stays in your existing CJA process.',
      },
      {
        id: 'ai-assist',
        question: 'Does AI write my reports or vouchers for me?',
        answer:
          'No. Where AI is offered (for example suggested voucher narrative wording), it produces assistive text only. You must review and edit every line before copying into your official voucher or report systems. AI output may be incomplete or unsuitable for a given matterùyou remain responsible for what you submit.',
      },
      {
        id: 'reports-to-attorneys',
        question: 'Can I send reports to attorneys from the app?',
        answer:
          'Yes. Report Hub includes reports such as Weekly Status and Aged Voucher Audit that you can generate, preview, edit, and send by email to counsel from within the app (subject to your firmùs email and reply-routing settings). A sent-reports log helps you track recent deliveries.',
      },
      {
        id: 'attorney-communication',
        question: 'How do attorneys and investigators communicate?',
        answer:
          'The Communication Hub helps match inbound attorney messages to cases and keep correspondence tied to the matter. Investigators can configure reply routing from My Profile (for example TierCaseFlow inbox only, personal/firm email, or both). Email is not replacedùit is organized alongside case context.',
      },
      {
        id: 'court-dates-deadlines',
        question: 'Does the system track court dates and deadlines?',
        answer:
          'Yes. Case records support court dates and next events; Mission Control and investigative tasks highlight what is due or stagnant. Report Hub can summarize open matters with court and voucher context for operational review.',
      },
      {
        id: 'activity-codes',
        question: 'What are activity codes and why do they matter?',
        answer:
          'Activity codes categorize investigative work on a case (for example surveillance, records, or case management). They drive consistent activity-log entries, help with reporting, and support voucher preparation when you build date, hours, and description lines. Your firm may standardize codes and default narratives for efficiency.',
      },
      {
        id: 'multiple-attorneys',
        question: 'Can I work with more than one attorney?',
        answer:
          'Yes. Cases are tied to attorneys in the system, and you can filter Report Hub and operational views by attorney or run global reports when your role allows. Each matter stays in its own case file with its own activity history.',
      },
      {
        id: 'multiple-investigators',
        question: 'Can multiple people work on the same case?',
        answer:
          'Case assignment rules depend on your firm setup. At this time, two investigators are not assigned to the same case simultaneously in the standard workflow.',
      },
      {
        id: 'replacing-email',
        question: 'Is this replacing email?',
        answer:
          'No. TIER CaseFlow helps organize case-related work and keep context with the matter instead of scattered across inboxes and notes.',
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
        answer: `Email [${CONTACT_US_EMAIL}](${CONTACT_US_MAILTO}), call ${CONTACT_US_PHONE} (MonùFri, ET), or [schedule a demo](${CALENDLY_URL}) from the website. We respond as quickly as possible during business hours.`,
      },
      {
        id: 'support-response-time',
        question: 'How fast do you respond to support requests?',
        answer: `We aim to respond to email at [${CONTACT_US_EMAIL}](${CONTACT_US_MAILTO}) within one business day for standard questions (MonùFri, ET). Complex onboarding or Pro matters may take longer while we review your materials. For urgent production issues, include "urgent" in the subject line and we will prioritize when possibleùthis is best-effort support, not a guaranteed SLA.`,
      },
      {
        id: 'status-page',
        question: 'Is there a status page if the app is down?',
        answer: `When we are aware of a service-impacting issue, we may publish a banner on [tiercaseflow.com](${SITE_URL}) and [app.tiercaseflow.com](${APP_URL}). For account-specific problems (login, one case, export), email [${CONTACT_US_EMAIL}](${CONTACT_US_MAILTO}) with screenshots and steps to reproduce so we can help directly.`,
      },
    ],
  },
]

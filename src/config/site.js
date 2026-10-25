/**
 * Stack & Automation - Site Configuration
 * 
 * ----------------------------------------------------------------------------
 * HOW TO CONFIGURE YOUR WHATSAPP NUMBER:
 * 1. Replace the empty string below with your official business phone number.
 * 2. Format: International country code followed by number with NO '+', NO spaces, NO dashes.
 *    Example for India (+91 98765 43210): "919876543210"
 *    Example for US (+1 555 123 4567): "15551234567"
 * 3. Save this file and rebuild/deploy.
 * 
 * If left empty (""), the website will safely inform the visitor that the
 * WhatsApp link is in setup mode and provide an easy one-click copy of their
 * formatted project brief so no enquiries are ever lost!
 * ----------------------------------------------------------------------------
 */
export const SITE_CONFIG = {
  brand: {
    name: 'Stack & Automation',
    tagline: 'Build What’s Next.',
    instagram: '@stackandautomation',
    instagramUrl: 'https://www.instagram.com/stackandautomation/',
    logoPath: '/images/stack-automation-logo.png',
    symbolPath: '/images/stack-automation-symbol.png'
  },

  // WhatsApp Configuration (DO NOT INVENT: user must specify their real number)
  whatsapp: {
    // Leave empty by default until configured by the business owner
    phoneNumber: '919277409566',
    defaultGreeting: 'Hello Stack & Automation team, I would like to discuss a project.'
  },

  services: [
    {
      id: 'website-development',
      name: 'Website Development',
      badge: 'Core Experience',
      tagline: 'High-performance digital presence',
      description: 'Modern business websites, landing pages, and conversion-focused web experiences engineered for speed, responsiveness, and clear brand positioning.',
      deliverables: ['Custom Responsive Web Design', 'High-Speed Static / Dynamic Architecture', 'Conversion-Optimized UX', 'SEO & Performance Best Practices']
    },
    {
      id: 'ai-chatbots-agents',
      name: 'AI Chatbots & Agents',
      badge: 'Intelligent Systems',
      tagline: '24/7 client engagement & triage',
      description: 'Business enquiry assistants, customer support chatbots, and task-oriented AI solutions tailored to qualify leads and answer repetitive questions accurately.',
      deliverables: ['Context-Aware Knowledge Base', 'Lead Capture & WhatsApp/CRM Handoff', 'Custom Prompt Engineering', 'Multi-turn Conversational Flows']
    },
    {
      id: 'business-automation',
      name: 'Business Process Automation',
      badge: 'Operations',
      tagline: 'Eliminate manual friction',
      description: 'Streamline repetitive tasks, lead handling, and operational workflows across your business tools so your team can focus on high-value work.',
      deliverables: ['Automated Lead Routing & Notifications', 'Document & Invoice Processing', 'Data Synchronization', 'Error Handling & Monitoring']
    },
    {
      id: 'meta-ads-marketing',
      name: 'Meta Ads & Digital Marketing',
      badge: 'Growth Support',
      tagline: 'Targeted acquisition pipelines',
      description: 'Campaign setup, creative support, and marketing workflow assistance structured to drive qualified inquiries to your website and WhatsApp.',
      deliverables: ['Campaign Structure & Pixel Setup', 'Ad Creative & Copy Assistance', 'Funnel & Landing Page Alignment', 'Performance Tracking & Retargeting']
    },
    {
      id: 'custom-software',
      name: 'Custom Software & Internal Tools',
      badge: 'Bespoke Engineering',
      tagline: 'Built specifically for your team',
      description: 'Purpose-built dashboards and lightweight business applications that solve specific operational bottlenecks off-the-shelf software cannot address.',
      deliverables: ['Role-Based Portals & Dashboards', 'Admin Panels & Inventory Trackers', 'Secure Data Storage & Exports', 'Intuitive, Clean Interfaces']
    },
    {
      id: 'api-integrations',
      name: 'API Integrations & Workflow Systems',
      badge: 'Connectivity',
      tagline: 'Unify your software stack',
      description: 'Connect third-party tools, payment gateways, messaging services, and databases to create dependable workflows that reduce manual data re-entry.',
      deliverables: ['CRM, Email & Webhook Sync', 'Payment Gateway & Stripe/Razorpay Flows', 'Custom Webhooks & Endpoints', 'Reliable Retry & Audit Logs']
    },
    {
      id: 'custom-requirement',
      name: 'Something Else? / Custom Project',
      badge: 'Custom Scope',
      tagline: 'Tailored technology consultation',
      description: 'Have a unique challenge, hybrid tech requirement, or an innovative product concept? Share your ideas and let’s explore the ideal architecture.',
      deliverables: ['Technical Feasibility Assessment', 'Custom Architecture Design', 'Milestone-Based Delivery', 'Direct Founder Consultation']
    }
  ],

  featuredWork: {
    title: 'MediBot AI Dental Chatbot',
    badge: 'Live Production Demo',
    tagline: 'AI-assisted patient enquiry & clinic triage',
    description: 'An AI-assisted dental enquiry experience designed to help visitors get relevant information and understand the next steps for clinic appointments.',
    liveUrl: 'https://pimedi-bot.onrender.com/',
    highlights: [
      'Interactive conversational dental clinic assistant',
      'Provides preliminary answers and booking guidance',
      'Deployed on high-reliability cloud infrastructure'
    ]
  },

  processSteps: [
    {
      number: '01',
      title: 'Tell Us Your Idea',
      description: 'Explain your business challenge, required features, or the operational bottleneck you want solved through web, AI, or automation.'
    },
    {
      number: '02',
      title: 'Define the Scope',
      description: 'We discuss requirements, priorities, budget, and realistic timelines, outlining clear deliverables without vague promises.'
    },
    {
      number: '03',
      title: 'Build & Review',
      description: 'We develop the agreed solution in structured phases, providing milestone updates and preview demos so you can review real progress.'
    },
    {
      number: '04',
      title: 'Launch & Handover',
      description: 'We test thoroughly, deploy to your preferred environment, and provide a comprehensive handover with documentation and guidance.'
    }
  ],

  faqs: [
    {
      question: 'What services do you offer?',
      answer: 'Stack & Automation builds modern business websites, custom AI chatbots and enquiry assistants, business process automations, Meta advertising workflows, bespoke internal software/dashboards, and third-party API integrations.'
    },
    {
      question: 'Can you build a custom solution?',
      answer: 'Yes. Every business has distinct workflows. We design and develop custom web applications, workflow automations, and AI tools specifically around your existing tech stack and business objectives.'
    },
    {
      question: 'Do you work with international clients?',
      answer: 'Yes, we collaborate with founders, clinic owners, and business operators across India and internationally. All communication, scoping, reviews, and project updates are conducted smoothly online via WhatsApp, email, and scheduled video sessions.'
    },
    {
      question: 'How is project pricing decided?',
      answer: 'Pricing depends entirely on project scope, functional complexity, integrations needed, and delivery timelines. After understanding your requirements during the initial consultation, we provide a transparent, milestone-based proposal without hidden fees.'
    },
    {
      question: 'How long does a project take?',
      answer: 'Timelines vary by scope. A focused landing page or business website typically takes 1–3 weeks, while custom AI agents or multi-system workflow automations may take 2–6 weeks. Specific milestone dates are agreed upon before kick-off.'
    },
    {
      question: 'How do I start a project?',
      answer: 'Select your required service or click "Start a Project" anywhere on this page. Complete the brief form with your requirements and click "Send via WhatsApp". We will review your brief and discuss the next steps promptly.'
    }
  ],

  budgets: [
    { value: 'not-sure', label: 'Not sure yet (Need recommendation)' },
    { value: 'under-1k', label: 'Under $1,000 / Under ₹80,000' },
    { value: '1k-3k', label: '$1,000 – $3,000 / ₹80,000 – ₹2,50,000' },
    { value: '3k-7k', label: '$3,000 – $7,000 / ₹2,50,000 – ₹6,00,000' },
    { value: '7k-plus', label: '$7,000+ / ₹6,00,000+' },
    { value: 'custom', label: 'Custom budget (Specified in details)' }
  ],

  timelines: [
    { value: 'asap', label: 'As soon as possible' },
    { value: '1-2-weeks', label: 'Within 1–2 weeks' },
    { value: '1-month', label: 'Within a month' },
    { value: 'flexible', label: 'Flexible / not decided' }
  ]
};

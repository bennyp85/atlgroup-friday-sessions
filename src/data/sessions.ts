// ATLGroup session archive — Mount Street Neighbourhood House
// Privacy rule: only lessons learned are published here. Personal stories,
// names, and anything that could embarrass a member stay out.

export type SessionStatus = 'recap' | 'planned' | 'awaiting-recap'

export interface WalkthroughStep {
  title: string
  detail: string
}

export interface Walkthrough {
  title: string
  intro?: string
  steps: WalkthroughStep[]
}

export interface Lesson {
  title: string
  text: string
}

export interface Resource {
  label: string
  url: string
  kind: 'pdf' | 'slides' | 'doc' | 'folder' | 'link'
}

export interface Session {
  id: string
  term: string
  week: number
  dateLabel: string
  title: string
  tagline: string
  topics: string[]
  discussion?: string[]
  faq?: { q: string; a: string }[]
  walkthroughs: Walkthrough[]
  lessons: Lesson[]
  resources: Resource[]
  status: SessionStatus
  highlight?: boolean
}

export const TERMS = ['Term 4 2026', 'Term 3 2026'] as const

const DRIVE = {
  groupFolder:
    'https://drive.google.com/drive/folders/1lhDIdKHuyCf67-QvFmAqGK1RobGzUrp-',
  week4Agenda:
    'https://drive.google.com/file/d/1saP2NuzReLJu5_1abQjRoCFcA9X73T7h/view',
  googleDriveDemo:
    'https://drive.google.com/file/d/1qxyYzBw0hAzYWN_U1i4PBvN-ic6IRu37/view',
  term4Program:
    'https://drive.google.com/file/d/1HWWxuxfexZ85VAvgaIleYb0zljNEeykb/view',
  term4Outline:
    'https://drive.google.com/file/d/1tlPeJ0sXHU7meVnA3Tpy5W_wvsgAIaM0/view',
  pointOfIT:
    'https://drive.google.com/file/d/1s3C8eyqTD06erHuvz5hvoX_9Hwss1Js5/view',
  whatIsAISlides:
    'https://docs.google.com/presentation/d/15KFwJD13bgEG3ZM-pQAV3QkGcviahIT4Q4GCksV_9wY/edit',
  aiToolsSlides:
    'https://docs.google.com/presentation/d/1Q2S3MCtip5qZS-PilWvVKwK3AC7mr6HplVp-djzijBs/edit',
}

export const sessions: Session[] = [
  {
    id: 't4w2',
    term: 'Term 4 2026',
    week: 2,
    dateLabel: 'Friday 16 October 2026',
    title: 'What Is the Point of Information Technology?',
    tagline:
      'Our big idea for the term: IT is about creating, processing, storing and transmitting information — and we prove it with one grand Google Drive exercise.',
    topics: [
      'What information technology actually means',
      'The four jobs of IT: create, process, store, transmit',
      'A full Google Drive workout: from download to share',
      'Wrap-up discussion: how one file touches all four jobs',
    ],
    discussion: [
      'Where does a file "live" when we say it is in the cloud?',
      'What is the difference between storing and transmitting?',
      'When would you share a file by email, and when by link?',
    ],
    walkthroughs: [
      {
        title: 'The Great Google Drive Workout',
        intro:
          'Follow these steps on the session laptop or your own device. Take it slowly — there is no rush, and celebrating at the end is a required step!',
        steps: [
          { title: 'Download a file', detail: 'Save any file from the internet. It usually lands in your Downloads folder.' },
          { title: 'Find it in Downloads', detail: 'Open the Files app and look in Downloads so you know where things go.' },
          { title: 'Move it into the ATLGroup folder', detail: 'In Google Drive, move the file into our shared ATLGroup folder.' },
          { title: 'Create a new folder', detail: 'Make a brand-new folder inside the ATLGroup folder and give it a clear name.' },
          { title: 'Move the file again', detail: 'Move your downloaded file into the new folder.' },
          { title: 'Send it as an email attachment', detail: 'Compose an email and attach the file — that is transmitting.' },
          { title: 'Share it with a Drive link', detail: 'Right-click the file, choose Share, and copy a link for a friend.' },
          { title: 'Delete the file', detail: 'Move the file to the Trash.' },
          { title: 'Empty the Trash', detail: 'Go into Trash and empty it so the file is truly gone.' },
          { title: 'Celebrate!', detail: 'You just created, processed, stored and transmitted information. Well done!' },
        ],
      },
    ],
    lessons: [
      {
        title: 'One exercise, the whole of IT',
        text: 'Downloading, moving, attaching, sharing and deleting one small file touches every part of information technology. Nothing we do on a device is ever "just one thing".',
      },
    ],
    faq: [
      {
        q: 'If I delete it, is it gone forever?',
        a: 'It goes to the Trash first; that’s why step 9 (emptying the Trash) is separate — it gives you a safety net.',
      },
      {
        q: 'What’s the difference between attaching and a link?',
        a: 'An attachment sends a copy to one person; a link lets many people view the same original file.',
      },
      {
        q: 'Why do I need folders at all?',
        a: 'Same reason as a filing cabinet at home — so you can find things again.',
      },
    ],
    resources: [
      { label: 'Session handout: What is the Point of IT?', url: DRIVE.pointOfIT, kind: 'pdf' },
      { label: 'ATLGroup Google Drive folder', url: DRIVE.groupFolder, kind: 'folder' },
    ],
    status: 'planned',
    highlight: true,
  },
  {
    id: 't4w1',
    term: 'Term 4 2026',
    week: 1,
    dateLabel: 'Friday 9 October 2026',
    title: 'Welcome Back — Term 4 Kick-off',
    tagline: 'First session of Term 4. Recap to be added after the session notes are filed.',
    topics: [],
    walkthroughs: [],
    lessons: [],
    resources: [],
    status: 'awaiting-recap',
  },
  {
    id: 't3w4',
    term: 'Term 3 2026',
    week: 4,
    dateLabel: 'Friday 11 September 2026',
    title: 'Tech Then & Now — 25 Years of Change',
    tagline:
      'A look back from 2001 to 2026: how our daily technology, our connections, and even our health have been shaped by the digital age.',
    topics: [
      'Recap of Weeks 2 & 3, and follow-up questions',
      'Tech news and seniors news — the sites we trust',
      'Open discussion: how technology has changed over 25 years',
    ],
    discussion: [
      'Have we grown more comfortable using our devices?',
      'Do we feel we can solve our own — or help others with — Android issues?',
      'Are we more or less connected to friends, family and the community than 25 years ago?',
      'Have we seen an improvement in our health and well-being thanks to technology?',
    ],
    walkthroughs: [],
    lessons: [
      {
        title: 'Our news sources are worth sharing',
        text: 'Everyone has websites they trust. Swapping our favourites is one of the easiest ways the group helps each other stay informed.',
      },
    ],
    faq: [
      {
        q: 'Is it too late for me to get comfortable with all this?',
        a: 'Everyone in the group has felt that at some point. Comfort comes from repetition, not talent — that’s why we recap each week.',
      },
      {
        q: 'Are the websites I use every day keeping my details safe?',
        a: 'The big banks and government sites invest heavily in security. The weak point is usually a reused password or a scam message — which is exactly what we practise on Fridays.',
      },
      {
        q: 'Should I be worried about AI?',
        a: 'Like any tool, it helps or harms depending on how it’s used. Our AI sessions this term are about staying informed and in control.',
      },
    ],
    resources: [
      { label: 'Week 4 meeting agenda', url: DRIVE.week4Agenda, kind: 'pdf' },
    ],
    status: 'recap',
  },
  {
    id: 't3w3',
    term: 'Term 3 2026',
    week: 3,
    dateLabel: 'Friday 4 September 2026',
    title: 'Passwords, Cloud Storage & Shopping Safely',
    tagline:
      'From strong passwords to prepaid cards — how to lock down our accounts and keep our money safe online.',
    topics: [
      'What makes a strong password',
      'Password managers — and why a notebook is still okay',
      'Where our logins are saved (Google account settings)',
      'Cloud storage vs local storage (15 GB free from Google)',
      'The Brave browser: ads, blocking and built-in passwords',
      'Safe online purchases: separate accounts and prepaid cards',
      'Multi-factor authentication (MFA / 2FA)',
      'Why unsupported devices are a security risk',
    ],
    walkthroughs: [
      {
        title: 'Check which passwords Google has saved',
        intro: 'A quick audit so we know exactly what is stored on our device.',
        steps: [
          { title: 'Open Settings', detail: 'Tap the Settings app (the gear icon).' },
          { title: 'Tap Google', detail: 'Scroll down and tap Google, then Manage your Google Account.' },
          { title: 'Open the Security tab', detail: 'Swipe across to Security at the top.' },
          { title: 'Tap Password Manager', detail: 'Here is the full list. You can view, update or remove any saved password.' },
          { title: 'Remove anything old', detail: 'If you no longer use a site, delete its entry. Tidy is safe.' },
        ],
      },
      {
        title: 'Turn on 2-step verification',
        intro: 'One extra step at sign-in makes it dramatically harder for anyone else to get in.',
        steps: [
          { title: 'Go to your Google Account', detail: 'Settings → Google → Manage your Google Account.' },
          { title: 'Open Security', detail: 'Tap the Security tab, then 2-Step Verification.' },
          { title: 'Tap Get Started', detail: 'Follow the prompts and confirm it is really you.' },
          { title: 'Choose how to verify', detail: 'A text message code is the simplest. Google Authenticator is even stronger — we will demo it in a future session.' },
          { title: 'Test it', detail: 'Sign out and back in once so the extra step feels familiar, not frightening.' },
        ],
      },
    ],
    lessons: [
      {
        title: 'A strong password is a long password',
        text: 'A passphrase like "birdtreerose85$" mixes random words with numbers and symbols — a computer would need decades to guess it. Length beats cleverness.',
      },
      {
        title: 'Old devices stop receiving security updates',
        text: 'Once a phone or tablet is unsupported, new holes are never patched. Upgrading is not about having the latest toy — it is our first line of defence.',
      },
      {
        title: 'A physical notebook is not "wrong"',
        text: 'Some of us feel safer writing passwords in a notebook kept at home. That is a valid choice — the goal is strong, unique passwords, however you store them.',
      },
      {
        title: 'Separate the shopping money',
        text: 'Using a separate account — or a prepaid card from the supermarket — for online purchases means only ever risking small amounts.',
      },
    ],
    faq: [
      {
        q: 'What happens if I forget my one master password?',
        a: 'That’s the one password you must never lose — most of us keep it written down at home. Recovery is possible but slow, so a written copy in a safe place beats a simple password.',
      },
      {
        q: 'If I delete a photo from my phone, is it gone from the cloud too?',
        a: 'Usually yes — when backup is on, the phone and the cloud stay in sync, so deleting in one place deletes in both. Always check the bin before emptying it.',
      },
      {
        q: 'Is a text-message code good enough for 2FA?',
        a: 'Much better than no second step at all. It’s not perfect, which is why the Google Authenticator app is the stronger option — we’ll set it up together in a future session.',
      },
      {
        q: 'Why not just use one good password everywhere?',
        a: 'Because when one site has a leak — and sites do — every account with that password is at risk. Unique passwords contain the damage to one place.',
      },
    ],
    resources: [],
    status: 'recap',
  },
  {
    id: 't3w1',
    term: 'Term 3 2026',
    week: 1,
    dateLabel: 'Friday 21 August 2026',
    title: 'First Session: Our Devices & the Essentials',
    tagline:
      'Where it all began — the apps and services we rely on every day, from the weather to WhatsApp, and the ground rules that guide our group.',
    topics: [
      'Cloud drives — what they are and why they matter',
      'eBooks — reading on a tablet',
      'Scams — how to recognise them',
      'Google Maps — finding our way',
      'WhatsApp — staying in touch',
      'BOM weather app',
      'Banking apps',
      'Password managers & Google Authenticator',
    ],
    walkthroughs: [
      {
        title: 'Check the weather with the BOM app',
        intro: 'The Bureau of Meteorology app is free, ad-free and more accurate than most.',
        steps: [
          { title: 'Open the Play Store', detail: 'Tap the Play Store icon on your home screen.' },
          { title: 'Search for "BOM Weather"', detail: 'Look for the Bureau of Meteorology — the official one.' },
          { title: 'Install it', detail: 'Tap Install and wait a moment.' },
          { title: 'Open it and allow location', detail: 'The app shows your local forecast and radar straight away.' },
          { title: 'Try the radar', detail: 'Tap the map tab to see rain moving in real time. Great for planning a walk!' },
        ],
      },
      {
        title: 'The 30-second scam check',
        intro: 'Before tapping any link or opening any attachment, run this quick check.',
        steps: [
          { title: 'Who sent it?', detail: 'A message from an unknown number or address is the first warning sign.' },
          { title: 'Is it pushing urgency?', detail: '"Act now or lose access!" — pressure is the oldest trick in the book.' },
          { title: 'Does it ask for details or money?', detail: 'Banks and government services never ask for passwords or payment by text or email.' },
          { title: 'When in doubt, do nothing', detail: 'Close the message. Ask the group on Friday — that is what we are here for.' },
        ],
      },
    ],
    lessons: [
      {
        title: 'Our ground rules',
        text: 'Two things define this group: independence to solve our own tech issues, and calmness when using our devices. Nobody rushes, nobody is judged.',
      },
      {
        title: 'Which devices still get updates',
        text: 'In Term 3 we checked the devices in the group: the S24 Ultra, A26 and A55 are still receiving security updates from their maker. The A50, A51, A52 and Galaxy S20/S21 are not — worth knowing when planning an upgrade.',
      },
    ],
    faq: [
      {
        q: 'If Google saves my passwords, can someone at Google see them?',
        a: 'Your saved passwords are locked to your account and stored encrypted — you need your phone\'s PIN or fingerprint to view them. Even so, never save your banking password anywhere except your head or a notebook at home.',
      },
      {
        q: 'How do I know if a WhatsApp message is a scam?',
        a: 'Treat any unexpected message about money, codes or links like a stranger at the door — verify by calling the person on a number you already have. When in doubt, do nothing and bring it to Friday.',
      },
      {
        q: 'Does the BOM weather app cost anything?',
        a: 'No — the Bureau of Meteorology app is free, with no ads. If an app store shows a paid "BOM weather" app, that is not the official one.',
      },
    ],
    resources: [
      { label: 'Google Drive demo notes (Term 3)', url: DRIVE.googleDriveDemo, kind: 'pdf' },
    ],
    status: 'recap',
  },
]

// Standalone lessons from our Friday discussions — shared anonymously.
export const sharedLessons: Lesson[] = [
  {
    title: 'Attachments can carry viruses — even PDFs',
    text: 'A scam email arrived with a PDF attachment, and one of us very nearly opened it. The antivirus scanner caught it just in time — phew! The lesson: if an email is unexpected, do not open the file. Your scanner is a safety net, not a guarantee.',
  },
  {
    title: 'AI is a helper, not a ghostwriter',
    text: 'Universities now check assignments for AI-written work — a grandchild of one of our members learned that the hard way. A good conversation to have with the young ones: use AI to understand and learn, never to answer for you.',
  },
  {
    title: 'Scammers do not care how careful you are — until you are',
    text: 'Every scam we spot together makes the whole group safer. If something feels off, mention it on Friday. Chances are someone else got the same message.',
  },
]

export const programInfo = {
  regular: {
    name: 'Advanced Androids (ATLGroup)',
    day: 'Fridays, 9:30 – 11:00 am',
    dates: '9 October – 11 December 2026',
    sessions: '10 sessions',
    fee: '$75 for the term',
    note: 'Session fee includes morning tea. Bring your own Android phone or tablet.',
  },
  events: [
    {
      date: 'Fri 9 Oct, 12:15 – 1:15 pm',
      title: 'Safe Seniors — Police information session',
      detail: 'Safety at home and out and about. Free, part of Seniors Week.',
    },
    {
      date: 'Tue 13 Oct, 10 am – 1 pm',
      title: 'Introduction to AI',
      detail: 'A friendly first look at artificial intelligence. Free.',
    },
    {
      date: 'Tue 20 & 27 Oct, 10 am – 12 pm',
      title: 'Using AI',
      detail: 'Two hands-on follow-up sessions. $5 per session.',
    },
    {
      date: 'Thu 29 Oct, 9:30 am – 12:30 pm',
      title: 'Selling & Buying Online',
      detail: 'Free session — bring your own device.',
    },
    {
      date: 'Sat 14 Nov, 10 am – 3 pm',
      title: 'Artful Connections — Art & Craft Exhibition',
      detail: 'Craft stalls, Devonshire tea and much more.',
    },
  ],
  termOutline: {
    bigIdea: 'Fostering social interactions within a technology-based environment.',
    guidingQuestion:
      'How does technology affect the day-to-day lives of senior citizens in Australia in the 2020s and beyond?',
    goals: [
      'Explore what we can learn from countries and cultures that are more progressive with technology.',
      'Discuss our triumphs, worries, and joys while using technology.',
      'Identify ways technology can assist and promote wellness in later stages of life.',
      'Consider how our wisdom can help inform the younger generation as society’s technologies change.',
    ],
  },
  resources: [
    { label: 'Term 4 2026 program (full centre program)', url: DRIVE.term4Program, kind: 'pdf' as const },
    { label: 'ATLGroup Term 4 program outline', url: DRIVE.term4Outline, kind: 'doc' as const },
    { label: 'Slides: What is AI?', url: DRIVE.whatIsAISlides, kind: 'slides' as const },
    { label: 'Slides: Machine Learning & Day-to-Day AI Tools', url: DRIVE.aiToolsSlides, kind: 'slides' as const },
    { label: 'ATLGroup Google Drive folder', url: DRIVE.groupFolder, kind: 'folder' as const },
  ],
}

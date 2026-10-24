/**
 * SAMPLE seed content for the Nigerian Army in Lagos (81 Division). It is loaded
 * into the CMS by `pnpm cms:seed`, and the web app uses it as a build-time
 * fallback when the CMS is unreachable, so a build never fails or shows an
 * empty page.
 *
 * IMPORTANT: Before go-live, the Division Public Relations office and the
 * Directorate of Army Public Relations (DAPR) must review and replace every
 * item here (names, figures, dates, contacts, photographs) with officially
 * cleared content.
 */
import type { SiteContent } from './types';

const y = new Date().getFullYear();

export const seedContent: SiteContent = {
  settings: {
    motto: 'Victory is from God alone',
    heroTitle: 'Securing Lagos. Serving Nigeria.',
    heroSubtitle:
      'The Nigerian Army in Lagos protects the people of Lagos and Ogun States, works with civil authority to keep the peace, and stands ready to defend the nation.',
    mission:
      'To defend the territorial integrity of the Federal Republic of Nigeria and, when called upon, to support civil authority in Lagos and Ogun States, so that people can live, work and do business in safety.',
    vision:
      'A well-trained, well-equipped and highly motivated force that earns the trust of every Nigerian through professionalism, discipline and respect for the people it serves.',
    hq: {
      address: 'Headquarters 81 Division (Amphibious), Nigerian Army, Eti-Osa, Lagos, Nigeria',
      phones: ['+234 (0) 1 000 0000', '+234 (0) 1 000 0001'],
      email: 'info@army.mil.ng',
      mapEmbed:
        'https://www.openstreetmap.org/export/embed.html?bbox=3.4000%2C6.4200%2C3.4600%2C6.4600&layer=mapnik&marker=6.4400%2C3.4300',
    },
    emergencyLines: [
      { label: 'Army Emergency Call Centre (free)', number: '193' },
      { label: 'Report a security threat in Lagos', number: '+234 (0) 800 000 0000' },
      { label: 'Recruitment helpdesk', number: '+234 (0) 800 000 0001' },
    ],
    social: [
      { label: 'X (Twitter)', href: 'https://x.com/HQNigerianArmy' },
      { label: 'Facebook', href: 'https://www.facebook.com/nigerianarmy' },
      { label: 'YouTube', href: 'https://www.youtube.com/' },
      { label: 'Instagram', href: 'https://www.instagram.com/' },
    ],
    history: [
      { year: '1863', title: 'Born in Lagos', text: 'Lieutenant John Glover of the Royal Navy raises a small force in Lagos, known as Glover’s Hausas. It is the earliest ancestor of today’s Nigerian Army.' },
      { year: '1900', title: 'West African Frontier Force', text: 'Units across the region are brought together as the West African Frontier Force, later the Royal West African Frontier Force.' },
      { year: '1914–1945', title: 'Two world wars', text: 'Nigerian soldiers serve with distinction in the Cameroons and East Africa, and in Burma during the Second World War.' },
      { year: '1956', title: 'Queen’s Own Nigeria Regiment', text: 'The Nigeria Regiment is renamed the Queen’s Own Nigeria Regiment as the country prepares for independence.' },
      { year: '1960', title: 'The Nigerian Army', text: 'At independence the force becomes the Nigerian Army. Within months it deploys on its first United Nations mission, in the Congo.' },
      { year: 'Lagos', title: 'From garrison to division', text: 'The Lagos Garrison Command is re-designated 81 Division, responsible for Lagos and Ogun States, and later takes on an amphibious role suited to the creeks and waterways of the coast.' },
      { year: 'Today', title: '81 Division (Amphibious)', text: 'From its headquarters in Lagos, the Division protects Nigeria’s commercial capital, supports the Police and other agencies, and contributes troops to operations at home and abroad.' },
    ],
    coreValues: [
      { title: 'Loyalty', text: 'We are loyal to the Federal Republic of Nigeria and its Constitution, always.' },
      { title: 'Discipline', text: 'We obey lawful orders and hold ourselves to the highest standard of conduct, on and off duty.' },
      { title: 'Courage', text: 'We show physical and moral courage — doing what is right, even when it is hard.' },
      { title: 'Integrity', text: 'We are honest and open in our dealings with the public and with one another.' },
      { title: 'Respect for human rights', text: 'We follow the Rules of Engagement and international humanitarian law, and we treat every citizen with dignity.' },
    ],
  },

  news: [
    {
      slug: `${y}-recruit-intake-registration-opens`,
      title: `${y} Recruit Intake: applications are now open`,
      excerpt: 'If you are aged 18 to 22 (up to 26 for tradesmen and women), you can now apply online to join the Nigerian Army. Applying is free.',
      body: [
        `Online registration for the ${y} Recruit Intake is now open. Applicants from Lagos and every other state apply through the official recruitment portal on this website. There is no other way to apply.`,
        'Applying is completely free. The Nigerian Army does not charge for forms, slots or screening at any stage. Anyone who asks you for money is a fraudster — report them to the nearest military formation or police station.',
        'To apply you need at least four credits, including English Language and Mathematics, in no more than two sittings. You must also meet the age and height requirements on the eligibility page.',
        'Shortlisted applicants from Lagos will be told their screening venue, date and time through the portal, by email and by SMS.',
      ],
      category: 'press-release',
      publishedAt: `${y}-09-28`,
      image: '/images/parade-line.jpg',
    },
    {
      slug: 'beware-of-fake-recruitment-websites',
      title: 'Public notice: beware of fake recruitment websites and agents',
      excerpt: 'Fraudsters in Lagos and online are selling fake recruitment forms. The Army never asks for money. Apply only on this website.',
      body: [
        'We are aware of websites, social media accounts and individuals in Lagos who claim to sell recruitment forms or to “guarantee” a place in the Army. They are not acting for the Nigerian Army.',
        'The only official way to apply is through the recruitment portal linked from this website. Applying is free, and no officer or soldier is permitted to collect money from applicants.',
        'If someone asks you for money, do not pay. Report them to the nearest military formation, the nearest police station, or the Army Emergency Call Centre on 193.',
      ],
      category: 'press-release',
      publishedAt: `${y}-09-20`,
      image: '/images/officers-walking.jpg',
    },
    {
      slug: 'passing-out-parade-depot',
      title: 'New soldiers from Lagos complete basic military training',
      excerpt: 'Recruits, including young men and women from Lagos, marched out as trained soldiers at the end of their basic military training.',
      body: [
        'The passing-out parade marked the end of several months of basic military training in drill, weapon handling, fieldcraft, first aid, physical training and military law.',
        'The reviewing officer charged the new soldiers to stay loyal, disciplined and respectful of human rights, and to serve the people of Nigeria with pride.',
        'Families travelled from Lagos and across the country to watch the parade.',
      ],
      category: 'training',
      publishedAt: `${y}-09-12`,
      image: '/images/recruits-helmets.jpg',
    },
    {
      slug: 'free-medical-outreach',
      title: 'Free medical outreach for riverine communities in Lagos',
      excerpt: 'Army medical teams gave free consultations, eye checks and medicines to residents of waterside communities.',
      body: [
        'As part of its civil–military cooperation programme, the Division sent doctors, nurses and pharmacists to riverine communities in Lagos State.',
        'Residents received free general consultations, eye and dental checks, and medicines. Mosquito nets were also distributed to families.',
        'Community leaders thanked the troops and asked for the outreach to become a regular event.',
      ],
      category: 'civil-military',
      publishedAt: `${y}-08-30`,
      image: '/images/soldier-truck.jpg',
    },
    {
      slug: 'armoured-corps-demonstration',
      title: 'Troops in Lagos mark Nigerian Army Day Celebration',
      excerpt: 'Soldiers and their families in Lagos joined the annual Nigerian Army Day Celebration with sports, prayers and a march-past.',
      body: [
        'The Nigerian Army Day Celebration (NADCEL) is held every year in early July. In Lagos, troops marked the week with church services, Jumat prayers, sports competitions and community projects.',
        'The celebration ended with a march-past and a display of military equipment, watched by invited guests and members of the public.',
      ],
      category: 'operations',
      publishedAt: `${y}-07-06`,
      image: '/images/armoured-vehicle.jpg',
    },
    {
      slug: 'barracks-housing-project',
      title: 'New family quarters handed over in Lagos barracks',
      excerpt: 'Newly built accommodation gives soldiers and their families safe, modern homes close to schools and medical care.',
      body: [
        'New accommodation blocks have been handed over to soldiers and their families as part of the Army’s ongoing work to improve living conditions in the barracks.',
        'Each unit has reliable water and power, and the blocks sit close to the barracks schools and medical reception station.',
      ],
      category: 'welfare',
      publishedAt: `${y}-06-18`,
      image: '/images/officers-walking.jpg',
    },
  ],

  announcements: [
    { id: 'a1', title: 'Applying to join the Army is FREE', summary: 'We never charge for forms, slots or screening. If anyone asks you for money, report them.', date: `${y}-09-28`, urgent: true },
    { id: 'a2', title: `${y} Recruit Intake is open`, summary: 'Create your account and finish your application before the closing date.', date: `${y}-09-28`, href: '/portal/register' },
    { id: 'a3', title: 'Lagos screening venues published', summary: 'If you are shortlisted, your screening venue, date and time are on your portal dashboard.', date: `${y}-09-15`, href: '/portal' },
    { id: 'a4', title: 'Tender: perimeter fencing works in Lagos', summary: 'Registered contractors are invited to bid. Read the tender notice for the closing date.', date: `${y}-09-10`, href: '/resources/tenders' },
  ],

  events: [
    { slug: 'recruit-registration-window', title: 'Recruit Intake: online applications', date: `${y}-09-28`, endDate: `${y}-11-08`, location: 'Online — recruitment portal', description: 'Applications for the Recruit Intake are open to eligible Nigerians from every state.', category: 'recruitment' },
    { slug: 'state-screening', title: 'Lagos screening exercise', date: `${y}-11-24`, endDate: `${y}-12-05`, location: 'Designated screening centres in Lagos', description: 'Document checks and physical screening for shortlisted applicants. Bring your printed slip and original documents.', category: 'recruitment' },
    { slug: 'armed-forces-remembrance', title: 'Armed Forces Remembrance Day', date: `${y + 1}-01-15`, location: 'Tafawa Balewa Square, Lagos Island, Lagos', description: 'A wreath-laying ceremony to honour the men and women who gave their lives for Nigeria.', category: 'ceremony' },
    { slug: 'nadcel', title: 'Nigerian Army Day Celebration (NADCEL)', date: `${y + 1}-07-01`, endDate: `${y + 1}-07-06`, location: 'Lagos and formations nationwide', description: 'A week of prayers, sports, community projects and a grand finale parade.', category: 'ceremony' },
    { slug: 'coas-games', title: 'Inter-unit sports competition', date: `${y}-12-08`, endDate: `${y}-12-14`, location: 'Bonny Cantonment, Victoria Island, Lagos', description: 'Units of the Division compete in athletics, football and other sports.', category: 'sports' },
  ],

  gallery: [
    { id: 'g1', type: 'photo', title: 'New soldiers celebrate the end of basic training', src: '/images/recruits-helmets.jpg', date: `${y}-09-12` },
    { id: 'g2', type: 'photo', title: 'Senior officers on their way to a briefing', src: '/images/officers-walking.jpg', date: `${y}-08-20` },
    { id: 'g3', type: 'photo', title: 'Guard of honour', src: '/images/parade-line.jpg', date: `${y}-08-02` },
    { id: 'g4', type: 'photo', title: 'Armoured vehicle on parade during Army Day', src: '/images/armoured-vehicle.jpg', date: `${y}-07-06` },
    { id: 'g5', type: 'photo', title: 'Soldier on duty in Lagos', src: '/images/soldier-truck.jpg', date: `${y}-06-11` },
    { id: 'v1', type: 'video', title: 'Army Day Celebration highlights', src: '/images/armoured-vehicle.jpg', videoUrl: 'https://www.youtube-nocookie.com/embed/', date: `${y}-07-06` },
  ],

  leadership: [
    {
      name: 'W Shaibu',
      rank: 'Lieutenant General',
      appointment: 'Chief of Army Staff',
      photo: '/images/coas.jpg',
      bio: [
        'The Chief of Army Staff is the professional head of the Nigerian Army. He answers to the Chief of Defence Staff and the Commander-in-Chief for the Army’s readiness, training, administration and welfare — including the troops of 81 Division in Lagos.',
        'Replace this placeholder with the official biography supplied by the Directorate of Army Public Relations, including commissioning course, command appointments, operational tours, academic qualifications and honours.',
      ],
    },
  ],

  orgChart: {
    id: 'cic', title: 'Commander-in-Chief', subtitle: 'President of the Federal Republic',
    children: [{
      id: 'cds', title: 'Chief of Defence Staff', subtitle: 'Defence Headquarters',
      children: [{
        id: 'coas', title: 'Chief of Army Staff', subtitle: 'Army Headquarters, Abuja',
        children: [
          { id: 'ahq', title: 'Army HQ Departments', subtitle: 'Principal Staff Officers', children: [
            { id: 'dapp', title: 'Policy and Plans' },
            { id: 'dato', title: 'Training and Operations' },
            { id: 'dadmin', title: 'Administration' },
            { id: 'dlog', title: 'Logistics' },
            { id: 'dmi', title: 'Military Intelligence' },
            { id: 'dase', title: 'Army Standards and Evaluation' },
          ]},
          { id: 'divs', title: 'Divisions', subtitle: 'Field formations', children: [
            { id: 'd1', title: '1 Division', subtitle: 'Kaduna' },
            { id: 'd2', title: '2 Division', subtitle: 'Ibadan' },
            { id: 'd3', title: '3 Division', subtitle: 'Jos' },
            { id: 'd6', title: '6 Division', subtitle: 'Port Harcourt' },
            { id: 'd7', title: '7 Division', subtitle: 'Maiduguri' },
            { id: 'd8', title: '8 Division', subtitle: 'Sokoto' },
            { id: 'd81', title: '81 Division (Amphibious)', subtitle: 'Lagos — Lagos and Ogun States', children: [
              { id: 'b9', title: '9 Brigade', subtitle: 'Ikeja Cantonment, Lagos' },
              { id: 'b35', title: '35 Brigade', subtitle: 'Abeokuta, Ogun State' },
            ]},
            { id: 'd82', title: '82 Division', subtitle: 'Enugu' },
          ]},
          { id: 'tradoc', title: 'Training and Doctrine Command', subtitle: 'Minna', children: [
            { id: 'depot', title: 'Depot Nigerian Army', subtitle: 'Zaria' },
            { id: 'schools', title: 'Corps Schools' },
          ]},
          { id: 'corps', title: 'Corps', subtitle: 'Arms and services', children: [
            { id: 'inf', title: 'Infantry' }, { id: 'arm', title: 'Armour' }, { id: 'arty', title: 'Artillery' },
            { id: 'engr', title: 'Engineers' }, { id: 'sigs', title: 'Signals' }, { id: 'med', title: 'Medical' },
            { id: 'nac', title: 'Supply and Transport' }, { id: 'mp', title: 'Military Police' },
          ]},
        ],
      }],
    }],
  },

  ranks: [
    { name: 'General', abbreviation: 'Gen', category: 'commissioned', insignia: { swords: true, eagle: true, pips: 2, wreath: true }, natoCode: 'OF-9' },
    { name: 'Lieutenant General', abbreviation: 'Lt Gen', category: 'commissioned', insignia: { swords: true, eagle: true, pips: 1, wreath: true }, natoCode: 'OF-8' },
    { name: 'Major General', abbreviation: 'Maj Gen', category: 'commissioned', insignia: { swords: true, eagle: true, wreath: true }, natoCode: 'OF-7' },
    { name: 'Brigadier General', abbreviation: 'Brig Gen', category: 'commissioned', insignia: { swords: true, wreath: true }, natoCode: 'OF-6' },
    { name: 'Colonel', abbreviation: 'Col', category: 'commissioned', insignia: { eagle: true, pips: 2 }, natoCode: 'OF-5' },
    { name: 'Lieutenant Colonel', abbreviation: 'Lt Col', category: 'commissioned', insignia: { eagle: true, pips: 1 }, natoCode: 'OF-4' },
    { name: 'Major', abbreviation: 'Maj', category: 'commissioned', insignia: { eagle: true }, natoCode: 'OF-3' },
    { name: 'Captain', abbreviation: 'Capt', category: 'commissioned', insignia: { pips: 3 }, natoCode: 'OF-2' },
    { name: 'Lieutenant', abbreviation: 'Lt', category: 'commissioned', insignia: { pips: 2 }, natoCode: 'OF-1' },
    { name: 'Second Lieutenant', abbreviation: '2Lt', category: 'commissioned', insignia: { pips: 1 }, natoCode: 'OF-1' },
    { name: 'Army Warrant Officer', abbreviation: 'AWO', category: 'non-commissioned', insignia: { crest: true, wreath: true }, natoCode: 'OR-9' },
    { name: 'Master Warrant Officer', abbreviation: 'MWO', category: 'non-commissioned', insignia: { crest: true, pips: 1 }, natoCode: 'OR-9' },
    { name: 'Warrant Officer', abbreviation: 'WO', category: 'non-commissioned', insignia: { crest: true }, natoCode: 'OR-8' },
    { name: 'Staff Sergeant', abbreviation: 'SSgt', category: 'non-commissioned', insignia: { chevrons: 3, eagle: true }, natoCode: 'OR-7' },
    { name: 'Sergeant', abbreviation: 'Sgt', category: 'non-commissioned', insignia: { chevrons: 3 }, natoCode: 'OR-6' },
    { name: 'Corporal', abbreviation: 'Cpl', category: 'non-commissioned', insignia: { chevrons: 2 }, natoCode: 'OR-4' },
    { name: 'Lance Corporal', abbreviation: 'LCpl', category: 'non-commissioned', insignia: { chevrons: 1 }, natoCode: 'OR-3' },
    { name: 'Private', abbreviation: 'Pte', category: 'other', insignia: {}, natoCode: 'OR-1' },
  ],

  institutions: [
    { slug: 'nda', name: 'Nigerian Defence Academy', location: 'Kaduna', state: 'KD', type: 'academy', description: 'Trains cadets for commissioning as regular combatant officers of the Armed Forces of Nigeria, awarding degrees alongside military training.', courses: ['Regular Combatant Course', 'Short Service Combatant Course', 'Postgraduate programmes'] },
    { slug: 'depot-na', name: 'Depot Nigerian Army', location: 'Zaria', state: 'KD', type: 'depot', description: 'The home of recruit training, where civilians are transformed into disciplined soldiers through basic military training.', courses: ['Basic Military Training', 'Recruit Drill and Weapon Handling', 'Physical Training'] },
    { slug: 'afcsc', name: 'Armed Forces Command and Staff College', location: 'Jaji', state: 'KD', type: 'college', description: 'Prepares mid-level officers for command and staff appointments.', courses: ['Junior Course', 'Senior Course'] },
    { slug: 'nasi', name: 'Nigerian Army School of Infantry', location: 'Jaji', state: 'KD', type: 'school', description: 'Trains officers and soldiers in infantry tactics and leadership.', courses: ['Young Officers Course', 'Platoon Commanders Course', 'Section Leaders Course'] },
    { slug: 'nasa', name: 'Nigerian Army School of Artillery', location: 'Kachia', state: 'KD', type: 'school', description: 'Centre of excellence for field and air defence artillery training.', courses: ['Gunnery Course', 'Air Defence Course'] },
    { slug: 'nasarm', name: 'Nigerian Army School of Armour', location: 'Bauchi', state: 'BA', type: 'school', description: 'Trains personnel in armoured warfare, driving and maintenance of armoured vehicles.', courses: ['Armoured Driving and Maintenance', 'Gunnery', 'Troop Leaders Course'] },
    { slug: 'nasme', name: 'Nigerian Army School of Military Engineering', location: 'Makurdi', state: 'BE', type: 'school', description: 'Trains combat engineers in construction, demolitions and field engineering.', courses: ['Field Engineering', 'Counter-IED', 'Construction Trades'] },
    { slug: 'nas-signals', name: 'Nigerian Army School of Signals', location: 'Lagos', state: 'LA', type: 'school', description: 'Trains signallers in military communications and information systems.', courses: ['Radio Operator', 'Information Systems', 'Electronic Warfare'] },
  ],

  faqs: [
    { id: 'f1', category: 'general', question: 'Do I have to pay to apply?', answer: 'No. Joining the Nigerian Army is completely free. Never pay anyone for forms, slots or screening. If someone asks you for money, report them to the nearest military formation, police station or the Army Emergency Call Centre on 193.' },
    { id: 'f2', category: 'general', question: 'I live in Lagos. Is there a separate Lagos recruitment?', answer: 'No. There is one national recruitment exercise and one official portal. Applicants who live in Lagos apply the same way as everyone else. If you are shortlisted, you will usually be screened at a centre in your state.' },
    { id: 'f3', category: 'eligibility', question: 'How old do I need to be?', answer: 'For the regular recruit intake you must be 18 to 22 years old. Tradesmen and women can be up to 26. Your age is worked out on the closing date of the exercise. The exact limits for each exercise are shown on the portal.' },
    { id: 'f4', category: 'eligibility', question: 'How tall do I need to be?', answer: 'At least 1.68 m for men and 1.65 m for women, unless the notice for a particular exercise says otherwise.' },
    { id: 'f5', category: 'eligibility', question: 'What qualifications do I need?', answer: 'At least four credits, including English Language and Mathematics, in WAEC, NECO, NABTEB or GCE, in no more than two sittings.' },
    { id: 'f6', category: 'eligibility', question: 'Can I apply if I am married?', answer: 'Applicants for the regular recruit intake must be single. This rule does not apply to Short Service Commission applicants unless the exercise notice says it does.' },
    { id: 'f7', category: 'application', question: 'Can I save my application and finish it later?', answer: 'Yes. Each step saves automatically. You can sign in on any device and carry on from where you stopped, until the closing date.' },
    { id: 'f8', category: 'application', question: 'I did not get my verification code.', answer: 'Check your spam or junk folder and make sure your email address and phone number are correct. You can ask for a new code after 60 seconds. Codes expire after 10 minutes.' },
    { id: 'f9', category: 'application', question: 'Can I change my application after I submit it?', answer: 'No. Check everything carefully on the preview page before you submit. After you submit, you can only view and print your acknowledgement slip.' },
    { id: 'f10', category: 'documents', question: 'What documents do I need to upload?', answer: 'A recent passport photograph (JPG or PNG, up to 500 KB), your O-Level result, your birth certificate or age declaration, and your certificate of state of origin (PDF, JPG or PNG, up to 2 MB each).' },
    { id: 'f11', category: 'screening', question: 'How will I know if I have been shortlisted?', answer: 'Your status on the portal will change to “Shortlisted”, then to “Invited for screening” with your venue, date and time. We will also send you an email and an SMS.' },
    { id: 'f12', category: 'screening', question: 'What should I bring to screening?', answer: 'Your printed acknowledgement slip, the originals of all your certificates, your birth certificate, your certificate of state of origin, and sportswear for the fitness test.' },
    { id: 'f13', category: 'training', question: 'Where will I be trained?', answer: 'Successful applicants do their basic military training at the Depot Nigerian Army, Zaria. After training, soldiers can be posted to units anywhere in Nigeria, including Lagos.' },
  ],

  downloads: [
    { id: 'd1', title: 'Recruit Intake — guide for applicants', category: 'forms', fileType: 'PDF', sizeKb: 420, url: '/downloads/sample.pdf', date: `${y}-09-28` },
    { id: 'd2', title: 'Guarantor and local government attestation form', category: 'forms', fileType: 'PDF', sizeKb: 180, url: '/downloads/sample.pdf', date: `${y}-09-28` },
    { id: 'd3', title: 'Nigerian Army annual report', category: 'reports', fileType: 'PDF', sizeKb: 5200, url: '/downloads/sample.pdf', date: `${y}-03-01` },
    { id: 'd4', title: 'Nigerian Army magazine', category: 'publications', fileType: 'PDF', sizeKb: 8400, url: '/downloads/sample.pdf', date: `${y}-06-30` },
  ],

  tenders: [
    { ref: `NA/81DIV/PROC/${y}/014`, title: 'Construction of perimeter fencing at a barracks in Lagos', category: 'works', publishedAt: `${y}-09-10`, deadline: `${y + 1}-01-20`, status: 'open', description: 'Invitation to tender for perimeter fencing works. Bidders must be registered on the Bureau of Public Procurement database.', documentUrl: '/downloads/sample.pdf' },
    { ref: `NA/81DIV/PROC/${y}/013`, title: 'Supply of medical consumables to military medical facilities in Lagos', category: 'goods', publishedAt: `${y}-08-25`, deadline: `${y + 1}-01-05`, status: 'open', description: 'Supply and delivery of assorted medical consumables.', documentUrl: '/downloads/sample.pdf' },
    { ref: `NA/81DIV/PROC/${y}/011`, title: 'Facility management services for Division Headquarters', category: 'services', publishedAt: `${y}-07-02`, deadline: `${y}-08-01`, status: 'closed', description: 'Cleaning, landscaping and building maintenance services.', documentUrl: '/downloads/sample.pdf' },
    { ref: `NA/81DIV/PROC/${y}/007`, title: 'Consultancy: ICT infrastructure audit', category: 'consultancy', publishedAt: `${y}-04-15`, deadline: `${y}-05-15`, status: 'awarded', description: 'An independent audit of ICT infrastructure.', documentUrl: '/downloads/sample.pdf' },
  ],

  policies: [
    { id: 'p1', title: 'Privacy notice (Nigeria Data Protection Act 2023)', category: 'policies', fileType: 'PDF', sizeKb: 210, url: '/privacy', date: `${y}-01-01` },
    { id: 'p2', title: 'Freedom of Information policy', category: 'policies', fileType: 'PDF', sizeKb: 160, url: '/downloads/sample.pdf', date: `${y}-01-01` },
    { id: 'p3', title: 'Human rights policy and Rules of Engagement (public summary)', category: 'policies', fileType: 'PDF', sizeKb: 340, url: '/downloads/sample.pdf', date: `${y}-01-01` },
    { id: 'p4', title: 'Procurement policy', category: 'policies', fileType: 'PDF', sizeKb: 260, url: '/downloads/sample.pdf', date: `${y}-01-01` },
  ],

  welfare: [
    {
      slug: 'serving-personnel', title: 'Serving personnel',
      intro: 'Healthcare, housing and support for officers and soldiers serving in Lagos and across the Division.',
      services: [
        { title: 'Military hospitals and medical centres', area: 'healthcare', description: 'Free medical care at the Nigerian Army reference hospital in Yaba, Lagos, and at medical reception stations in the barracks.' },
        { title: 'Barracks accommodation', area: 'housing', description: 'Quarters in Lagos barracks and cantonments, and access to the Army post-service housing scheme.' },
        { title: 'Group life assurance', area: 'insurance', description: 'Life insurance cover for every serving officer and soldier.' },
        { title: 'Career and education support', area: 'education', description: 'Sponsorship for career courses and approved academic programmes.' },
      ],
    },
    {
      slug: 'veterans', title: 'Veterans',
      intro: 'Support for retired officers and soldiers living in Lagos and Ogun States, from pensions to healthcare.',
      services: [
        { title: 'Military Pensions Board', area: 'pension', description: 'Enrolment, verification and payment of military pensions and gratuities. Verification exercises are held in Lagos.', contact: 'Military Pensions Board (head office, Abuja)' },
        { title: 'Post-service housing', area: 'housing', description: 'Access to the Nigerian Army Post-Service Housing Development Limited (NAPSHDL) scheme.' },
        { title: 'Healthcare for veterans', area: 'healthcare', description: 'Medical care for retirees at designated military hospitals, including in Lagos.' },
        { title: 'Resettlement training', area: 'education', description: 'Vocational and business training before and after retirement.' },
      ],
    },
    {
      slug: 'families', title: 'Families',
      intro: 'Programmes for the spouses, children and dependants of serving and fallen personnel.',
      services: [
        { title: 'Army children schools', area: 'education', description: 'Nursery, primary and secondary education in Army children schools in Lagos barracks.' },
        { title: 'Healthcare for dependants', area: 'healthcare', description: 'Medical care for registered dependants at military medical facilities in Lagos.' },
        { title: 'Support for families of the fallen', area: 'support', description: 'Help with benefits, scholarships and counselling for the families of personnel who gave their lives in service.' },
        { title: 'Nigerian Army Officers’ Wives Association (NAOWA)', area: 'support', description: 'Welfare, skills and outreach programmes for families living in the barracks.' },
      ],
    },
  ],
};

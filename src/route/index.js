// ----------------------------------------
//  IMPORTS
// ----------------------------------------
const express = require('express')
const router = express.Router()

// ----------------------------------------
//  COMMON DATA (header + footer)
// ----------------------------------------
const header = {
  name: {
    firstname: 'Maxim',
    lastname: 'Sheyn',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '900$ в місяць',
  address: 'Ukraine, Kharkiv',
}

const footer = {
  sotial: {
    email: {
      text: 'dmytro@mail.com',
      href: 'mailto:dmytro@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}

// ----------------------------------------
//  INDEX PAGE
// ----------------------------------------
router.get('/', (req, res) => {
  res.render('index', {
    page: {
      title: 'Resume | Max Sheyn',
    },

    demoPages: {
      basic: [
        { title: 'Bio', href: '/bio' },
        { title: 'Car', href: '/car' },
        { title: 'Mac', href: '/mac' },
        { title: 'Web', href: '/web' },
        { title: 'JS', href: '/js' },
        { title: 'Program', href: '/program' },

        { title: 'Education', href: '/education' },
        { title: 'Skills', href: '/skills' },
        { title: 'Summary', href: '/summary' },
        { title: 'Work', href: '/work' },
        { title: 'Person', href: '/person' },
        { title: 'Facebook', href: '/facebook' },

        // якщо index окремим шляхом:
        { title: 'Index', href: '/' },
      ],

      bootstrap: [
        { title: 'Bootstrap UI', href: '/bootstrap' },
        { title: 'Company', href: '/company' },
        { title: 'Overview', href: '/overview' },
        { title: 'Content', href: '/content' },
        { title: 'Shop', href: '/shop' },
        { title: 'Cart', href: '/cart' },
        { title: 'Checkout', href: '/checkout' },
        { title: 'Product Reviews', href: '/product-reviews' },
      ],
    },

    profile: {
      name: 'Max Sheyn',
      position: 'Junior Frontend / Fullstack Developer',
      location: 'Ukraine · Remote',
      photo: '/img/profile.jpg',
    },

    contacts: {
      email: {
        text: 'max@mail.com',
        href: 'mailto:max@mail.com',
      },
      phone: {
        text: '+380 67 000 0000',
        href: 'tel:+380670000000',
      },
      linkedin: {
        text: 'LinkedIn',
        href: '#',
      },
    },

    summary: {
      text: `Junior developer with solid understanding of HTML, CSS,
      JavaScript and Bootstrap. Experience working with Handlebars,
      Git and basic Node.js environment.`,
    },

    skills: [
      'HTML5, semantic layout',
      'CSS3, Bootstrap',
      'JavaScript (basic)',
      'Git / GitHub',
      'Node.js (basic)',
    ],

    projects: ['Shopping Cart page', 'Checkout form', 'Product reviews page'],
  })
})

// ----------------------------------------
//  SUMMARY
// ----------------------------------------
router.get('/summary', (req, res) => {
  res.render('summary', {
    page: { title: 'Resume | Summary' },
    header,
    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 year of experience in development.
        Whenever I start to work on a new project I learn the domain and try to understand the idea.
        Good team player, every colleague is a friend to me.`,
      },
      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from different platforms,
        analyzing by mathematical models and preparing probability predictions.`,
      },
    },
    footer,
  })
})

// ----------------------------------------
//  SKILLS
// ----------------------------------------
router.get('/skills', (req, res) => {
  res.render('skills', {
    page: { title: 'Resume | Skills' },
    header,
    main: {
      skills: [
        { name: 'HTML', point: 10, isTop: true },
        { name: 'Handlebars', point: 10, isTop: true },
        { name: 'VS Code & NPM', point: 9, isTop: false },
        { name: 'Git & Terminal', point: 7, isTop: false },
        { name: 'React.js', point: 0, isTop: false },
        { name: 'PHP', point: null },
      ],
      hobbies: [
        { name: 'Cycling', isMain: true },
        { name: 'Swiming', isMain: false },
        { name: 'Cooking', isMain: false },
      ],
    },
    footer,
  })
})

// ----------------------------------------
//  EDUCATION
// ----------------------------------------
router.get('/education', (req, res) => {
  res.render('education', {
    page: { title: 'Resume | Education' },
    header,
    main: {
      educations: [
        { name: 'IT Brains', isEnd: false },
        { name: 'HPLM', isEnd: true },
        { name: 'freeCodeCampe', isEnd: true },
      ],
      certificates: [
        { name: 'IT Brains', id: 1 },
        { name: 'HPLM', id: 2 },
      ],
    },
    footer,
  })
})

// ----------------------------------------
//  WORK
// ----------------------------------------
router.get('/work', (req, res) => {
  res.render('work', {
    page: { title: 'Resume | Work' },
    header,
    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'Anduril Industries',
            url: 'https://www.anduril.com/',
          },
          duration: {
            from: '10.10.2023',
            to: null,
          },
          projectAmount: 1,

          projects: [
            {
              name: 'Resume',
              url: 'https://resume.com.ua/',
              about: `
                Resume web app using Node.js, Express.js and Handlebars.
                Includes reusable components, layouts and dynamic data binding.`,
              stackAmount: 4,
              awardAmount: 5,

              stacks: [
                { name: 'React.js' },
                { name: 'HTML / CSS' },
                { name: 'Node.js' },
                { name: 'Express.js' },
              ],

              awards: [
                { name: '15% increase in rendering speed' },
                { name: '20% faster development thanks to components' },
                { name: 'Responsive UI for all devices' },
                { name: 'Dynamic data without reload' },
                { name: 'Code audit passed (ES6 standard)' },
              ],
            },
          ],
        },
      ],
    },
    footer,
  })
})

// ----------------------------------------
//  PERSON
// ----------------------------------------
router.get('/person', function (req, res) {
  res.render('person', {
    page: { title: 'Person profile' },

    person: {
      name: 'Emma Johnson',
      age: 32,
      gender: 'Female',
      address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        country: 'USA',
      },

      education: [
        {
          degree: 'Bachelor of Science',
          major: 'Computer Science',
          university: 'Massachusetts Institute of Technology',
          graduationYear: 2012,
        },
      ],

      workExperience: [
        {
          company: 'Google',
          title: 'Software Engineer',
          startDate: '2012-06-01',
          endDate: '2016-12-31',

          responsibilities: [
            'Developed new features for Google Maps',
            'Worked on improving search algorithms',
          ],

          year_founded: 1990,
          industry: 'Technology',

          employees: [
            {
              name: 'John Smith',
              position: 'CEO',
              department: 'Executive',

              projects: [
                {
                  name: 'Project Alpha',
                  description: 'Developing new software platform',
                  status: 'In Progress',

                  teams: [
                    {
                      team_name: 'Awesome Team',

                      team_leader: {
                        name: 'John Smith',
                        title: 'Team Leader',
                        email: 'john.smith@example.com',
                      },

                      team_members: [
                        {
                          name: 'Alice Johnson',
                          title: 'Software Engineer',
                          email: 'alice.johnson@example.com',
                          skills: ['Java', 'Python', 'SQL'],

                          projects: [
                            {
                              name: 'Project A',
                              description: 'Lorem ipsum dolor sit amet',
                              technologies: ['Java', 'Spring Framework'],

                              team_members: [
                                { name: 'Bob Lee', title: 'Software Engineer' },
                                { name: 'Cindy Chen', title: 'UI Designer' },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  })
})

// ----------------------------------------
// BIO
// ----------------------------------------
router.get('/bio', function (req, res) {
  res.render('bio', {
    page: { title: 'Biography' },

    bio: {
      name: 'Albert Einstein',
      birthdate: '1879-03-14',
      birthplace: 'Ulm, Kingdom of Württemberg, German Empire',
      deathdate: '1955-04-18',
      deathplace: 'Princeton, New Jersey, United States',
      nationality: 'Swiss, German, American',
      occupation: 'Theoretical Physicist',

      known_for: [
        'Theory of Relativity',
        'E=mc²',
        'Photoelectric Effect',
        'Brownian Motion',
      ],

      education: [
        {
          degree: 'Doctor of Philosophy',
          field: 'Physics',
          institution: 'University of Zurich',
          year: 1905,
        },
      ],

      notable_publications: [
        {
          title: 'On the Electrodynamics of Moving Bodies',
          year: 1905,
          publisher: 'Annalen der Physik',
        },
        {
          title: 'Does the Inertia of a Body Depend Upon Its Energy Content?',
          year: 1905,
          publisher: 'Annalen der Physik',
        },
      ],

      partners: [
        {
          name: 'Mileva Marić',
          relationship: 'First wife',
          years: '1903-1919',
        },
        {
          name: 'Elsa Einstein',
          relationship: "Second wife, Einstein's cousin",
          years: '1919-1936',
        },
      ],

      awards: [
        {
          title: 'Nobel Prize in Physics',
          year: 1921,
          description: 'Awarded for explanation of the photoelectric effect',
        },
      ],

      influences: ['Isaac Newton', 'James Clerk Maxwell', 'Hermann Minkowski'],
      influenced: [
        'Niels Bohr',
        'Erwin Schrödinger',
        'Werner Heisenberg',
        'Richard Feynman',
      ],

      quotes: [
        'Imagination is more important than knowledge.',
        'I have no special talent. I am only passionately curious.',
        'The important thing is not to stop questioning.',
        'The most beautiful thing we can experience is the mysterious.',
      ],

      major_discoveries: [
        {
          title: 'Photoelectric Effect',
          year: 1905,
          description:
            'Explained electron emission from metal when illuminated by light.',
        },
      ],

      contributions: {
        title: 'Inventions',
        description:
          'Einstein contributed to scientific thought and a wide variety of advancements.',
        year: '1900–1950',
        field: 'Physics',
      },
    },
  })
})

// ----------------------------------------
//  PROGRAM
// ----------------------------------------
router.get('/program', function (req, res) {
  res.render('program', {
    program: {
      excursion: {
        name: 'Cultural Tour',
        location: {
          city: 'Paris',
          country: 'France',
        },
        date: '2023-06-15',
        program: [
          {
            name: 'Museum Visit',
            type: 'Art',
            duration: 3,
            details: {
              museum: {
                name: 'The Louvre',
                location: {
                  address: 'Rue de Rivoli',
                  city: 'Paris',
                  country: 'France',
                },
                exhibits: [
                  {
                    name: 'Mona Lisa',
                    artist: 'Leonardo da Vinci',
                    description: 'Iconic portrait painting',
                    audio_guide: true,
                  },
                  {
                    name: 'Winged Victory of Samothrace',
                    artist: null,
                    description: 'Ancient Greek statue of Nike',
                    audio_guide: true,
                  },
                ],
              },

              guide: {
                name: 'Francois',
                language: 'French',
                rating: 4.8,
              },
            },
          },

          {
            name: 'Cultural Show',
            type: 'Music and Dance',
            duration: 2,
            details: {
              venue: {
                name: 'Moulin Rouge',
                location: {
                  address: '82 Boulevard de Clichy',
                  city: 'Paris',
                  country: 'France',
                },
              },

              performers: [
                { name: 'Mireille Mathieu', type: 'Chanson singer' },
                {
                  name: "Ballet de l'Opéra National de Paris",
                  type: 'Classical ballet company',
                },
              ],

              guide: {
                name: 'Sophie',
                language: 'English',
                rating: 4.6,
              },
            },
          },
        ],
      },
    },
  })
})

// ----------------------------------------
//  WEB
// ----------------------------------------
router.get('/web', function (req, res) {
  res.render('web', {
    web: {
      languages: [
        {
          name: 'HTML',
          version: 'HTML5',
          description:
            'Hypertext Markup Language is the standard markup language for creating web pages and web applications.',
          elements: [
            {
              name: 'div',
              description: 'Defines a division or section in HTML.',
              attributes: [
                { name: 'id', description: 'Specifies a unique id.' },
                { name: 'class', description: 'Specifies CSS class(es).' },
              ],
            },
            {
              name: 'p',
              description: 'Defines a paragraph.',
              attributes: [
                { name: 'id', description: 'Specifies a unique id.' },
                { name: 'class', description: 'Specifies CSS class(es).' },
              ],
            },
          ],
        },

        {
          name: 'CSS',
          version: 'CSS3',
          description:
            'Cascading Style Sheets is a style language used to describe the presentation of HTML.',
          properties: [
            {
              name: 'color',
              description: 'Sets the color of the text.',
              values: [
                { value: 'red', description: 'Text becomes red.' },
                { value: 'blue', description: 'Text becomes blue.' },
              ],
            },
            {
              name: 'background-color',
              description: 'Sets background color.',
              values: [
                { value: 'white', description: 'Background white.' },
                { value: 'black', description: 'Background black.' },
              ],
            },
          ],
        },

        {
          name: 'JavaScript',
          version: 'ES6',
          description:
            'JavaScript is a programming language used to create dynamic web content.',
          functions: [
            {
              name: 'alert()',
              description: 'Shows alert box.',
              parameters: [
                {
                  name: 'message',
                  type: 'string',
                  description: 'Text inside popup.',
                },
              ],
            },
            {
              name: 'getElementById()',
              description: 'Returns element by ID.',
              parameters: [
                {
                  name: 'id',
                  type: 'string',
                  description: 'ID of element to search.',
                },
              ],
            },
          ],
        },
      ],
    },
  })
})

// ----------------------------------------
//  JAVASCRIPT
// ----------------------------------------
router.get('/js', function (req, res) {
  res.render('js', {
    name: 'JavaScript',
    description:
      'JavaScript is a popular high-level, dynamic, and interpreted programming language.',
    history: {
      year: 1995,
      founder: 'Brendan Eich',
    },
    types: [
      'Number',
      'String',
      'Boolean',
      'Null',
      'Undefined',
      'Symbol',
      'Object',
    ],
    syntax: {
      variables: ['var', 'let', 'const'],
      functions: ['function'],
      conditionals: ['if', 'else', 'switch'],
      loops: ['for', 'while', 'do-while'],
      classes: ['class'],
    },
    features: [
      'First-class functions',
      'Closures',
      'Dynamic typing',
      'Prototype-based inheritance',
      'Asynchronous programming with Promises and async/await',
      'Modules with import/export statements',
    ],
    libraries: [
      'jQuery',
      'React',
      'Angular',
      'Vue',
      'Node.js',
      'Express.js',
      'Lodash',
      'Moment.js',
    ],
    tools: [
      'Babel',
      'Webpack',
      'ESLint',
      'Jest',
      'Mocha',
      'Chai',
      'Selenium',
      'Cypress',
    ],
    community: [
      { name: 'Stack Overflow', type: 'forum' },
      { name: 'JavaScript Weekly', type: 'newsletter' },
      { name: 'The Changelog', type: 'podcast' },
      { name: 'CSS-Tricks', type: 'blog' },
    ],
  })
})

// ----------------------------------------
//  CAR
// ----------------------------------------
router.get('/car', function (req, res) {
  res.render('car', {
    page: { title: 'Car details' },

    make: 'Toyota',
    model: 'Camry',
    year: 2022,
    color: 'silver',

    features: {
      interior: {
        seats: {
          material: 'leather',
          color: 'black',
          heated: true,
          ventilated: true,
        },

        dashboard: {
          material: 'plastic',
          color: 'black',
          display: {
            type: 'LCD',
            size: 10.1,
            resolution: '1280x720',
            touchscreen: true,
          },
        },

        audio: {
          system: 'JBL',
          speakers: 8,
          subwoofer: true,
          bluetooth: true,
          usb: true,
        },
      },

      exterior: {
        wheels: {
          size: 18,
          type: 'alloy',
          color: 'silver',
        },

        headlights: {
          type: 'LED',
          brightness: 'high',
          automatic: true,
        },

        sunroof: {
          type: 'panoramic',
          size: 'large',
          automatic: true,
        },
      },

      safety: {
        airbags: {
          front: 2,
          side: 2,
          knee: 2,
          rear: 2,
        },

        assistance: {
          blind_spot_monitoring: true,
          rear_cross_traffic_alert: true,
          lane_departure_warning: true,
          adaptive_cruise_control: true,
          collision_warning: true,
        },
      },
    },

    engine: {
      type: 'gasoline',
      displacement: 2.5,
      horsepower: 206,
      torque: 186,
      transmission: {
        type: 'automatic',
        gears: 8,
      },
    },

    fuel_economy: {
      city: 28,
      highway: 39,
      combined: 32,
    },

    price: {
      base: 25900,
      destination: 995,
      options: {
        navigation: 1200,
        moonroof: 800,
        premium_paint: 595,
      },
      total: 28990,
    },
  })
})

// ----------------------------------------
//  MAC
// ----------------------------------------
router.get('/mac', function (req, res) {
  res.render('mac', {
    name: 'Apple MacBook Pro',
    description: 'The ultimate notebook for power users',
    price: 1999.99,
    category: 'Computers & Tablets',

    features: {
      processor: {
        brand: 'Intel',
        model: 'Core i9',
        speed: '2.3 GHz',
        cores: 8,
        cache: '16 MB',
      },

      memory: {
        type: 'DDR4',
        size: '32 GB',
        speed: '2666 MHz',
      },

      storage: {
        type: 'SSD',
        size: '1 TB',
      },

      display: {
        size: '16 inches',
        resolution: '3072x1920',
        technology: 'Retina',
        color_space: 'P3',
        brightness: '500 nits',
        refresh_rate: '60 Hz',
      },

      graphics: {
        brand: 'AMD',
        model: 'Radeon Pro 5500M',
        memory: '4 GB GDDR6',
      },

      ports: [
        {
          type: 'Thunderbolt 3',
          count: 4,
          features: [
            'Charging',
            'DisplayPort',
            'Thunderbolt (up to 40 Gbps)',
            'USB 3.1 Gen 2 (up to 10 Gbps)',
          ],
        },
        {
          type: 'HDMI',
          count: 1,
        },
      ],

      battery: {
        type: 'Lithium Polymer',
        capacity: '100 Wh',
        life: 'Up to 11 hours',
      },

      weight: '4.3 pounds',

      dimensions: {
        height: '0.64 inch',
        width: '14.09 inches',
        depth: '9.68 inches',
      },

      operating_system: 'macOS',

      accessories: [
        { name: 'Apple Magic Keyboard', price: 99.99 },
        { name: 'Apple Magic Mouse 2', price: 79.99 },
        { name: 'USB-C to USB Adapter', price: 19.99 },
      ],
    },
  })
})

// ----------------------------------------
//  FACEBOOK
// ----------------------------------------
router.get('/facebook', function (req, res) {
  res.render('facebook', {
    page: { title: 'Facebook demo' },

    name: 'Facebook',

    users: [
      {
        id: 1,
        name: 'John Doe',
        gender: 'Male',
        age: 30,

        friends: [
          {
            id: 2,
            name: 'Jane Smith',
            gender: 'Female',
            age: 27,

            mutual_friends: [
              {
                id: 4,
                name: 'Samantha Lee',
                gender: 'Female',
                age: 25,
              },
            ],
          },
          {
            id: 5,
            name: 'Mike Williams',
            gender: 'Male',
            age: 28,

            mutual_friends: [
              {
                id: 7,
                name: 'David Kim',
                gender: 'Male',
                age: 29,
              },
            ],
          },
        ],

        groups: [
          {
            id: 1,
            name: 'Hiking Enthusiasts',
            description:
              'A group for people who love hiking and the great outdoors',

            members: [
              {
                id: 8,
                name: 'Sarah Johnson',
                gender: 'Female',
                age: 25,
              },
            ],
          },
          {
            id: 2,
            name: 'Foodies United',
            description:
              'A group for food lovers to share recipes and restaurant recommendations',

            members: [
              {
                id: 5,
                name: 'Mike Williams',
                gender: 'Male',
                age: 28,
              },
              {
                id: 8,
                name: 'Sarah Johnson',
                gender: 'Female',
                age: 25,
              },
            ],
          },
        ],
      },

      {
        id: 16,
        name: 'Amy Lee',
        gender: 'Female',
        age: 30,

        friends: [
          {
            id: 15,
            name: 'Peter Kim',
            gender: 'Male',
            age: 32,

            mutual_friends: [
              {
                id: 17,
                name: 'David Chen',
                gender: 'Male',
                age: 33,
              },
              {
                id: 19,
                name: 'Erica Wong',
                gender: 'Female',
                age: 29,

                mutual_friends: [
                  {
                    id: 20,
                    name: 'Alex Lee',
                    gender: 'Male',
                    age: 31,
                  },
                ],
              },
            ],

            groups: [
              {
                id: 3,
                name: 'Travel Addicts',
                description:
                  'A group for people who love to travel and explore new places',

                members: [
                  {
                    id: 22,
                    name: 'Jackie Chen',
                    gender: 'Female',
                    age: 26,
                  },
                ],
              },
              {
                id: 4,
                name: 'Pet Lovers',
                description: 'A group for people who love their furry friends',

                members: [
                  {
                    id: 16,
                    name: 'Amy Lee',
                    gender: 'Female',
                    age: 30,
                  },
                  {
                    id: 25,
                    name: 'John Smith',
                    gender: 'Male',
                    age: 33,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  })
})

// ----------------------------------------
//  BOOTSTRAP
// ----------------------------------------
router.get('/bootstrap', (req, res) => {
  res.render('bootstrap', {})
})

// ----------------------------------------
//  CONTENT
// ----------------------------------------
router.get('/content', (req, res) => {
  res.render('content', {
    // ---- HERO / MAIN SECTIONS ----
    sections: [
      {
        title: 'JavaScript',
        text: 'JavaScript is a popular high-level, dynamic, and interpreted programming language.',
        buttons: {
          primary: { text: 'Open page', color: 'btn-primary' },
          secondary: { text: 'Add to cart', color: 'btn-outline-secondary' },
        },
      },
      {
        title: 'Stack Overflow',
        text: 'First-class functions',
        buttons: {
          primary: { text: 'Open page', color: 'btn-success' },
          secondary: { text: 'Add to cart', color: 'btn-outline-warning' },
        },
      },
      {
        title: 'JavaScript Weekly',
        text: 'Prototype-based inheritance newsletter',
        buttons: {
          primary: { text: 'Open page', color: 'btn-danger' },
          secondary: { text: 'Add to cart', color: 'btn-outline-info' },
        },
      },
    ],

    // ---- NESTED CONTENT BLOCK ----
    nested: {
      parent: {
        title: 'HTML',
        subtitle: 'Outdated HTML tags',
        text: 'Tags that have been identified...',
        button: { text: 'Learn more', color: 'btn-outline-warning' },
      },
      child: {
        title: 'Sections',
        button: { text: 'Open', color: 'btn-info' },
      },
    },

    // ---- PARAGRAPH WITH LINKS ----
    paragraph: {
      title: 'About modules',
      text: 'Modules with import/export statements',
      button: {
        text: 'Open link page',
        url: 'https://google.com',
      },
      links: [
        { text: 'Github', url: 'https://github.com/' },
        { text: 'Bootstrap', url: 'https://getbootstrap.com/' },
      ],
    },
  })
})

// ----------------------------------------
//  COMPANY
// ----------------------------------------
router.get('/company', (req, res) => {
  res.render('company', {
    hero: {
      title: 'InnovaMind',
      description: 'Welcome to our wonderful community',
    },

    about: {
      title: 'InnovaMind',
      subtitle:
        'InnovaMind is a forward-thinking startup focused on innovation. We are dedicated to creating efficient and powerful software through the use of first-class functions.',
      button: { text: 'Show more', color: 'btn-outline-info' },
    },

    advantages: {
      title: 'Advantage',
      items: [
        {
          title: 'Efficiency',
          subtitle: 'Streamline your software development',
          text: 'Streamline your software development with our innovative platform...',
          align: 'text-start',
          button: { text: 'Show more', color: 'btn-outline-warning' },
        },
        {
          title: 'Innovation',
          subtitle: 'Forward-thinking approach to programming',
          text: 'Stay ahead of the curve with our forward-thinking approach to programming...',
          align: 'text-center',
          button: { text: 'Show more', color: 'btn-outline-warning' },
        },
        {
          title: 'Collaboration',
          subtitle: 'Connect with like-minded developers',
          text: 'Connect with a community of like-minded developers to share knowledge and insights...',
          align: 'text-end',
          button: { text: 'Show more', color: 'btn-outline-warning' },
        },
      ],
    },

    agreement: {
      title: 'Terms of use',
      subtitle: 'Check out our requirements',

      text: 'By using or accessing the service, you agree to be bound by the terms and conditions outlined in the agreement.',
      button: { text: 'Accept', color: 'btn-success' },
    },
  })
})

// ----------------------------------------
//  OVERVIEW
// ----------------------------------------
router.get('/overview', (req, res) => {
  res.render('overview', {
    navigation: {
      links: [
        { text: 'Home', href: 'https://github.com/' },
        { text: 'Contacts', href: 'https://www.google.com/' },
        { text: 'Help', href: 'https://www.youtube.com/' },
      ],
      action: {
        text: 'Start',
        href: 'https://nodejs.org/en/',
        color: 'btn-primary',
      },
    },

    hero: {
      title: 'Welcome to Our Website',
      description:
        'We offer innovative solutions to help grow your business. Our team of experts is committed to providing tailored strategies that deliver the best results.',
      button: {
        text: 'Learn more',
        href: 'https://www.youtube.com/',
        color: 'btn-primary',
      },
    },

    cities: {
      title: 'City list',
      items: [
        {
          image: {
            src: 'https://picsum.photos/400/200',
            alt: 'New York',
          },
          title: 'New York City',
          description:
            'New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean...',
          button: {
            text: 'Read',
            href: 'https://github.com/',
            color: 'btn-primary',
          },
        },
        {
          image: {
            src: 'https://picsum.photos/400/200',
            alt: 'Paris',
          },
          title: 'Paris',
          description:
            "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy, and culture...",
          button: {
            text: 'Read',
            href: 'https://github.com/',
            color: 'btn-primary',
          },
        },
        {
          image: {
            src: 'https://picsum.photos/400/200',
            alt: 'Tokyo',
          },
          title: 'Tokyo',
          description:
            'Tokyo, Japan’s bustling capital, mixes the ultramodern and the traditional...',
          button: {
            text: 'Read',
            href: 'https://github.com/',
            color: 'btn-primary',
          },
        },
        {
          image: {
            src: 'https://picsum.photos/400/200',
            alt: 'Sydney',
          },
          title: 'Sydney',
          description:
            "Sydney, capital of New South Wales and one of Australia's largest cities...",
          button: {
            text: 'Read',
            href: 'https://github.com/',
            color: 'btn-primary',
          },
        },
      ],
    },

    winners: {
      title: 'Our winners',
      table: {
        head: ['#', 'Name', 'Surname', 'Nickname'],
        rows: [
          {
            place: 1,
            name: 'Ada',
            surname: 'Lovelace',
            nickname: 'The Enchantress of Numbers',
          },
          {
            place: 2,
            name: 'Grace',
            surname: 'Hopper',
            nickname: 'Amazing Grace',
          },
          {
            place: 3,
            name: 'Katherine',
            surname: 'Johnson',
            nickname: 'The Human Computer',
          },
        ],
      },
    },

    gallery: {
      title: 'Picture history',
      items: [
        {
          name: 'The Mona Lisa',
          details: ['Painting', 'Oil on poplar panel', '1503–1519'],
        },
        {
          name: 'The Persistence of Memory',
          details: ['Painting', 'Oil on canvas', '1931'],
        },
        {
          name: 'The Starry Night',
          details: ['Painting', 'Oil on canvas', '1889'],
        },
      ],
    },

    lifestyle: {
      title: 'Relax',
      cards: [
        {
          header: 'Meditation',
          title: 'The Benefits of Meditation',
          description:
            'Meditation can help reduce stress, anxiety, and depression...',
        },
        {
          header: 'Hydration',
          title: 'The Importance of Hydration',
          description: 'Drinking enough water is essential for good health...',
        },
        {
          header: 'Yoga',
          title: 'The Benefits of Yoga',
          description: 'Yoga can improve flexibility, strength, and balance...',
        },
        {
          header: 'Sunscreen',
          title: 'The Importance of Sunscreen',
          description:
            "Protecting your skin from the sun's harmful rays is crucial...",
        },
      ],
    },

    articles: {
      cards: [
        {
          header: 'Cooking',
          title: 'The Joy of Cooking',
          description:
            'Cooking is a creative outlet that can bring people together...',
          button: 'Learn more',
          footer: 'Photo by Brooke Lark on Unsplash',
        },
        {
          header: 'Travel',
          title: 'The Benefits of Traveling',
          description:
            'Traveling broadens your perspective and creates memories...',
          button: 'Explore',
          footer: 'Photo by Sime Basioli on Unsplash',
        },
      ],
    },

    propositions: {
      title: 'Proposition',
      items: [
        {
          header: 'Our approach',
          title: 'Innovative Solutions for Your Business',
          description:
            'We create effective solutions that cater to your business needs.',
        },
        {
          header: 'Our expertise',
          title: 'Trusted and Experienced Professionals',
          description:
            'Our team of experts delivers tailored strategies for best results.',
        },
      ],
    },

    footer: {
      title: 'Navigation',
      links: [
        { text: 'Home', href: 'https://github.com/', color: 'btn-link' },
        {
          text: 'Contacts',
          href: 'https://www.google.com/',
          color: 'btn-link',
        },
        { text: 'Help', href: 'https://www.youtube.com/', color: 'btn-link' },
      ],
      social: [
        {
          name: 'Facebook',
          href: 'https://www.facebook.com/',
          color: 'btn-outline-dark',
        },
        {
          name: 'Twitter',
          href: 'https://twitter.com/',
          color: 'btn-outline-dark',
        },
        {
          name: 'Instagram',
          href: 'https://www.instagram.com/',
          color: 'btn-outline-dark',
        },
      ],
      partners: [
        {
          name: 'Acme Inc.',
          href: 'https://www.acme.com/',
          color: 'btn-outline-info',
        },
        {
          name: 'Globex Corporation',
          href: 'https://www.globex.com/',
          color: 'btn-outline-info',
        },
        {
          name: 'Stark Industries',
          href: 'https://www.starkindustries.com/',
          color: 'btn-outline-info',
        },
      ],
    },
  })
})

// ----------------------------------------
// SHOP PAGE
// ----------------------------------------
router.get('/shop', (req, res) => {
  res.render('shop', {
    // ---------------- NAVIGATION ----------------
    navigation: {
      links: [
        { text: 'Home', href: 'https://github.com/' },
        { text: 'Contacts', href: 'https://www.google.com/' },
        {
          text: 'Help',
          href: 'https://www.youtube.com/',
          class: 'nav-link is-disabled',
        },
      ],
    },

    // ---------------- NEWS ----------------
    news: {
      title: 'Latest News',
      items: [
        {
          title: 'COVID-19 Vaccinations Begin in Europe',
          description:
            'As the world continues to grapple with the ongoing COVID-19 pandemic...',

          tags: [],
        },

        {
          title: 'Tesla Stock Surges After Record Sales',
          description:
            "Tesla's stock price jumps 10% following the company's announcement...",

          tags: [
            {
              label: 'top',
              color: 'success',
              isRounded: true,
            },
            {
              label: 'new',
              color: 'danger',
              isRounded: true,
            },
          ],
        },

        {
          title: 'New Study Shows Benefits of Meditation for Mental Health',
          description:
            'A new study published in the Journal of the American Medical Association...',

          tags: [],
        },

        {
          title: 'NASA Launches New Mars Rover',
          description:
            "NASA's Perseverance rover successfully launches on a mission...",

          tags: [
            {
              label: 'new',
              color: 'danger',
              isRounded: true,
            },
          ],
        },

        {
          title: 'UK Announces Plan to Ban Sale of Gas-Powered Cars by 2030',
          description:
            'In an effort to combat climate change, the UK government announces...',

          tags: [
            {
              label: 'top',
              color: 'success',
              isRounded: true,
            },
          ],
        },
      ],
    },

    // ---------------- PRODUCTS ----------------
    products: {
      tabs: [
        { text: 'Electronics', active: true },
        { text: 'Home & Kitchen' },
        { text: 'Clothing & Accessories' },
        { text: 'Toys & Games', disabled: true },
      ],
      items: [
        {
          image: 'https://picsum.photos/400/200',
          alternative: 'iPhone 13',
          title: 'iPhone 13',
          description:
            'The latest iPhone model features a new A15 Bionic chip...',
          badges: [],
        },
        {
          image: 'https://picsum.photos/400/200',
          alternative: 'MacBook Pro',
          title: 'MacBook Pro',
          description:
            "Apple's high-end laptop features a 16-inch Retina display...",
          badges: [
            {
              label: 'hot',
              color: 'primary',
              isRounded: true,
            },
          ],
        },
        {
          image: 'https://picsum.photos/400/200',
          alternative: 'Bose SoundLink Revolve+',
          title: 'Bose SoundLink Revolve+',
          description:
            'This portable Bluetooth speaker features 360-degree sound...',
          badges: [
            {
              label: 'hot',
              color: 'warning',
              isRounded: true,
            },

            {
              label: 'new',
              color: 'primary',
              isRounded: true,
            },
          ],
        },
      ],
    },

    // ---------------- SUBSCRIBE ----------------
    subscribe: {
      title: 'Unlock Premium Content',
      description: 'Subscribe to access exclusive content and features.',
      actions: [
        {
          text: 'Register Now',
          href: 'https://www.youtube.com/',
          color: 'btn-primary',
        },
        {
          text: 'Buy Subscription',
          href: 'https://www.youtube.com/',
          color: 'btn-primary',
        },
      ],
    },

    // ---------------- SERVICES ----------------
    services: {
      title: 'Our Services',
      description: 'We offer a variety of services to meet your needs...',
      actions: [
        {
          text: 'Show More',
          href: 'https://www.youtube.com/',
          color: 'btn-primary',
        },
      ],
    },

    // ---------------- FOOTER ----------------
    footer: {
      columns: [
        {
          items: [
            { text: 'Home', href: 'https://www.youtube.com/' },
            { text: 'Trending', href: 'https://www.youtube.com/feed/trending' },
            {
              text: 'Subscriptions',
              href: 'https://www.youtube.com/feed/subscriptions',
            },
          ],
        },
        {
          items: [
            { text: 'History', href: 'https://www.youtube.com/feed/history' },
            {
              text: 'Your Videos',
              href: 'https://www.youtube.com/feed/my_videos',
            },
            { text: 'Live', href: 'https://www.youtube.com/live' },
          ],
        },
        {
          items: [
            { text: 'Music', href: 'https://www.youtube.com/music' },
            { text: 'Gaming', href: 'https://www.youtube.com/gaming' },
            { text: 'Learning', href: 'https://www.youtube.com/learning' },
          ],
        },
      ],
    },
  })
})

// ----------------------------------------
// CHECKOUT
// ----------------------------------------
router.get('/checkout', (req, res) => {
  res.render('checkout', {
    // ---------------- NAVIGATION ----------------
    navigation: {
      links: [
        { text: 'Home', href: 'https://github.com/' },
        { text: 'Contacts', href: 'https://www.google.com/' },
        { text: 'Help', href: 'https://www.youtube.com/' },
        {
          text: 'Exit',
          href: null,
          class: 'is-disabled',
        },
      ],
    },

    // ---------------- PAGE HERO ----------------
    hero: 'Оформлення замовлення',

    // ---------------- CONTACTS ----------------
    contacts: {
      title: 'Контактні дані',

      actions: [
        { text: 'Я новий покупець', isPrimary: true },
        { text: 'Я постійний покупець', isOutline: true },
      ],

      form: {
        fields: {
          surname: {
            label: 'Прізвище',
            placeholder: 'Іванов',
            caption: 'Введіть прізвище',
          },
          name: {
            label: 'Ім’я',
            placeholder: 'Іван',
            caption: 'Введіть імʼя',
          },
          phone: {
            label: 'Мобільний телефон',
            placeholder: '+38 (XXX) XXX XX XX',
            caption: 'Введіть телефон',
          },
          email: {
            label: 'Пошта',
            placeholder: 'ivanivanov@ukr.net',
            caption: 'Введіть пошту',
          },
        },

        options: [
          {
            text: 'Отримувати інформацію про новинки',
            isActive: false,
          },
          {
            text: 'Отримувати інформацію про знижки',
            isActive: true,
          },
        ],
      },
    },

    // ---------------- QUICK ACTIONS ----------------
    actions: [
      { text: 'Швидке замовлення', isSuccess: true },
      { text: 'Видалити', isDanger: true },
      { text: 'Детальніше', isInfo: true },
    ],

    // ---------------- ORDER SUMMARY ----------------
    summary: {
      title: 'Всього',

      items: [
        { name: 'Ноут:', price: '25 000 ₴' },
        { name: 'Мишка:', price: '25 000 ₴' },
        { name: 'Клава:', price: '25 000 ₴' },
      ],

      info: [
        { text: 'Всього товарів:', value: '75 000 ₴' },
        { text: 'Купони:', value: 'Немає' },
        { text: 'Доставка:', value: 'Безкоштовно' },
      ],

      total: {
        text: 'Всього товарів',
        value: '75 000 ₴',
      },

      actions: [
        { text: 'Підтвердити замовлення', isPrimary: true },
        { text: 'Відмінити купони', isOutline: true },
      ],
    },

    // ---------------- DELIVERY ----------------
    delivery: {
      title: 'Доставка',

      selects: [
        {
          label: 'Місто доставки',
          placeholder: 'Оберіть місто доставки',
          options: [
            { value: '1', text: 'Київ' },
            { value: '2', text: 'Харків' },
            { value: '3', text: 'Одеса' },
            { value: '4', text: 'Львів' },
            { value: '5', text: 'Дніпро' },
            { value: '6', text: 'Донецьк' },
          ],
        },
        {
          label: 'Район доставки',
          placeholder: 'Оберіть район доставки',
          options: [
            { value: '1', text: 'Голосіївський' },
            { value: '2', text: 'Оболонський' },
            { value: '3', text: 'Печерський' },
            { value: '4', text: 'Дарницький' },
            { value: '5', text: 'Деснянський' },
            { value: '6', text: 'Подільський' },
          ],
        },
      ],

      methods: [
        { type: 'Самовивіз з відділення Нової пошти' },
        { type: 'Кур’єром Нової пошти' },
        { type: 'Самовивіз з магазину' },
        { type: 'Доставка закордон' },
      ],

      payment: {
        title: 'Оплата',
        options: [
          {
            type: 'Оплата при отриманні',
            description: 'За тарифами перевізника',
          },
          { type: 'Оплатити зараз' },
        ],
      },

      recipient: {
        title: 'Контактні дані отримувача',

        fields: {
          surname: {
            label: 'Прізвище',
            placeholder: 'Іванов',
            caption: 'Введіть прізвище',
          },
          name: {
            label: 'Ім’я',
            placeholder: 'Іван',
            caption: 'Введіть імʼя',
          },
          phone: {
            label: 'Мобільний телефон',
            placeholder: '+38 (XXX) XXX XX XX',
            caption: 'Введіть телефон',
          },
          email: {
            label: 'Пошта',
            placeholder: 'ivanivanov@ukr.net',
            caption: 'Введіть пошту',
          },
        },

        comment: {
          label: 'Коментар',
          placeholder: 'Я хочу, щоб...',
        },
      },
    },

    // ---------------- COUPONS ----------------
    coupons: {
      title: 'Купони',

      selects: {
        available: {
          label: 'Наявні купони',
          placeholder: 'Виберіть купон',
          options: [
            { value: '1', text: 'SEEYALATER' },
            { value: '2', text: 'HOTEL10' },
            { value: '3', text: 'DOWNLOAD25' },
          ],
        },
        friends: {
          label: 'Купони за запрошених друзів',
          placeholder: 'Виберіть купон',
          options: [
            { value: '1', text: 'TRAVEL5' },
            { value: '2', text: '75VACA' },
            { value: '3', text: '150VACA' },
          ],
        },
      },

      invite: {
        friends: {
          label: 'Запросіть друзів та отримайте ще купонів',
          placeholder: 'Введіть контактні дані друзів через ;',
          caption: 'Напишіть електронні адреси / телефони друзів через “;”',
        },
        colleagues: {
          label: 'Запросити колег',
          placeholder: 'Введіть контактні дані колег через ;',
          caption: 'Напишіть електронні адреси / телефони колег через “;”',
        },
      },
    },

    // ---------------- QUIZ ----------------
    quiz: {
      title: 'Допоможи краще нам тебе зрозуміти',

      preference: {
        title: 'Який тип обладнання ви зацікавлені в придбанні?',
        options: ['Смартфони', 'Ноутбуки', 'Планшети', 'ПК', 'Телевізори'],
      },

      experience: {
        label: 'Який у Вас досвід користування ПК',
      },

      frequency: {
        label: 'Як часто ви купуєте обладнання?',
        placeholder: 'Оберіть варіант',
        options: [
          { value: '1', text: 'Раз в тиждень' },
          { value: '2', text: 'Раз в місяць' },
          { value: '3', text: 'Раз в рік' },
        ],
      },

      factors: {
        title: 'Які фактори для вас важливі при купівлі обладнання?',
        options: [
          'Ціна',
          'Репутація бренду',
          'Якість',
          'Особливості',
          'Гарантія',
          'Доступність',
          'Обслуговування клієнтів',
        ],
      },
    },

    // ---------------- FOOTER ----------------
    footer: {
      columns: [
        {
          items: [
            { text: 'Home', href: 'https://www.youtube.com/' },
            { text: 'Trending', href: 'https://www.youtube.com/feed/trending' },
            {
              text: 'Subscriptions',
              href: 'https://www.youtube.com/feed/subscriptions',
            },
            { text: 'Library', href: 'https://www.youtube.com/feed/library' },
          ],
        },
        {
          items: [
            { text: 'History', href: 'https://www.youtube.com/feed/history' },
            {
              text: 'Your Videos',
              href: 'https://www.youtube.com/feed/my_videos',
            },
            { text: 'Live', href: 'https://www.youtube.com/live' },
            { text: 'Settings', href: 'https://www.youtube.com/account' },
          ],
        },
        {
          items: [
            {
              text: 'Watch Later',
              href: 'https://www.youtube.com/playlist?list=WL',
            },
            {
              text: 'Liked Videos',
              href: 'https://www.youtube.com/playlist?list=LL',
            },
            { text: 'Music', href: 'https://www.youtube.com/music' },
            { text: 'Gaming', href: 'https://www.youtube.com/gaming' },
          ],
        },
      ],
    },
  })
})

// ================================================================
// CART PAGE
// ================================================================
router.get('/cart', function (req, res) {
  res.render('cart', {
    // ---------------- NAVIGATION ----------------
    navigation: {
      links: [
        { text: 'Home', href: 'https://github.com/' },
        { text: 'Contacts', href: 'https://www.google.com/' },
        { text: 'Help', href: 'https://www.youtube.com/' },
        {
          text: 'Exit',
          href: null,
          class: 'is-disabled',
        },
      ],
    },

    // ---------------- PAGE HERO ----------------
    hero: {
      title: 'Кошик',
      button: {
        text: 'Продовжити покупки',
        link: 'https://www.youtube.com/',
        color: 'btn-outline-dark',
      },
    },

    // ---------------- CART GOODS ----------------
    goodsBlock: [
      {
        image: 'https://picsum.photos/110/110',
        name: 'Samsung Galaxy S21 Ultra',
        description:
          'екран 6.8", процесор Exynos 2100/Snapdragon 888, 12 ГБ ОЗУ, камера 108 МП, акумулятор 5000 мАг',
        price: { title: 'Ціна:', value: '25 000 ₴' },
        amount: '1 шт.',
        buttons: [
          { text: 'Додати', isPrimary: true },
          { text: 'Видалити', isDanger: true },
        ],
      },

      {
        image: 'https://picsum.photos/110/110',
        name: 'Ноутбук Dell XPS 13',
        description:
          'екран 13.3", процесор Intel Core i7-1165G7, 16 ГБ ОЗУ, SSD 512 ГБ, вага 1.2 кг',
        price: { title: 'Ціна:', value: '25 000 ₴' },
        amount: '1 шт.',
        buttons: [
          { text: 'Додати', isPrimary: true },
          { text: 'Видалити', isDanger: true },
        ],
      },
    ],

    // ---------------- TOTAL ----------------
    total: {
      title: 'Сума замовлення',
      amount: '75 000 ₴',
      delivery: 'Без доставки',
      buttons: [
        {
          text: 'Оформити замовлення',
          link: 'https://www.youtube.com/',
          isSuccess: true,
        },
        {
          text: 'Оформити кредит',
          link: 'https://www.youtube.com/',
          isOutline: true,
        },
      ],
    },

    // ---------------- OTHER GOODS ----------------
    goodsOtherBlock: {
      title: 'See other products',
      cards: [
        {
          image: 'https://picsum.photos/400/200',
          title: 'MacBook Pro',
          description: '16" Retina, M1 Pro / M1 Max, до 64GB RAM',
          isHot: true,
          isNew: true,
        },

        {
          image: 'https://picsum.photos/400/200',
          title: 'MacBook Air M2',
          description: '13.6" Retina, M2 chip, 8GB RAM, 256GB SSD',
          isHot: false,
          isNew: true,
        },
      ],
    },

    // ---------------- SUBSCRIBE ----------------
    subscribe: {
      title: 'Unlock Premium Content',
      description: 'Subscribe to access exclusive content and features.',
      buttons: [
        {
          text: 'Register Now',
          color: 'btn-primary',
          link: 'https://www.youtube.com/',
        },
        {
          text: 'Buy Subscription',
          color: 'btn-primary',
          link: 'https://www.youtube.com/',
        },
      ],
    },

    // ---------------- FOOTER ----------------
    footer: {
      columns: [
        {
          items: [
            { text: 'Home', href: 'https://www.youtube.com/' },
            { text: 'Trending', href: 'https://www.youtube.com/feed/trending' },
            {
              text: 'Subscriptions',
              href: 'https://www.youtube.com/feed/subscriptions',
            },
            { text: 'Library', href: 'https://www.youtube.com/feed/library' },
          ],
        },
        {
          items: [
            { text: 'History', href: 'https://www.youtube.com/feed/history' },
            {
              text: 'Your Videos',
              href: 'https://www.youtube.com/feed/my_videos',
            },
            { text: 'Live', href: 'https://www.youtube.com/live' },
            { text: 'Settings', href: 'https://www.youtube.com/account' },
          ],
        },
        {
          items: [
            {
              text: 'Watch Later',
              href: 'https://www.youtube.com/playlist?list=WL',
            },
            {
              text: 'Liked Videos',
              href: 'https://www.youtube.com/playlist?list=LL',
            },
            { text: 'Music', href: 'https://www.youtube.com/music' },
            { text: 'Gaming', href: 'https://www.youtube.com/gaming' },
          ],
        },
      ],
    },
  })
})

// ================================================================
// PRODUCT REVIEWS PAGE
// ================================================================
router.get('/product-reviews', (req, res) => {
  res.render('product-reviews', {
    // ---------------- NAVIGATION ----------------
    navigation: {
      links: [
        { text: 'Home', href: 'https://github.com/' },
        { text: 'Contacts', href: 'https://www.google.com/' },
        { text: 'Help', href: 'https://www.youtube.com/' },
        {
          text: 'Exit',
          href: null,
          class: 'is-disabled',
        },
      ],
    },

    // ---------------- PAGE HEADER ----------------
    page: {
      title: 'Відгуки покупців про ноутбук',
      rating: {
        label: 'Оцінка',
        value: '4.5/5',
      },
    },

    // ---------------- TABS & ACTIONS ----------------
    actions: {
      tabs: [
        { text: 'Про товар' },
        { text: 'Характеристики' },
        { text: 'Відгуки', isActive: true },
      ],
      reviewCta: {
        title: 'Залиште відгук про товар',
        button: {
          text: 'Написати відгук',
          link: 'https://www.youtube.com/',
          variant: 'btn-secondary',
        },
      },
    },

    // ---------------- FEEDBACK FILTER ----------------
    feedback: {
      title: 'Хочете поділитись своєю думкою про наш магазин?',
      buttons: [
        {
          text: 'Додати відгук',
          variant: 'btn-warning',
          link: 'https://www.youtube.com/',
        },
        {
          text: 'Позитивні відгуки',
          variant: 'btn-success',
          link: 'https://www.youtube.com/',
        },
        {
          text: 'Негативні відгуки',
          variant: 'btn-danger',
          link: 'https://www.youtube.com/',
        },
      ],
    },

    // ---------------- PRODUCT INFO ----------------
    product: {
      image: 'https://picsum.photos/110/100',
      name: 'Ноутбук Asus',
      price: '25 000 ₴',
      inStock: true,
      actions: [
        {
          text: 'Купити',
          variant: 'btn-primary',
          link: 'https://www.youtube.com/',
        },
        {
          text: 'Купити в кредит',
          variant: 'btn-secondary',
          link: 'https://www.youtube.com/',
        },
      ],
      seller: {
        label: 'Продавець',
        name: 'Machinery',
      },
    },

    // ---------------- REVIEWS ----------------
    reviews: [
      {
        author: 'Іван Іванов',
        role: 'Відгук покупця',
        date: '1 січня 2023',
        rating: '5/5',
        label: 'Продавець',
        seller: 'Machinery',
        content: [
          'Цей ноутбук має гарний дизайн та добре виконує свої основні функції.',
          'Можливі проблеми з перегрівом та ємністю жорсткого диска.',
        ],
        pros: 'Дизайн, швидкість роботи, акумулятор',
        cons: 'Перегрів, ємність диску',
        images: [
          'https://picsum.photos/110/100',
          'https://picsum.photos/110/100',
          'https://picsum.photos/110/100',
        ],
        comments: [
          {
            user: 'Користувач',
            date: '1 січня 2023',
            text: 'Дякую за відгук!',
          },
          {
            user: 'Користувач',
            date: '3 січня 2023',
            text: 'Допомогло зробити вибір.',
          },
        ],
      },

      {
        author: 'Петро Петров',
        role: 'Відгук покупця',
        date: '1 січня 2023',
        rating: '5/5',
        label: 'Продавець',
        seller: 'Machinery',
        content: ['Гарний дизайн і хороша продуктивність.'],
        pros: 'Акумулятор',
        cons: 'Не виявлено',
        images: ['https://picsum.photos/110/100'],
        comments: [
          {
            user: 'Користувач',
            date: '1 січня 2023',
            text: 'Корисно, дякую!',
          },
        ],
      },
    ],

    // ---------------- SERVICES ----------------
    services: {
      title: 'Our Services',
      description: 'We offer a variety of services to meet your needs.',
      button: {
        variant: 'btn-primary',
        text: 'Show More',
        link: 'https://www.youtube.com/',
      },
    },

    // ---------------- FOOTER ----------------
    footer: {
      columns: [
        {
          items: [
            { text: 'Home', href: 'https://www.youtube.com/' },
            { text: 'Trending', href: 'https://www.youtube.com/feed/trending' },
            {
              text: 'Subscriptions',
              href: 'https://www.youtube.com/feed/subscriptions',
            },
            { text: 'Library', href: 'https://www.youtube.com/feed/library' },
          ],
        },
        {
          items: [
            { text: 'History', href: 'https://www.youtube.com/feed/history' },
            {
              text: 'Your Videos',
              href: 'https://www.youtube.com/feed/my_videos',
            },
            { text: 'Live', href: 'https://www.youtube.com/live' },
            { text: 'Settings', href: 'https://www.youtube.com/account' },
          ],
        },
      ],
    },
  })
})

// ================================================================
// Підключаємо роутер до бек-енду
module.exports = router

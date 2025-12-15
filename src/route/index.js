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
  res.render('index', {})
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

// ================================================================

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

// ================================================================
// Підключаємо роутер до бек-енду
module.exports = router

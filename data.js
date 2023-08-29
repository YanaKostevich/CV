const currentDate = new Date()
const data = {
    age: '33',
    photoPath: 'img/my-photo.jpg',
    gender: 'female',
    name: {
        firstName: 'yana',
        lastName: 'kostevych',
    },
    
    about: [
        // `So, a little about me. <br>`,
        `A motivated, determined, quick learner with strong interpersonal skils.`,
        `I have over 2 years of experience in web development, so I'm ready to provide developer services in almost any direction.`,
        `The main motivator for me is professional growth. Open for new opportunities to join a good team where I will evolve as a professional.`,
        
    ],
    phone: [
        '+380953990517',
    ],
    skills: [
        {
            name: 'HTML',
            experience: 2,
        },
        {
            name: 'CSS',
            experience: 2,
        },
        {
            name: 'JavaScript',
            experience: 2,
        },
        {
            name: 'CSS/SASS/LESS',
            experience: 2,
        },
        {
            name: 'Git',
            experience: 2,
        },
        {
            name: 'GitHub',
            experience: 2,
        },
        {
            name: 'Wordpress',
            experience: 1.5,
        },
        {
            name: 'PHP',
            experience: 1.5,
        },
        {
            name: 'Bootstrap',
            experience: 1,
        },
        {
            name: 'ACF',
            experience: 1.5,
        },
        {
            name: 'WPML',
            experience: 1.5,
        },
        {
            name: 'Elementor',
            experience: 1.5,
        },
        {
            name: 'Elementor Pro',
            experience: 1.5,
        },
        {
            name: 'Contact Form 7',
            experience: 1.5,
        },
        {
            name: 'WooCommerce',
            experience: 1,
        },
        {
            name: 'Figma',
            experience: 2,
        },
    ],
    socials: [
        {
            iconClass: 'fab fa-linkedin',
            href: 'https://www.linkedin.com/in/yana-kostevych-a56229262/',
        },
        {
            iconClass: 'fab fa-facebook',
            href: 'https://www.facebook.com/yasya.kost',
        }
    ],
    position: [
        'front-end developer',
        'WordPress Developer'
    ],
    education: {
        basic: [
            {
                name: `College of Natural Sciences and Humanities`,
                specialization: `Software engineering`,
                qualification: `Junior Specialist`,
                period: ['2015', '2019']
            },
            
        ]
    },
    languages: [
        {
            name: 'English',
            level: 'A2',
        },
        {
            name: 'Ukrainian',
            level: 'С2',
        },
        {
            name: 'Russian',
            level: 'С2',
        },
        {
            name: 'Czech',
            level: 'A2',
        },
    ],
    interests: [
        'developer trends',
        'programming',
        'electronics',
        'sport'
    ],
    messengers: [
        {
            href: 'https://t.me/yana_kossst',
            iconClass: 'fab fa-telegram',
        },
        
        {
            href: `https://wa.me/+380953990517`,
            iconClass: 'fab fa-whatsapp',
        },
    ],
    experience: [
        {
            period: ['May 2023', ''],
            workNow: true,
            companyName: `Remote Helpers, Kharkiv (IT)`,
            position: `Front-end | WordPress Developer`,
            description: `
            - Development of landing pages, online stores, and multi-page websites<br>
            - Bug fixing and troubleshooting<br>
            - WordPress development and customization<br>
            - WooCommerce development and customization<br>
            - Working with custom WordPress themes<br>
            - Creating themes from scratch<br>
            - Working with plugins like ACF, Contact Form 7, Polylang, WPML, Elementor, Elementor Pro<br>
            - Working with various WordPress plugins and creating custom solutions for WooCommerce.`,
        },
        {
            period: ['October 2022', 'May 2023'],
            workNow: true,
            companyName: `Self-employment`,
            position: `WordPress Developer`,
            description: `
            - Development of landing pages, online stores, and multi-page websites.<br>
            - Bug fixing and troubleshooting<br>
            - Support for existing projects<br>
            - Setting up online stores<br>
            - Optimizing and speeding up websites`,
        },
        {
            period: ['March 2022', 'October 2022'],
            workNow: false,
            companyName: `Webrex`,
            position: `Frontend Developer`,
            description: `
            - Creating different types of websites from a templates<br>
            - Filling sites with content and bug fixing<br>
            - Project support and urgent tasks`,
        },
        {
            period: ['October 2021', 'March 2022'],
            workNow: false,
            companyName: `WALKERS - Brand Creation Agency `,
            position: `Frontend Developer`,
            description: `
            - Creation of online stores and landing pages<br>
            - Assessed UX and UI designs for technical feasibility<br>
            - Project support and page speed optimization`,
        },
        
    ],

    makeMyStory() {
        return this.about ? `<h2>So, a little about me</h2> <p>${this.about.map(item => `${item} `).join(' ')}</p>` : '';
    },
    makeContacts() {
        return this.messengers.map
        (item => `<a href="${item.href}"><i class="${item.iconClass}"></i></a>`).join('');
    },
    makeSocialLinks() {
        return this.socials.map
        (item => `<a href="${item.href}"><i class="${item.iconClass}"></i></a>`).join('');
    },
    makeLanguages() {
        return this.languages.map
        (item => `<span class="lang-item">${item.name}<s>${item.level}</s></span>`).join('');
    },
    makeSkills() {
        return this.skills.map
        (item => `<span class="skill-item">${item.name}<s>${item.experience.toString()}</s></span>`).join('');
    },
    makeInterests() {
        return this.interests.map
        (item => `<span class="hobby-item">${item}</span>`).join('');
    },
    makeWorkExperience() {
        let experienceItems = '';
        let sortedItems = this.experience.sort(function (a, b) {
            const dateA = new Date(a.period[1]);
            const dateB = new Date(b.period[1]);
        
            if (dateA < dateB) {
                return 1;
            }
            if (dateA > dateB) {
                return -1;
            }
        });
        
        // let sortedItems = this.experience.sort(function (a, b) {
        //     if (a.period[1] < b.period[1]) {
        //         return 1;
        //     }
        //     if (a.period[1] > b.period[1]) {
        //         return -1;
        //     }
        // });
        sortedItems.forEach(item => {
            experienceItems += `<h4>${item.companyName} <span>${item.period[0]} - ${item.workNow === true ? 'now' : item.period[1]}</span></h4>
                                <h5>${item.position}</h5>
                                <p>${item.description}</p>`
        })
        return experienceItems;

    },
    makeEducation() {
        let eduRow = `<h3>Basic</h3>`;
        let sortedItems = this.education.basic.sort(function (a, b) {
            if (a.period[1] < b.period[1]) {
                return 1;
            }
            if (a.period[1] > b.period[1]) {
                return -1;
            }
        });
        sortedItems.forEach(item => {
            eduRow +=
                `<div class="eduItem">
                    <h4>${item.name}<span>${item.period[0]} - ${item.period[1]}</span></h4>
                    <h5><span>Certification:</span> ${item.qualification}</h5>
                </div>`
        })

        let additional = `${this.education.additional
            ? `<h3>Additional</h3> ${this.education.additional.map(item =>
                `<div class="eduItem">
                    <h4>${item.name} <span>${item.period[0]} - ${item.period[1]}</span></h4>
                    <h5><span>Certification:</span> ${item.certification}</h5>
                </div>`).join('')}`
            : ``
        }`
        eduRow += additional;
        return eduRow;
    },
}
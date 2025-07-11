const educationHistory = [ 
    { id: 1, period: '2023 - Present', institution: 'Universitas  Amikom Yogyakarta', major: 'Bachelor of Computer Science' },
    { id: 2, period: '2020 - 2023', institution: 'SMA Katholik W.R. Soepratman', major: 'Senior High School (Science)' },
    { id: 3, period: '2017 - 2019' , institution: 'SMP Katholik W.R. Soepratman' , major: 'Junior High School'},
    { id: 4, period: '2011 - 2016' , institution: 'SD Katholik W.R. Soepratman' , major: 'Secondary School'}
];
const skills = [ { name: 'Vue.js', level: 'Beginner' }, { name: 'Python', level: 'Beginner' },
    { name: 'HTML', level: 'Advance' }, { name: 'Node.js', level: 'Beginner' },
    { name: 'CSS', level: 'Advance' }, { name: 'C++', level: 'Advance' },
    { name: 'Git & GitHub', level: 'Intermediate' }, { name: 'AdobePhotoshop', level: 'Intermediate' },
];
const projects = [ 
    { title: 'Yogyakarta Tourism Website', image: '../Images/JI.jpeg',
    description: 'Tourist Destination Website in Yogyakarta that can be selected based on criteria.', tech: ['Vue.js', 'Node.js',
    'Laravel'], link: '//' },
    { title: '//', image: '//',
    description: '//', tech: ['//', '//'], link: '//' }
];
module.exports = { educationHistory, skills, projects };
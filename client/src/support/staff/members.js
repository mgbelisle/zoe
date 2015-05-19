fs = require('fs');

var members = [
    {
        name: 'Jeanne Brown',
        position: 'Executive Director',
        img: '/static/img/staff/jeanne_brown.jpg',
        bio: fs.readFileSync(__dirname + '/bios/jeanne_brown.html', 'utf8')
    },
    {
        name: 'Barbara Eckstein',
        position: 'FNP, BC, Nurse Manager',
        img: '/static/img/staff/barbara_eckstein.jpg',
        bio: fs.readFileSync(__dirname + '/bios/barbara_eckstein.html', 'utf8')
    },
    {
        name: 'Cindy Nelson',
        position: 'Development Director',
        img: '/static/img/staff/cindy_nelson.jpg',
        bio: fs.readFileSync(__dirname + '/bios/cindy_nelson.html', 'utf8')
    },
    {
        name: 'Jane Phillips',
        position: 'RN',
        img: '/static/img/staff/jane_phillips.jpg',
        bio: fs.readFileSync(__dirname + '/bios/jane_phillips.html', 'utf8')
    },
    {
        name: 'Robin Cory',
        position: 'RN',
        img: '/static/img/staff/robin_cory.jpg',
        bio: fs.readFileSync(__dirname + '/bios/robin_cory.html', 'utf8')
    },
    {
        name: 'Kathy Webster',
        position: 'Client Advocate, Volunteer Coordinator & Trainer',
        img: '/static/img/staff/kathy_webster.jpg',
        bio: fs.readFileSync(__dirname + '/bios/kathy_webster.html', 'utf8')
    },
    {
        name: 'Deanne Fisher',
        position: 'Volunteer, Client Advocate and Reception',
        img: '/static/img/staff/deanne_fisher.jpg',
        bio: fs.readFileSync(__dirname + '/bios/deanne_fisher.html', 'utf8')
    },
    {
        name: 'Mary Springer',
        position: 'Patient Care',
        img: '/static/img/staff/mary_springer.jpg',
        bio: fs.readFileSync(__dirname + '/bios/mary_springer.html', 'utf8')
    },
    {
        name: 'Lisa Doerksen',
        position: '',
        img: '/static/img/staff/lisa_doerksen.jpg',
        bio: fs.readFileSync(__dirname + '/bios/lisa_doerksen.html', 'utf8')
    },
    {
        name: 'Gabor Benda',
        position: 'MD',
        img: '/static/img/staff/gabor_benda.jpg'
        // bio: fs.readFileSync(__dirname + '/bios/gabor_benda.html', 'utf8') // No bio
    }
];

module.exports = members;

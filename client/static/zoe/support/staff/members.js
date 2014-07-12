var members = [
    {
        name: 'Jeanne Brown',
        position: 'Executive Director',
        key: 'jeanne_brown'
    },
    {
        name: 'Barbara Eckstein',
        position: 'FNP, BC, Nurse Manager',
        key: 'barbara_eckstein'
    },
    {
        name: 'Cindy Nelson',
        position: 'Development Director',
        key: 'cindy_nelson'
    },
    {
        name: 'Jane Phillips',
        position: 'RN',
        key: 'jane_phillips'
    },
    {
        name: 'Robin Cory',
        position: 'RN',
        key: 'robin_cory'
    },
    {
        name: 'Kathy Webster',
        position: 'Client Advocate, Volunteer Coordinator & Trainer',
        key: 'kathy_webster'
    },
    {
        name: 'Andy Curry',
        position: 'Project Development & Program Coordinator',
        key: 'andy_curry'
    },
    {
        name: 'Alyssa Bryant',
        position: 'Administration',
        key: 'alyssa_bryant'
    },
    {
        name: 'Ann Knick',
        position: 'Patient Advocate and Reception',
        key: 'ann_knick'
    },
    {
        name: 'Deanne Fisher',
        position: 'Volunteer, Client Advocate and Reception',
        key: 'deanne_fisher'
    },
    {
        name: 'Mary Springer',
        position: 'Patient Care',
        key: 'mary_springer'
    },
    {
        name: 'Lisa Doerksen',
        position: '',
        key: 'lisa_doerksen'
    },
    {
        name: 'Quinn Pruett',
        position: 'Patient Care',
        key: 'quinn_pruett'
    },
    {
        name: 'Gabor Benda',
        position: 'MD',
        key: 'gabor_benda'
    }
];

$.each(members, function(i, member) {
    member.img = '/static' + __dirname + '/img/' + member.key + '.jpg';
    member.bio = '/static' + __dirname + '/bios/' + member.key + '.html';
    member.href = '/support/about/staff/' + member.key;
});

module.exports = members;

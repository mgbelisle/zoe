var members = [
    {
        name: 'Jeanne Brown',
        position: 'Executive Director',
        id: 'jeanne_brown'
    },
    {
        name: 'Barbara Eckstein',
        position: 'FNP, BC, Nurse Manager',
        id: 'barbara_eckstein'
    },
    {
        name: 'Cindy Nelson',
        position: 'Development Director',
        id: 'cindy_nelson'
    },
    {
        name: 'Jane Phillips',
        position: 'RN',
        id: 'jane_phillips'
    },
    {
        name: 'Robin Cory',
        position: 'RN',
        id: 'robin_cory'
    },
    {
        name: 'Kathy Webster',
        position: 'Client Advocate, Volunteer Coordinator & Trainer',
        id: 'kathy_webster'
    },
    {
        name: 'Andy Curry',
        position: 'Project Development & Program Coordinator',
        id: 'andy_curry'
    },
    {
        name: 'Alyssa Bryant',
        position: 'Administration',
        id: 'alyssa_bryant'
    },
    {
        name: 'Ann Knick',
        position: 'Patient Advocate and Reception',
        id: 'ann_knick'
    },
    {
        name: 'Deanne Fisher',
        position: 'Volunteer, Client Advocate and Reception',
        id: 'deanne_fisher'
    },
    {
        name: 'Mary Springer',
        position: 'Patient Care',
        id: 'mary_springer'
    },
    {
        name: 'Lisa Doerksen',
        position: '',
        id: 'lisa_doerksen'
    },
    {
        name: 'Quinn Pruett',
        position: 'Patient Care',
        id: 'quinn_pruett'
    },
    {
        name: 'Gabor Benda',
        position: 'MD',
        id: 'gabor_benda'
    }
];

$.each(members, function(i, member) {
    member.img = '/static' + __dirname + '/img/' + member.id + '.jpg';
    member.bio = '/static' + __dirname + '/bios/' + member.id + '.html';
});

module.exports = members;

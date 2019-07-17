const doctors = [
    {
        id: 0,
        firstName: 'Julius',
        lastName: 'Hibbert',
        email: 'hibbert@notablehealth.com',
        todos: [
            {
                id: 10,
                time: '8:00 AM',
                ptfN: 'Mary',
                ptlN: 'Smith',
                kind: 'Follow-up',
            },
            {
                id: 11,
                time: '8:30 AM',
                ptfN: 'Ray',
                ptlN: 'Gilette',
                kind: 'New Patient',
            },
            {
                id: 12,
                time: '9:00 AM',
                ptfN: 'Cindy',
                ptlN: 'Wang',
                kind: 'Follow-up',
            },
            {
                id: 13,
                time: '9:30 AM',
                ptfN: 'Pam',
                ptlN: 'Poovey',
                kind: 'New Patient',
            },
            {
                id: 14,
                time: '10:00 AM',
                ptfN: 'Jim',
                ptlN: 'Kane',
                kind: 'Follow-up',
            },
        ],
    },
    {
        id: 1,
        firstName: 'Kate',
        lastName: 'Lee',
        email: 'lee@notablehealth.com',
        todos: [
            {
                id: 15,
                time: '8:00 AM',
                ptfN: 'Jenny',
                ptlN: 'Smith',
                kind: 'Follow-up',
            },
            {
                id: 16,
                time: '8:30 AM',
                ptfN: 'Lu',
                ptlN: 'Gilette',
                kind: 'New Patient',
            },
            {
                id: 17,
                time: '9:00 AM',
                ptfN: 'Jane',
                ptlN: 'Zhang',
                kind: 'Follow-up',
            },
        ],
    },
    {
        id: 2,
        firstName: 'Rivera',
        lastName: 'Nick',
        email: 'nick@notablehealth.com',
        todos: [
            {
                id: 18,
                time: '8:00 AM',
                ptfN: 'Lucy',
                ptlN: 'Wang',
                kind: 'Follow-up',
            },
            {
                id: 19,
                time: '8:30 AM',
                ptfN: 'Lily',
                ptlN: 'Kane',
                kind: 'New Patient',
            },
            {
                id: 20,
                time: '9:00 AM',
                ptfN: 'Pam',
                ptlN: 'Liu',
                kind: 'Follow-up',
            },
        ],
    },
];

module.exports = { doctors };

const Engineer = require('../lib/Engineer')

test('check to see if Engineer exists', () => {
    const engineer = new Engineer ('Jim', 7, 'jim@jim.com')

    expect(engineer.name).toBe('Jim')
    expect(engineer.id).toEqual(7)
    expect(engineer.email).toBe('jim@jim.com');
})

test('check to see if correct role', () => {
    const engineer = new Engineer ('Jim')

    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'))
});

test('check to see if can getUsername and id', () => {
    const engineer = new Engineer ('Jim', 1, 'jim@aol.com', 'jimbotron')

    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'))
    expect(engineer.getId()).toEqual('1')
});
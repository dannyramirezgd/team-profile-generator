const Intern = require('../lib/Intern')

test('check to see if intern exists', () => {
    const intern = new Intern ('Allie', 5, 'allie@allie.com')

    expect(intern.name).toBe('Allie')
    expect(intern.id).toEqual(5)
    expect(intern.email).toBe('allie@allie.com')
})

test('check to see if correct role', () => {
    const intern = new Intern ('Mleh')

    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'))
})
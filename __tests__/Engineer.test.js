const Employee = require('../lib/Employee')
const Engineer = require('../lib/Engineer')

test('check to see if Engineer exists', () => {
    const engineer = new Engineer ('Jim')

    expect(engineer.name).toBe('Jim')
})
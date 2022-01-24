const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee')

test('checks to see if Employee exists', () => {
    const employee = new Employee('Jim', 7, 'jim@jim.com');

    expect(employee.name).toBe('Jim');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('jim@jim.com')
})

test('gets employee name as string', () =>{
    const employee = new Employee('Dave');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name));
})

test('gets employee email as string', () =>{
    const employee = new Employee ('Alfred', 9, "alfred@alfred.com")

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email));
})
// test('check to see employee role', () => {
//     const employee = new Employee('Jon', 10, 'ihatethis@good.com')

//     expect(employee.id)
// })


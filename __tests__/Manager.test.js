const Manager = require('../lib/Manager')

test('check to see if manager exists', () => {
    const manager = new Manager ('Mabel', 1, 'mabel@themanager.com')

    expect(manager.name).toBe('Mabel')
    expect(manager.id).toEqual(1);
    expect(manager.email).toBe('mabel@themanager.com')
})

test('check for correct role',() => {
    const manager = new Manager ('Mjolnir');

    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
})

test('check for office number', () => {
    const manager = new Manager ('mjolnir', 2, 'email.com', 123)

    expect(manager.office).toEqual(123);
})

test('check for correct role',() => {
    const manager = new Manager ('Mjolnir', 7, 'thor@ragnarok.com', 123);

    expect(manager.getOffice()).toEqual('123');
})
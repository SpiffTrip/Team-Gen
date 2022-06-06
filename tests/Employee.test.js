const Employee = require("../lib/Employee");
test("creates new employee object", () => {
    const employee = new Employee("Spiff", "8", "Spiff@mail.com");
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
});
test("gets employee's name", () => {
    const employee = new Employee("Spiff", "123", "Spiff@mail.com");

    expect(employee.name).toEqual(expect.any(String));
});
test("gets employee's id", () => {
    const employee = new Employee("Spiff", "123", "Spiff@mail.com");

    expect(employee.id).toEqual(expect.any(String));
});
test("gets employee's email", () => {
    const employee = new Employee("Spiff", "123", "Spiff@mail.com");

    expect(employee.email).toEqual(expect.any(String));
});
test("gets employee's type of position", () => {
    const employee = new Employee("Spiff", "123", "Spiff@mail.com");

    expect(employee.getRole()).toBe("Employee");
});
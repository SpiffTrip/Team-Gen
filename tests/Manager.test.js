const { TestWatcher } = require("jest");
const Manager = require("../lib/Manager");
test("gets manager's office number", () => {
  const manager = new Manager("Spiff", "123", "Spiff@gmail.com", "5205205200");

  expect(manager.officeNumber).toEqual(expect.any(String));
});
test("gets manager role", () => {
  const manager = new Manager("Spiff", "123", "Spiff@gmail.com", "5205205200");
  expect(manager.getRole()).toBe("Manager");
});
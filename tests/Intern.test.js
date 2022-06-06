const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");
test("gets intern's school", () => {
  const intern = new Intern("ThrockMortan", "123", "ThrockMortan@gmail.com", "UofA");
  expect(intern.getSchool()).toEqual(expect.any(String));
});
test("gets intern's role", () => {
  const intern = new Intern("ThrockMortan", "123", "ThrockMortan@gmail.com", "UofA");
  expect(intern.getRole()).toBe("Intern");
});
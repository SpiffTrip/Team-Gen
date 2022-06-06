const Engineer = require("../lib/Engineer");
test("gets engeieer's github username", () => {
  const engineer = new Engineer("Spiff", "123", "Spiff@gmail.com", "SpiffTrip");
  expect(engineer.github).toBe("SpiffTrip");
});
test("gets engineer's role", () => {
  const engineer = new Engineer("Spiff", "123", "Spiff@gmail.com", "Spiff");
  expect(engineer.getRole()).toBe("Engineer");
});
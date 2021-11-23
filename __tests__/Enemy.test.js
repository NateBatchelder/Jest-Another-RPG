const Enemy = require("../lib/Enemy.js");
const Potion = require("../lib/Potion.js");

jest.mock("../lib/Potion.js");

test("creates an enemy object", () => {
  const enemy = new Enemy("goblin", "sword");

  expect(enemy.name).toBe("goblin");
  expect(enemy.weapon).toBe("sword");
  expect(enemy.health).toEqual(expect.any(Number));
  expect(enemy.strength).toEqual(expect.any(Number));
  expect(enemy.agility).toEqual(expect.any(Number));
  expect(enemy.potion).toEqual(expect.any(Object));
});

// todo = create a test to get information about the enemy's health
test("gets enemy's health value", () => {
  const enemy = new Enemy("Dave");

  expect(enemy.getHealth()).toEqual(expect.stringContaining(enemy.health.toString()));
  // console.log(enemy.getHealth());
});

// todo = create a test to check if the enemy is alive or dead
test("checks if enemy is alive or not", () => {
  const enemy = new Enemy("Dave");

  expect(enemy.isAlive()).toBeTruthy();

  enemy.health = 0;

  expect(enemy.isAlive()).toBeFalsy();
});

// todo = removes health from enemy
test("subtracts from enemy's health", () => {
  const enemy = new Enemy("Dave");
  const oldHealth = enemy.health;

  enemy.reduceHealth(5);

  expect(enemy.health).toBe(oldHealth - 5);
  // console.log(enemy.health);

  enemy.reduceHealth(99999);
  // console.log(enemy.health);

  expect(enemy.health).toBe(0);
});

// todo = gets enemy's attack value
test("gets enemy's attack value", () => {
  const enemy = new Enemy("Dave");
  enemy.strength = 10;

  expect(enemy.getAttackValue()).toBeGreaterThanOrEqual(5);
  expect(enemy.getAttackValue()).toBeLessThanOrEqual(15);
});

// todo = check the enemy to get the description
test("gets a description of the enemy", () => {
  const enemy = new Enemy("goblin", "sword");

  expect(enemy.getDescription()).toEqual(expect.stringContaining("goblin"));
  expect(enemy.getDescription()).toEqual(expect.stringContaining("sword"));
});
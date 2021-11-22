const Player = require("../lib/Player");
const Potion = require('../lib/Potion');

jest.mock('../lib/Potion.js');

// todo = creates function that returns an object
test("creates a player object", () => {
  const player = new Player("Dave");

  expect(player.name).toBe("Dave");
  expect(player.health).toEqual(expect.any(Number));
  expect(player.strength).toEqual(expect.any(Number));
  expect(player.agility).toEqual(expect.any(Number));
  expect(player.inventory).toEqual(
    expect.arrayContaining([expect.any(Object)])
  );
});

// todo = gets stats
test("gets player's stats as an object", () => {
  const player = new Player("Dave");

  expect(player.getStats()).toHaveProperty("potions");
  expect(player.getStats()).toHaveProperty("health");
  expect(player.getStats()).toHaveProperty("strength");
  expect(player.getStats()).toHaveProperty("agility");
});

// todo = gets inventory
test("gets inventory from player or returns false", () => {
  const player = new Player("Dave");

  expect(player.getInventory()).toEqual(expect.any(Array));

  player.inventory = [];

  expect(player.getInventory()).toEqual(false);
});

// todo = create a test to get information about the player's health
test("gets player's health value", () => {
  const player = new Player("Dave");

  expect(player.getHealth()).toEqual(expect.stringContaining(player.health.toString()));
  // console.log(player.getHealth());
});

// todo = create a test to check if the player is alive or dead
test("checks if player is alive or not", () => {
  const player = new Player("Dave");

  expect(player.isAlive()).toBeTruthy();

  player.health = 0;

  expect(player.isAlive()).toBeFalsy();
});

// todo = removes health from player
test("subtracts from player's health", () => {
  const player = new Player("Dave");
  const oldHealth = player.health;

  player.reduceHealth(5);

  expect(player.health).toBe(oldHealth - 5);
  // console.log(player.health);

  player.reduceHealth(99999);
  // console.log(player.health);

  expect(player.health).toBe(0);
});

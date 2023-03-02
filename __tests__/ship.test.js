const Port = require("../src/Port");
const Ship = require("../src/Ship");
const Itinerary = require("../src/Itinerary");

describe("Ship", () => {
  let dover, calais, itinerary, ship;

  beforeEach(() => {
    dover = new Port("Dover");
    calais = new Port("Calais");
    itinerary = new Itinerary([dover, calais]);
    ship = new Ship(itinerary);
  });

  it("can be instantiated", () => {
    expect(ship).toBeInstanceOf(Ship);
  });

  it("has a starting port", () => {
    expect(ship.currentPort).toBe(dover);
  });

  it("can set sail", () => {
    ship.setSail();
    expect(ship.currentPort).toBeFalsy();
    expect(ship.previousPort).toBe(dover);
  });

  it("can dock at a port", () => {
    ship.setSail();
    ship.dock();
    expect(ship.currentPort).toBe(calais);
  });

  it("throws an error if it goes past the last port in the itinerary", () => {
    ship.setSail();
    ship.dock();
    expect(() => ship.setSail()).toThrow("End of itinerary reached");
  });
});

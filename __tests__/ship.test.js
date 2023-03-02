const Port = require("../src/Port");
const Ship = require("../src/Ship");

describe("Ship", () => {
  let port, ship;

  beforeEach(() => {
    port = new Port("Dover");
    ship = new Ship(port);
  });

  it("can be instantiated", () => {
    expect(ship).toBeInstanceOf(Ship);
  });

  it("has a starting port", () => {
    expect(ship.currentPort).toBe(port);
  });

  it("can set sail", () => {
    ship.setSail();
    expect(ship.currentPort).toBeFalsy();
  });

  it("can dock at a different port", () => {
    const calais = new Port("Calais");
    ship.dock(calais);
    expect(ship.currentPort).toBe(calais);
  });
});

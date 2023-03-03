const Ship = require("../src/Ship");
const Port = require("../src/Port");

describe("Ship", () => {
  describe("constructor", () => {
    it("returns an object", () => {
      const port = new Port("Dover");
      const ship = new Ship(port);
      expect(ship).toBeInstanceOf(Object);
    });
  });

  describe("setSail", () => {
    let ship;
    let port;

    beforeEach(() => {
      port = new Port("Dover");
      ship = new Ship(port);
    });

    it("sets sail", () => {
      ship.setSail();
      expect(ship.currentPort).toBeFalsy();
    });

    it("can't set sail further than its current port", () => {
      ship.setSail();
      expect(() => ship.setSail()).toThrowError("Ship cannot sail without a current port");
    });
  });

  describe("dock", () => {
    let port, ship;
  
    beforeEach(() => {
      port = new Port("Dover");
      ship = new Ship(port);
    });
  
    it("docks at a different port", () => {
      const newPort = new Port("Calais");
      ship.setSail();
      ship.dock(newPort);
      expect(ship.currentPort).toBe(newPort);
      expect(newPort.ships).toContain(ship);
    });
  
    it("throws an error if the ship is already docked", () => {
      expect(() => ship.dock(port)).toThrowError("Ship is already docked");
    });
  });
  
});

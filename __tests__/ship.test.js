const Ship = require("../src/ship");

describe("Ship", () => {
  describe("constructor", () => {
    it("returns an object", () => {
      expect(new Ship()).toBeInstanceOf(Object);
    });
  });

  describe("setSail", () => {
    it("sets sail", () => {
      const ship = new Ship();
      ship.setSail();
      expect(ship.currentPort).toBeFalsy();
    });

    it("can't set sail further than its current port", () => {
      const port = jest.fn();
      const itinerary = { ports: [port] };
      const ship = new Ship(itinerary);
      ship.dock(port);

      expect(() => ship.setSail()).toThrowError("Can't sail further than itinerary");
      expect(ship.currentPort).toBe(port);
    });
  });

  describe("dock", () => {
    it("docks at a different port", () => {
      const port = jest.fn();
      const itinerary = { ports: [jest.fn(), port] };
      const ship = new Ship(itinerary);
      const newPort = jest.fn();

      ship.dock(newPort);

      expect(ship.currentPort).toBe(newPort);
    });

    it("throws an error if the ship is already docked", () => {
      const port = jest.fn();
      const itinerary = { ports: [port] };
      const ship = new Ship(itinerary);
      ship.dock(port);

      expect(() => ship.dock(port)).toThrowError("Ship is already docked");
    });
  });
});

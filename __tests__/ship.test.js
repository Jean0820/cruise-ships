const Ship = require("../src/ship");
const Port = require("../src/port");

describe("Ship", () => {
  let ship;
  let port1;
  let port2;
  let itinerary;

  beforeEach(() => {
    port1 = new Port("Port 1");
    port2 = new Port("Port 2");
    itinerary = {ports: [port1, port2]};
    ship = new Ship(itinerary);
  });

  describe("constructor", () => {
    it("returns an object", () => {
      expect(new Ship()).toBeInstanceOf(Object);
    });
  });

  describe("setSail", () => {
    it("sets sail", () => {
      ship.setSail();
      expect(ship.currentPort).toBeFalsy();
    });

    it("can't set sail further than its current port", () => {
      const ship = new Ship(itinerary);
      ship.dock(port1);

      expect(() => ship.setSail()).toThrowError("Can't sail further than itinerary");
      expect(ship.currentPort).toBe(port1);
    });
  });

  describe("dock", () => {
    it("docks at a different port", () => {
      ship.setSail();
      ship.dock(port2);

      expect(ship.currentPort).toBe(port2);
    });

    it("throws an error if the ship is already docked", () => {
      ship.dock(port1);

      expect(() => ship.dock(port1)).toThrowError("Ship is already docked");
    });
  });
});

describe("Port", () => {
  let port;
  let ship;

  beforeEach(() => {
    port = new Port("Port 1");
    ship = jest.fn();
  });

  describe("constructor", () => {
    it("returns an object", () => {
      expect(new Port()).toBeInstanceOf(Object);
    });
  });

  describe("addShip", () => {
    it("adds a ship to the port", () => {
      port.addShip(ship);

      expect(port.ships).toContain(ship);
    });
  });

  describe("removeShip", () => {
    it("removes a ship from the port", () => {
      port.addShip(ship);
      port.removeShip(ship);

      expect(port.ships).not.toContain(ship);
    });
  });
});

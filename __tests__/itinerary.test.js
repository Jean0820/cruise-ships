const Port = require("../src/Port");
const Itinerary = require("../src/Itinerary");

describe("Itinerary", () => {
  let dover, calais, itinerary;

  beforeEach(() => {
    dover = new Port("Dover");
    calais = new Port("Calais");
    itinerary = new Itinerary([dover, calais]);
  });

  it("can be instantiated", () => {
    expect(itinerary).toBeInstanceOf(Itinerary);
  });

  it("has an array of ports", () => {
    expect(itinerary.ports).toEqual([dover, calais]);
  });
});

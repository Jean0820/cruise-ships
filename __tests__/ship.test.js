const Ship = require('../src/ship');

describe('Ship', () => {
  it('can be instantiated', () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });
});

describe('Ship', () => {
  describe('setSail', () => {
    it('updates the ship status and current port', () => {
      const port = { name: 'Southampton', ships: [] };
      const ship = new Ship(port);

      ship.setSail('Dover');

      expect(ship.currentPort).toEqual('Dover');
      expect(ship.status).toEqual('sailing');
    });
  });
});
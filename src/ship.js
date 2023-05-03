class Ship {
  constructor(itinerary) {
    this.itinerary = itinerary;
    this.currentPortIndex = 0;
    this.previousPort = null;
    this.currentPort = itinerary.ports[this.currentPortIndex];
    this.currentPort.addShip(this);
  }

  setSail() {
    const nextPortIndex = this.currentPortIndex + 1;
    if (nextPortIndex >= this.itinerary.ports.length) {
      throw new Error("Can't sail further than itinerary");
    }
    this.currentPort.removeShip(this);
    this.previousPort = this.currentPort;
    this.currentPortIndex = nextPortIndex;
    this.currentPort = this.itinerary.ports[this.currentPortIndex];
  }

  dock(port) {
    if (this.currentPort === port) {
      throw new Error("Ship is already docked");
    }
    this.currentPort.removeShip(this);
    this.previousPort = this.currentPort;
    this.currentPort = port;
    this.currentPort.addShip(this);
  }
}

module.exports = Ship;

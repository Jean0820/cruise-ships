class Ship {
  constructor(itinerary) {
    this.itinerary = itinerary;
    this.currentPortIndex = 0;
    this.previousPort = null;
    this.currentPort = itinerary.ports[this.currentPortIndex];
    this.currentPort.addShip(this);
  }

  setSail() {
    const itinerary = this.itinerary;
    const currentPortIndex = this.currentPortIndex;
    const nextPortIndex = currentPortIndex + 1;
    const nextPort = itinerary.ports[nextPortIndex];

    if (nextPortIndex >= itinerary.ports.length) {
      throw new Error('End of itinerary reached');
    }

    this.previousPort = this.currentPort;
    this.currentPort = null;
    this.previousPort.removeShip(this);
    this.currentPortIndex = nextPortIndex;
    nextPort.addShip(this);
  }

  dock() {
    const itinerary = this.itinerary;
    const currentPortIndex = this.currentPortIndex;
    const previousPort = this.previousPort;

    if (currentPortIndex === 0) {
      throw new Error('Already docked at the first port');
    }

    previousPort.removeShip(this);
    this.currentPort = itinerary.ports[currentPortIndex];
    this.currentPort.addShip(this);
  }

  getCurrentPort() {
    return this.currentPort;
  }
}

module.exports = Ship;

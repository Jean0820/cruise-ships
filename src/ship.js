class Ship {
    constructor(port) {
      this.currentPort = port;
      this.previousPort = null;
    }
  
    setSail() {
      if (!this.currentPort) {
        throw new Error("Ship cannot sail without a current port");
      }
      this.previousPort = this.currentPort;
      this.currentPort = null;
    }
  
    dock(port) {
      if (this.currentPort) {
        throw new Error("Ship is already docked");
      }
      this.currentPort = port;
      port.addShip(this);
    }
  }
  
  module.exports = Ship;
  
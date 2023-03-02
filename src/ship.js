class Ship {
    constructor(currentPort) {
      this.currentPort = currentPort;
      this.status = 'moored';
    }
  
    setSail(port) {
      this.currentPort = port;
      this.status = 'sailing';
    }
  }
  
  module.exports = Ship;
  
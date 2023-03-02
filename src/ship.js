// Ship.js
class Ship {
    constructor(port) {
      this.currentPort = port;
      this.status = 'moored';
    }
  
    setSail(port) {
      this.currentPort = port;
      this.status = 'sailing';
    }
  
    dock(port) {
      this.currentPort = port;
      this.status = 'moored';
    }
  }
  
  module.exports = Ship;
  
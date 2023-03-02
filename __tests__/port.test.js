const Port = require("../src/Port");

describe("Port", () => {
  it("can be instantiated", () => {
    expect(new Port("Dover")).toBeInstanceOf(Port);
  });

  it("has a name property", () => {
    const port = new Port("Dover");
    expect(port.name).toBe("Dover");
  });
});

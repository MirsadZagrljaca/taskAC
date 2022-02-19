let getNewStruct = require("./index");

var assert = require("assert");

describe("Testing the algorithm", () => {
  it("should return new struct with a new pair", () => {
    let a = [
      { id: 1, value: 3 },
      { id: 2, value: 7 },
      { id: 3, value: 3 },
      { id: 4, value: 1 },
      { id: 5, value: 4 },
    ];

    let b = getNewStruct(a);
    let c = b[b.length - 1];
    assert.equal(c.id, 6);
    assert.equal(c.value, 5);
  });

  it("should return new struct with a new pair 2nd struct", () => {
    let a = [
      { id: 1, value: 3 },
      { id: 2, value: 7 },
      { id: 3, value: 3 },
      { id: 4, value: 5 },
      { id: 5, value: 4 },
    ];

    let b = getNewStruct(a);
    let c = b[b.length - 1];
    assert.equal(c.id, 6);
    assert.equal(c.value, 6);
  });

  it("handling wrong object types:string", () => {
    let b = getNewStruct("Sending string");
    assert.equal(b, "Not an Object!");
  });

  it("handling wrong object types:integer", () => {
    let b = getNewStruct(2);
    assert.equal(b, "Not an Object!");
  });

  it("handling wrong object types:boolean", () => {
    let b = getNewStruct(false);
    assert.equal(b, "Not an Object!");
  });

  it("handling wrong arrays", () => {
    let b = getNewStruct([1, 2, 3]);
    assert.equal(b, "Not a valid Array!");
  });
});

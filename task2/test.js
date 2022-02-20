let lookup = require("./index");
let assert = require("assert");

describe("Testing the algorithm", () => {
  it("first scenario from example", () => {
    let object = { property1: { property2: "Apple", property3: "Orange" } };
    let path = "property1.property2";

    const res = lookup(object, path);
    assert.equal(res, "Apple");
  });

  it("second scenario similiar", () => {
    let newObj = { prop1: { prop2: { prop3: "Something" } } };
    let newPath = "prop1.prop2.prop3";

    const res = lookup(newObj, newPath);
    assert.equal(res, "Something");
  });

  it("third scenario simple path", () => {
    let newObj = { prop1: "Test" };
    let newPath = "prop1";

    const res = lookup(newObj, newPath);
    assert.equal(res, "Test");
  });

  it("error handling wrong types:String instead of object", () => {
    let newObj = "string";
    let newPath = "prop1";

    const res = lookup(newObj, newPath);
    assert.equal(res, "Params must be Object and String");
  });

  it("error handling wrong types:Integer instead of object", () => {
    let newObj = 1;
    let newPath = "prop1";

    const res = lookup(newObj, newPath);
    assert.equal(res, "Params must be Object and String");
  });

  it("error handling wrong types:Boolean instead of object", () => {
    let newObj = false;
    let newPath = "prop1";

    const res = lookup(newObj, newPath);
    assert.equal(res, "Params must be Object and String");
  });

  it("error handling wrong types:Integer instead of string", () => {
    let newObj = { prop1: { prop2: { prop3: "Something" } } };
    let newPath = 1;

    const res = lookup(newObj, newPath);
    assert.equal(res, "Params must be Object and String");
  });

  it("error handling wrong types:Boolean instead of string", () => {
    let newObj = { prop1: { prop2: { prop3: "Something" } } };
    let newPath = false;

    const res = lookup(newObj, newPath);
    assert.equal(res, "Params must be Object and String");
  });

  it("error handling wrong types:Array instead of string", () => {
    let newObj = { prop1: { prop2: { prop3: "Something" } } };
    let newPath = ["stes"];

    const res = lookup(newObj, newPath);
    assert.equal(res, "Params must be Object and String");
  });

  it("error handling wrong types:Object instead of string", () => {
    let newObj = { prop1: { prop2: { prop3: "Something" } } };
    let newPath = { prop: "test" };

    const res = lookup(newObj, newPath);
    assert.equal(res, "Params must be Object and String");
  });
});

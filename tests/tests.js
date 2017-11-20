'use strict'
import { assert } from 'chai';
import { words } from '../src/main.js';

describe("words", (word) => {
        it("counts one word", () => {
         assert.deepEqual(myApp.words('olly'), { olly:1});
        });
        it("counts one of each word", () => {
          assert.deepEqual(myApp.words('counts one of each word'), { counts: 1, one: 1, of: 1, each: 1, word:1});
         });
         it("counts multiple occurrences", () => {
          assert.deepEqual(myApp.words('yes man yes woman yes boy yes girl man'), { yes: 4, man: 2, woman: 1, boy: 1, girl:1});
         });
         it("to include punctuations", () => {
          assert.deepEqual(myApp.words('olly olly in: come& free@'), { olly: 2, "in:": 1, "come&": 1, "free@": 1 });
         });
         it("to includes numbers", () => {
          assert.deepEqual(myApp.words('going 1 2 3 4 5'), { going: 1, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1 });
         });
         it("counts tabs", () => {
          assert.deepEqual(myApp.words('olly\olly\come\free'), { olly: 2, come: 1, free: 1});
         });
         it("counts multiple spaces as one", () => {
          assert.deepEqual(myApp.words('olly   olly come free'), { olly: 2, come: 1, free: 1});
         });
    });

    


















































    // it("counts multiline", function() {
    //   var expectedCounts = { hello: 1, world: 1 };
    //   expect(myApp.words("hello\world")).toEqual(expectedCounts);
    // // });
  
    // it("counts tabs", function() {
    //   var expectedCounts = { hello: 1, world: 1 };
    //   expect(myApp.words("hello\world")).toEqual(expectedCounts);
    // });
  
    // it("counts multiple spaces as one", function() {
    //   var expectedCounts = { hello: 1, world: 1 };
    //   expect(myApp.words("hello  world")).toEqual(expectedCounts);
    // });
  
    // it("handles properties that exist on Object's prototype", function() {
    //   var expectedCounts = { reserved: 1, words : 1, like :1,  prototype: 1, and : 1, toString: 1,  "ok?": 1};
    //   expect(myApp.words("reserved words like prototype and toString ok?")).toEqual(expectedCounts);
    // });
  
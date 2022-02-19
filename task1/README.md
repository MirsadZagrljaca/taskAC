# Task 1

- First task for Ant Colony technical interview

### Task description

- For a random array of structs of type { id, value }, return a new struct, with an unique id and a
  value such as the next positive integer, which isn't present in the existing structure list and with
  at least one smaller integer appearing at least twice in the same list.
- For example:
- - a = [{id:1, value:3}, {id:2, value:7}, {id:3, value:3}, {id:4, value:1}, {id:5, value:4}]
- - value 1 - appears once
- - value 3 - appears 2 times
- - value 4 - appears once
- - value 7 - appears once
- - Solution: {id: 6, value: 5}

### How to start algorithm

- run "npm install"
- run "npm start" to run tests and check example from task descriptions
- run "npm test" to run tests for this algorithm, first one is same example from description, second one is different just to be sure

### File names and dependecies

#### Files

- index.js - main file containing algorithm
- test.js - main file for tests

#### Dependencies

- mocha - testing tool I've decided to use

#### Thank You for checking my task. Enjoy!

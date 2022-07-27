const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;
  let dinosaur5;
  let dinosaur6;
  let park1;
  let park2;
  let park3;


  beforeEach(function () {
    dinosaur1 = new Dinosaur('Triceratops', 'Plants', 65);
    dinosaur2 = new Dinosaur('Brachiosaurus', 'Plants', 50);
    dinosaur3 = new Dinosaur('Tyrannosaurus Rex', 'Vegan Proteins', 115);
    dinosaur4 = new Dinosaur('Velociraptor', 'Burgers', 95);
    dinosaur5 = new Dinosaur('Dracoraptor', 'Kebab', 60);
    dinosaur6 = new Dinosaur('Vulcanodon', 'Ramen', 55);


    park1 = new Park('Fat Dinos Park', 20);
    park2 = new Park('Big Dinos Park', 25);
    park3 = new Park('Bad Dinos Park', 30);

  })

  it('should be able to add a dinosaur to its collection', function (){
    park1.addDinosaur(dinosaur1);
    const expected = [dinosaur1];
    assert.deepStrictEqual(park1.dinoCollection, expected);
  });

  it('should be able to remove a dinosaur from its collection', function (){
    park1.addDinosaur(dinosaur1);
    park1.addDinosaur(dinosaur2);
    park1.removeDinosaur(dinosaur1);
    const expected = [dinosaur2];
    assert.deepStrictEqual(park1.dinoCollection, expected);
  });
  
  it('should be able to find the dinosaur that attracts the most visitors', function (){
    let dinosaurs = [
      dinosaur1,
      dinosaur2,
      dinosaur3,
      dinosaur4,
      dinosaur5,
      dinosaur6,
    ];
    const expected = 'Tyrannosaurus Rex';
    assert.deepStrictEqual(dinosaur.mostVisitors(dinosaurs), expected);
  });


  it('should have a name');

  it('should have a ticket price');

  it('should have a collection of dinosaurs');

  it('should be able to remove a dinosaur from its collection');

  

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});

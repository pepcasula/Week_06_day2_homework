const Dinosaur = function (species, diet, guestsAttractedPerDay) {
    this.species = species;
    this.diet = diet;
    this.guestsAttractedPerDay = guestsAttractedPerDay;
  };


arrazza = [8, 5, 17, 3];


dinosaur1 = new Dinosaur('Triceratops', 'Plants', 65);
dinosaur2 = new Dinosaur('Brachiosaurus', 'Plants', 50);
dinosaur3 = new Dinosaur('Tyrannosaurus Rex', 'Vegan Proteins', 115);
dinosaur4 = new Dinosaur('Velociraptor', 'Burgers', 95);
dinosaur5 = new Dinosaur('Dracoraptor', 'Kebab', 60);
dinosaur6 = new Dinosaur('Vulcanodon', 'Ramen', 55);



dinosaurs = [
    dinosaur1,
    dinosaur2,
    dinosaur3,
    dinosaur4,
    dinosaur5,
    dinosaur6,
  ];


dinosaurs.sort((a, b) => {
    return b.guestsAttractedPerDay - a.guestsAttractedPerDay;
});


for (dino of dinosaurs){
    dinosNumber = dinosaurs.length()
    if (dinosNumber > 1){
        dinosaurs.pop()
    };
};

dinosaurs.forEach((e) => {
    return `${e.species}`;
});



const Dinosaur = function (species, diet, guestsAttractedPerDay) {
  this.species = species;
  this.diet = diet;
  this.guestsAttractedPerDay = guestsAttractedPerDay;
};

Dinosaur.prototype.mostVisitors = function (){

  function selectMostPopular():string {
    const allGames = getAllGames();
    let mostPopular: string = Math.max.apply(Math, allGames.map(function (o) { return o.votes; }));
    console.log(mostPopular);
    return mostPopular;
};
  


};


module.exports = Dinosaur;

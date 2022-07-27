const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinoCollection = [];
};


Park.prototype.addDinosaur = function (dinosaur){
    this.dinoCollection.push(dinosaur);
};

Park.prototype.removeDinosaur = function(dinosaur){
    let collection = this.dinoCollection;
    for (var i = 0; i < collection.length; i++){
        if (collection[i] === dinosaur){
            collection.splice(i, 1);
        };
    };
};



module.exports = Park;


function random(min, max) {
	return Math.round(Math.random() * (max - min)) + min;
}

var Vikings = function (name) {
	this.name = name,
	this.health = 100,
	this.strength = random(33,95),
  this.age = random(15, 45)
};

var viking1 = new Vikings("Tiger");
var viking2 = new Vikings("Ortego");
console.log(viking1);
console.log(viking2); 
//PARTE 2 ENTRENAMIENTO
function pit() { console.log("EMPIEZA EL ENTRENAMIENTO,  TIGER VS ORTEGO")
  console.log(viking1);
  console.log(viking2);
  do {
      var attack1 = Math.round(viking1.strength * ((random(1,10))/10));
      var attack2 = Math.round(viking2.strength * ((random(1,10))/10));
      viking2.health = (viking2.health - attack1);
      viking1.health = (viking1.health - attack2)
      console.log("·Turno de Tiger")
      console.log("   " + viking1.name + " causa " + attack1 + " de daño a " + viking2.name + " y le deja con " + viking2.health + " de vida.");
      console.log("·Turno de Ortego")
      console.log("   " + viking2.name + " causa " + attack2 + " de daño a " + viking1.name + " y le deja con " + viking1.health + " de vida.");
      console.log("--------------------------------")
  } while (viking2.health > 41 && viking1.health > 41);
  console.log("EL ENTRENAMIENTO HA TERMINADO");
  if (viking1.health>viking2.health) {
      console.log("HA GANADO " + viking1.name);
  } else if (viking2.health>viking1.health){
      console.log("HA GANADO " + viking2.name);
  } else {
      console.log(viking1.name + " Y " + viking2.name + " HAN EMPATADO");
  };
 console.log(viking1);
 console.log(viking2);
};



//PARTE 3 THE POOR SAXONS

var Saxons = function(){
    this.health = random(15,40),
    this.strength = random(25, 100)
}
//PARTE 4 THE ASSAULT
var deadVikings = [];
var deadSaxons = [];
var armyVikings = [];
var armySaxons = [];

for (var i = 0; i < random(4, 9); i++) {
    armyVikings.push(new Vikings(i));
};
for (var i = 0; i < random(12, 16); i++) {
    armySaxons.push(new Saxons());
};

function battle() {
    var roundRandom = random(5,8);
    var count = 0;
    console.log("¡¡¡¡¡LOS VIKINGOS ATACAN A LOS ALDEANOS SAXONES!!!!!");
        do {
            count++;
            console.log("EMPIEZA EL TURNO #" + count + "!");
            var oneRandomViking = armyVikings[random(0,(armyVikings.length)-1)];
            var oneRandomSaxon = armySaxons[random(0,(armySaxons.length)-1)];
            var attackViking = Math.round(oneRandomViking.strength * ((random(1,10))/10));
            var defenseSaxon = Math.round(oneRandomSaxon.strength * ((random(1,10))/10));
            oneRandomSaxon.health =  (oneRandomSaxon.health - attackViking);
            oneRandomViking.health =  (oneRandomViking.health - defenseSaxon);
            console.log("El Vikingo #" + oneRandomViking.name + " ataca con una fuerza de " + attackViking + " a un Saxon");
            console.log("Al saxon le queda una salud de " + oneRandomSaxon.health + "!!!!");
            console.log("Saxon se defiende y provoca un daño de " + defenseSaxon + " al Vikingo #" + oneRandomViking.name);
            console.log("El Vikingo #" + oneRandomViking.name + " le queda una salud de " + oneRandomViking.health + "!!!!");
                if (oneRandomViking.health <= 0) {
                   console.log(oneRandomViking.health);
                   deadVikings.push(armyVikings.splice(armyVikings.indexOf(oneRandomViking),1));
                   console.log("MUERE UN VIKINGO Y DESAPARECE DEL ARRAY ARMYVIKINGS!!!!!!");
                   } else if (oneRandomSaxon.health <= 0) {
                          console.log(oneRandomSaxon.health);
                          deadSaxons.push(armySaxons.splice(armySaxons.indexOf(oneRandomSaxon),1));
                          console.log("MUERE UN Aldeano Y DESAPARECE DEL ARRAY ARMYSAXONS!!!!!!");
                   } else {
                          console.log("Nadie muere");
                   }
            console.log("------------------TERMINA EL TURNO #" + count + "------------------")
        } while (count < roundRandom);  
   console.log("Han muerto " + deadSaxons.length + " saxons y han sobrevivido " + armySaxons.length);
   console.log("Han muerto " + deadVikings.length + " vikings y han sobrevivido " + armyVikings.length);
   if (deadVikings.length > deadSaxons.length){
   console.log("Han ganado los Saxones!!!")
} else {
   console.log("Han ganado los Vikings!!!")
 }
};

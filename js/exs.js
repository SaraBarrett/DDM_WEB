//pp 17
// const message = "   TASTE THE RAINBOW!  ";

// let whisper = message.toLowerCase().trim();
// console.log(whisper);

// //pp19
// const word = "skateboard";
// let facialHair = word.slice(5).replace("o", "e")

// console.log(facialHair)

//pp24
// let primeiroNome = prompt(`Qual o teu primeiro nome?`)
// let segundoNome = prompt(`E qual é o seu sobrenome?`)
// console.log(`Olá ${primeiroNome} ${segundoNome}!!`)

//pp30
// let planets = ['Mercúrio', 'Vénus', 'Terra', 'Mart',
// 'Jupiter', 'Saturno', 'Urano', 'Neptuno', 'Plutão'];
// planets[3]= 'Marte';
// planets.pop();
// planets.unshift('Novo Planeta')

//pp34
const airplaneSeats = [
  ["Ruth", "Anthony", "Stevie"],
  ["Amelia", "Pedro", "Maya"],
  ["Xavier", "Ananya", "Luis"],
  ["Luke", null, "Deniz"],
  ["Rin", "Sakura", "Francisco"],
];
airplaneSeats[3][1] = "Sara";
console.log(airplaneSeats);

//pp37
const product = {
  name: "Aspirador",
  inStock: true,
  price: 1.99,
  colors: ["red", "blue", "green"],
};

product.price = 2.55;
console.log(product.price);
console.log(product.colors[2]);

//pp48
function printHeart() {
  alert("<3");
}

//pp 52
function rant(message, numTimes) {
  for (i = 0; i < numTimes; i++) {
    console.log(i + " " + message.toUpperCase());
  }
}

//pp 55
function isSnakeEyes(n1, n2) {
  if (n1 == 1 && n1 == n2) {
    console.log("yay, snake eyes");
  } else {
    console.log("não sao olhos de cobra");
  }
}

//pp 10
const fullNames = [
  { first: "Albus", last: "Dumbledore" },
  { first: "Harry", last: "Potter" },
  { first: "Hermione", last: "Granger" },
  { first: "Ron", last: "Weasley" },
  { first: "Rubeus", last: "Hagrid" },
  { first: "Minerva", last: "McGonagall" },
  { first: "Severus", last: "Snape" },
];

let firstName = fullNames.map(function(name){
  return name.first
})

//pp 12 

const greet = (greetName) => {
  return 'Hey '+greetName;
}


//p18
function validUsernames(usernames){
    const valid = usernames.filter((username) => {return username.length <10})

    return valid;

}
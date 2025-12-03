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

product.price = 2.55
console.log(product.price)
console.log(product.colors[2])
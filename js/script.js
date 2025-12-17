// //primeiro script de JS
// //alert(16.777777 + 4);

// let myName = 'Sara';

// console.log('olá ' + myName);

// let myNumber = 16;
// myNumber++;
// console.log('o tamanho de '+myName+ ' é '+myName.length+ '!')

// console.log(`o tamanho de ${myName} é ${myName.length}!`)

function helloWeather() {
  let weather = prompt("Como está o tempo hoje?");
  alert("o tempo está " + weather);
}

function studentsList() {
  let alunos = ["João", "Tiago", "Gonçalo", "Rui", "Duarte"];

  for(let item of alunos){
    console.log("o "+item+" é bom aluno")
  }
  // alunos[3] = "Silvio";
  // alunos.unshift("Rafael");
  // console.log(alunos);
}


let weekDays = [
  ["Segunda Manhã", "Segunda Tarde", "Segunda Noite"],
  ["Terça Manhã", "Terça Tarde", "Terça Noite"],
  ["Quanta Manhã", "Quanta Tarde", "Quanta Noite"],
  ["Quinta Manhã", "Quinta Tarde", "Quinta Noite"],
  ["Sexta Manhã", "Sexta Tarde", "Sexta Noite"],
];
console.log(weekDays[1][2]);

let course = {
  name: 'Programação para DIspositvos Móveis' ,
  hours: 2000,
  responsible: 'Liliana Pinheiro',
  ucs:['Web', 'Programação Mobile', 'Algoritmia'] 
}


course.hours= 1900;
console.log(course.ucs[1])


function helloPeople(target){
  alert('Olá '+target+' da turma de dispositivos móveis')
}
function showForEach(){
let internships = ['Natixis', 'ISTEC','OLX', 'BOSCH'];
 

}
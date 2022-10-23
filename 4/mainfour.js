//Ejercicio 4
const idiom2 = prompt('¿In which language do you want to see the message?')
switch (idiom2.toLowerCase()) {
  case 'spanish': console.log('Hola, mundo!')
     break;
  case 'french' : console.log('Bonjour tout le monde')
     break;
  case 'italian' :console.log('Ciao mondo')
     break;
  case 'russian' : console.log('мир приветствий')
     break;
  case 'japanese' : console.log('ハローワールド')
     break;
  default : console.log('Hello, world!') 
     break;
}
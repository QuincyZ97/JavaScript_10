// [O]  Browser support 
// [O]  Name input 
// [O]  number generator 
// [O]  Range increase / decrease 
// [O]  play game 
// [O]  Number prompt Enter number 0-25 
// [O]  5 tries 
// [O]  no more tries 
// [O]  Incorrect alert
// [O]  Correct alert
// [O]  Goodbye screen 


// WELCOME

let naam = prompt('Vul hier je naam in', 'Naam');
alert(`Hey ${naam} veel succes met The Number Game!`);


// BASIC GAME
const basicGame = () => {
  //GENERATE NUMBER
  alert(`Raad het getal tussen de 0 en 25.\nLet op je hebt 5 pogingen!`);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  const numberAnswer = getRandomInt(1, 26); //SAVES ANSWER
  console.log("Niet spieken ;)", numberAnswer) // Antwoord test
  // POGINGEN
  let score = 0;

  while (score !== 5) {

    //ANSWER INPUT
    const numberInput = parseInt(prompt('Typ hier je antwoord', 'Getal tussen de 0 - 25'))

    if (numberInput === numberAnswer) {
      alert(`JE HEBT HET GETAL GERADEN GEFELICITEERD!`);
      window.open("https://giphy.com/gifs/MSUMoorhead-msum-minnesota-state-university-moorhead-graduation-igsRPcwi7yoNjEgEOw/fullscreen");
      break;
    } else if (score < 3) {
      score++;
      alert(`Helaas! probeer het opnieuw\nJe hebt nog ${5 - score} pogingen`);
    }
    else if (score === 3 ) {
      score++;
      alert(`Laatste poging!`);
    }
    else {
      score++;
      alert(`Oei je hebt geen pogingen meer over\n herstart het spel`);
      break
    }
  }

  alert(`Einde spel! Tot de volgende keer! ${naam}`)

}

// ADVANCED GAME
const advancedGame = () => {
  let minNumber = parseInt(prompt('Min number', 'Please input a minimum number'))
  let maxNumber = parseInt(prompt('Max number', 'Please input a maximum number'))

  if (minNumber > maxNumber) {
    alert(`Please input a number higher than your minimum...`);
    advancedGame();
  }
  else {
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min); //max is exclusief & min is inclusief
    }

  alert(`Raad het getal tussen de ${minNumber} en ${maxNumber}!`);
  }

  const numberAnswer = getRandomInt(minNumber, maxNumber); //SAVES ANSWER
  console.log("Niet spieken ;)", numberAnswer) // Antwoord test
  
  
  // POGINGEN
  let score = 0;

  while (score !== 5) {

    //ANSWER INPUT
    const numberInput = parseInt(prompt('Typ hier je antwoord', 'Getal tussen de 0 - 25'))

    if (numberInput === numberAnswer) {
      alert(`JE HEBT HET GETAL GERADEN GEFELICITEERD!`);
      window.open("https://giphy.com/gifs/MSUMoorhead-msum-minnesota-state-university-moorhead-graduation-igsRPcwi7yoNjEgEOw/fullscreen");
      break;
    } else if (score < 3) {
      score++;
      alert(`Helaas! probeer het opnieuw\nJe hebt nog ${5 - score} pogingen`);
    }
    else if (score === 3 ) {
      score++;
      alert(`Laatste poging!`);
    }
    else {
      score++;
      alert(`Oei je hebt geen pogingen meer over\n herstart het spel`);
      break
    }
  }

  alert(`Einde spel! Tot de volgende keer! ${naam}`)
 

}

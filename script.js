/**
 * Verkefni 7 – Reikniæfingarforrit
 *
 * Forrit sem æfir hraða í að reikna einföld dæmi
 */

// fasti sem segir til um hve marga leiki eigi að spila
const GAMES_TO_PLAY = 10;

/**
 * Birtir upplýsingar um leik og eftir að notandi samþykkir spilar fyrsta leik
 * með kalli í play().
 * Eftir leik er notanda boðið að spila annan leik, ef ekki hættir forrit.
 */

function start() {
  let playAgain = true;
  alert("Markmiðið er að svara eins mörgum af 10 dæmum rétt eins hratt og mögulegt er.")
  while (playAgain) {
  play()
  playAgain = confirm("Spila annan leik?");
  }
}

function play() {
  let played = 0;
  let points = 0;

  let  startTime = new Date();

  while (played < GAMES_TO_PLAY) {
    let askQuestions = ask();

    if (askQuestions) {
      points++;
      played++;
    }
    else if (askQuestions == null) {
      alert("Hætt í leik.")
      return null;
    }
    else {
      played++;
    }
    
  }

  let endTime = new Date();
  let totalTime = (endTime - startTime)/1000;

  if (points == 0) {
    return confirm(`Þú svaraðir 0 af 10 dæmum rétt á ${totalTime.toFixed(2)} sekúndum. \nMeðalrétt svör á sekúndu eru 0`)
  }
  return confirm(`Þú svaraðir ${points} af 10 dæmum rétt á ${totalTime.toFixed(2)} sekúndum. \nMeðalrétt svör á sekúndu eru ${(totalTime/points).toFixed(2)} `)
}

function newQuestion() {
  let Question = "";
  let sum = 0;
  let Types = randomNumber(1,4)
  let A = 0;
  let B = 0;

  switch(Types) {
    case 1:
      A = randomNumber(1, 100);
      B = randomNumber(1, 100);
      Question += `Hvað er ${A} + ${B}?`;
      sum = (A + B);
      break;

    case 2:
      A = randomNumber(1, 100);
      B = randomNumber(1, 100);
      Question += `Hvað er ${A} - ${B}?`;
      sum = (A - B);
      break;

    case 3:
      A = randomNumber(1, 10);
      B = randomNumber(1, 10);
      Question += `Hvað er ${A} * ${B}?`;
      sum = (A * B);
      break;

    case 4:
      A = randomNumber(2, 10);
      B = A * randomNumber(2, 10);
      Question += `Hvað er ${B} / ${A}?`;
      sum = (B / A);
      break;
    }

    return {Question, sum};
  }

function ask() {
  let Asking = newQuestion();

  let UserInput = prompt(Asking.Question)

  if (Asking.sum == UserInput) {
    return true;
  }
  else if (UserInput == null) {
    return null;
  }
  else {
    return false;
  }
}

/**
 * Skilar tölu af handahófi á bilinu [min, max]
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Byrjar leik
start();

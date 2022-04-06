function getScore(score) {
  let scoreA = score <= 100 && score >= 90;
  let scoreB = score <= 89 && score >= 80;
  let scoreC = score <= 79 && score >= 70;
  let scoreD = score <= 69 && score >= 60;
  let scoreF = score <= 59 && score >= 0;

  let scoreFinal;

  if (scoreA) {
    scoreFinal = 'A';
  } else if (scoreB) {
    scoreFinal = 'B';
  } else if (scoreC) {
    scoreFinal = 'C';
  } else if (scoreD) {
    scoreFinal = 'D';
  } else if (scoreF) {
    scoreFinal = 'F';
  } else {
    scoreFinal = 'Nota inválida';
  }

  return scoreFinal;
}

// console.log(getScore(101));
// console.log(getScore(-1));
// console.log(getScore(100));
// console.log(getScore(90));
// console.log(getScore(89));
// console.log(getScore(80));
// console.log(getScore(79));
// console.log(getScore(70));
// console.log(getScore(69));
// console.log(getScore(60));
// console.log(getScore(59));
// console.log(getScore(0));

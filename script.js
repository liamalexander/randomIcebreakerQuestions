'use strict';

import { questions } from './data.js';

const questionHolder = document.getElementById("question-holder");
const questionBtn = document.getElementById("question-btn");

const remainingQuestions = [...questions];

const getRandomQuestion = function() {
  if(remainingQuestions.length === 0) {
    questionHolder.textContent = "All questions answered!";
    questionHolder.style.display = "flex";
  } else {
    const randomNumber = Math.floor(Math.random() * remainingQuestions.length);
    questionHolder.textContent = remainingQuestions[randomNumber];
    questionHolder.style.display = "flex";
    questionBtn.textContent = "Next";
    remainingQuestions.splice(randomNumber, 1);
    console.log(remainingQuestions);
  }
};

questionBtn.addEventListener("click", getRandomQuestion);
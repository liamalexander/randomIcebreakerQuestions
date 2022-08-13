'use strict';

import { questions } from './data.js';

const questionHolder = document.getElementById("question-holder");
const questionBtn = document.getElementById("question-btn");

const answeredQuestions = [];
const unansweredQuestions = questions;

const generateRandomQuestion = function() {
  const randomNumber = Math.floor(Math.random() * questions.length);
  if(!answeredQuestions.includes(questions[randomNumber])) {
    questionHolder.textContent = questions[randomNumber];
    questionHolder.style.display = "flex";
    questionBtn.textContent = "Next";
    answeredQuestions.push(questions[randomNumber]);
    console.log(answeredQuestions);
  } else {
    generateRandomQuestion;
  };
};

questionBtn.addEventListener("click", generateRandomQuestion);
// console.log(questions.length, unansweredQuestions);

//    CODE TO TRY TO NOT PAUSE WHEN SAME QUESTION
// const generateRandomQuestion = function() {
  // const randomNumber = Math.floor(Math.random() * unansweredQuestions.length);
  // if(!answeredQuestions.includes(questions[randomNumber])) {
    // questionHolder.textContent = questions[randomNumber];
    // questionHolder.style.display = "flex";
    // questionBtn.textContent = "Next";
    // unansweredQuestions.slice(randomNumber);
    // answeredQuestions.push(unansweredQuestions[randomNumber]);
    // console.log(unansweredQuestions.length, unansweredQuestions);
    // unansweredQuestions.splice(randomNumber);
    // answeredQuestions.push(questions[randomNumber]);
    // console.log(answeredQuestions, unansweredQuestions);
  // } else {
  //   generateRandomQuestion;
  // };
// };



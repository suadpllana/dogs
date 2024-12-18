import React, { useState } from "react";

const Quiz = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [ score , setScore] = useState(0)
  const [locked , setLocked] = useState(false)

  const questions = [
    {
      question: "What do dogs typically eat?",
      answers: ["Vegetables only", "Meat only", "Dog food", "Candy"],
      correct: 2,
    },
    {
      question: "What sound does a dog make?",
      answers: ["Meow", "Woof", "Moo", "Chirp"],
      correct: 1,
    },
    {
      question: "What is a baby dog called?",
      answers: ["Kitten", "Puppy", "Calf", "Cub"],
      correct: 1,
    },
    {
      question: "Which of these is a common dog breed?",
      answers: ["Labrador Retriever", "Bengal", "Siamese", "Persian"],
      correct: 0,
    },
    {
      question: "How many legs does a dog have?",
      answers: ["Two", "Four", "Six", "Eight"],
      correct: 1,
    },
    {
      question: "What do dogs use to smell?",
      answers: ["Ears", "Tail", "Nose", "Paws"],
      correct: 2,
    },
    {
      question: "What is the color of a Dalmatian’s spots?",
      answers: ["Brown", "Black", "Blue", "Green"],
      correct: 1,
    },
    {
      question: "What do dogs like to chew?",
      answers: ["Shoes", "Bones", "Rocks", "Coins"],
      correct: 1,
    },
    {
      question: "What do dogs wag when they are happy?",
      answers: ["Ears", "Nose", "Paws", "Tail"],
      correct: 3,
    },
    {
      question: "What is a common activity dogs enjoy?",
      answers: ["Reading books", "Driving cars", "Flying kites", "Fetching balls"],
      correct: 3,
    },
  ];

 function showAnswer(idx) {
    setLocked(true)
    setSelectedAnswer(idx);
    if (idx === questions[questionIndex].correct && !locked) {
        setScore((prev) => prev + 1); 
      }
      
  };

  function next() {
   setLocked(false)
    setSelectedAnswer(null);
    if (questionIndex < questions.length ) {
      setQuestionIndex((prev) => prev + 1);
    }
    else{
        setReset(true)
    }
  };
function reset() {
    setScore(0)
    setQuestionIndex(0)
  }

  return (
    <>
      <h1>Dog Quiz</h1>
      <div className="quizContainer">
        {questionIndex < questions.length  ?
        <>
         <h2>{questions[questionIndex].question}</h2>
        {questions[questionIndex].answers.map((answer, index) => (
          <button
            key={index}
            className={
               
              selectedAnswer === null
                ? ""
                : index === questions[questionIndex].correct
                ? "green"
                : selectedAnswer === index
                && "red"
                
            }
            onClick={() => showAnswer(index)}
          >
            {answer}
          </button>
        ))}
        <button onClick={next} id="next">
          Next
        </button>
        <p>{questionIndex + 1  } / 10</p>
        </>
        
       
     : 
     <>
      <h2>Finished quiz</h2> 
      <p>Score: {score}</p>
      <button onClick={reset} id="next">Reset</button>
     </>
    
     }
       
      </div>
    </>
  );
};

export default Quiz;

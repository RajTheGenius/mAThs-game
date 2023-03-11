function send() {
    // Get the 2 numbers from the input box
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    
    // Do multiplication of these 2 numbers and store it inside a variable
    const answer = num1 * num2;
    
    // Create the question div
    const questionDiv = document.createElement("div");
    
    // Create a heading tag with the question and store it inside a variable
    const question = document.createElement("h4");
    question.innerText = `${num1} X ${num2}`;
    
    // Create an input box for the answerer and store it inside a variable
    const answerBox = document.createElement("input");
    answerBox.type = "text";
    answerBox.id = "answer";
    
    // Create a check button and store it inside a variable
    const checkButton = document.createElement("button");
    checkButton.innerText = "Check";
    checkButton.onclick = checkAnswer;
    
    // Add the question, answerBox, and checkButton to the questionDiv
    questionDiv.appendChild(question);
    questionDiv.appendChild(answerBox);
    questionDiv.appendChild(checkButton);
    
    // Update the HTML element with id=’output’
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "";
    outputDiv.appendChild(questionDiv);
    
    // Make the value null of the two input boxes
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
  }
  // define variables for keeping track of questioner and answerer
let questioner = "";
let answerer = "";

// define check function
function check() {
  // get value from answerer input box
  let get_answer = parseInt(document.getElementById("answerer_input").value);

  // compare get_answer with actual_name
  if (get_answer === actual_name) {
    // if answer is correct, update score and display message
    if (questioner === "player1") {
      player1_score++;
      document.getElementById("player1_score").innerHTML = player1_score;
      document.getElementById("output").innerHTML = "Correct! " + player1_name + " gets a point.";
    } else {
      player2_score++;
      document.getElementById("player2_score").innerHTML = player2_score;
      document.getElementById("output").innerHTML = "Correct! " + player2_name + " gets a point.";
    }
  } else {
    // if answer is incorrect, display message
    document.getElementById("output").innerHTML = "Sorry, that's incorrect. Please try again.";
  }

  // switch questioner turn
  if (questioner === "player1") {
    questioner = "player2";
    document.getElementById("questioner").innerHTML = player2_name + "'s turn to ask";
  } else {
    questioner = "player1";
    document.getElementById("questioner").innerHTML = player1_name + "'s turn to ask";
  }

  // switch answerer turn
  if (answerer === "player1") {
    answerer = "player2";
    document.getElementById("answerer").innerHTML = player2_name + "'s turn to answer";
  } else {
    answerer = "player1";
    document.getElementById("answerer").innerHTML = player1_name + "'s turn to answer";
  }

  // clear answerer input box
  document.getElementById("answerer_input").value = "";
}

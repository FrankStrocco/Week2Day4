// Hi Lo Game

var num = parseInt(Math.random() * 100);
var counter = 0;

function hiLo(x) {
  //var name = prompt("What is your name?");
  console.log(num);
  var guess = document.getElementById("inputField").value;
  console.log(guess);
  if (counter < 6 || num != guess) {
      if (guess > num) {
        document.getElementById("outputText").innerHTML = guess + " Too High! Guess again";
        // guess = prompt("Too High! Guess again:");
        document.getElementById("inputField").value = "";
        counter = counter + 1;
      } else if (guess < num) {
        document.getElementById("outputText").innerHTML = guess + " Too Low! Guess again";
        //guess = prompt("Too Low! Guess again:");
        document.getElementById("inputField").value = "";
        counter = counter + 1;
      }
      if (counter === 6) {
      alert("Too many guesses! You lose!");
    }
      if (guess == num && counter != 6) {
      alert("You Win " + "!");
    }
  }
}


// function hiLo(x) {
//   var name = prompt("What is your name?");
//   var num = parseInt(Math.random() * 100);
//   console.log(num);
//   var guess = document.getElementById("inputField").value;
//   console.log(guess);
//   var counter = 0;
//   while (counter < 6 && num != guess) {
//       if (guess > num) {
//         guess = prompt("Too High! Guess again:");
//         counter = counter + 1;
//       } else if (guess < num) {
//         guess = prompt("Too Low! Guess again:");
//         counter = counter + 1;
//       }
//       if (counter === 6) {
//       alert("Too many guesses! You lose!");
//     }
//       if (guess == num && counter != 6) {
//       alert("You Win, " + name + "!");
//     }
//   }
// }

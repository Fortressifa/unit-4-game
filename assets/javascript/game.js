



// Code snippet for the computers random number choice
var computerPick = Math.floor(Math.random() * 120) + 19;
$("#computer-pick").text(computerPick);

// code snippet for the random number choice for gem 1
var gemOne = Math.floor(Math.random() * 12) + 1;
$("#gem-One").text(gemOne);


// code snippet for random number choice for gem 2

var gemTwo = Math.floor(Math.random() * 12) + 1;
$("#gem-Two").text(gemTwo);


// code snippet for random number gem 3

var gemThree = Math.floor(Math.random() * 12) + 1;
$("#gem-Three").text(gem-Three);

// code snippet for random gem 4

var gemFour = Math.floor(Math.random() * 12) + 1;
$("#gem-Four").text(grmFour);

$(".container").on("click", ".btn-choice", function() {

    // Here this lockGame line prevents the user from changing the option after the game is done.
    if (lockGame !== true) {

      // We get the value associated with the button the user picked from here
      var yourPick = $(this).val();
      console.log("Your Pick: " + yourPick);


          // If your pick matched the computer's pick you let them know.
          if (parseInt(yourPick) === computerPick) {
            $("#result").text("Yep! You got it! Refresh the page to play again.");
          }

// section with the gem buttons

          <div class="card-body">
          <button id="gemOne" class="btn btn-primary number" value = {gemOne}><h1>1</h1></button>
          <button id="gemTwo" class="btn btn-primary number" value = {gemTwo}><h1>2</h1></button>
          <button id="gemThree" class="btn btn-primary number" value = {gemThree} ><h1>3</h1></button>
          <button id="gemFour" class="btn btn-primary number" value = {gemFour><h1>+</h1></button>
          </div>


          var userScore = 0;

          $("#number").on("click", ".gemOne", function() {

            // Each time the user clicks the crystal the counter goes up by the random number.
            userScore += gemOne;
        
            // We then output the number of times the crystal is clicked.
            alert("You clicked this crystal " + counter + " times!");
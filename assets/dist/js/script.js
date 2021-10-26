

/*
var person = prompt("Please enter your name", "Harry Potter");

if (person != null) {
  document.getElementById("demo").innerHTML =
  "Hello " + person + "! How are you today?";
}

*/

// Exercise 1

function ex1() {

  // get base
  let base;
  base = document.getElementById("base").value;

  //  get exponent
  let exponent;
  exponent = document.getElementById("exponent").value;
  
  if (base != null & exponent != null) {

      result = base ** exponent; // base^exponent ehk 2^4 = 16

      // $('#myModal').modal(options)

      // document.getElementById("exampleModal").modal("options")
      // document.getElementById("exampleModal").modal('show')

      document.querySelector(".modal").classList.add("show");
      document.querySelector(".modal").style.display = "block";
      
      document.getElementById("demo").innerHTML = base + "<sup>" + exponent + "</sup>" + "=" + result + ":) How are you today?";

  }
}

// Exercise 2

// potential penalty
function potentailPenalty(name,actualSpeed,allowedSpeed) {
  var penalty = ( actualSpeed - allowedSpeed ) * 3; // base^exponent ehk 2^4 = 16
  return penalty
}

function ex2() {

  var name = prompt("Please enter your name", "Peter"); // name dialogi aken
  
  if (name != null) {

      allowedSpeed = window.prompt('Please enter allowed speed');
 
      actualSpeed = window.prompt('Please enter your actual speed');

      penalty = ( actualSpeed - allowedSpeed ) * 3; // trahvi  arvvutamine

      let fineRate = (penalty >= 190) ? "Max rate" : "Regular rate"; // kas maksimaalne määr või mitte
    
      finalFine = (penalty >= 190) ? 190 : penalty  // lqpp summa
      
      console.log("Hi, " + name + ". Your fine is: " + finalFine + "€. " + fineRate)  // vastus konsolis

  }
}

// Exercise 3

function ex3() {

  var EKAP = prompt("Please enter your EKAP", "4"); // EKAP dialogi aken
  
  if (EKAP != null) { // kontrollida kas on midagi yldse sisestatud

      week_amount = window.prompt('Please enter amount of weeks'); // amount of weeks dialog

      ajakulu = (( 26 * EKAP ) / week_amount ); // calculation
      ajakulu = Math.round(ajakulu); // round to the nearest integer

      document.querySelector(".modal").classList.add("show");
      document.querySelector(".modal").style.display = "block";
      
      // document.getElementById("demo").innerHTML = base + "<sup>" + exponent + "</sup>" + "=" + result + ":) How are you today?";

      document.getElementById("demo").innerHTML = "EKAP amout: " + EKAP + "<br/>Amount of weeks: " + week_amount + "<br />Ajakulu is " + ajakulu + " hours per week <br /><br /> <p class=\"text-muted\">ajakulu = ( 26 * EKAP ) / week_amount<br />ajakulu = Math.round(ajakulu)</p>";
      document.getElementById("exampleModalLabel").innerHTML = "Hi, dear. How are you doing today?"; 


  }
}
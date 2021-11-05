




// Exercise 1

// function for base and exponent
function baseExp() {

  // define base & define exponent
  let base;
  base = Number(document.getElementById("base-number").value)

  let exponent;
  exponent = Number(document.getElementById("exponent-number").value)
  
  if (isNaN(base) || isNaN(exponent)) { //  (base != null && exponent != null)

    document.getElementById("answer").innerHTML = "<br />Input is not a number"

  } else {

    result = base ** exponent; // base^exponent for example 2^4 = 16

    document.getElementById("answer").innerHTML = "<br />" + base + "<sup>" + exponent + "</sup>" + " = " + result;
      
    //document.getElementById("answer").textContent = "Your result: " + result  // ??? document example modal <br />

    return result;

  }
  
}

var exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget

  // Extract info from data-bs-* attributes
  var exerciseTitle = button.getAttribute('data-bs-whatever')   // 

  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  var modalTitle = exampleModal.querySelector('.modal-title')
  var modalBodyInput = exampleModal.querySelector('.modal-body input')

  var modalBodyAnswer = exampleModal.getElementById("answer") // test ???

  modalTitle.textContent = exerciseTitle + ' calculator'
  // modalBodyInput.value = recipient

  modalBodyAnswer.value = 123 // test

  // document.getElementById("answer").textContent = baseExp(Number(document.getElementById("base-number").value), Number(document.getElementById("exponent-number").value));

})




// Exercise 2

// potential penalty
function potentailPenalty(name,actualSpeed,allowedSpeed) {
  var penalty = ( actualSpeed - allowedSpeed ) * 3; // base^exponent ehk 2^4 = 16
  return penalty
}

// potential fine
function potentailFine() {

  let name;
  name = String(document.getElementById("recipient-name").value)

  let allowedSpeed;
  allowedSpeed = Number(document.getElementById("allowed-speed").value)

  let actualSpeed;
  actualSpeed = Number(document.getElementById("actual-speed").value)

  var fine = ( actualSpeed - allowedSpeed ) * 3; 

  let fineRate = (fine >= 190) ? "Max rate" : "Regular rate";

  finalFine = (fine >= 190) ? 190 : fine
  
  document.getElementById("fine").innerHTML = "Your fine is: " + finalFine + "€ <br />" + fineRate

  return fine
}


// Exercise 3

function ekap() {

  let ekapAmount;
  ekapAmount = Number(document.getElementById("ekap").value)

  let weeksAmount;
  weeksAmount = Number(document.getElementById("weeks-amount").value)
  
  if (ekapAmount != null && weeksAmount != null) { // empty or not

      var ajaKulu = (( 26 * ekapAmount ) / weeksAmount ); // calculation

      ajaKulu = Math.round(ajaKulu); // round to the nearest integer
      
      // document.getElementById("ajakulu").textContent = "Your ajakulu is: " + ajaKulu;

      document.getElementById("ajakulu").innerHTML = "EKAP amout: " + ekapAmount + "<br/>Amount of weeks: " + weeksAmount + "<br />Ajakulu is " + ajaKulu + " hours per week <br /><br /> <p class=\"text-muted\">ajakulu = ( 26 * EKAP ) / week_amount<br />ajakulu = Math.round(ajakulu)</p>";


  }
}

// Ex 1.2 Ice age calculator

function potentailIceAge() {

let temperature;
temperature = Number(document.getElementById("tempetature").value)

// alert(temperature);

let iceAge = (temperature <= 4) ? "On jäätumise oht" : "Ei ole jäätumise ohtu";

document.getElementById("ice-age").innerHTML = iceAge;

}

// Ex 2.2 pulse rate calculator

function pulseRate() {

  let age;
  age = Number(document.getElementById("age").value)

  let sex;
  sex = String(document.getElementById("sex").value)

  let training;
  training = Number(document.getElementById("training").value)

  let pulseRateMax;  // pulseRateMax

  if (isNaN(age) || sex !== null || isNaN(training)) {  // sex !== 'undefined'

    document.getElementById("pulse-rate").innerHTML = "Input isn't a number" 

  } else {

    if (sex == "n" || sex == "N") {
      pulseRateMax = 206 - 0.88 * age;
    }
    else if (sex == "m" || sex == "M") {
      pulseRateMax = 220 - age;
    }
    
    // training type
    let minPulse;
    let maxPulse;
    
    if (training == 1) {
      minPulse = 0.5 * pulseRateMax;
      maxPulse = 0.7 * pulseRateMax;
    } 
    else if (training == 2) {
      minPulse = 0.7 * pulseRateMax;
      maxPulse = 0.8 * pulseRateMax;
    }
    else if (training == 3) {
      minPulse = 0.8 * pulseRateMax;
      maxPulse = 0.87 * pulseRateMax;
    }

    minPulse = Math.round(minPulse); // round to the nearest integer
    maxPulse = Math.round(maxPulse); // round to the nearest integer

    document.getElementById("pulse-rate").innerHTML = " Your pulse rate must be in " + minPulse + " - " + maxPulse + " range.";

  }
}

// Ex 1.3 Passenger seat calculator

function passengerSeat() {

  let choicePersonal;
  // temperature = Number(document.getElementById("personal-outlined").value)
  choicePersonal = document.getElementById("personal-outlined").value

  let choiceRandom;
  // temperature = Number(document.getElementById("personal-outlined").value)
  choiceRandom = document.getElementById("random-outlined").value

  // ainult testimiseks
  choicePersonal = false
  choiceRandom = true

  if(choicePersonal) {
    // kontrolli, kas ta valis akna voi muu
    let choice = 'window'
    if(choice === 'window'){
      console.log('window')
    } else {
      console.log('other')
    }
  }
  if(choiceRandom) {
    let generate = Math.floor(Math.random() * 3 + 1)
    // kontrolli, juhul kui see on 1 voi 2 - muu koht, kui on 3 - aken
    if(generate < 3 ){
      console.log('other')
    } else {
      console.log('window')
    }
  }

  alert(choicePersonal + " " + choiceRandom);
  
  // let iceAge = (temperature <= 4) ? "On jäätumise oht" : "Ei ole jäätumise ohtu";
  
  let yourSeat = Math.floor(Math.random() * 100);

  document.getElementById("passenger").innerHTML = yourSeat;
  
}

  function myFunction() {
    var personalBox = document.getElementById("personal-outlined");
    var text = document.getElementById("window-seat-option");
    if (personalBox.checked == true){
      alert(personalBox);
      text.style.display = "block";
      document.getElementById("passenger").innerHTML = "Check your seat"
    } else {
       text.style.display = "none";
    }
  }

  function myRandom() {
    var randomBox = document.getElementById("random-outlined");
    var text = document.getElementById("window-seat-option");
    if (randomBox.toggle == true){
      text.style.display = "none";
      
    } else {
      text.style.display = "block";
      
      let yourSeat = Math.floor(Math.random() * 100);
      document.getElementById("passenger").innerHTML = "Your seat: " + yourSeat;
    }
  }

  // https://getbootstrap.com/docs/5.1/components/buttons/#button-plugin

//   document.addEventListener("DOMContentLoaded", function(){
//     var buttons = document.querySelectorAll(".btn");
//     buttons.forEach(function(button){
//       	button.addEventListener("click", function(e){
//           	var btn = new bootstrap.Button(e.target);
//             btn.toggle();
//         });
//     });
// });


// Exercise 3.1

// function for alarm
function alarmLoop() {

  // define base & define exponent
  let alarms;
  alarms = Number(document.getElementById("alarms-number").value)

  if (isNaN(alarms)) { //  

    document.getElementById("alarm_output").innerHTML = "<br />Input is not a number"

  } else {
  
  let text
  for (let i = 0; i < alarms; i++) {
    text += "Rise and shine! <br>";
  }
  document.getElementById("alarm_output").innerHTML = text
  
  }
  
}


// Exercise 3.2

function carrotsLoop() {

  // define base & define exponent
  let circles;
  circles = Number(document.getElementById("circle-number").value)

  if (isNaN(circles)) { //  

    document.getElementById("carrots_output").innerHTML = "<br />Input is not a number"

  } else {
  
  let carrots = 0;
  let circle = 1
  while (circle <= circles) {
    if(circle % 2 == 0) {carrots = carrots + circle}
    circle++
    // text += "Rise and shine! <br>";
  }
  
  document.getElementById("carrots_output").innerHTML = "You have got " + carrots + " carrots for your circles."
  }
  
}

// new comment



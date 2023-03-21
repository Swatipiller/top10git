// to get full international number use getNumber() method: e.g., iti.getNumber()
// https://github.com/jackocnr/intl-tel-input
var input = document.querySelector("#phone");
var iti = window.intlTelInput(input, {
  formatOnDisplay: true,
  initialCountry: "nl",
  nationalMode: true,
  utilsScript: "../intl-tel-input/js/utils.js",
});
var input = document.querySelector("#phone1");
var iti = window.intlTelInput(input, {
  formatOnDisplay: true,
  initialCountry: "nl",
  nationalMode: true,
  utilsScript: "../intl-tel-input/js/utils.js",
});

// var number = iti.getNumber();

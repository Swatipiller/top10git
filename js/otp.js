document.addEventListener("DOMContentLoaded", function (event) {
  function OTPInput() {
    const editor = document.getElementById("otpfirst");
    editor.onpaste = pasteOTP;

    const inputs = document.querySelectorAll("#otp > *[id]");
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener("input", function (event) {
        if (!event.target.value || event.target.value == "") {
          if (event.target.previousSibling.previousSibling) {
            event.target.previousSibling.previousSibling.focus();
          }
        } else {
          if (event.target.nextSibling.nextSibling) {
            event.target.nextSibling.nextSibling.focus();
          }
        }
      });
    }
  }
  OTPInput();
});

function pasteOTP(event) {
  event.preventDefault();
  let elm = event.target;
  let pasteVal = event.clipboardData.getData("text").split("");
  if (pasteVal.length > 0) {
    while (elm) {
      elm.value = pasteVal.shift();
      elm = elm.nextSibling.nextSibling;
    }
  }
}

$(document).ready(function () {
  const getQuoteVerifyBtn = $("#getQuoteVerifybtn");
  getQuoteVerifyBtn.click(function () {
    $(".getQuoteVerifysucessbox").removeClass("d-none");
    $(".getQuoteViewApplicationBtn").removeClass("d-none");
  });

  const requestAvailabilityVerifyBtn = $("#requestAvailabilityVerifybtn");
  requestAvailabilityVerifyBtn.click(function () {
    $(".requestAvailabilityVerifysucessbox").removeClass("d-none");
    $(".requestAvailabilityViewApplicationBtn").removeClass("d-none");
  });
});
